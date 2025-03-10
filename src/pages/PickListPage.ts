import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PickListPage extends BasePage {
    private page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    //selectors
    public orderManagementSideBar = `//div[@role='button' and contains(@class, 'p-panelmenu-header') and @aria-label='Order Management']`;
    public pickListSideBar = `//span[contains(@class, 'p-menuitem-text') and text()='Pick List']`;
    public searchBar = `//input[@type='text' and contains(@placeholder, 'Search...') and contains(@class, 'search-input')]`;
    public filterButton = `//button[@type='button' and contains(@class, 'p-button') and .//span[text()='Filters']]`;
    public warehouseTypeFilter = `//span[normalize-space(text())='Warehouse Type']`;
    public statusFilter = `//span[text()='Status']`;
    public filterApplyButton = `//span[@class='p-button-label' and text()='Apply']`;
    public filterClearButton = `//span[@class='p-button-label' and text()='Clear']`;
    public pickListPage = `//span[@class='ml-2' and text()='Pick List']`;
    public filterstatus = `//tr[td//span[contains(text(), '$')]]//span[@role='combobox' and text()='Processing']`;
    public viewIcon = `//button[contains(@class, 'dropdown-item') and .//i[contains(@class, 'pi-eye')]]`;
    public pickListDetailsPage = `//span[@class='ml-2' and text()='Items Details']`;
    public status = `(//span[@role='combobox' and contains(text(), 'Pending')])[1]`;
    //methods
    public async clickOnOrderManagementSubMenu() {
        await this.browserActions.click(this.orderManagementSideBar);
    }
    public async clickOnPickListSideBar() {
        await this.browserActions.click(this.pickListSideBar);
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
    public async isPickListPageDisplayed() {
        return await this.page.waitForSelector(this.pickListPage, { state: 'visible' });
    }
    public async clickOnStatus(status: string) {
        await this.browserActions.click(this.status);
        const statusOption = `//p-dropdownitem//span[text()='${status}']`;
        await this.browserActions.click(statusOption);
        const yesButton = `//button[contains(@class, 'button_yes') and normalize-space(.)='Yes']`;
        await this.browserActions.click(yesButton);
    }
    public async clickOnViewIcon() {
        await this.browserActions.click(this.viewIcon);
    }
    public async isPickListDetailsPageDisplayed() {
        return await this.page.waitForSelector(this.pickListDetailsPage, { state: 'visible' });
    }
}