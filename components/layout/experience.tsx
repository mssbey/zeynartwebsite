'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Symbol } from '@/components/ui/logo';

export function Experience() {
  const cursor = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    try {
      if (!sessionStorage.getItem('rova-visited') && !reduced) {
        intro.current?.classList.add('intro-show');
        sessionStorage.setItem('rova-visited', '1');
      }
    } catch {
      /* Storage can be disabled without affecting navigation. */
    }
    const timer = setTimeout(() => intro.current?.classList.remove('intro-show'), 850);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = matchMedia('(pointer: fine)').matches;
    let magnetic: HTMLElement | null = null;
    const move = (e: MouseEvent) => {
      if (!cursor.current || !fine || reduced) return;
      cursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursor.current.classList.add('visible');
      const target = e.target as HTMLElement;
      cursor.current.classList.toggle('hovering', !!target.closest('a,button'));
      cursor.current.classList.toggle('viewing', !!target.closest('[data-cursor="project"]'));
      const button = target.closest<HTMLElement>('[data-magnetic]');
      if (magnetic && magnetic !== button) magnetic.style.removeProperty('transform');
      magnetic = button;
      if (button) {
        const rect = button.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.06;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
        button.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    const leave = () => {
      cursor.current?.classList.remove('visible');
      magnetic?.style.removeProperty('transform');
    };
    const scroll = () => {
      const total = document.documentElement.scrollHeight - innerHeight;
      if (progress.current)
        progress.current.style.transform = `scaleX(${total > 0 ? scrollY / total : 0})`;
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    window.addEventListener('scroll', scroll, { passive: true });
    scroll();
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    if (!reduced)
      document
        .querySelectorAll('.section-heading,.service-card,.process-step,.article-card')
        .forEach((el) => {
          el.classList.add('will-reveal');
          observer.observe(el);
        });
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      window.removeEventListener('scroll', scroll);
      magnetic?.style.removeProperty('transform');
      observer.disconnect();
    };
  }, [pathname]);
  return (
    <>
      <div ref={progress} className="scroll-progress" />
      <div ref={cursor} className="custom-cursor" aria-hidden="true">
        <span>GÖR ↗</span>
      </div>
      <div ref={intro} className="intro" aria-hidden="true">
        <Symbol />
        <span>ROVA DIGITAL</span>
      </div>
    </>
  );
}
