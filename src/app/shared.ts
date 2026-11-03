import { Component, input } from '@angular/core';
import { CraftApp } from './site-content';

// The brand mark (AC monogram, traced from artcraft-logo.png). Replace the path to swap in your own logo everywhere (header, hero, footer, press kit).
@Component({
  selector: 'app-logo', standalone: true,
  host: { class: 'logo', 'aria-hidden': 'true' },
  template: `<svg viewBox="0 0 282 162"><path fill-rule="evenodd" d="M85.7 0.4C83.1 0.8 81 2.5 79.3 5.3C78 7.3 74.5 12.9 72.2 16.4C71.5 17.5 70.4 19.3 69.8 20.2C69.2 21.2 67.4 24.1 65.9 26.5C64.3 28.9 62.5 31.9 61.8 33C61.1 34.1 59.4 36.9 58 39.1C56.6 41.3 54.9 44 54.2 45.1C53.5 46.3 52.3 48.1 51.6 49.2C49.8 52.1 47.1 56.3 45.2 59.3C44.3 60.8 42.7 63.3 41.6 65C40.5 66.7 38.8 69.3 37.9 70.8C36.9 72.3 35.1 75.2 33.8 77.3C32.5 79.3 30.5 82.5 29.3 84.4C28.1 86.3 26.1 89.4 24.9 91.3C23.7 93.1 21.8 96.1 20.7 97.8C19.6 99.5 17.8 102.3 16.7 104.1C15.6 105.8 13.8 108.5 12.8 110.1C11.8 111.6 10.2 114.3 9.1 115.9C8.1 117.5 6.8 119.5 6.2 120.4C5.7 121.2 4.4 123.2 3.4 124.8C-1.2 131.8-1.3 131.6 6.8 140.2C8.1 141.5 9.7 143.2 10.4 144.1C11.6 145.4 13.5 147.5 18.6 153C28.4 163.5 28.4 163.5 35.1 159.6C36.3 158.9 37.8 158 38.5 157.6C39.2 157.3 41.5 155.9 43.6 154.7C45.8 153.4 49.2 151.5 51.2 150.3C53.2 149.2 56.9 147 59.3 145.5C61.8 144.1 65.3 142.1 67 141.1C68.8 140.1 71.3 138.6 72.6 137.8C74 137 77.2 135.1 79.9 133.6C82.5 132.1 85.7 130.2 86.9 129.5C89.2 128.1 92.3 126.3 94.5 125.1C95.2 124.7 97.9 123.1 100.4 121.6C102.9 120.1 106 118.3 107.3 117.6C108.6 116.8 111.1 115.4 112.8 114.4C117.3 111.7 119.5 110.4 123.1 108.4C124.9 107.4 128 105.6 130.1 104.4C135.9 101 136.2 100.8 137 100.9C137.8 101.1 138.1 101.7 139.1 104.5C149.2 135.5 170.2 154 199.4 157.4C208.5 158.5 207.5 158.5 245.8 158.5C282.8 158.4 279.8 158.5 281 157.7C283.1 156.3 282.7 155 277.5 146.6C276.9 145.7 275.9 144 275.1 142.8C272.2 137.9 269.9 134.2 267.5 130.3C266.1 128 264.6 125.6 264.1 124.8C262.7 122.5 261.4 121.3 259.5 120.7C258.8 120.5 257.6 120.4 232.8 120.4C204.8 120.3 206.6 120.3 202.9 119.7C185.7 116.7 172.5 102.9 170.1 85.4C169.7 83 169.6 82.3 169.4 81.6C169.1 80.7 167.4 77.6 165.5 74.5C164.8 73.3 163.7 71.5 163.2 70.5C162.6 69.5 161.4 67.6 160.6 66.2C159.7 64.8 158.7 63 158.2 62.2C157.8 61.5 156.7 59.5 155.7 57.8C153.4 53.9 151.3 50.4 149.4 47.2C148.6 45.7 147.4 43.7 146.8 42.6C146.2 41.6 145.1 39.7 144.4 38.5C143.8 37.3 143 35.9 142.6 35.3C142.3 34.8 141.5 33.3 140.8 32.1C140.1 30.9 139.1 29.1 138.5 28.1C137.2 26 135.2 22.4 133.5 19.4C132.8 18.2 132.1 16.9 131.8 16.5C131.6 16.1 130.8 14.7 130.1 13.5C124 2.5 123.3 1.6 119.7 0.5C118.9 0.3 87 0.2 85.7 0.4M206.2 3.2C193.9 4.2 187.2 5.9 178.7 10C170 14.3 162 20.9 155.2 29.4C151.6 33.8 151.5 34.3 152.9 36.7C153.3 37.3 154.2 38.9 154.9 40.3C155.7 41.6 156.8 43.6 157.5 44.8C158.2 45.9 159.1 47.6 159.7 48.6C160.2 49.5 161.1 51 161.6 51.9C162.2 52.8 162.9 54.2 163.3 54.9C163.7 55.6 164.6 57.1 165.2 58.2C165.9 59.4 166.9 61.1 167.4 62.1C170.9 68.6 171.1 68.6 173.3 63.9C177.9 54.2 185.3 46.7 194.6 42.4C198.3 40.7 201.1 40 206.3 39.2L208.4 38.8 232.4 38.8L256.4 38.7 257.1 38.4C259.1 37.7 260.3 36.6 262.3 33.5C263.1 32.4 264.5 30.4 265.4 29.1C266.3 27.9 267.9 25.6 268.9 24.1C269.9 22.6 271.2 20.8 271.8 20.1C272.4 19.3 273.5 17.6 274.4 16.4C275.2 15.1 276.4 13.4 277.1 12.6C281 7.4 281.4 6.3 279.9 5.1C278.6 4.1 277.5 3.9 272.1 3.9C269.7 3.9 266.7 3.8 265.6 3.7C264.4 3.7 259.4 3.6 254.4 3.6C249.5 3.5 242.3 3.4 238.4 3.4C231 3.2 207.2 3.1 206.2 3.2M101.1 33.4C100.7 33.7 98.9 36.3 96.8 39.8C96.2 40.7 95 42.5 94.2 43.9C93.3 45.2 92.1 47.2 91.4 48.3C90.7 49.4 89.5 51.4 88.6 52.7C87.7 54.1 86.5 55.9 86 56.9C85.4 57.8 84.4 59.4 83.8 60.3C83.2 61.3 82.2 63 81.5 64.1C80.8 65.3 79.9 66.6 79.6 67.1C79.3 67.6 77.9 69.7 76.6 71.8C71.6 79.8 69.3 83.5 68.3 84.9C67.8 85.8 66.7 87.4 66 88.6C65.3 89.7 64.2 91.5 63.5 92.5C62.8 93.5 61.8 95.1 61.2 96.1C60.6 97 59.3 99.1 58.3 100.7C53.6 107.8 53.5 108 53.5 108.7C53.6 109.7 54.6 109.4 59.2 106.8C63.2 104.5 68.7 101.4 73.4 98.8C75.4 97.7 77.9 96.3 78.8 95.8C79.8 95.2 81.7 94.1 83.1 93.3C84.5 92.6 88 90.7 90.8 89.1C93.5 87.5 96.6 85.7 97.6 85.2C98.6 84.7 100.3 83.7 101.4 83.1C102.5 82.4 104.2 81.5 105.1 81C106.1 80.5 107.5 79.6 108.3 79.2C109.1 78.7 111.1 77.6 112.7 76.8C115.9 75.1 121.3 72 122 71.5C123.3 70.5 123.2 69.8 121.4 66.5C120.6 65.1 119.3 62.9 118.6 61.6C117.9 60.3 116.9 58.4 116.4 57.5C115.8 56.6 114.3 53.8 113 51.4C111.7 49 110 46.1 109.4 44.9C107.3 41.4 105.6 38.3 104.8 36.8C102.9 33.3 102.2 32.7 101.1 33.4" fill="currentColor"/></svg>`,
})
export class Logo {}

