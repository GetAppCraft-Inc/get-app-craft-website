import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Rail } from '../shared';

@Component({
  selector: 'app-not-found', standalone: true, imports: [RouterLink, Rail],
  template: `<app-rail num="404" label="Not found"><div class="center-head tall"><p class="hud faint">Error 404</p><h1 class="display">Nothing here <em>yet</em>.</h1><p class="lede">This page may still be in the workshop.</p><div class="actions"><a class="button primary" routerLink="/">Back home</a></div></div></app-rail>`,
})
export class NotFoundPage {}
