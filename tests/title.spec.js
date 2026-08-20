// @ts-check
const { test, expect } = require('@playwright/test');

test('verify page title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await expect(page).toHaveTitle(/Test Login/);
});

test('verify page url', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await expect(page).toHaveURL('https://practice.expandtesting.com/login');
});