// A page section: full-width hairline, a bordered 1280px column with corner ticks, and a sticky
// "01 / Label" bar. The label also feeds the scroll index on the right of wide screens.
@Component({
  selector: 'app-rail', standalone: true,
  host: { class: 'rail', '[attr.id]': 'anchor() || null', '[attr.data-rail]': 'index() || label()' },
  template: `<div class="rail-in"><span class="tick tl"></span><span class="tick tr"></span><div class="sec-bar"><p class="hud muted"><span class="faint">{{ num() }}</span><span class="faint slash">/</span>{{ label() }}</p>@if (meta()) {<p class="hud faint sec-meta">{{ meta() }}</p>}</div><ng-content /></div>`,
})
export class Rail { num = input.required<string>(); label = input.required<string>(); meta = input(''); anchor = input(''); index = input(''); }

@Component({
  selector: 'app-icon', standalone: true,
  template: `<span class="app-icon" [class.lg]="size() === 'lg'" [class.sm]="size() === 'sm'" [style.--app]="app().color" aria-hidden="true">{{ app().glyph }}</span>`,
})
export class AppIcon { app = input.required<CraftApp>(); size = input<'sm' | 'md' | 'lg'>('md'); }

@Component({
  selector: 'app-craft-name', standalone: true,
  template: `{{ app().prefix }}<span class="craft" [style.--app]="app().color">Craft</span>`,
})
export class CraftName { app = input.required<CraftApp>(); }

// Renders a real link once a URL is configured; until then an inert "Soon" button.
@Component({
  selector: 'app-get', standalone: true,
  template: `@if (url()) {<a class="button" [class.primary]="primary()" [class.block]="block()" [href]="url()" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v8m-3.5-3.5L8 10l3.5-3.5M3 13h10" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>{{ label() }}</a>} @else {<span class="button is-soon" [class.primary]="primary()" [class.block]="block()" aria-disabled="true">{{ label() }} <small>Soon</small></span>}`,
})
export class GetButton { label = input.required<string>(); url = input<string | undefined>(''); primary = input(false); block = input(false); }
