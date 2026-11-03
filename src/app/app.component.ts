import { Component, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { site, apps } from './site-content';
import { Logo } from './shared';
import { SectionIndex } from './pages/section-index';

@Component({ selector: 'app-root', standalone: true, imports: [RouterOutlet, RouterLink, RouterLinkActive, Logo, SectionIndex], templateUrl: './app.component.html' })
export class AppComponent {
  readonly site = site;
  readonly apps = apps;
  readonly resources = [
    { label: 'Tutorials', note: 'Video walkthroughs', path: '/tutorials' }, { label: 'News', note: 'Updates from the workshop', path: '/news' },
    { label: 'FAQ', note: 'Guides and answers', path: '/faq' }, { label: 'Press kit', note: 'Logos, icons and copy', path: '/press-kit' },
  ];
  readonly menuOpen = signal(false);
  readonly resourcesOpen = signal(false);
  readonly onResource = signal(false);
  readonly dark = signal(false);
  constructor() {
    try { this.dark.set(localStorage.getItem('appcraft-theme') === 'dark'); } catch { /* Storage may be disabled. */ }
    this.applyTheme();
    inject(Router).events.subscribe(event => {
      if (!(event instanceof NavigationEnd)) return;
      this.closeMenus();
      this.onResource.set(this.resources.some(r => event.urlAfterRedirects.startsWith(r.path)));
    });
  }
  toggleTheme() {
    this.dark.update(value => !value);
    this.applyTheme();
    try { localStorage.setItem('appcraft-theme', this.dark() ? 'dark' : 'light'); } catch { /* Theme still works in memory. */ }
  }
  private applyTheme() { document.documentElement.dataset['theme'] = this.dark() ? 'dark' : 'light'; }
  // Plain #fragment links would resolve against <base href> and leave the current route.
  jumpTo(event: Event, id: string) { event.preventDefault(); const el = document.getElementById(id); el?.scrollIntoView(); el?.focus({ preventScroll: true }); }
  closeMenus() { this.menuOpen.set(false); this.resourcesOpen.set(false); }
  @HostListener('document:keydown.escape') onEscape() { this.closeMenus(); }
  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.resources')) this.resourcesOpen.set(false);
  }
}
