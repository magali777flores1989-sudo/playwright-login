import { test} from '@playwright/test';
import { RegisterPage } from '../../src/pages/register.page';
import { BasePage } from '../../src/pages/basePage';
import { createUser } from '../../src/data/user';

test('Test de registro', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const base = new BasePage(page);
  const user = createUser();



  await base.goWeb('https://demowebshop.tricentis.com/');
  await registerPage.goRegisterFrom();
  await registerPage.clickMaleRadio();
  await registerPage.RegisterInfo(user);
  await registerPage.expectRegistration();


});