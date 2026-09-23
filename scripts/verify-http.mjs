import assert from 'node:assert/strict';

const origin = process.env.TEST_ORIGIN || 'http://localhost:3000';
const failures = [];
let checked = 0;
const links = new Set();
const assets = new Set();
const documents = new Map();
const decode = (text) => text.replaceAll('&amp;', '&').replaceAll('&#x27;', "'");

async function check(path, expected = 200) {
  const response = await fetch(new URL(path, origin));
  checked++;
  assert.equal(response.status, expected, `${path}: expected ${expected}, got ${response.status}`);
  return response;
}

const sitemap = await (await check('/sitemap.xml')).text();
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => new URL(match[1]).pathname,
);
assert.equal(routes.length, 27, 'Sitemap should include all 27 content routes');

for (const path of routes) {
  try {
    const response = await check(path);
    const html = await response.text();
    documents.set(path, html);
    assert.match(html, /<html[^>]+lang="tr"/, `${path}: Turkish document language`);
    assert.match(html, /<title>[^<]+<\/title>/, `${path}: nonempty title`);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one main heading`);
    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/);
    assert.ok(canonical, `${path}: canonical URL`);
    assert.equal(
      new URL(decode(canonical[1])).pathname.replace(/\/$/, ''),
      path.replace(/\/$/, ''),
      `${path}: canonical matches route`,
    );
    assert.match(html, /name="description" content="[^"]+"/, `${path}: description`);
    assert.match(html, /property="og:title" content="[^"]+"/, `${path}: OpenGraph title`);
    assert.match(html, /application\/ld\+json/, `${path}: structured data`);
    assert.ok(!html.includes('lorem ipsum'), `${path}: no filler content`);
    for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const href = decode(match[1]);
      if (href.startsWith('/')) links.add(href);
      if (href.startsWith('#'))
        assert.ok(html.includes(`id="${href.slice(1)}"`), `${path}: anchor ${href}`);
    }
    for (const match of html.matchAll(/<img\b[^>]*>/g)) {
      assert.match(match[0], /alt="[^"]*"/, `${path}: image alternate text`);
      const src = match[0].match(/src="([^"]+)"/);
      if (src) assets.add(decode(src[1]));
    }
    for (const match of html.matchAll(
      /<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/g,
    ))
      JSON.parse(match[1]);
  } catch (error) {
    failures.push(error.message);
  }
}

for (const link of links) {
  if (documents.has(link)) continue;
  try {
    await check(link);
  } catch (error) {
    failures.push(error.message);
  }
}
for (const asset of [
  ...assets,
  '/images/architecture.webp',
  '/images/architecture-atrium.webp',
  '/icon.svg',
  '/rova-symbol.svg',
  '/opengraph-image',
]) {
  try {
    const response = await check(asset);
    assert.ok((await response.arrayBuffer()).byteLength > 0);
  } catch (error) {
    failures.push(error.message);
  }
}
for (const path of [
  '/olmayan-sayfa',
  '/hizmetler/olmayan-hizmet',
  '/projeler/olmayan-proje',
  '/blog/olmayan-yazi',
]) {
  try {
    await check(path, 404);
  } catch (error) {
    failures.push(error.message);
  }
}
assert.match(await (await check('/robots.txt')).text(), /Sitemap:.*sitemap\.xml/);
assert.match(await (await check('/llms.txt')).text(), /ROVA DIGITAL/);
const contactResponse = await fetch(`${origin}/api/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({}),
});
assert.equal(contactResponse.status, 503, 'Unconfigured contact transport must not claim delivery');
const forbidden = await fetch(`${origin}/api/contact`, {
  method: 'POST',
  headers: { Origin: 'https://unrelated.example', 'Content-Type': 'application/json' },
  body: '{}',
});
assert.equal(forbidden.status, 403, 'Cross-origin submission must be rejected');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else
  console.log(
    `PASS: ${routes.length} content routes; ${links.size} internal links; ${checked} HTTP checks; metadata, JSON-LD, images, anchors, 404s and contact safeguards.`,
  );
