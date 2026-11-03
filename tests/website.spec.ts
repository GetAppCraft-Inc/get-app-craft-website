import { test, expect } from '@playwright/test';
const pages = ['/', '/apps', '/apps/pixelcraft', '/download', '/pricing', '/support', '/tutorials', '/news', '/news/welcome', '/faq', '/press-kit', '/nope'];
for (const path of pages) {
 test(`page ${path} renders without errors or overflow`, async ({page}) => {
  const errors: string[] = []; page.on('pageerror', e => errors.push(e.message));
  const failed: string[] = []; page.on('response', r => { if (r.status() >= 400 && !r.url().endsWith('/nope')) failed.push(r.url()); });
  await page.goto(path);
  await expect(page.getByRole('heading', {level:1})).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(errors).toEqual([]); expect(failed).toEqual([]);
 });
}
test('navigation reaches every section of the site', async ({page}, info) => {
 await page.goto('/');
 if (info.project.name === 'mobile') {
  await page.getByRole('button', {name:'Toggle navigation'}).click();
  await page.getByRole('navigation', {name:'Mobile navigation'}).getByRole('link', {name:'Pricing'}).click();
  await expect(page.getByRole('navigation', {name:'Mobile navigation'})).not.toBeVisible();
 } else {
  const nav = page.getByRole('navigation', {name:'Main navigation'});
  await nav.getByRole('button', {name:/Resources/}).click();
  await nav.getByRole('link', {name:/FAQ/}).click();
  await expect(page).toHaveURL(/\/faq$/);
  await page.getByRole('banner').getByRole('link', {name:'Pricing'}).click();
 }
 await expect(page).toHaveURL(/\/pricing$/);
 await expect(page).toHaveTitle(/Pricing/);
});
test('craft tiles open their detail page', async ({page}) => {
 await page.goto('/');
 await expect(page.locator('.tile')).toHaveCount(12);
 await page.locator('.tile').nth(1).click();
 await expect(page).toHaveURL(/\/apps\/linecraft$/);
 await expect(page).toHaveTitle(/LineCraft/);
 await expect(page.locator('.highlight-grid article')).toHaveCount(6);
});
test('pricing toggle, tutorial filter and theme persist', async ({page}) => {
 await page.goto('/pricing');
 await expect(page.locator('.plan.popular .price strong')).toHaveText('$16');
 await page.getByRole('button', {name:'Monthly'}).click();
 await expect(page.locator('.plan.popular .price strong')).toHaveText('$20');
 await page.goto('/tutorials');
 await page.getByRole('button', {name:'3D', exact:true}).click();
 await expect(page.locator('.video')).toHaveCount(2);
 await page.getByRole('button', {name:'Switch to dark theme'}).click();
 await page.reload();
 await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});
