import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PackListPage extends BasePage {
    private page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    //selectors
    public orderManagementSideBar = `//div[@role='button' and contains(@class, 'p-panelmenu-header') and @aria-label='Order Management']`;
    public packListSideBar = `(//a[@href='#/admin/order/pack-list']//span[text()='Pack List'])[1]`;
    public searchBar = `//input[contains(@class, 'search-input')]`;
    public filterButton = `//span[contains(@class, 'p-button-label') and text()='Filters']`;
    public warehouseTypeFilter = `//span[contains(text(), 'Warehouse Type')]`;
    public statusFilter = `//span[contains(text(), 'Status')]`;
    public filterApplyButton = `//span[text()='Apply']`;
    public filterClearButton = `//span[text()='Clear']`;
    public packListPage = `//span[@class='ml-2' and text()='Pack List']`;
    public status = ``;
    public viewIcon = ``;
    public packListDetailsPage = ``;
    //methods
    public async clickOnOrderManagementSubMenu() {
        await this.browserActions.click(this.orderManagementSideBar);
    }
    public async clickOnPackListSideBar() {
        await this.browserActions.click(this.packListSideBar);
    }
    public async clickOnSearchBar(value: string) {
        await this.browserActions.inputText(this.searchBar, value);
    }
    public async clickOnFilterButton() {
        await this.browserActions.click(this.filterButton);
    }
    public async clickOnWarehouseTypeFilter(warehouseTypeFilter: string) {
        await this.browserActions.click(this.warehouseTypeFilter);
        const warehouseTypeOption = `//label[contains(@class, 'p-checkbox-label') and contains(text(), '${warehouseTypeFilter}')]`;
        await this.browserActions.click(warehouseTypeOption);
    }
    public async clickOnStatusFilter(statusFilter: string) {
        await this.browserActions.click(this.statusFilter);
        const statusOption = `//label[contains(@class, 'p-checkbox-label') and normalize-space(text())='${statusFilter}']`;
        await this.browserActions.click(statusOption);
    }
    public async clickOnFilterApplyButton() {
        await this.browserActions.click(this.filterApplyButton);
    }
    public async clickOnFilterClearButton() {
        await this.browserActions.click(this.filterClearButton);
    }
    public async isPackListPageDisplayed() {
        return await this.page.waitForSelector(this.packListPage, { state: 'visible' });
    }
    public async clickOnStatus(status: string) {
        await this.browserActions.click(this.status);
        const statusOption = `//span[contains(@class, 'ng-star-inserted') and normalize-space(text())='${status}']`;
        await this.browserActions.click(statusOption);
    }
    public async clickOnViewButton() {
        await this.browserActions.click(this.viewIcon);
    }
    public async isPackListDetailsPageDisplayed() {
        return await this.page.waitForSelector(this.packListDetailsPage, { state: 'visible' });
    }
}