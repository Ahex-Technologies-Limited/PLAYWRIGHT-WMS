import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PoManagementPage extends BasePage {
    private page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    // Selectors
    public optionsSidebar = `//span[contains(@class, 'p-menuitem-text') and text()='Operations']`;
    public poManagementSidebar = `//span[contains(text(), 'PO Management')]`;
    public poList = `//span[text()='Po List']`;
    public searchBar = `//input[@placeholder='Search...']`;
    public AddPoButton = ` //button[@label='Add']`;
    public date = `//input[@placeholder='Select OrderDate' and contains(@class, 'p-inputtext')]`;
    public supplier = `//p-dropdown[@formcontrolname='supplier_id']`;
    public expectedDeliveryDate = `//input[@role='combobox' and @placeholder='Select']`;
    public sku = `//p-dropdown[@formcontrolname='sku']`;
    public perUnitPrice = `//input[@formcontrolname='price_per_unit']`;
    public reorderQuantity = `//input[@formcontrolname='quantity']`;
    public addItemLink = `//span[@data-pc-section='label' and normalize-space(text())='Add Item']`;
    public linkReplenishment = ``;
    public addButton = `//button[@type='submit' and contains(@class, 'button_add') and normalize-space(text())='Add']`;
    public backButton = `//button[@pbutton and normalize-space(text())='Back']`;
    public poViewIcons = `(//i[contains(@class, 'pi-eye')]/ancestor::button)[1]`;
    public viewDetails = `//span[contains(text(), 'PO Details')]`;
    public downloadpoButton = `//i[contains(@class, 'pi-download')]/ancestor::button`;
    public filtersButton = `//button[.//span[@data-pc-section='label' and normalize-space(text())='Filters']]`;
    public statusFilter = `//span[normalize-space(text())='Status']`;
    public applyFilterButton = `//button[@label='Apply']`;
    public clearFilterButton = `//button[@label='Clear']`;
    public successfullMessageAfterDownload = ``;
 

//methods
public async clickOnOptionsSidebar() {
    await this.browserActions.click(this.optionsSidebar);
}

public async clickOnPoManagementSideBar() {
    await this.browserActions.click(this.poManagementSidebar);
}

public async isPoListDisplayed():Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.poList);
}
public async clickonViewIcon(){
await this.browserActions.click(this.poViewIcons);
}

public async clickOnSearchBar(value:string) {
    await this.browserActions.click(this.searchBar);
    await this.browserActions.inputText(this.searchBar,value);
}

public async clickOnAddPoButton() {
    await this.browserActions.click(this.AddPoButton);
}

public async selectDate(value:string) {
    await this.browserActions.click(this.date);
    const dateElement = `//span[@data-date='${value}']`;
    await this.browserActions.click(dateElement);
}


public async selectSupplier(value: string) {
    await this.browserActions.click(this.supplier);
    await this.browserActions.waitForTimeout(2000);
    const supplierOption = `//span[text()='${value}']`;
    await this.browserActions.click(supplierOption);

}
public async selectDeliveryDate(value: string) {
    await this.browserActions.click(this.expectedDeliveryDate);
    await this.browserActions.waitForTimeout(2000); 
    // const expectedDeliveryDateOption = `//td[@aria-label='${value}']`;
    // await this.browserActions.click(expectedDeliveryDateOption);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
}

public async selectSKU(value: string) {
    await this.browserActions.click(this.sku);
    await this.browserActions.waitForTimeout(2000);
    const skuOption = `//span[text()='${value}']`;
    await this.browserActions.click(skuOption);
}

public async inputPerUnitPrice(value: string) {
    await this.browserActions.inputText(this.perUnitPrice, value);
}
public async inputReorderQuantity(value: string) {
    await this.browserActions.inputText(this.reorderQuantity, value);
}

public async clickOnAddItemLink() {
    await this.browserActions.click(this.addItemLink);
}

public async clickOnLinkReplenishment() {
    await this.browserActions.click(this.linkReplenishment);
}

public async clickOnAddButton() {
    await this.browserActions.click(this.addButton);
}

public async clickOnBackButton() {
    await this.browserActions.click(this.backButton);
}

public async isViewDetailspageDisplayed():Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.viewDetails);
}
public async clickOnDownloadPoButtons(){
    await this.browserActions.click(this.downloadpoButton);
}
public async clickOnFiltersButton(){
    await this.browserActions.click(this.filtersButton);
}

public async selectStatusFilter(value: string) {
    await this.browserActions.click(this.statusFilter);
    await this.browserActions.waitForTimeout(2000);
    const statusFilterOption = `//p-checkbox[label[normalize-space(text())='${value}']]`;
    await this.browserActions.click(statusFilterOption);
}
public async clickOnApplyFilterButton() {
    await this.browserActions.click(this.applyFilterButton);
}
public async clickOnClearFilterButton() {
    await this.browserActions.click(this.clearFilterButton);
}

}
