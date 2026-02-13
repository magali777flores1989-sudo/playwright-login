import { BasePage } from "./basePage";
import { RegisterLocators}  from "../locators/register.locators"; 
import { Page, Locator, expect } from "@playwright/test";

export class RegisterPage extends BasePage {

    private readonly maleRadio: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly password: Locator; 
    private readonly confirmPassword: Locator;
    private readonly registerButton: Locator;

    constructor(page: Page) {
        super(page);
        this.maleRadio = page.locator(RegisterLocators.maleRadio);
        this.firstName = page.locator(RegisterLocators.firstName);
        this.lastName = page.locator(RegisterLocators.lastName);
        this.email = page.locator(RegisterLocators.email);
        this.password = page.locator(RegisterLocators.password);
        this.confirmPassword = page.locator(RegisterLocators.confirmPassword);
        this.registerButton = page.locator(RegisterLocators.registerButton);
    }   

    async goRegisterFrom() {
        await this.page.getByRole('link', { name: 'Register' }).click();
    }

    async clickMaleRadio(){
        await this.checkRadio(RegisterLocators.maleRadio);
    }

    async RegisterInfo(user: any) {
        await this.fillField(RegisterLocators.firstName, user.firstName);
        await this.fillField(RegisterLocators.lastName, user.lastName);
        await this.fillField(RegisterLocators.email, user.email);
        await this.fillField(RegisterLocators.password, user.password);
        await this.fillField(RegisterLocators.confirmPassword, user.confirmPassword);
        await this.clickOn(RegisterLocators.registerButton);


    }

    
    async expectRegistration() {
        await expect(this.page.locator(RegisterLocators.registerMessage)).toHaveText("Your registration completed");
    }

   
}