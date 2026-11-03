import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppIcon, GetButton, Rail } from '../shared';
import { apps, Platform, site } from '../site-content';

@Component({
  selector: 'app-download', standalone: true, imports: [RouterLink, Rail, AppIcon, GetButton],
  template: `
<app-rail num="01" label="Download" [meta]="site.name + ' Studio · macOS · Windows · Linux'">
  <div class="page-head split-hero">
    <div>
      <h1 class="display">Download {{ site.name }} <em>Studio</em>.</h1>
      <p class="lede">The studio for images and motion. Sketch on the canvas, block out scenes in 3D and finish your work right on your desktop.</p>
      <div class="actions left"><app-get [label]="'Download for ' + detected" [url]="site.studioDownloads[detected]" [primary]="true" /><app-get label="Use on web" [url]="site.webUrl" /></div>
      <p class="hud faint">Free · Open source · v{{ site.version }}</p>
    </div>
    <aside class="side-card">
      <div class="icon-stack" aria-hidden="true">@for (app of apps.slice(0, 6); track app.slug) {<app-icon [app]="app" size="sm" />}<span class="more">+{{ apps.length - 6 }}</span></div>
      <h2>Looking for the craft apps?</h2>
      <p>PixelCraft, LineCraft and the rest of the {{ apps.length }} apps are a separate download, installed and kept up to date by {{ site.name }} Launcher.</p>
      <a class="button small" routerLink="/apps">Explore crafting apps</a>
    </aside>
  </div>
  <div class="cell-head top-line"><p class="hud muted">Viewport — 3D scene editor</p><p class="hud faint">Desktop app</p></div>
  <div class="viewport" role="img" aria-label="Studio 3D viewport with a figure and a sphere on a grid floor">
    <div class="vp-bar"><span class="vp-brand">{{ site.name }}</span><span class="vp-tools"><b>Move</b><span>Rotate</span><span>Scale</span></span><span class="vp-chip">Untitled scene</span></div>
    <div class="art-grid scene"><div class="floor"></div><div class="art-sphere"></div><div class="mannequin"><i></i><i></i></div></div>
    <div class="vp-prompt"><span>+ &nbsp;Describe the shot…</span><b>Render</b></div>
  </div>
</app-rail>

<app-rail num="02" label="Platforms" meta="Universal macOS · x64 Windows · Linux">
  <div class="cells cols-3">
    @for (p of platforms; track p.name; let i = $index) {
    <article class="card"><div class="cell-head"><p class="hud" [class.accent]="p.name === detected" [class.faint]="p.name !== detected">{{ p.name === detected ? 'Your system' : 'Platform' }}</p><p class="hud faint">0{{ i + 1 }}</p></div>
      <div class="card-body"><h2 class="os"><span class="os-box" aria-hidden="true">{{ p.icon }}</span>{{ p.name }}</h2><ul class="spec-list">@for (r of p.reqs; track r) {<li>{{ r }}</li>}</ul><app-get [label]="'Download for ' + p.name" [url]="site.studioDownloads[p.name]" [primary]="p.name === detected" [block]="true" /></div>
    </article>
    }
  </div>
</app-rail>

<app-rail num="03" label="Quick start" meta="Minutes, not hours">
  <div class="cells cols-3">
    <article class="cell"><p class="hud faint">Step 1</p><h3>Download</h3><p>Grab the installer for your platform.</p></article>
    <article class="cell"><p class="hud faint">Step 2</p><h3>Install</h3><p>Open it and follow the short setup.</p></article>
    <article class="cell"><p class="hud faint">Step 3</p><h3>Create</h3><p>Start a new canvas and make something.</p></article>
  </div>
</app-rail>
`,
})
export class DownloadPage {
  readonly site = site;
  readonly apps = apps;
  readonly detected: Platform = /Mac/i.test(navigator.userAgent) ? 'macOS' : /Linux|X11/i.test(navigator.userAgent) && !/Android/i.test(navigator.userAgent) ? 'Linux' : 'Windows';
  readonly platforms: { name: Platform; icon: string; reqs: string[] }[] = [
    { name: 'Windows', icon: '⊞', reqs: ['Windows 10 (64-bit) or newer', '8 GB RAM recommended', '2 GB available storage'] },
    { name: 'macOS', icon: '⌘', reqs: ['macOS 12 or newer', '8 GB RAM recommended', '2 GB available storage'] },
    { name: 'Linux', icon: '❯', reqs: ['x86_64 with a recent glibc', '8 GB RAM recommended', '2 GB available storage'] },
  ];
}
