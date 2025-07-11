import { Page, Locator } from '@playwright/test';

export class ShokLoginPage {
    public title: Locator;
    public emailInput: Locator;
    public passwordInput: Locator;
    public loginButton: Locator;
    public backButton: Locator;
    public registrationButton: Locator;
    public errorEmailText: Locator;
    public errorPasswordText: Locator;

    constructor(public readonly page: Page) {
        this.title = this.page.getByText("Войти в ШОК", { exact: true });
        this.emailInput = this.page.getByTestId("login-email-input");
        this.passwordInput = this.page.getByTestId("login-password-input");
        this.loginButton = this.page.getByTestId("login-submit-button");
        this.backButton = this.page.getByTestId("login-back-button");
        this.registrationButton = this.page.getByTestId("login-register-button");
        this.errorEmailText = this.page.getByText("Введите email", { exact: true });
        this.errorPasswordText = this.page.getByText("Введите пароль", { exact: true });
    }

    public async open() {
        await this.page.goto('/login');
    }

    public async fillEmailInput(email: string) {
        await this.emailInput.click();
        await this.emailInput.fill(email);
    }

    public async fillPasswordInput(password: string) {
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
    }

    public async clickLoginButton() {
        await this.loginButton.click();
    }

    public async clickBackButton() {
        await this.backButton.click();
    }

    public async clickRegistrationButton() {
        await this.registrationButton.click();
    }

    public async Login(email: string, password: string) {
        await this.fillEmailInput(email);
        await this.fillPasswordInput(password);
        await this.clickLoginButton();
    }

}
