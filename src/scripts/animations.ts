// Linguagem de movimento do "pulso cinematográfico": abertura, revelação de títulos por
// máscara, onda sonora avançando com o scroll, faixa de serviços pinada no desktop e
// pequenos efeitos magnéticos nos botões. Tudo dentro de gsap.context() pra limpeza
// automática, e com matchMedia separando o que só faz sentido no desktop.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const INTRO_KEY = 'emmusic-intro-seen';

function prefersReduced(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function markIntroSeen(): void {
  try {
    sessionStorage.setItem(INTRO_KEY, '1');
  } catch {
    /* sessionStorage indisponível (modo privado etc.) — sem problema, só repete a abertura */
  }
}

function playIntro(): Promise<void> {
  return new Promise((resolve) => {
    const overlay = document.getElementById('intro-overlay');
    if (!overlay || overlay.style.display === 'none') {
      resolve();
      return;
    }

    const wavePath = overlay.querySelector<SVGPathElement>('path');
    const brand = overlay.querySelector<HTMLElement>('[data-intro-brand]');

    const tl = gsap.timeline({
      onComplete: () => {
        overlay.style.display = 'none';
        markIntroSeen();
        resolve();
      },
    });

    if (wavePath) {
      tl.fromTo(
        wavePath,
        { strokeDasharray: 100, strokeDashoffset: 100 },
        { strokeDashoffset: 0, duration: 0.7, ease: 'power2.inOut' },
      );
    }
    if (brand) {
      tl.to(brand, { opacity: 1, duration: 0.3, ease: 'power1.out' }, '-=0.15');
    }
    tl.to(overlay, { opacity: 0, duration: 0.4, ease: 'power1.inOut' }, '+=0.25');
  });
}

function initHeroTitleReveal(): void {
  const lines = gsap.utils.toArray<HTMLElement>('[data-reveal-line]');
  if (!lines.length) return;
  gsap.set(lines, { yPercent: 110 });
  gsap.to(lines, { yPercent: 0, duration: 0.9, ease: 'power4.out', stagger: 0.12 });
}

function initRevealBatch(): void {
  const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  items.forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 26 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });
}

function initWaveDrawOnScroll(): void {
  const paths = gsap.utils.toArray<SVGPathElement>('[data-wave-path="draw"]');
  paths.forEach((path) => {
    gsap.fromTo(
      path,
      { strokeDasharray: 100, strokeDashoffset: 100 },
      {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: path, start: 'top 90%', once: true },
      },
    );
  });
}

function initMagnetic(): () => void {
  const buttons = gsap.utils.toArray<HTMLElement>('[data-magnetic]');
  const strength = 14;
  const cleanups: Array<() => void> = [];

  buttons.forEach((btn) => {
    function onMove(e: MouseEvent) {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: (relX / rect.width) * strength,
        y: (relY / rect.height) * strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
    function onLeave() {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    }
    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
    cleanups.push(() => {
      btn.removeEventListener('mousemove', onMove);
      btn.removeEventListener('mouseleave', onLeave);
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

function initServicesPin(): void {
  const pinEl = document.querySelector<HTMLElement>('[data-services-pin]');
  const track = document.querySelector<HTMLElement>('[data-services-track]');
  if (!pinEl || !track) return;

  const getDistance = () => Math.max(0, track.scrollWidth - pinEl.clientWidth);

  ScrollTrigger.create({
    trigger: pinEl,
    start: 'top top+=80',
    end: () => `+=${getDistance() + window.innerHeight * 0.5}`,
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      gsap.set(track, { x: -getDistance() * self.progress });
    },
  });
}

function initProcessProgress(): void {
  const container = document.querySelector<HTMLElement>('[data-process-desktop]');
  const path = container?.querySelector<SVGPathElement>('[data-wave-path="progress"]');
  if (!container || !path) return;

  gsap.set(path, { strokeDasharray: 100, strokeDashoffset: 100 });
  gsap.to(path, {
    strokeDashoffset: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      start: 'top 75%',
      end: 'bottom 65%',
      scrub: 1,
    },
  });
}

export function initAnimations(): void {
  const overlay = document.getElementById('intro-overlay');

  if (prefersReduced()) {
    // Sem abertura longa, sem pin, sem parallax — o markup já nasce visível sem JS,
    // então só precisamos garantir que a tela de abertura não fique bloqueando a tela.
    if (overlay && overlay.style.display !== 'none') overlay.style.display = 'none';
    markIntroSeen();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.context(() => {
    playIntro().then(initHeroTitleReveal);

    initRevealBatch();
    initWaveDrawOnScroll();

    const mm = gsap.matchMedia();
    mm.add('(hover: hover) and (pointer: fine)', () => initMagnetic());
    mm.add('(min-width: 1024px)', () => {
      initServicesPin();
      initProcessProgress();
    });
  });
}
