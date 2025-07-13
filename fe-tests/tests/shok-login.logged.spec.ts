import { expect } from "@playwright/test";
import { test } from "../fixtures/index";

test.use({ storageState: './tests/setup/authorization.json' });

test.describe('Элементы страницы', () => {
    test('Проверка элементов страницы', async ({ profilePage }) => {
        await test.step('Проверка фотографии пользователя', async () => {
            await expect(profilePage.profilePhoto).toBeVisible();
        });
        await test.step('Проверка имени пользователя', async () => {
            await expect(profilePage.profileName).toBeVisible();
        });
        await test.step('Проверка статуса пользователя', async () => {
            await expect(profilePage.profileStatus).toBeVisible();
        });
        await test.step('Проверка кнопки редактирования профиля', async () => {
            await expect(profilePage.editProfileButton).toBeVisible();
        });
        await test.step('Проверка фотографий пользователя', async () => {
            await expect(profilePage.firstPhoto).toBeVisible();
            await expect(profilePage.secondPhoto).toBeVisible();
            await expect(profilePage.thirdPhoto).toBeVisible();
            await expect(profilePage.fourthPhoto).toBeVisible();
        });
        await test.step('Проверка кнопки выхода', async () => {
            await expect(profilePage.logoutButton).toBeVisible();
        });
    });
});