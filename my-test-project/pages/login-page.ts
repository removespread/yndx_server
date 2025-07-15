import { ValidUserData } from "../auth/auth-data";

export class LoginPage {
    private readonly browser: WebdriverIO.Browser;

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser;
    }

    // SELECTORS

    // кнопка логина
    get loginButton() {
        return this.browser.$('[data-testid="login-submit-button"]');
    }

    // поле ввода email
    get emailInput() {
        return this.browser.$('[data-testid="login-email-input"]');
    }

    // поле ввода пароля
    get passwordInput() {
        return this.browser.$('[data-testid="login-password-input"]');
    }

    // сообщение об ошибке
    get errorMessage() {
        return this.browser.$('[class="css-146c3p1 r-howw7u r-1enofrn r-15d164r"]');
    }

    // метод для логина
    public async login({email, password}: {email: string, password: string}) {
        await this.browser.openAndWait("/login");

        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);

        await this.loginButton.click();
    }

    // метод для логина с дефолтными данными
    public async loginWithDefaultCredentials() {
        await this.login({email: ValidUserData.email, password: ValidUserData.password})
    }
}