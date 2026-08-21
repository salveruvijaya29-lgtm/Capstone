// @ts-check
const { test, expect } = require('@playwright/test');
const formData = require('../helper/formData.json');

test('form submission with valid data', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/form-validation');

  await page.fill('#validationCustom01', formData.contactName);
  await page.fill('[name="contactnumber"]', formData.contactNumber);
  await page.fill('[name="pickupdate"]', formData.pickupDate);
  await page.selectOption('#validationCustom04', formData.paymentMethod);

  await page.click('button[type="submit"]');
//comment
  await expect(page.locator('.valid-feedback').first()).toBeVisible();
});


