import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Rail } from '../shared';
import { posts, site } from '../site-content';
import { NotFoundPage } from './not-found';

@Component({
  selector: 'app-news', standalone: true, imports: [RouterLink, Rail],
  template: `
<app-rail num="01" label="News" [meta]="posts.length + ' posts'">
  <div class="page-head"><h1 class="display">News & <em>updates</em>.</h1><p class="lede">Updates, features and notes from the {{ site.name }} workshop.</p></div>
</app-rail>
<app-rail num="02" label="Posts" meta="Newest first" index="Articles">
  <ol class="row-list">@for (p of posts; track p.slug) {<li><a [routerLink]="['/news', p.slug]"><span class="hud faint">{{ p.date }}</span><span><span class="row-title">{{ p.title }}</span><span class="row-text">{{ p.excerpt }}</span></span><span class="faint" aria-hidden="true">→</span></a></li>}</ol>
</app-rail>
`,
})
export class NewsPage { readonly posts = posts; readonly site = site; }

@Component({
  selector: 'app-news-post', standalone: true, imports: [RouterLink, Rail, NotFoundPage],
  template: `
@if (post(); as post) {
<app-rail num="01" label="News" [meta]="post.date">
  <article class="page-head post"><a class="hud muted" routerLink="/news">← All posts</a><h1 class="display">{{ post.title }}</h1><p class="lede">{{ post.excerpt }}</p>
    <div class="post-body">@for (para of post.body; track $index) {<p>{{ para }}</p>}</div>
  </article>
</app-rail>
} @else { <app-not-found /> }
`,
})
export class NewsPostPage {
  readonly slug = input('');
  readonly post = computed(() => posts.find(p => p.slug === this.slug()));
  constructor() {
    const title = inject(Title);
    effect(() => title.setTitle(`${this.post()?.title ?? 'Not found'} — AppCraft`));
  }
}
