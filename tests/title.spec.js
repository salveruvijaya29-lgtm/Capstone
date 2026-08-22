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


test('successful login', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await page.fill('#username', 'practice');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/secure/);
});

test('failed login', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('button[type="submit"]');
  await expect(page.locator('.flash.error')).toBeVisible();
});




