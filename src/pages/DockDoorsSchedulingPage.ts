import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DockDoorsSchedulingPage extends BasePage {
    private page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    //Selectors
    public dockDoorManagementSideBar = `//a[span[contains(text(), 'Dock Door Management')]]`;
    public dockdoorsSchedulingSideBar = `(//a[normalize-space(span/text())='Dock Doors Scheduling'])[1]`;
    public dockdoorsSchedulingPage = `//a[contains(@class, 'no-underline') and normalize-space(span/text())='Dock Doors Scheduling']`;

    //methods
    public async clickOnDockDoorManagementSubMenu() {
        await this.page.waitForSelector(this.dockDoorManagementSideBar);
        await this.page.click(this.dockDoorManagementSideBar);
    }
    public async clickOnDockDoorsSchedulingSubMenu() {
        await this.page.waitForSelector(this.dockdoorsSchedulingSideBar);
        await this.page.click(this.dockdoorsSchedulingSideBar);
    }
    public async isDockDoorsSchedulingPageDisplayed() {
        return await this.page.waitForSelector(this.dockdoorsSchedulingPage, { state: 'visible' });
    }


}