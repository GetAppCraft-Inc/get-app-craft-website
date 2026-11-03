import { Component, computed, signal } from '@angular/core';
import { Rail } from '../shared';
import { site, tutorials } from '../site-content';

@Component({
  selector: 'app-tutorials', standalone: true, imports: [Rail],
  template: `
<app-rail num="01" label="Tutorials" meta="Video walkthroughs">
  <div class="page-head"><h1 class="display">Learn the <em>craft</em>.</h1><p class="lede">Tips, tricks and workflows for {{ site.name }}.</p></div>
</app-rail>
<app-rail num="02" label="Library" meta="Filter by topic" index="Articles">
  <div class="toolbar"><div class="toggle" aria-label="Filter tutorials">@for (t of tags; track t) {<button [class.selected]="tag() === t" [attr.aria-pressed]="tag() === t" (click)="tag.set(t)">{{ t }}</button>}</div><span class="hud faint" aria-live="polite">{{ shown().length }} videos</span></div>
  <div class="cells cols-3">
    @for (v of shown(); track v.title; let i = $index) {
    <article class="card video" [style.--app]="v.color">
      <div class="cell-head"><p class="hud muted">{{ v.tag }}</p><p class="hud faint">0{{ i + 1 }}</p></div>
      <div class="media thumb"><span class="play-chip hud">▷ {{ v.url ? 'Watch' : 'Soon' }}</span><span class="duration hud">{{ v.minutes }} min</span></div>
      <div class="card-body row"><h2>@if (v.url) {<a [href]="v.url" target="_blank" rel="noopener noreferrer">{{ v.title }}</a>} @else {{{ v.title }}}</h2><span class="chip">{{ v.tag }}</span></div>
    </article>
    }
  </div>
</app-rail>
`,
})
export class TutorialsPage {
  readonly site = site;
  readonly tags = ['All', ...new Set(tutorials.map(t => t.tag))];
  readonly tag = signal('All');
  readonly shown = computed(() => tutorials.filter(t => this.tag() === 'All' || t.tag === this.tag()));
}
