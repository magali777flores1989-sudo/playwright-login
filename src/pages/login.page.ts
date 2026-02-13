import { BasePage } from "./basePage";
import { LoginLocators } from "../locators/login.locators";
import { Page, Locator } from "@playwright/test";

export class LoginPage extends BasePage {

    private readonly email: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
   

    constructor(page: Page) {
        super(page);
        this.email = page.locator(LoginLocators.email);
        this.password = page.locator(LoginLocators.password);
        this.loginButton = page.locator(LoginLocators.loginButton);
       
    }

    
    async goLogin() {
        await this.page.getByRole('link', { name: 'Log in' }).click();
    }

    async login(email: string, password: string) {
        await this.fillField(LoginLocators.email, email);
        await this.fillField(LoginLocators.password, password);
        await this.clickOn(LoginLocators.loginButton);
    }
    

    async closeLogin() {
        await this.page.getByRole('link', { name: 'Log out' }).click();
    }


   

 
    

}