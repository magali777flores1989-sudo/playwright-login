import { Page, expect } from '@playwright/test';

    export class BasePage {
        protected readonly page: Page;

        constructor(page: Page) {
            this.page = page;
        }

        async goWeb(url: string) {
            await this.page.goto(url);
        }

        async clickOn(selector: string) {
            await this.page.locator(selector).click();
        }

        async checkRadio(selector: string) {
            await this.page.locator(selector).check();
        }

        async fillField(selector: string, value: string) {
            await this.page.locator(selector).fill(value);
        }

        async expectVisible(selector: string) {
            await expect(this.page.locator(selector)).toBeVisible();
        }

        async expectText(selector: string, text: string) {
            await expect(this.page.locator(selector)).toHaveText(text);
        }
    }