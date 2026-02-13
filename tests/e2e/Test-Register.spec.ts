import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('pedro');
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).fill('gonzalez');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('pedro123gonzale@gmail.com');
  await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('pedro123');
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('pedro123');
  await page.getByRole('button', { name: 'Register' }).click();
});