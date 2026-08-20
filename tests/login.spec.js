// @ts-check
const { test, expect } = require('@playwright/test');

test('login with valid credentials', async ({ page }) => {
  const username = process.env.LOGIN_USERNAME || 'practice';
  const password = process.env.LOGIN_PASSWORD || 'SuperSecretPassword!';

  await page.goto('https://practice.expandtesting.com/login');

  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/secure/);
  await expect(page.locator('h1')).toContainText('Secure Area');
});
