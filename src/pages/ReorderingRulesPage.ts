import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ReorderingRulesPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
    }
    // Selectors
    public operationsSidebar=`//span[contains(@class, 'p-menuitem-text') and text()='Operations']`;
    public reorderingRulesSidebar=`//span[contains(@class, 'p-menuitem-text') and text()='Reordering rules']`;
    public reorderingRulesList=`//li[a//span[text()='Reordering Rules']]`;
    public addReorderingRuleButton=`//button[contains(@class, 'button_add')]//span[contains(text(), 'Add')]`;
    public sku=`//p-dropdown[@formcontrolname='sku']`;
    public catagory=``;
    public subCatagory=``;
    public uom=``;
    public reorderQuantity=`//input[@formcontrolname='reorder_quantity']`;
    public reorderPoint=`//input[@formcontrolname='reorder_point']`;
    public safetyStockLevel=`//input[@formcontrolname='safety_stock_level']`;
    public maxStocklevel=`//input[@formcontrolname='max_stock_level']`;
    public automaticorderplacement=`//p-dropdown[@formcontrolname='automatic_order_placement']//div[@class='p-dropdown-trigger']`;
    public addButton=`//button[contains(@class, 'button_add')]`;
    public successMessageAfteraddingReorderingRule=`//div[contains(@class, 'p-toast-detail') and text()='ReorderingRules added successfully']`;
    public editButton=`(//button[contains(@class, 'dropdown-item')]//i[contains(@class, 'pi-pencil')])[1]`;
    public updateButton=`//button[contains(@class, 'button_add') and contains(text(), 'Update')]`;
    public viewButton=`(//button[contains(@class, 'dropdown-item')]//i[contains(@class, 'pi-eye')])[1]`;
    public searchBar=`//input[contains(@class, 'search-input')]`;
    public filterButton=`//button[span[text()='Filters']]`;
    public statusFilter=`//li[span[text()='Status']]`;
    public applyFilterButton=`//span[text()='Apply']`;
    public clearFilterButton=`//span[text()='Clear']`;
    public reorderingRulesdetailsPage=`//span[text()='Details Reordering Rules']`;
    //Methods
    public async clickOnOperationsSideBar() {
        await this.browserActions.click(this.operationsSidebar);
    }
    public async clickOnReorderingRulesSideBar() {
        await this.browserActions.click(this.reorderingRulesSidebar);
    }
public async isReorderingRulesListDisplayed(): Promise<boolean> {
   return await this.browserActions.isElementDisplayed(this.reorderingRulesList);
}
    public async clickOnAddReorderingRuleButton() {
        await this.browserActions.click(this.addReorderingRuleButton);
    }
    public async clickOnUpdateButton() {
        await this.browserActions.click(this.updateButton);
    }
    public async clickOnViewButton() {
        await this.browserActions.click(this.viewButton);
    }
    public async enterOnSearchBar(value:string) {
        await this.browserActions.inputText(this.searchBar, value);
    }
    public async clickOnFilterButton() {
        await this.browserActions.click(this.filterButton);
    }
    public async clickOnStatusFilter(value: string) {
        await this.browserActions.click(this.statusFilter);
        const statusOption = `//label[contains(text(),'${value}')]`;
        await this.browserActions.click(statusOption);
    }
    public async clickOnApplyFilterButton() {
        await this.browserActions.click(this.applyFilterButton);
    }
    public async clickOnClearFilterButton() {
        await this.browserActions.click(this.clearFilterButton);
    }
    public async clickOnEditButton() {
        await this.browserActions.click(this.editButton);
    }
    public async isReorderingRulesDetailsPageDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.reorderingRulesdetailsPage);
    }
 
    public async selectSKU(value: string) {
        await this.browserActions.click(this.sku);
        await this.browserActions.waitForTimeout(2000);
        const skuOption = `//span[text()='${value}']`;

        await this.browserActions.click(skuOption);
    }
    public async enterReorderQuantity(value: string) {
        await this.browserActions.inputText(this.reorderQuantity, value);
    }
    public async enterReorderPoint(value: string) {
        await this.browserActions.inputText(this.reorderPoint, value);
    }
    public async enterSafetyStockLevel(value: string) {
        await this.browserActions.inputText(this.safetyStockLevel, value);
    }
    public async enterMaxStockLevel(value: string) {
        await this.browserActions.inputText(this.maxStocklevel, value);
    }
    public async selectAutomaticOrderPlacement(value: string) {
        await this.browserActions.click(this.automaticorderplacement);
        const option = `//li[@aria-label='${value}']`;
        await this.browserActions.click(option);
    }
    public async clickOnAddButton() {
        await this.browserActions.click(this.addButton);
    }
    public async issuccessMessageAfterAddingReorderingRuleDisplayed(): Promise<boolean> {
      return await this.browserActions.isElementDisplayed(this.successMessageAfteraddingReorderingRule);
    }

}
