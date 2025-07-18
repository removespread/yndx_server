export class ProfilePage {
    private readonly browser: WebdriverIO.Browser;

    readonly selectors = {
        logoutButton: '[data-testid="user-logout-button"]',
        editButton: '[data-testid="user-edit-profile-button"]',
        profileStats: '[class="css-175oi2r r-18u37iz r-a2tzq0 r-156q2ks r-15m1z73 r-u9wvl5"]',
        profileStatus: '[class="css-146c3p1 r-1khnkhu r-15d164r r-ubezar"]',
        header: '[class="css-175oi2r r-1habvwh r-18u37iz r-1wtj0ep r-3pj75a r-13qz1uu r-1yflyrw r-1ygmrgt"]'
    }

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser;
    }

    get editButton() {
        return this.browser.$(this.selectors.editButton);
    }

    get logoutButton() {
        return this.browser.$(this.selectors.logoutButton);
    }
}