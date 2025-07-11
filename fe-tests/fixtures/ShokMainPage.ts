import { Page, Locator } from '@playwright/test';

export class ShokMainPage {
    public title: Locator;
    public emailInput: Locator;
    public checkButton: Locator;
    public loginButton: Locator;
    public positiveResultText: Locator;
    public negativeResultText: Locator;
    public catGif: Locator;

    constructor(public readonly page: Page) {
        this.title = this.page.getByText("Я в ШОКе", { exact: true });
        this.emailInput = this.page.getByTestId("main-email-input");
        this.checkButton = this.page.getByTestId("main-check-button");
        this.loginButton = this.page.getByTestId("main-login-button");
        this.positiveResultText = this.page.getByText("Ты уже в ШОКе", { exact: true });
        this.negativeResultText = this.page.getByText("Ты еще не в ШОКе", { exact: true });
        this.catGif = this.page.locator('div[data-expoimage="true"]');
    }

    public async open() {
        await this.page.goto("/");
    }

    public async clickEmailInput() {
        await this.emailInput.click();
    }

    public async clickCheckButton() {
        await this.checkButton.click();
    }

    public async clickLoginButton() {
        await this.loginButton.click();
    }

    public async checkUser(email: string) {
        await this.clickEmailInput();
        await this.emailInput.fill(email);
        await this.clickCheckButton();
    }
}