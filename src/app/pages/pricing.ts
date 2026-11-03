import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Rail } from '../shared';
import { guides, plans, site } from '../site-content';

@Component({
  selector: 'app-pricing', standalone: true, imports: [RouterLink, Rail],
  template: `
<div class="promo"><span class="hud">◇ Early supporter</span><span>Save 25% with yearly billing while {{ site.name }} is in development.</span></div>
<app-rail num="01" label="Pricing" meta="Free to start · Plans optional">
  <div class="page-head"><h1 class="display">Create without <em>limits</em>.</h1><p class="lede">Every craft app is free to use. A plan supports the workshop and adds a few conveniences for people who make every day.</p></div>
</app-rail>

<app-rail num="02" label="Choose your plan" meta="Every plan keeps your work yours">
  <div class="billing">
    <div class="toggle" role="group" aria-label="Billing period"><button [class.selected]="yearly()" [attr.aria-pressed]="yearly()" (click)="yearly.set(true)">Yearly</button><button [class.selected]="!yearly()" [attr.aria-pressed]="!yearly()" (click)="yearly.set(false)">Monthly</button></div>
    <span class="hud save">{{ yearly() ? '3 months free' : 'Switch to yearly to save' }}</span>
    <span class="hud faint push">Prices in USD</span>
  </div>
  <div class="cells cols-4 plan-grid">
    @for (plan of plans; track plan.name; let i = $index) {
    <article class="plan" [class.popular]="plan.popular" [style.--plan]="plan.color">
      <div class="plan-top hud"><span>{{ plan.popular ? '◆ Most popular' : 'Plan' }}</span><span>0{{ i + 1 }}</span></div>
      <div class="plan-body">
        <div class="plan-title"><h3>{{ plan.name }}</h3>@if (yearly() && plan.monthly !== plan.yearly) {<span class="off hud">25% off</span>}</div>
        <p class="muted">{{ plan.note }}</p>
        <div class="price">@if (yearly() && plan.monthly !== plan.yearly) {<s>\${{ plan.monthly }}</s>}<strong>\${{ yearly() ? plan.yearly : plan.monthly }}</strong><span>/mo</span></div>
        <p class="hud faint">{{ plan.monthly === 0 ? 'Free forever' : yearly() ? '$' + plan.yearly * 12 + ' billed yearly' : 'Billed monthly' }}</p>
        <a class="button plan-cta" [routerLink]="plan.link">{{ plan.cta }} →</a>
        <p class="hud faint">What you get</p>
        <ul class="checks">@for (f of plan.features; track f) {<li>{{ f }}</li>}</ul>
      </div>
    </article>
    }
    <article class="plan teams" style="--plan:#2f6fd6">
      <div class="plan-top hud"><span>For teams</span><span>04</span></div>
      <div class="plan-body"><h3>Teams</h3><div class="price"><strong>Custom</strong></div><p class="hud faint">Bespoke volume & terms</p><a class="button plan-cta" routerLink="/support">Contact us →</a><p class="hud faint">Everything in Studio, plus</p><ul class="checks"><li>Volume licences</li><li>Shared libraries</li><li>Custom terms</li></ul></div>
    </article>
  </div>
  <ul class="assurances hud muted"><li>Cancel anytime</li><li>Open file formats</li><li>Works offline</li><li>Yours forever</li></ul>
  <div class="cells cols-2">
    <div class="cell"><p class="hud faint">Before you choose</p><h3>Common questions</h3><div class="faq-list">@for (g of faq; track g.q) {<details><summary>{{ g.q }}</summary><p>{{ g.a }}</p></details>}</div></div>
    <div class="cell"><p class="hud faint">+ Footnote</p><p>Prices are illustrative while {{ site.name }} is in development and may change before launch. The craft apps stay free to use without a plan.</p></div>
  </div>
</app-rail>
`,
})
export class PricingPage { readonly site = site; readonly plans = plans; readonly yearly = signal(true); readonly faq = guides.slice(1, 4); }
