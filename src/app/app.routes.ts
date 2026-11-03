import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'AppCraft — Capable tools for makers', loadComponent: () => import('./pages/home').then(m => m.HomePage) },
  { path: 'apps', title: 'Craft apps — AppCraft', loadComponent: () => import('./pages/apps').then(m => m.AppsPage) },
  { path: 'apps/:slug', loadComponent: () => import('./pages/app-detail').then(m => m.AppDetailPage) },
  { path: 'download', title: 'Download the studio — AppCraft', loadComponent: () => import('./pages/download').then(m => m.DownloadPage) },
  { path: 'pricing', title: 'Pricing — AppCraft', loadComponent: () => import('./pages/pricing').then(m => m.PricingPage) },
  { path: 'support', title: 'Support — AppCraft', loadComponent: () => import('./pages/support').then(m => m.SupportPage) },
  { path: 'tutorials', title: 'Tutorials — AppCraft', loadComponent: () => import('./pages/tutorials').then(m => m.TutorialsPage) },
  { path: 'news', title: 'News — AppCraft', loadComponent: () => import('./pages/news').then(m => m.NewsPage) },
  { path: 'news/:slug', loadComponent: () => import('./pages/news').then(m => m.NewsPostPage) },
  { path: 'faq', title: 'FAQ — AppCraft', loadComponent: () => import('./pages/faq').then(m => m.FaqPage) },
  { path: 'press-kit', title: 'Press kit — AppCraft', loadComponent: () => import('./pages/press-kit').then(m => m.PressKitPage) },
  { path: '**', title: 'Not found — AppCraft', loadComponent: () => import('./pages/not-found').then(m => m.NotFoundPage) },
];
