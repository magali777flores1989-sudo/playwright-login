import { expect, test } from '@playwright/test';
import { RegisterPage } from '../../src/pages/register.page';
import { Users } from '../../src/data/users'


test.describe('Registro de usuarios', () => {
  let registerPage: RegisterPage;


  test.beforeEach(async ({ page }) => {

    registerPage = new RegisterPage(page);
    await registerPage.goWeb('/');

    await registerPage.goRegisterFrom();

  });

  test('Test de Registro exitoso', async ({ page }) => {
    await registerPage.RegisterInfo(Users.createUser.fRadio, Users.createUser.firstName, Users.createUser.lastName, Users.createUser.email, Users.createUser.password, Users.createUser.confirmPassword);
    console.log("Se registro correctamente.");

  });

  test('Nombre vacío', async ({ page }) => {
    await registerPage.RegisterInfo(Users.nameVacio.fRadio, Users.nameVacio.firstName, Users.nameVacio.lastName, Users.nameVacio.email, Users.nameVacio.password, Users.nameVacio.confirmPassword);
    await expect(page.getByText(/First name is required./i)).toBeVisible();
    console.log("El campo nombre se encuentra vacío.");
  });

  test('El segundo nombre esta vacío', async ({ page }) => {
    await registerPage.RegisterInfo(Users.lastNameVacio.fRadio, Users.lastNameVacio.firstName, Users.lastNameVacio.lastName, Users.lastNameVacio.email, Users.lastNameVacio.password, Users.lastNameVacio.confirmPassword);
    await expect(page.getByText(/Last name is required./i)).toBeVisible();
    console.log("El campo segundo nombre se encuentra vacío.");
  });

  test('Email vacío', async ({ page }) => {
    await registerPage.RegisterInfo(Users.emailVacio.fRadio, Users.emailVacio.firstName, Users.emailVacio.lastName, Users.emailVacio.email, Users.emailVacio.password, Users.emailVacio.confirmPassword);
    await expect(page.getByText(/Email is required./i)).toBeVisible();
    console.log("El campo email se encuentra vacío.");
  });



  test('Email con formato inválido', async ({ page }) => {
    await registerPage.RegisterInfo(Users.emailErroneo.fRadio, Users.emailErroneo.firstName, Users.emailErroneo.lastName, Users.emailErroneo.email, Users.emailErroneo.password, Users.emailErroneo.confirmPassword);
    await expect(page.getByText(/Wrong email/i)).toBeVisible();
    console.log("El email no tiene el formato correcto.");
  });


  test('Password vacío', async ({ page }) => {
    await registerPage.RegisterInfo(Users.passwordVacio.fRadio, Users.passwordVacio.firstName, Users.passwordVacio.lastName, Users.passwordVacio.email, Users.passwordVacio.password, Users.passwordVacio.confirmPassword);
    await expect(page.getByText(/Password is required./i)).toBeVisible();
    console.log("El campo password se encuentra vacío.");
  });

  test('Confirmar Password vacío', async ({ page }) => {
    await registerPage.RegisterInfo(Users.repasswordVacio.fRadio, Users.repasswordVacio.firstName, Users.repasswordVacio.lastName, Users.repasswordVacio.email, Users.repasswordVacio.password, Users.repasswordVacio.confirmPassword);
    await expect(page.getByText(/Password is required./i)).toBeVisible();
    console.log("El campo confirma password se encuentra vacío.");
  });


  test('La password no coincide con Confirmar Password', async ({ page }) => {
    await registerPage.RegisterInfo(Users.passwordMach.fRadio, Users.passwordMach.firstName, Users.passwordMach.lastName, Users.passwordMach.email, Users.passwordMach.password, Users.passwordMach.confirmPassword);
    await expect(page.getByText(/The password and confirmation password do not match./i)).toBeVisible();
    console.log("Las passwords no coinciden.");
  });



  test('El email ya está registrado', async ({ page }) => {
    await registerPage.RegisterInfo(Users.emailRegis.fRadio, Users.emailRegis.firstName, Users.emailRegis.lastName, Users.emailRegis.email, Users.emailRegis.password, Users.emailRegis.confirmPassword);
    await expect(page.getByText(/The specified email already exists|invalid/i)).toBeVisible();
    console.log("El email ya se encuentra registrado");
  });


});