"""Build a portable static ZIP and a fixed-payload, single-use PHP installer."""
import base64
import gzip
import hashlib
import json
from pathlib import Path
import secrets
import sys
import zipfile

source = Path(__file__).resolve().parent.parent / 'out'
destination = Path(sys.argv[1]).resolve()
destination.mkdir(parents=True, exist_ok=True)
files = {p.relative_to(source).as_posix(): p.read_bytes() for p in sorted(source.rglob('*')) if p.is_file()}
for required in ['index.html', '.htaccess', 'blog/index.html', 'images/zeynart-logo.avif']:
    if required not in files:
        raise SystemExit(f'Missing build file: {required}')
with zipfile.ZipFile(destination / 'zeynart-dogrudan-yukle.zip', 'w', zipfile.ZIP_DEFLATED) as archive:
    for name, content in files.items():
        archive.writestr(name, content)
payload = gzip.compress(json.dumps({name: base64.b64encode(content).decode() for name, content in files.items()}, separators=(',', ':')).encode())
token = secrets.token_urlsafe(24)
template = r'''<?php
declare(strict_types=1);
header('Cache-Control: no-store, private');
header('X-Robots-Tag: noindex, nofollow');
header('Referrer-Policy: no-referrer');
header('Content-Type: text/html; charset=utf-8');
$key = '__KEY__';
if (!hash_equals($key, (string)($_POST['key'] ?? $_GET['key'] ?? ''))) {
    http_response_code(404); exit('Not found');
}
$message = ''; $success = false;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        if (!function_exists('gzdecode')) throw new RuntimeException('Sunucuda PHP zlib etkin olmali.');
        $payload = base64_decode('__PAYLOAD__', true);
        if ($payload === false || !hash_equals('__HASH__', hash('sha256', $payload))) throw new RuntimeException('Paket butunluk kontrolu basarisiz.');
        $decoded = gzdecode($payload);
        if ($decoded === false) throw new RuntimeException('Paket acilamadi.');
        $files = json_decode($decoded, true, 512, JSON_THROW_ON_ERROR);
        $root = realpath(__DIR__);
        if (!$root || !is_writable($root)) throw new RuntimeException('Bu klasore yazma izni yok. Hosting dosya izinlerini kontrol edin.');
        foreach ($files as $path => $encoded) {
            if (!is_string($path) || !preg_match('~\A[A-Za-z0-9_./@$-]+\z~D', $path) || str_contains($path, '..') || str_starts_with($path, '/') || preg_match('~\.(php[0-9]*|phtml|phar)$~i', $path)) throw new RuntimeException('Gecersiz paket yolu.');
            $current = $root;
            foreach (explode('/', $path) as $part) {
                $current .= DIRECTORY_SEPARATOR . $part;
                if (is_link($current)) throw new RuntimeException('Hedefte sembolik baglanti var; kurulum durduruldu.');
                if (file_exists($current) && !is_writable($current)) throw new RuntimeException('Mevcut dosya veya klasor yazilabilir degil: ' . $path);
            }
            if (base64_decode($encoded, true) === false) throw new RuntimeException('Gecersiz dosya verisi.');
        }
        // Upload assets before HTML, with the homepage written last.
        uksort($files, static function ($a, $b) {
            $rank = static fn($p) => $p === 'index.html' ? 2 : (str_ends_with($p, '.html') ? 1 : 0);
            return ($rank($a) <=> $rank($b)) ?: strcmp($a, $b);
        });
        $count = 0;
        foreach ($files as $path => $encoded) {
            $target = $root . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $path);
            $directory = dirname($target);
            if (!is_dir($directory) && !mkdir($directory, 0755, true) && !is_dir($directory)) throw new RuntimeException('Klasor olusturulamadi.');
            $content = base64_decode($encoded, true);
            $temporary = tempnam($directory, '.zeynart-');
            if ($temporary === false) throw new RuntimeException('Gecici dosya olusturulamadi.');
            try {
                if (file_put_contents($temporary, $content, LOCK_EX) !== strlen($content)) throw new RuntimeException('Dosya yazilamadi.');
                chmod($temporary, 0644);
                if (!rename($temporary, $target)) throw new RuntimeException('Dosya yerine yerlestirilemedi.');
            } finally {
                if (is_file($temporary)) unlink($temporary);
            }
            if (!hash_equals(hash('sha256', $content), hash_file('sha256', $target))) throw new RuntimeException('Yazilan dosya dogrulanamadi.');
            $count++;
        }
        $success = true;
        $message = $count . ' dosya kuruldu ve dogrulandi. CSS, JavaScript, fontlar, gorseller ve alt sayfalar hazir.';
        if (!unlink(__FILE__)) $message .= ' Kurulum dosyasini panelden silin: zeynart-kur.php';
    } catch (Throwable $e) {
        http_response_code(500); $message = 'Kurulum tamamlanamadi: ' . $e->getMessage();
    }
}
?>
<!doctype html><html lang="tr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Zeynart yayin kurulumu</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#07181d;color:#eaf7f8;font:16px/1.8 Arial,sans-serif}main{max-width:580px;padding:35px;margin:24px;border:1px solid #28525b;border-radius:18px;background:#0d252d}h1{font-size:32px;line-height:1.2}p{color:#b5cdd2}button,a{display:inline-block;background:#65d4da;color:#082129;padding:14px 22px;border:0;border-radius:7px;font-size:15px;font-weight:bold;text-decoration:none;cursor:pointer}small{color:#7ba6af}.message{border-left:3px solid #65d4da;padding-left:18px}</style>
<main><small>ZEYNART / YAYIN KURULUMU</small><h1><?= $success ? 'Site dosyalari hazir.' : 'Eksik dosyalari tamamlayin.' ?></h1>
<?php if ($message): ?><p class="message"><?= htmlspecialchars($message, ENT_QUOTES, 'UTF-8') ?></p><?php endif; ?>
<?php if ($success): ?><p>Tarayicida Ctrl + F5 ile yenileyin. Cloudflare onbellegi etkinse panelden temizleyin.</p><a href="/">Siteyi ac</a> <a href="/blog/">Blogu ac</a>
<?php else: ?><p>Bu dosyanin bulundugu klasore Zeynart sitesinin tum yayin dosyalari yerlestirilir. Ayni isimli site dosyalari guncellenir; diger dosyalar silinmez. Tamamlaninca kurulum dosyasi kendisini siler.</p><form method="post"><input type="hidden" name="key" value="<?= htmlspecialchars($key, ENT_QUOTES, 'UTF-8') ?>"><button type="submit">Site dosyalarini kur</button></form><?php endif; ?></main></html>
'''
installer = template.replace('__KEY__', token).replace('__HASH__', hashlib.sha256(payload).hexdigest()).replace('__PAYLOAD__', base64.b64encode(payload).decode())
(destination / 'zeynart-kur.php').write_text(installer, encoding='utf-8')
instructions = f'''ZEYNART - TEK DOSYA ILE KURULUM

1. Mevcut hosting dosyalarinizi yedekleyin.
2. Yalnizca zeynart-kur.php dosyasini, su an acilan index.html ile AYNI httpdocs klasorune yukleyin.
3. Su adresi acin:
https://zeynart.com/zeynart-kur.php?key={token}
4. Site dosyalarini kur dugmesine basin.
5. Tamamlandiginda siteyi Ctrl + F5 ile yenileyin.

Dosya tum yayin icerigini kendi icinde tasir; ayri ZIP yuklemeniz gerekmez.
PHP 8.0+ ve zlib gerekir. Kurulum basarili olunca zeynart-kur.php kendini siler.
Eger 404 gorurseniz dosya index.html ile ayni yayin klasorune yuklenmemistir.
PHP calismiyorsa alternatif ZIP'i dogrudan yayin klasorunde cikartin.
'''
(destination / 'KURULUM.txt').write_text(instructions, encoding='utf-8')
print(f'Created {len(files)}-file deployment and installer in {destination}')
