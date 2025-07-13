import { Page, Locator } from '@playwright/test';

export class ShokProfilePage {
    public profilePhoto: Locator;
    public profileName: Locator;
    public profileYoungStatus: Locator;
    public profileOldStatus: Locator;
    public profileAdultStatus: Locator;
    public editProfileButton: Locator;
    public firstPhoto: Locator;
    public secondPhoto: Locator;
    public thirdPhoto: Locator;
    public fourthPhoto: Locator;
    public logoutButton: Locator;

    constructor(public readonly page: Page) {
        this.profilePhoto = this.page.getByTestId('user-avatar').getByRole('img')
        this.profileName = this.page.locator('div[class="css-146c3p1 r-vw2c0b r-15zivkp r-evnaw"]');
        this.profileYoungStatus = this.page.getByText('Ты молоденький котик');
        this.profileOldStatus = this.page.getByText('Ты старый котик');
        this.profileAdultStatus = this.page.getByText('Ты взрослый котик');
        this.editProfileButton = this.page.getByText('Edit Profile')
        this.firstPhoto = this.page.getByTestId('gallery-item-0');
        this.secondPhoto = this.page.getByTestId('gallery-item-1');
        this.thirdPhoto = this.page.getByTestId('gallery-item-2');
        this.fourthPhoto = this.page.getByTestId('gallery-item-3');
        this.logoutButton = this.page.getByTestId('user-logout-button');
    }

    public async open() {

        await this.page.goto("/");
    }

}
