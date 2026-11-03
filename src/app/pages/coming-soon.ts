import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Logo } from '../shared';

@Component({
  selector: 'app-root', standalone: true, imports: [Logo],
  template: `
<div class="coming-soon">
  <header class="coming-header">
    <a href="/" class="coming-brand" aria-label="AppCraft home"><app-logo /><span>APPCRAFT</span></a>
    <span class="coming-status"><i></i> In the making</span>
  </header>
  <main class="coming-main" id="main">
    <div class="coming-orbits" aria-hidden="true"><i></i><i></i><i></i><span class="coming-orbit-dot dot-one"></span><span class="coming-orbit-dot dot-two"></span></div>
    <div class="coming-art" aria-hidden="true"><div class="coming-art-grid"></div><span class="art-caption">A little space for big ideas.</span><div class="coming-art-mark"><app-logo /></div><span class="art-coordinate">AC / 001</span></div>
    <div class="coming-copy">
      <p class="coming-eyebrow">An independent creative workshop</p>
      <h1>Good things<br>are <em>taking shape.</em></h1>
      <p class="coming-description">We're building a home for your next idea.<br>Open, native tools for images, motion, and everything in between.</p>
      <span class="coming-label"><span>✳</span> AppCraft is coming soon</span>
      <p class="coming-note">A few finishing touches. A whole world of possibilities.</p>
    </div>
  </main>
  <footer class="coming-footer"><span>Made for makers. Built for possibility.</span><span>Images <i>·</i> Motion <i>·</i> Design</span><span>© {{ year }} AppCraft</span></footer>
</div>
`,
})
export class ComingSoonPage {
  readonly year = new Date().getFullYear();
  constructor() {
    inject(Title).setTitle('AppCraft — Coming soon');
    // The launch page always uses the lavender palette, independent of local app preferences.
    document.documentElement.dataset['theme'] = 'light';
  }
}
