import { ShokMainPage } from "./ShokMainPage";
import { ShokLoginPage } from "./ShokLoginPage";
import { test as base } from "@playwright/test";
import { ShokRenamePage } from "./ShokRenamePage";
import { ShokProfilePage } from "./ShokProfilePage";

type MyFixtures = {
    mainPage: ShokMainPage;
    loginPage: ShokLoginPage;
    renamePage: ShokRenamePage;
    profilePage: ShokProfilePage;
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
    },
    renamePage: async ({ page }, use) => {
        const renamePage = new ShokRenamePage(page);
        await renamePage.open();
        await use(renamePage);
    },
    profilePage: async ({ page }, use) => {
        const profilePage = new ShokProfilePage(page);
        await profilePage.open();
        await use(profilePage);
    }
    
});