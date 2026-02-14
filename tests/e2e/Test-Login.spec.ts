import { expect, test } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { BasePage } from '../../src/pages/basePage';
import { createUser } from '../../src/data/user';

const user = process.env.LOGIN_EMAIL!
const password = process.env.LOGIN_PASSWORD!

test.describe('Test de Login', () => {



  test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);
    await page.goto('https://demowebshop.tricentis.com/');

    await loginPage.goLogin();
    await loginPage.login(
      user,
      password
    );
  });


  test('Test de Login exitoso', async ({ page }) => {

    expect(page.getByText('nadia123@gmail.com')).toBeVisible();

  });


  test('Test de comprobar boton Log out', async ({ page }) => {

    expect(page.getByText('Log out')).toBeVisible();


  });


test('Test de comprobar elemento', async ({ page }) => {

    expect(page.locator("#topcartlink")).toBeVisible();


  });

});




