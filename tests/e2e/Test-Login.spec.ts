import { test} from '@playwright/test';
import {  LoginPage} from '../../src/pages/login.page';
import { BasePage } from '../../src/pages/basePage';
import { createUser } from '../../src/data/user';


test('Test de registro', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const base = new BasePage(page);
  const user = createUser();



  await base.goWeb('https://demowebshop.tricentis.com/');
  await loginPage.goLogin();
  await loginPage.login(
    process.env.LOGIN_EMAIL!,
    process.env.LOGIN_PASSWORD! 
  );
 
});


