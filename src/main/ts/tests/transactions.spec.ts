import { test, expect } from '@playwright/test';

test('View Transaction History', async ({ page }) => {
  await page.goto('http://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'user123');
  await page.fill('input[name="password"]', 'test123');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="findtrans.htm"]');
  await expect(page.locator('#rightPanel')).toContainText('Find Transactions');
});