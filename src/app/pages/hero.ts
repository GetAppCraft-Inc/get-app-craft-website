import { Component, DestroyRef, ElementRef, afterNextRender, inject, input, signal, viewChild, viewChildren } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { site } from '../site-content';
import { Logo } from '../shared';

interface Card { src: string; ring: number; angle: number; }

// Four elliptical orbits: inner rings are "far away" (small, soft), outer rings are close (large, sharp).
const rings = [
  { r: 0.17, w: 120, speed: 0.022, depth: 0.55 },
  { r: 0.27, w: 165, speed: 0.017, depth: 0.7 },
  { r: 0.38, w: 215, speed: 0.013, depth: 0.85 },
  { r: 0.52, w: 280, speed: 0.01, depth: 1 },
];
const perRing = [5, 6, 8, 9];
const cards: Card[] = perRing.flatMap((count, ring) =>
  Array.from({ length: count }, (_, i) => ({ src: '', ring, angle: (i / count) * Math.PI * 2 + ring * 0.7 })));
cards.forEach((card, i) => card.src = `/hero/${String(i + 1).padStart(2, '0')}.webp`);

@Component({
  selector: 'app-hero', standalone: true, imports: [RouterLink, Logo],
  template: `
<section class="orbit-hero" #hero aria-labelledby="hero-heading">
  <svg class="orbit-rings" aria-hidden="true" #svg></svg>
  <div class="orbit-cards" aria-hidden="true">
    @for (card of cards; track card.src) {<img #card class="orbit-card" [src]="card.src" alt="" decoding="async" draggable="false">}
  </div>
  <div class="orbit-center">
    <div class="orbit-wordmark" role="img" [attr.aria-label]="site.wordmark"><span class="wm-letter" style="--i:0"><app-logo /></span>@for (ch of wordmarkRest; track $index) {<span class="wm-letter" [style.--i]="$index + 1" aria-hidden="true">{{ ch }}</span>}</div>
    <h1 id="hero-heading">Capable tools <em>for makers.</em></h1>
    <p>{{ site.name }} builds open, native tools for makers. We care about freedom of control and expression.</p>
    @if (comingSoon()) {
      <div class="orbit-launch-status"><span class="orbit-launch-label">AppCraft is coming soon</span><p>We’re putting the finishing touches on your creative toolkit.</p></div>
    } @else {
    <div class="orbit-actions">
      <div class="split" [class.open]="menuOpen()">
        <a class="split-main" [href]="launcherUrl || '/download'" (click)="goDownload($event)"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v8m-3.5-3.5L8 10l3.5-3.5M3 13h10" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>Download launcher</a>
        <button class="split-toggle" (click)="menuOpen.set(!menuOpen())" [attr.aria-expanded]="menuOpen()" aria-label="Choose another platform"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
        @if (menuOpen()) {<div class="split-menu">@for (p of platforms; track p.os) {<button (click)="pick(p)"><b>{{ p.os }}</b><span>{{ p.pkg }}</span></button>}</div>}
        <span class="split-note">For {{ platform().os }} · {{ platform().pkg }}</span>
      </div>
      <a class="orbit-ghost" routerLink="/apps"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 2.5h4v4h-4zm7 0h4v4h-4zm-7 7h4v4h-4zm7 0h4v4h-4z" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>Explore crafting apps</a>
    </div>
    <p class="orbit-links">Looking for {{ site.name }} Studio? <a routerLink="/download">Download it</a> or <a routerLink="/download">use it on the web</a>.</p>
    }
    <p class="orbit-meta"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5a6.5 6.5 0 0 0-2 12.7c.3 0 .4-.2.4-.4v-1.3c-1.8.4-2.2-.8-2.2-.8-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.7 0 1 .7 1 .7.6 1 1.5.7 1.9.5 0-.4.2-.7.4-.9-1.4-.2-3-.7-3-3.2 0-.7.3-1.3.7-1.7-.1-.2-.3-.8 0-1.7 0 0 .6-.2 1.8.7a6 6 0 0 1 3.2 0c1.2-.9 1.8-.7 1.8-.7.3.9.1 1.5 0 1.7.4.4.7 1 .7 1.7 0 2.5-1.5 3-3 3.2.3.2.5.6.5 1.2v1.8c0 .2.1.4.4.4A6.5 6.5 0 0 0 8 1.5z" fill="currentColor"/></svg>Open source · macOS · Windows · Linux <span>No subscription required</span></p>
  </div>
</section>
`,
})
export class HeroComponent {
  readonly comingSoon = input(false);
  readonly site = site;
  readonly cards = cards;
  // The logo stands in for the first letter of the wordmark.
  readonly wordmarkRest = [...site.wordmark];
  readonly launcherUrl = site.launcherUrl;
  readonly platforms = [
    { os: 'macOS', pkg: 'Universal (DMG)' },
    { os: 'Windows', pkg: 'Installer (x64)' },
    { os: 'Linux', pkg: 'AppImage (x86_64)' },
  ];
  readonly platform = signal(this.platforms[/Mac/i.test(navigator.userAgent) ? 0 : /Linux|X11/i.test(navigator.userAgent) && !/Android/i.test(navigator.userAgent) ? 2 : 1]);
  readonly menuOpen = signal(false);
  private readonly hero = viewChild.required<ElementRef<HTMLElement>>('hero');
  private readonly svg = viewChild.required<ElementRef<SVGSVGElement>>('svg');
  private readonly router = inject(Router, { optional: true });
  private readonly cardEls = viewChildren<ElementRef<HTMLImageElement>>('card');

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const hero = this.hero().nativeElement;
      const els = this.cardEls().map(ref => ref.nativeElement);
      const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
      let width = 0, height = 0, size = 0, frame = 0, visible = true, last = performance.now();
      let pointerX = 0, pointerY = 0;

