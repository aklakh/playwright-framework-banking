import { test, expect } from '@playwright/test';

test('Fund Transfer Test', async ({ page }) => {
  await page.goto('http://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'ahmad');
  await page.fill('input[name="password"]', 'test123');
  await page.click('input[value="Log In"]');
  await expect(page.locator('#leftPanel')).toContainText('Accounts Overview');

});