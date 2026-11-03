import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { AppIcon, CraftName, GetButton, Logo, Rail } from '../shared';
import { apps, Platform, sharedHighlights, site } from '../site-content';
import { NotFoundPage } from './not-found';

@Component({
  selector: 'app-app-detail', standalone: true, imports: [RouterLink, Rail, AppIcon, CraftName, GetButton, Logo, NotFoundPage],
  template: `
@if (app(); as app) {
<div [style.--app]="app.color">
<app-rail num="01" [label]="app.prefix + 'Craft'" [meta]="app.kind">
  <div class="center-head detail-head">
    <app-icon [app]="app" size="lg" />
    <p class="detail-name"><span class="num-chip hud">{{ number() }}</span><app-craft-name [app]="app" /></p>
    <h1 class="display">{{ app.tagline }}</h1>
    <p class="lede">{{ app.summary }}</p>
    <div class="actions"><app-get label="Download Launcher" [url]="site.launcherUrl" [primary]="true" /><a class="button" href="#get" (click)="jump($event, 'get')">All downloads ↓</a></div>
    <p class="hud faint">{{ app.platforms.join(' · ') }} · Free to use</p>
  </div>
  <div class="cell-head top-line"><p class="hud muted">{{ app.shots[0] }}</p><p class="hud faint">Concept</p></div>
  <div class="media shot shot-0 hero-shot" aria-hidden="true"><span class="glyph">{{ app.glyph }}</span></div>
</app-rail>

<app-rail num="02" label="Highlights" [meta]="app.kind">
  <div class="rail-head"><h2 class="display">What's <span class="accent-app">inside</span>.</h2></div>
  <div class="cells cols-3 highlight-grid">
    @for (h of highlights(); track h.title; let i = $index) {<article class="cell"><p class="hud faint right">0{{ i + 1 }}</p><h3>{{ h.title }}</h3><p>{{ h.text }}</p></article>}
  </div>
</app-rail>

<app-rail num="03" label="Screenshots" [meta]="'Concepts for ' + app.prefix + 'Craft'">
  <div class="cells cols-2">
    @for (shot of app.shots; track shot; let i = $index) {
    <figure class="card" [class.span-2]="i === 0"><div class="media shot" [class]="'media shot shot-' + i" aria-hidden="true"><span class="glyph">{{ app.glyph }}</span></div><figcaption class="cell-head bottom"><p class="hud muted">{{ shot }}</p><p class="hud faint">0{{ i + 1 }}</p></figcaption></figure>
    }
  </div>
</app-rail>

<app-rail num="04" [label]="'Get ' + app.prefix + 'Craft'" meta="Free · Open" anchor="get" index="Get it">
  <div class="cells cols-2 get-grid">
    <div class="cell pad-lg">
      <p class="option"><span class="logo-chip"><app-logo /></span><span class="hud accent">Option 1 · Recommended</span></p>
      <h2 class="display md">Get <app-craft-name [app]="app" /> with the <span class="accent-app">Launcher</span>.</h2>
      <p>{{ site.name }} Launcher installs {{ app.prefix }}Craft and every other craft from one place, picks the right build for your computer and keeps them all up to date.</p>
      <ul class="ticks-list hud muted"><li>Every craft app</li><li>One-click updates</li><li>Verified downloads</li></ul>
    </div>
    <div class="cell pad-lg sunken launcher-card"><p class="hud faint">{{ site.name }} Launcher · v{{ site.version }}</p><app-get label="Download Launcher" [url]="site.launcherUrl" [primary]="true" [block]="true" /><p class="hud faint">macOS · Windows · Linux</p></div>
  </div>
  <div class="rail-head"><p class="hud faint">Option 2 · Standalone</p><h2 class="display md">Just <app-craft-name [app]="app" />? Download it <span class="accent-app">standalone</span>.</h2><p class="lede">These installers add {{ app.prefix }}Craft on its own. Install the launcher later and it will find the app and keep it updated.</p></div>
  <div class="cells cols-3">
    @for (p of platforms; track p.name; let i = $index) {
    <article class="card"><div class="cell-head"><p class="hud" [class.accent]="p.name === detected" [class.faint]="p.name !== detected">{{ p.name === detected ? 'Your system' : 'Platform' }}</p><p class="hud faint">0{{ i + 1 }}</p></div>
      <div class="card-body"><h3 class="os"><span class="os-box" aria-hidden="true">{{ p.icon }}</span>{{ p.name }}</h3><p class="strong">{{ p.pkg }}</p><p>{{ p.detail }}</p><app-get [label]="'Standalone for ' + p.name" [url]="app.downloads?.[p.name]" [primary]="p.name === detected" [block]="true" /></div>
    </article>
    }
  </div>
</app-rail>

<app-rail num="05" label="The family" meta="Keep exploring">
  <nav class="cells tile-grid compact" aria-label="More craft apps">
    @for (other of others(); track other.slug) {<a class="tile" [routerLink]="['/apps', other.slug]" [style.--app]="other.color"><app-icon [app]="other" size="sm" /><span class="tile-name"><app-craft-name [app]="other" /></span></a>}
  </nav>
</app-rail>
</div>
} @else { <app-not-found /> }
`,
})
export class AppDetailPage {
  readonly slug = input('');
  readonly site = site;
  readonly app = computed(() => apps.find(a => a.slug === this.slug()));
  readonly number = computed(() => String(apps.findIndex(a => a.slug === this.slug()) + 1).padStart(2, '0'));
  readonly others = computed(() => apps.filter(a => a.slug !== this.slug()));
  readonly highlights = computed(() => [...(this.app()?.highlights ?? []), ...sharedHighlights]);
  readonly detected: Platform = /Mac/i.test(navigator.userAgent) ? 'macOS' : /Linux|X11/i.test(navigator.userAgent) && !/Android/i.test(navigator.userAgent) ? 'Linux' : 'Windows';
  readonly platforms: { name: Platform; icon: string; pkg: string; detail: string }[] = [
    { name: 'macOS', icon: '⌘', pkg: 'Disk image (Universal)', detail: 'Apple silicon and Intel Macs.' },
    { name: 'Windows', icon: '⊞', pkg: 'Installer (64-bit)', detail: 'Most Windows 10 and 11 PCs.' },
    { name: 'Linux', icon: '❯', pkg: 'AppImage (x86_64)', detail: 'Any distro. Mark it executable and run.' },
  ];
  constructor() {
    const title = inject(Title);
    effect(() => { const app = this.app(); title.setTitle(app ? `${app.prefix}Craft — ${app.kind} — AppCraft` : 'Not found — AppCraft'); });
  }
  jump(event: Event, id: string) { event.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
}
