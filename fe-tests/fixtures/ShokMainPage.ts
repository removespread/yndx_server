import { Page, Locator } from '@playwright/test';

export class ShokMainPage {
    public title: Locator;
    public emailInput: Locator;
    public checkButton: Locator;
    public loginButton: Locator;

    constructor(public readonly page: Page) {
        this.title = this.page.getByText("Я в ШОКе", { exact: true });
        this.emailInput = this.page.getByTestId("main-email-input");
        this.checkButton = this.page.getByTestId("main-check-button");
        this.loginButton = this.page.getByTestId("main-login-button");
    }

    public async open() {
        await this.page.goto("/");
    }
}