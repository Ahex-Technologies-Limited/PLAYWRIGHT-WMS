import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ReplenishmentPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
    }
    // Selectors
    public operationsSideBar=`//span[contains(@class, 'p-menuitem-text') and text()='Operations']`;
    public replenishmentsSideBar=`//li[@role="treeitem" and @aria-label="Replenishments"]`;
    public addReplenishmentButton=`//button[span[@class="p-button-label"][text()="Add"]]`;
    public sku=`//p-dropdown[@formcontrolname="sku"]`;
    public replenishQuantity=`//input[@formcontrolname="reorder_quantity"]`;
    public expectedDeliveryDate=`//p-calendar[@formcontrolname="expected_delivery_date"]`;
    public addButton=`//button[contains(@class, 'button_add') and normalize-space(text())='Add']`;
    public backButton=`//button[contains(@class, 'button_back') and normalize-space(text())='Back']`;
    public editButton=`(//button[i[contains(@class, 'pi-pencil')]])[2]`;
    public updateButton=`//button[contains(@class, 'button_add') and normalize-space(text())='Update']`;
    public viewButton=`(//button[i[contains(@class, 'pi-eye')]])[1]`;
    public searchBar=`//input[contains(@class, 'search-input')]`;
    public statusFilter=`//span[contains(text(), 'Status')]`;
    public applyFilterButton=`//button[span[text()='Apply']]`;
    public clearFilterButton=`//button[span[text()='Clear']]`;
    public replenishmentDetailspage=`//span[contains(text(), 'Details Replenishment')]`
    public replenishmentListPage=`//span[contains(@class, 'ml-2') and text()='Replenishment']`;
    public filterButton=`//button[span[text()='Filters']]`;
    //methods
    public async clickOnOperationsSideBar() {
        await this.browserActions.click(this.operationsSideBar);
    }
    public async clickOnReplenishmentsSideBar() {
        await this.browserActions.click(this.replenishmentsSideBar);
    }
    public async clickOnAddReplenishmentButton() {
        await this.browserActions.click(this.addReplenishmentButton);
    }
    public async selectSKU(value: string) {
        await this.browserActions.click(this.sku);
        await this.browserActions.waitForTimeout(2000);
        const skuOption =`//span[text()='${value}']`;
        await this.browserActions.click(skuOption);
       
    }
    public async inputReplenishmentQuantity(value: string) {
        await this.browserActions.inputText(this.replenishQuantity, value);
    }
    public async selectExpectedDeliveryDate(value: string) {
        await this.browserActions.click(this.expectedDeliveryDate);
        await this.browserActions.waitForTimeout(2000);
        const expectedDeliveryDateOption = `//td[@aria-label='${value}']`;
        await this.browserActions.click(expectedDeliveryDateOption);
    }
    public async clickOnAddButton() {
        await this.browserActions.click(this.addButton);
    }
    public async clickOnBackButton() {
        await this.browserActions.click(this.backButton);
    }
    public async clickOnEditButton() {
        await this.browserActions.click(this.editButton);
    }
    public async clickOnUpdateButton() {
        await this.browserActions.click(this.updateButton);
    }
    public async clickOnViewButton() {
        await this.browserActions.click(this.viewButton);
    }
    public async enterOnSearchBar(value: string) {
        await this.browserActions.inputText(this.searchBar, value);
    }
    public async clickOnStatusFilter(value: string) {
        await this.browserActions.click(this.statusFilter);
        const statusOption = `//label[contains(text(), '${value}')]`;
        await this.browserActions.click(statusOption);
    }
    public async clickOnApplyFilterButton() {
        await this.browserActions.click(this.applyFilterButton);
    }
    public async clickOnClearFilterButton() {
        await this.browserActions.click(this.clearFilterButton);
    }
    public async isReplenishmentDetailsPageDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.replenishmentDetailspage);
    }
    public async isReplenishmentListPageDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.replenishmentListPage);
    }
    public async clickOnFilterButton() {
        await this.browserActions.click(this.filterButton);
    }


}