import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Logo } from '../shared';
import { HeroComponent } from './hero';

@Component({
  selector: 'app-root', standalone: true, imports: [Logo, HeroComponent],
  template: `
<div class="coming-soon">
  <header class="coming-header">
    <a href="/" class="coming-brand" aria-label="AppCraft home"><app-logo /></a>
    <span class="coming-header-caption">Open tools for makers</span>
    <span class="coming-status"><i></i> Coming soon</span>
  </header>
  <main id="main"><app-hero [comingSoon]="true" /></main>
</div>
`,
})
export class ComingSoonPage {
  constructor() {
    inject(Title).setTitle('AppCraft — Coming soon');
    document.documentElement.dataset['theme'] = 'light';
  }
}
