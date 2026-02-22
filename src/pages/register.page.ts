import { BasePage } from "./basePage";
import { RegisterLocators}  from "../locators/register.locators"; 
import { Page, Locator, expect } from "@playwright/test";

export class RegisterPage extends BasePage {

    private readonly fRadio: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly password: Locator; 
    private readonly confirmPassword: Locator;
    private readonly registerButton: Locator;
    private readonly accesoLink: Locator;

    constructor(page: Page) {
        super(page);
        this.fRadio = page.locator(RegisterLocators.fRadio);
        this.firstName = page.locator(RegisterLocators.firstName);
        this.lastName = page.locator(RegisterLocators.lastName);
        this.email = page.locator(RegisterLocators.email);
        this.password = page.locator(RegisterLocators.password);
        this.confirmPassword = page.locator(RegisterLocators.confirmPassword);
        this.registerButton = page.locator(RegisterLocators.registerButton);
        this.accesoLink = page.locator(RegisterLocators.accesoLink);
    }   

    async goRegisterFrom() {
        await this.accesoLink.click();
    }

    async clickMaleRadio(){
        await this.checkRadio(RegisterLocators.fRadio);
    }

    async RegisterInfo(fRadio: string, firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
       await this.checkRadio(RegisterLocators.fRadio);
        await this.fillField(RegisterLocators.firstName, firstName);
        await this.fillField(RegisterLocators.lastName, lastName);
        await this.fillField(RegisterLocators.email, email);
        await this.fillField(RegisterLocators.password, password);
        await this.fillField(RegisterLocators.confirmPassword, confirmPassword);
        await this.clickOn(RegisterLocators.registerButton);


    }

    
    async expectRegistration() {
        await expect(this.page.locator(RegisterLocators.registerMessage)).toHaveText("Your registration completed");
    }

   
}