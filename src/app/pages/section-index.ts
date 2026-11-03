import { Component, DestroyRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { site } from '../site-content';

interface Entry { id: string; label: string; }

// Fixed right-hand rail on wide screens: a scroll ruler with a percentage marker, the current
// section as a large title (its letters fly in from the list), and the upcoming sections below.
// Sections are every <app-rail> on the current page, so each route gets its own index.
@Component({
  selector: 'app-section-index', standalone: true,
  template: `
<aside class="side-rail" [class.in-hero]="activeIndex() < 0" aria-label="Page sections">
  <div class="rail-ruler" aria-hidden="true">
    @for (n of ticks; track n) {<b [style.top.%]="n * 10 / 10">{{ n }}</b>}
    <span class="rail-mark" [style.top.%]="progress()"><i>{{ percent() }}%</i></span>
  </div>
  @for (c of current(); track c.id) {
  <div class="rail-title" aria-live="polite">
    <span class="rail-brand">{{ site.wordmark }}</span>
    <a [href]="'#' + c.id" (click)="go($event, c.id)">@for (ch of letters(c.label); track $index) {<span class="fly" [style.--i]="$index" [style.--x]="scatter($index, 0)" [style.--y]="scatter($index, 1)" [style.--r]="scatter($index, 2)">{{ ch }}</span>}</a>
  </div>
  <span class="rail-vertical" aria-hidden="true">{{ c.label }}</span>
  }
  <nav class="rail-list">
    @for (s of sections(); track s.id; let i = $index) {<a [href]="'#' + s.id" [class.gone]="i <= activeIndex()" [attr.tabindex]="i <= activeIndex() ? -1 : null" (click)="go($event, s.id)">{{ s.label }}</a>}
  </nav>
</aside>`,
})
export class SectionIndex {
  readonly site = site;
  readonly sections = signal<Entry[]>([]);
  readonly ticks = Array.from({ length: 101 }, (_, i) => i).filter(n => n % 10 === 0);
  readonly activeIndex = signal(-1);
  readonly progress = signal(0);
  // A one-item list keyed by section id, so the title is rebuilt (and its letters re-animate) on each change.
  readonly current = computed(() => this.sections().slice(this.activeIndex(), this.activeIndex() + 1).filter(() => this.activeIndex() >= 0));
  readonly percent = computed(() => String(Math.round(this.progress())).padStart(3, '0'));

  constructor() {
    const destroyRef = inject(DestroyRef);
    const router = inject(Router);
    afterNextRender(() => {
      let els: HTMLElement[] = [];
      const scan = () => {
        els = Array.from(document.querySelectorAll<HTMLElement>('main [data-rail]'));
        els.forEach((el, i) => { if (!el.id) el.id = 'section-' + (i + 1); });
        const next = els.map(el => ({ id: el.id, label: el.dataset['rail'] ?? '' }));
        if (next.map(s => s.id + s.label).join() !== this.sections().map(s => s.id + s.label).join()) this.sections.set(next);
      };
      const update = () => {
        if (!els.length || !els[0].isConnected) scan();
        const max = document.documentElement.scrollHeight - innerHeight;
        this.progress.set(max > 0 ? Math.min(100, (scrollY / max) * 100) : 0);
        // The current section is the last one whose top has passed the upper third of the viewport.
        let index = -1;
        els.forEach((el, i) => { if (el.getBoundingClientRect().top < innerHeight * 0.35) index = i; });
        this.activeIndex.set(index);
      };
      // Lazy routes render after NavigationEnd, so rescan once the new page has painted.
      const sub = router.events.subscribe(e => { if (e instanceof NavigationEnd) setTimeout(() => { scan(); update(); }, 60); });
      scan(); update();
      addEventListener('scroll', update, { passive: true });
      addEventListener('resize', update);
      destroyRef.onDestroy(() => { sub.unsubscribe(); removeEventListener('scroll', update); removeEventListener('resize', update); });
    });
  }

  letters(label: string) { return [...label]; }
  // Deterministic pseudo-random offsets so each letter flies in from its own direction.
  scatter(i: number, axis: number) {
    const v = Math.sin((i + 1) * (axis + 1) * 12.9898) * 43758.5453;
    const n = v - Math.floor(v) - 0.5;
    // Letters start below the title (where the list sits) so they appear to fly up out of it.
    return axis === 2 ? `${Math.round(n * 160)}deg` : axis ? `${Math.round((n + 0.5) * 420 + 160)}px` : `${Math.round(n * 260)}px`;
  }
  go(event: Event, id: string) { event.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
}
