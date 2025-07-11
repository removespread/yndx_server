import { ShokMainPage } from "./ShokMainPage";
import { ShokLoginPage } from "./ShokLoginPage";
import { test as base } from "@playwright/test";

type MyFixtures = {
    mainPage: ShokMainPage;
    loginPage: ShokLoginPage;
}

export const test = base.extend<MyFixtures>({
    mainPage: async ({ page }, use) => {
        const mainPage = new ShokMainPage(page);
        await mainPage.open();
        await use(mainPage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new ShokLoginPage(page);
        await loginPage.open();
        await use(loginPage);
    }
});