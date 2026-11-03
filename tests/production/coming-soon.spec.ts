import { test, expect } from '@playwright/test';

for (const path of ['/', '/apps', '/apps/pixelcraft', '/download', '/pricing', '/unknown']) {
  test(`production keeps ${path} behind the coming-soon page`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => localStorage.setItem('appcraft-theme', 'dark'));
    await page.goto(path);
    await expect(page).toHaveTitle('AppCraft — Coming soon');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Good thingsare taking shape.');
    await expect(page.getByText('AppCraft is coming soon')).toBeVisible();
    await expect(page.getByRole('link', { name: 'AppCraft home' })).toBeVisible();
    await expect(page.locator('.site-header, .site-footer, app-section-index, router-outlet')).toHaveCount(0);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(errors).toEqual([]);
  });
}
