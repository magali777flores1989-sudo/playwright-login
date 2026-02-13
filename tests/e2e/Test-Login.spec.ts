// CAMBIO DE PRUEBA MAGALI
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.locator('#login2').click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('flores123');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('flores123');
  await page.getByRole('button', { name: 'Log in' }).click();
});