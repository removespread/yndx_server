import { Page, Locator } from '@playwright/test';

export class ShokRenamePage {
    public title: Locator;
    public nameInput: Locator;
    public saveButton: Locator;
    public cancelButton: Locator;

    constructor(public readonly page: Page) {
        this.title = this.page.getByText("Edit Profile", { exact: true });
        this.nameInput = this.page.getByTestId("edit-name-input");
        this.saveButton = this.page.getByTestId("edit-save-button");
        this.cancelButton = this.page.getByTestId("edit-cancel-button");
    }

    public async open() {
        await this.page.goto('/edit');
    }

    public async fillNameInput(name: string) {
        await this.nameInput.click();
        await this.nameInput.fill(name);
    }

    public async clickSaveButton() {
        await this.saveButton.click();
    }

    public async clickCancelButton() {
        await this.cancelButton.click();
    }
}