      const drawRings = () => {
        const cx = width / 2, cy = height * 0.47;
        // Extra rings beyond the card orbits add the outer sweep seen at the edges.
        this.svg().nativeElement.innerHTML = [...rings.map(r => r.r), 0.66, 0.82].map((r, i) =>
          `<ellipse cx="${cx}" cy="${cy}" rx="${r * size}" ry="${r * size * 0.82}" stroke-dasharray="${i % 2 ? `${r * size * 2.2} ${r * size * 0.5}` : 'none'}" />`).join('');
      };
      const resize = () => { width = hero.clientWidth; height = hero.clientHeight; size = Math.max(width, height * 1.3); drawRings(); };
      const render = (now: number) => {
        const dt = Math.min((now - last) / 1000, 0.05); last = now;
        const cx = width / 2 + pointerX * 18, cy = height * 0.47 + pointerY * 12;
        const scale = Math.min(1, Math.max(0.55, width / 1600));
        cards.forEach((card, i) => {
          const ring = rings[card.ring];
          if (!still) card.angle += ring.speed * dt * 2;
          const x = cx + Math.cos(card.angle) * ring.r * size;
          const y = cy + Math.sin(card.angle) * ring.r * size * 0.82;
          // Cards that drift behind the headline fade back so the text stays readable.
          const behindText = Math.abs(x - width / 2) < width * 0.2 && Math.abs(y - height * 0.47) < height * 0.28;
          const w = ring.w * scale * (1 + Math.sin(card.angle) * 0.08);
          const el = els[i];
          el.style.width = `${w}px`;
          el.style.transform = `translate3d(${x - w / 2}px, ${y - w * 0.31}px, 0) perspective(900px) rotateY(${-Math.cos(card.angle) * 28}deg) rotateX(${Math.sin(card.angle) * 8}deg)`;
          el.style.opacity = String(behindText ? 0.22 : ring.depth);
          el.style.filter = behindText ? 'blur(3px)' : ring.depth < 0.6 ? 'blur(1px)' : 'none';
          el.style.zIndex = String(card.ring + (Math.sin(card.angle) > 0 ? 10 : 0));
        });
        if (!still && visible) frame = requestAnimationFrame(render);
      };
      const start = () => { cancelAnimationFrame(frame); last = performance.now(); frame = requestAnimationFrame(render); };

      const onPointer = (e: PointerEvent) => { pointerX = e.clientX / innerWidth - 0.5; pointerY = e.clientY / innerHeight - 0.5; };
      const onClick = (e: MouseEvent) => { if (!(e.target as HTMLElement).closest('.split')) this.menuOpen.set(false); };
      const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); });
      const resizeObserver = new ResizeObserver(() => { resize(); if (still) render(performance.now()); });

      resize(); start();
      observer.observe(hero); resizeObserver.observe(hero);
      addEventListener('pointermove', onPointer, { passive: true });
      document.addEventListener('click', onClick);
      destroyRef.onDestroy(() => {
        cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect();
        removeEventListener('pointermove', onPointer); document.removeEventListener('click', onClick);
      });
    });
  }

  pick(p: { os: string; pkg: string }) { this.platform.set(p); this.menuOpen.set(false); }
  goDownload(event: Event) {
    // Without a launcher URL the button takes visitors to the download page instead.
    if (!this.launcherUrl) { event.preventDefault(); this.router?.navigateByUrl('/download'); }
  }
}
