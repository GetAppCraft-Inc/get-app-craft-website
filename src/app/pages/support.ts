import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Rail } from '../shared';
import { site } from '../site-content';

@Component({
  selector: 'app-support', standalone: true, imports: [RouterLink, Rail],
  template: `
<app-rail num="01" label="Support" meta="We're happy to help">
  <div class="page-head"><h1 class="display">Get <em>help</em>.</h1><p class="lede">Find answers, follow along, or reach us directly.</p></div>
</app-rail>
<app-rail num="02" label="Channels" meta="Pick one" index="Contact">
  <div class="cells cols-3">
    <a class="cell link-cell" [href]="'mailto:' + site.email"><div class="cell-top"><span class="os-box" aria-hidden="true">✉</span><span class="hud faint">A</span></div><h2>Email us</h2><p>{{ site.email }}</p><span class="hud muted">Write to us →</span></a>
    <a class="cell link-cell" routerLink="/faq"><div class="cell-top"><span class="os-box" aria-hidden="true">?</span><span class="hud faint">B</span></div><h2>Browse the FAQ</h2><p>Answers to common questions about {{ site.name }}.</p><span class="hud muted">Read the FAQ →</span></a>
    <a class="cell link-cell" routerLink="/tutorials"><div class="cell-top"><span class="os-box" aria-hidden="true">▷</span><span class="hud faint">C</span></div><h2>Watch a tutorial</h2><p>Short walkthroughs of the canvas, scenes and crafts.</p><span class="hud muted">Start learning →</span></a>
  </div>
</app-rail>
`,
})
export class SupportPage { readonly site = site; }
