import { expect } from '@playwright/test';
import { test } from '../fixtures/index';
import { FakeAge, FakeEmail, FakePassword, FakeUserData, ValidUserData } from '../constants/userData';

test.describe('Элементы страницы', () => {
    test('Проверка элементов страницы', async ({ registrationPage }) => {
        await test.step('Проверка заголовка', async () => {
            await expect(registrationPage.title).toBeVisible();
        });
        await test.step('Проверка поля ввода email', async () => {
            await expect(registrationPage.emailInput).toBeVisible();
        });
        await test.step('Проверка плейсхолдера поля ввода email', async () => {
            await expect(registrationPage.emailInput).toHaveAttribute('placeholder', 'Email');
        });
        await test.step('Проверка поля ввода пароля', async () => {
            await expect(registrationPage.passwordInput).toBeVisible();
        });
        await test.step('Проверка плейсхолдера поля ввода пароля', async () => {
            await expect(registrationPage.passwordInput).toHaveAttribute('placeholder', 'Пароль');
        });
        await test.step('Проверка поля ввода возраста', async () => {
            await expect(registrationPage.ageInput).toBeVisible();
            await expect(registrationPage.ageInput).toHaveAttribute('placeholder', 'Возраст');
        });
        await test.step('Проверка кнопки регистрации', async () => {
            await expect(registrationPage.registerButton).toBeVisible();
            await expect(registrationPage.registerButton).toHaveText("Зарегистрироваться");
        });
        await test.step('Проверка кнопки назад', async () => {
            await expect(registrationPage.backButton).toBeVisible();
            await expect(registrationPage.backButton).toHaveText("Назад");
        });
    });
});

test.describe('Проверка негативных пользовательских сценариев', () => {
    test('Проверка регистрации с пустыми полями', async ({ registrationPage }) => {
        await test.step('Проверка регистрации с пустыми полями', async () => {
            await registrationPage.page.waitForTimeout(1000);
            await registrationPage.clickRegisterButton();
            await expect(registrationPage.emailEmptyError).toBeVisible();
            await expect(registrationPage.passwordEmptyError).toBeVisible();
            await expect(registrationPage.ageEmptyError).toBeVisible();
        });
    });
    test('Проверка регистрации с некорректным email', async ({ registrationPage }) => {
        await test.step('Проверка регистрации с некорректным email', async () => {
            await registrationPage.page.waitForTimeout(1000);
            await registrationPage.fillEmailInput("test");
            await registrationPage.clickRegisterButton();
            await expect(registrationPage.emailInvalidError).toBeVisible();
        });
    });
    test('Проверка регистрации с некорректным паролем', async ({ registrationPage }) => {
        await test.step('Проверка регистрации с некорректным паролем', async () => {
            await registrationPage.page.waitForTimeout(1000);
            await registrationPage.fillPasswordInput("12345");
            await registrationPage.clickRegisterButton();
            await expect(registrationPage.passwordInvalidError).toBeVisible();
        });
    });
    test('Проверка регистрации с некорректным возрастом', async ({ registrationPage }) => {
        await test.step('Проверка регистрации с некорректным возрастом', async () => {
            await registrationPage.page.waitForTimeout(1000);
            await registrationPage.fillAgeInput("test");
            await registrationPage.clickRegisterButton();
            await expect(registrationPage.ageInvalidError).toBeVisible();
        });
    });
    test('Проверка регистрации с заполненным email и паролем, но не заполненным возрастом', async ({ registrationPage }) => {
        await test.step('Проверка регистрации с заполненным email и паролем, но не заполненным возрастом', async () => {
            await registrationPage.page.waitForTimeout(1000);
            await registrationPage.fillEmailInput(FakeEmail);
            await registrationPage.fillPasswordInput(FakePassword);
            await registrationPage.clickRegisterButton();
            await expect(registrationPage.ageEmptyError).toBeVisible();
        });
    });
    test('Проверка регистрации с заполненным email и возрастом, но не заполненным паролем', async ({ registrationPage }) => {
        await test.step('Проверка регистрации с заполненным email и возрастом, но не заполненным паролем', async () => {
            await registrationPage.page.waitForTimeout(1000);
            await registrationPage.fillEmailInput(FakeEmail);
            await registrationPage.fillAgeInput(FakeAge);
            await registrationPage.clickRegisterButton();
            await expect(registrationPage.passwordEmptyError).toBeVisible();
        });
    });
    test('Проверка регистрации с заполненным паролем и возрастом, но не заполненным email', async ({ registrationPage }) => {
        await test.step('Проверка регистрации с заполненным паролем и возрастом, но не заполненным email', async () => {
            await registrationPage.page.waitForTimeout(1000);
            await registrationPage.fillPasswordInput(FakePassword);
            await registrationPage.fillAgeInput(FakeAge);
            await registrationPage.clickRegisterButton();
            await expect(registrationPage.emailEmptyError).toBeVisible();
        });
    });
});

test.describe('Проверка позитивных пользовательских сценариев', () => {
    test('Проверка регистрации с корректными данными', async ({ registrationPage }) => {
        await test.step('Проверка регистрации с корректными данными', async () => {
            await registrationPage.page.waitForTimeout(1000);
            await registrationPage.fillEmailInput(FakeUserData.email);
            await registrationPage.fillPasswordInput(FakeUserData.password);
            await registrationPage.fillAgeInput(FakeUserData.age);
            await registrationPage.clickRegisterButton();
        });
    });
});

