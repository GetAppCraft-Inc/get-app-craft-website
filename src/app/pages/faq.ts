import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Rail } from '../shared';
import { guides, site } from '../site-content';

@Component({
  selector: 'app-faq', standalone: true, imports: [RouterLink, Rail],
  template: `
<app-rail num="01" label="FAQ" [meta]="guides.length + ' answers'">
  <div class="page-head"><h1 class="display">Frequently asked <em>questions</em>.</h1><p class="lede">Short answers about {{ site.name }}, the craft apps and the studio.</p></div>
</app-rail>
<app-rail num="02" label="Guides" meta="Read in order or jump around" index="Articles">
  <div class="cells cols-2">
    @for (g of guides; track g.q; let i = $index) {<details class="cell faq-cell"><summary><span class="hud faint">0{{ i + 1 }}</span><h2>{{ g.q }}</h2></summary><p>{{ g.a }}</p></details>}
  </div>
  <div class="cell-head top-line"><p class="hud muted">Still stuck?</p><a class="hud muted" routerLink="/support">Contact support →</a></div>
</app-rail>
`,
})
export class FaqPage { readonly guides = guides; readonly site = site; }
