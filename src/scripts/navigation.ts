// Cabeçalho reativo ao scroll + menu mobile em tela cheia (acessível: foco, Escape, scroll lock).

const SCROLL_THRESHOLD = 24;

function initHeaderScroll(): void {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  const apply = () => {
    const scrolled = window.scrollY > SCROLL_THRESHOLD;
    header.classList.toggle('bg-void/85', scrolled);
    header.classList.toggle('backdrop-blur-md', scrolled);
    header.classList.toggle('border-b', scrolled);
    header.classList.toggle('border-white/[0.06]', scrolled);
    header.classList.toggle('shadow-[0_1px_0_rgba(0,0,0,0.4)]', scrolled);
  };

  apply();
  window.addEventListener('scroll', apply, { passive: true });
}

function initMobileMenu(): void {
  const toggle = document.getElementById('menu-toggle');
  const close = document.getElementById('menu-close');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!toggle || !close || !menu) return;

  const links = menu.querySelectorAll<HTMLElement>('[data-mobile-link]');
  const bars = toggle.querySelectorAll<HTMLElement>('[data-menu-bar]');
  let lastFocused: HTMLElement | null = null;

  const getFocusable = () =>
    Array.from(menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));

  function openMenu() {
    lastFocused = document.activeElement as HTMLElement;
    menu.classList.remove('opacity-0', 'pointer-events-none');
    menu.classList.add('opacity-100');
    document.documentElement.classList.add('no-scroll');
    toggle.setAttribute('aria-expanded', 'true');
    if (bars[0]) bars[0].style.transform = 'translateY(7px) rotate(45deg)';
    if (bars[1]) bars[1].style.opacity = '0';
    if (bars[2]) bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    const first = getFocusable()[0];
    first?.focus();
    document.addEventListener('keydown', onKeydown);
  }

  function closeMenu() {
    menu.classList.add('opacity-0', 'pointer-events-none');
    menu.classList.remove('opacity-100');
    document.documentElement.classList.remove('no-scroll');
    toggle.setAttribute('aria-expanded', 'false');
    if (bars[0]) bars[0].style.transform = '';
    if (bars[1]) bars[1].style.opacity = '';
    if (bars[2]) bars[2].style.transform = '';
    document.removeEventListener('keydown', onKeydown);
    (lastFocused ?? toggle).focus();
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
      return;
    }
    if (e.key === 'Tab') {
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });
  close.addEventListener('click', closeMenu);
  links.forEach((link) => link.addEventListener('click', closeMenu));

  // Se a viewport crescer pra desktop com o menu aberto, fecha (evita estado preso).
  const mq = window.matchMedia('(min-width: 1024px)');
  mq.addEventListener('change', (e) => {
    if (e.matches && toggle.getAttribute('aria-expanded') === 'true') closeMenu();
  });
}

export function initNavigation(): void {
  initHeaderScroll();
  initMobileMenu();
}
