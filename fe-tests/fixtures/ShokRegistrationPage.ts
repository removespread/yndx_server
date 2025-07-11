import { Page, Locator } from '@playwright/test';

export class ShokRegistrationPage {
    public title: Locator;
    public emailInput: Locator;
    public passwordInput: Locator;
    public ageInput: Locator;
    public registerButton: Locator;
    public backButton: Locator;
    public emailEmptyError: Locator;
    public passwordEmptyError: Locator;
    public ageEmptyError: Locator;
    public emailInvalidError: Locator;
    public passwordInvalidError: Locator;
    public ageInvalidError: Locator;

    constructor(public readonly page: Page) {
        this.title = this.page.getByText("Регистрация в ШОКе", { exact: true });
        this.emailInput = this.page.getByTestId("register-email-input");
        this.passwordInput = this.page.getByTestId("register-password-input");
        this.ageInput = this.page.getByTestId("register-age-input");
        this.registerButton = this.page.getByTestId("register-submit-button");
        this.backButton = this.page.getByTestId("register-back-button");
        this.emailEmptyError = this.page.getByText("Введите email");
        this.passwordEmptyError = this.page.getByText("Введите пароль");
        this.ageEmptyError = this.page.getByText("Введите возраст");
        this.emailInvalidError = this.page.getByText("Неправильный email-адрес");
        this.passwordInvalidError = this.page.getByText("Пароль должен содержать минимум 6 символов");
        this.ageInvalidError = this.page.getByText("Возраст должен быть числом");
    }

    public async open() {
        await this.page.goto("/register");
    }

    public async fillEmailInput(email: string) {
        await this.emailInput.click();
        await this.emailInput.fill(email);
    }

    public async fillPasswordInput(password: string) {
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
    }

    public async fillAgeInput(age: string) {
        await this.ageInput.click();
        await this.ageInput.fill(age);
    }

    public async clickRegisterButton() {
        await this.registerButton.click();
    }

    public async clickBackButton() {
        await this.backButton.click();
    }
}