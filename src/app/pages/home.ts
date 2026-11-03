import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppIcon, CraftName, GetButton, Rail } from '../shared';
import { apps, site, studioFeatures } from '../site-content';
import { HeroComponent } from './hero';

@Component({
  selector: 'app-home', standalone: true, imports: [RouterLink, Rail, AppIcon, CraftName, GetButton, HeroComponent],
  template: `
<app-hero />

<app-rail num="01" label="Crafting apps" meta="Open · Native · Offline" anchor="crafts">
  <div class="rail-head split-head">
    <div><h2 class="display">Twelve apps. One <em>craft</em>.</h2><p class="lede">An image editor, a vector tool, a video editor and more. Native tools from the {{ site.name }} workshop, free to use.</p></div>
    <a class="hud muted arrow-link" routerLink="/apps">All crafting apps <span>→</span></a>
  </div>
  <nav class="cells tile-grid" aria-label="Craft apps">
    @for (app of apps; track app.slug) {
    <a class="tile" [routerLink]="['/apps', app.slug]" [style.--app]="app.color"><app-icon [app]="app" /><span class="tile-name"><app-craft-name [app]="app" /></span></a>
    }
    <a class="tile-all" routerLink="/apps"><span class="all-box" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M3 8h10m-4-4 4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.4"/></svg></span><span class="tile-name">All apps</span></a>
  </nav>
</app-rail>

<app-rail num="02" [label]="site.name + ' Studio'" meta="Images & motion" anchor="studio">
  <div class="sunken-block">
    <p class="hud accent">Also from {{ site.name }}</p>
    <h2 class="display">The studio for <em>images and motion</em>.</h2>
    <p class="lede">{{ site.name }} Studio is our composing app: block out scenes yourself, then finish them on one shared canvas. On your desktop or in the browser.</p>
    <div class="actions"><a class="button primary" routerLink="/download"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v8m-3.5-3.5L8 10l3.5-3.5M3 13h10" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>Download the studio</a><app-get label="Use on web" [url]="site.webUrl" /></div>
  </div>
</app-rail>
<div class="marquee" aria-hidden="true">@for (round of [1, 2]; track round) {<ul class="marquee-track">@for (f of features; track f.title) {<li class="hud muted"><span class="accent">▪</span>{{ f.title }}</li>}</ul>}</div>

<app-rail num="03" label="Studio features" meta="Seven tools, one canvas" anchor="features">
  <div class="rail-head"><h2 class="display">Control you can <em>actually</em> feel.</h2><p class="lede">Words only get you so far. These tools let you place, pose and shape every part of a picture yourself.</p></div>
  <div class="cells cols-2">
    @for (f of features; track f.title; let i = $index) {
    <article class="card"><div class="cell-head"><p class="hud muted">{{ f.tag }}</p><p class="hud faint">0{{ i + 1 }}</p></div><div class="media mini-art" [class]="'media mini-art art-' + f.art" aria-hidden="true"><i></i><i></i><i></i></div><div class="card-body"><h3>{{ f.title }}</h3><p>{{ f.text }}</p></div></article>
    }
    <a class="card" routerLink="/download"><div class="cell-head"><p class="hud muted">More in the studio</p><p class="hud faint">08</p></div><div class="media launch-media"><span class="launch-box" aria-hidden="true">↗</span><span class="hud faint">{{ site.name }} Studio</span></div><div class="card-body"><h3>Launch the studio</h3><p>Sketch, compose and finish with every craft on one canvas, on your own machine.</p></div></a>
  </div>
</app-rail>

<app-rail num="04" label="Ownership" meta="Free & open" anchor="ownership">
  <div class="rail-head"><h2 class="display">Stop <em>renting</em> your tools.</h2><p class="lede">{{ site.name }} is yours to own and keep. No subscriptions needed, no middleman, no rent payments.</p></div>
  <div class="cells cols-3">
    <article class="cell"><p class="hud faint">A</p><h3>Open by default</h3><p>Readable file formats and an open roadmap. You can always see what is coming and take your work elsewhere.</p><a class="button small" routerLink="/faq">Read the FAQ</a></article>
    <article class="cell"><p class="hud faint">B</p><h3>Yours forever</h3><p>Install it once and it keeps working. No feature switches off when a subscription ends.</p></article>
    <article class="cell"><p class="hud faint">C</p><h3>No middleman</h3><p>Everything runs on your machine. Nothing is uploaded unless you choose to share it.</p></article>
  </div>
</app-rail>

<app-rail num="05" label="Proof" meta="From the workshop" anchor="proof" index="Community">
  <div class="rail-head"><h2 class="display">Made <em>with</em> {{ site.name }}.</h2></div>
  <div class="cells cols-3">
    @for (n of [1, 2, 3]; track n) {
    <figure class="card film" [class]="'card film proof-' + n"><div class="cell-head"><p class="hud muted">Workshop study</p><p class="hud faint">0{{ n }}</p></div><div class="media proof-art" aria-hidden="true"><i></i><i></i><span class="play-chip hud">▷ Play</span></div></figure>
    }
  </div>
</app-rail>

<app-rail num="06" label="Get started" anchor="start">
  <div class="center-head"><p class="hud faint">Free · Native · No subscription</p><h2 class="display xl">Start <em>crafting</em>.</h2><p class="lede">{{ site.name }} makes two things: the craft apps and {{ site.name }} Studio. Pick the one that fits your work, or get both.</p></div>
  <div class="cells cols-2">
    <div class="card"><div class="cell-head"><p class="hud">Craft apps</p><p class="hud faint">Native desktop apps</p></div><div class="card-body pad-lg">
      <div class="icon-stack" aria-hidden="true">@for (app of apps.slice(0, 6); track app.slug) {<app-icon [app]="app" size="sm" />}<span class="more">+{{ apps.length - 6 }}</span></div>
      <h3 class="big">Desktop apps for every craft.</h3><p>Twelve native apps for images, vectors, video, layout, audio and more. {{ site.name }} Launcher installs them all and keeps them up to date.</p>
      <div class="actions left"><app-get label="Download Launcher" [url]="site.launcherUrl" [primary]="true" /><a class="button" routerLink="/apps">Explore the apps</a></div>
    </div></div>
    <div class="card"><div class="cell-head"><p class="hud">{{ site.name }} Studio</p><p class="hud faint">Images & motion</p></div><div class="card-body pad-lg">
      <div class="icon-stack" aria-hidden="true"><span class="studio-chip"><svg viewBox="0 0 34 24"><path d="M1 23 7.6 1h6.1l2.1 9.7L22 1h6.3l-6.6 22h-6.1l3.6-12.1-6.3 9.1h-3.5L7.9 10.9 4.3 23z" fill="currentColor"/></svg></span></div>
      <h3 class="big">One canvas for images and motion.</h3><p>Compose scenes on the canvas and in 3D, then finish them with every craft together. On your desktop or in the browser.</p>
      <div class="actions left"><a class="button primary" routerLink="/download">Download the studio</a><app-get label="Use on web" [url]="site.webUrl" /></div>
    </div></div>
  </div>
</app-rail>
`,
})
export class HomePage { readonly site = site; readonly apps = apps; readonly features = studioFeatures; }
