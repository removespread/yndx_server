import { Page, Locator } from '@playwright/test';

export class ShokProfilePage {
    public profilePhoto: Locator;
    public profileName: Locator;
    public profileStatus: Locator;
    public editProfileButton: Locator;
    public firstPhoto: Locator;
    public secondPhoto: Locator;
    public thirdPhoto: Locator;
    public fourthPhoto: Locator;
    public logoutButton: Locator;

    constructor(public readonly page: Page) {
        this.profilePhoto = this.page.locator('div[data-expoimage="true"]');
        this.profileName = this.page.locator('div[xpath="1"]');
        this.profileStatus = this.page.locator('div[class="css-146c3p1 r-1khnkhu r-15d164r r-ubezar"]');
        this.editProfileButton = this.page.locator('user-edit-profile-button');
        this.firstPhoto = this.page.getByTestId('gallery-item-0');
        this.secondPhoto = this.page.getByTestId('gallery-item-1');
        this.thirdPhoto = this.page.getByTestId('gallery-item-2');
        this.fourthPhoto = this.page.getByTestId('gallery-item-3');
        this.logoutButton = this.page.getByTestId('user-logout-button');
    }

    public async open() {
        
    }

}
