import { expect, test } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { BasePage } from '../../src/pages/basePage';
import { Users } from '../../src/data/users';
import { LoginLocators } from '../../src/locators/login.locators';


test.describe('Test de Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
    await loginPage.goWeb('/'); 
    await loginPage.goLogin();
   
  });

  test('Test de Login exitoso', async ({ page }) => {
    await loginPage.login(Users.validUser.email, Users.validUser.password);
    await expect(page.getByText(Users.validUser.email)).toBeVisible();
    console.log("Se realizo correctamente el login.");
  });

  
  test('Test de comprobar boton Log out', async ({ page }) => {
    await loginPage.login(Users.validUser.email, Users.validUser.password);
    await expect(page.locator(LoginLocators.logoutLink)).toBeVisible();
    console.log("No se observa el botón LOG OUT.");
  });


  test('Email vacío', async ({ page }) => {
    await loginPage.login(Users.emptyEmail.email, Users.emptyEmail.password);
    await expect(page.getByText(/No customer account found/i)).toBeVisible();
    console.log("El campo email se encuentra vacío.");
  });

  test('Password vacío', async ({ page }) => {
    await loginPage.login(Users.emptyPassword.email, Users.emptyPassword.password);
    await expect(page.getByText(/The credentials provided are incorrect/i)).toBeVisible();
    console.log("El campo password se encuentra vacío.");
  });

  
  test('Ambos vacíos', async ({ page }) => {
    await loginPage.login(Users.emptyUser.email, Users.emptyUser.password);
   await expect(page.getByText(/No customer account found/i)).toBeVisible();
    console.log("Los campos email y password se encuentran vacíos.");
  });

  test('Email con formato inválido', async ({ page }) => {
    await loginPage.login(Users.errorEmail.email, Users.errorEmail.password);
    await expect(page.getByText(/Please enter a valid email address./i)).toBeVisible();
    console.log("El email no tiene el formato correcto.");
  });

  
  test('Password incorrecta', async ({ page }) => {
    await loginPage.login(Users.errorPassword.email, Users.errorPassword.password);
    await expect(page.getByText(/The credentials provided are incorrect/i)).toBeVisible();
    console.log("La password no tiene el formato correcto.");
  });


  test('Email no registrado', async ({ page }) => {
    await loginPage.login(Users.noRegisEmail.email, Users.noRegisEmail.password);
    await expect(page.getByText(/No customer account found/i)).toBeVisible();
    console.log("El email no está registrado.");
  });

  
});