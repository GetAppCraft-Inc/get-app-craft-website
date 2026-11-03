import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppIcon, CraftName, GetButton, Rail } from '../shared';
import { apps, site } from '../site-content';

@Component({
  selector: 'app-apps', standalone: true, imports: [RouterLink, Rail, AppIcon, CraftName, GetButton],
  template: `
<app-rail num="01" label="Crafting apps" [meta]="apps.length + ' apps · Native · Free to use'">
  <div class="page-head split-hero">
    <div>
      <h1 class="display">Twelve apps.<br>One <span class="accent">craft</span>.</h1>
      <p class="lede">Image editing, vector illustration, video, photography, PDFs, motion, layout, interface design, writing, audio, presentations and spreadsheets. Native tools from the {{ site.name }} workshop, free to use.</p>
      <div class="actions left"><app-get label="Download Launcher" [url]="site.launcherUrl" [primary]="true" /><a class="button" routerLink="/support">Get in touch</a></div>
      <p class="recommend"><b>Recommended:</b> {{ site.name }} Launcher installs every app below and keeps them all up to date. Each app also has its own installers on its page.</p>
    </div>
    <div class="icon-cloud" aria-hidden="true">@for (app of apps; track app.slug) {<a [routerLink]="['/apps', app.slug]" tabindex="-1"><app-icon [app]="app" /><span>{{ app.prefix }}Craft</span></a>}</div>
  </div>
</app-rail>

<app-rail num="02" label="The lineup" meta="Pick a craft to explore">
  <div class="cells cols-4 lineup">
    @for (app of apps; track app.slug; let i = $index) {
    <a class="card lineup-card" [routerLink]="['/apps', app.slug]" [style.--app]="app.color">
      <div class="cell-head"><span class="num-chip hud">{{ (i + 1).toString().padStart(2, '0') }}</span><p class="hud faint">{{ app.kind }}</p></div>
      <div class="media shot shot-0" aria-hidden="true"><span class="glyph">{{ app.glyph }}</span></div>
      <div class="card-body">
        <app-icon class="lineup-icon" [app]="app" />
        <h3 class="craft-title"><app-craft-name [app]="app" /></h3>
        <p>{{ app.tagline }}</p>
        <span class="chips"><span class="chip status">{{ app.status }}</span>@for (p of app.platforms; track p) {<span class="chip">{{ p }}</span>}</span>
        <span class="hud muted explore">Explore {{ app.prefix }}Craft ↗</span>
      </div>
    </a>
    }
  </div>
</app-rail>

<app-rail num="03" label="Next up" meta="More on the way">
  <div class="center-head"><h2 class="display">More crafts <em>on the way</em>.</h2><p class="lede">Tell us what to build next, test early builds and follow development with the team.</p><div class="actions"><a class="button primary" routerLink="/support">Suggest a craft</a></div></div>
</app-rail>
`,
})
export class AppsPage { readonly apps = apps; readonly site = site; }
