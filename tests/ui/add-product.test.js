const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('https://martnymihailov-exam.onrender.com/');
    const form = await page.$('input');
    expect(form).toBeTruthy();
  });
  