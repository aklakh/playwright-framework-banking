import { test, expect } from '@playwright/test';

test('Transfer Funds between Accounts', async ({ page }) => {
  await page.goto('http://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'user123');
  await page.fill('input[name="password"]', 'test123');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="transfer.htm"]');
  await page.fill('#amount', '500');
  await page.selectOption('#fromAccountId', '30438');
  await page.selectOption('#toAccountId', '30549');
  await page.click('input[value="Transfer"]');

  await expect(page.locator('#rightPanel')).toContainText('Transfer Complete!');
});