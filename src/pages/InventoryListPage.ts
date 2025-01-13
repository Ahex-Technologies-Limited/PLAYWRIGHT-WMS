import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryListPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public inventoryList = '//span[contains(text(), "Inventory List") and contains(@class, "ml-2")]';
  public productManagementSubMenu = '//span[contains(text(), "Product Management") and contains(@class, "p-menuitem-text")]';
  public inventoryListSideBar = '//li[@role="treeitem" and @aria-label="Inventory List"]';
  public searchBar = '//input[@type="text" and contains(@class, "search-input") and @placeholder="Search..."]';
  public addInventoryButton = '//div[@class="flex gap-2 align-items-center"]//button[contains(@class, "p-button")]//span[text()="Add"]';
  public sku = '//p-dropdown[@placeholder="Select" and @formcontrolname="product_id"]';
  public shipmentId = '//input[@formcontrolname="shipment_number" and @placeholder="Enter"]';
  public quantity = '//input[@type="number" and @formcontrolname="quantity"]';
  public lotNumber = '//input[@type="text" and @formcontrolname="lot_number"]';
  public expiryDate = '//input[@role="combobox" and contains(@class, "p-inputtext")]';
  public cost = '//input[@formcontrolname="cost_price" and @type="number"]';
  public sellingPrice = '//input[@formcontrolname="sales_price" and @type="number"]';
  public removeButton = '//span[@data-pc-section="label" and text()="Remove"]';
  public addItem = '//span[@class="p-button-label ng-star-inserted" and text()="Add Item"]';
  public addButton = '//button[contains(@class, "button_add") and normalize-space(text())="Add"]';
  public backButton = '//button[contains(@class, "button_back") and normalize-space(text())="Back"]';
  public viewButton = '//tbody[@role="rowgroup"]/tr[1]/td[last()]/div//button[contains(@class, "dropdown-item")]/i[contains(@class, "pi-eye")]';
  public filterButton = '//button[span[contains(@class, "p-button-label") and text()="Filters"]]';
  public uomInFilter = '//li[contains(@class, "cursor-pointer") and span[text()="Uom"]]';
  public catagoryInFilter = '//li[contains(@class, "cursor-pointer") and span[text()="Category"]]';
  public applyButton = '//button[contains(@class, "button_add")]//span[text()="Apply"]';
  public clearButton = '//button[contains(@class, "button_clear")]//span[text()="Clear"]';
  public detailsInventoryPage = '//span[contains(text(), "Detail Inventory")]';
  public editInventoryDetails = '//tbody[@role="rowgroup"]/tr/td[last()]/div/button/i[contains(@class, "pi-pencil")]';
  public updateButton = '//div[contains(@class, "field")]/button[contains(text(), "Update")]';
  public backButtonInUpdatePage = '//div[contains(@class, "field")]/button[contains(text(), "Back")]';

  // Methods
  public async clickOnProductManagementSubMenu() {
    await this.browserActions.click(this.productManagementSubMenu);
  }

  public async clickOnInventoryListSideBar() {
    await this.browserActions.click(this.inventoryListSideBar);
  }

  public async clickOnAddInventoryButton() {
    await this.browserActions.click(this.addInventoryButton);
  }

  public async selectSku(sku: string) {
    await this.browserActions.click(this.sku);
    const skuOption = `//li[@role="option" and span[contains(text(), "${sku}")]]`;
    console.log(skuOption);
    await this.browserActions.click(skuOption);
  }

  public async enterShipmentId(shipmentId: string) {
    await this.browserActions.inputText(this.shipmentId, shipmentId);
  }

  public async enterQuantity(quantity: string) {
    await this.browserActions.inputText(this.quantity, quantity);
  }

  public async enterLotNumber(lotNumber: string) {
    await this.browserActions.inputText(this.lotNumber, lotNumber);
  }

  public async selectExpiryDate(expiryDate: string) {
    await this.browserActions.inputText(this.expiryDate, expiryDate);
  }

  public async enterCost(cost: string) {
    await this.browserActions.inputText(this.cost, cost);
  }

  public async enterSellingPrice(sellingPrice: string) {
    await this.browserActions.inputText(this.sellingPrice, sellingPrice);
  }

  public async clickRemoveButton() {
    await this.browserActions.click(this.removeButton);
  }

  public async clickAddItem() {
    await this.browserActions.click(this.addItem);
  }

  public async clickAddButton() {
    await this.browserActions.click(this.addButton);
  }

  public async clickBackButton() {
    await this.browserActions.click(this.backButton);
  }

  public async clickViewButton() {
    await this.browserActions.click(this.viewButton);
  }

  public async clickFilterButton() {
    await this.browserActions.click(this.filterButton);
  }

  public async selectUomInFilter(uom: string) {
    await this.browserActions.click(this.uomInFilter);
    const uomOption = `//label[contains(normalize-space(text()), "${uom}")]`;
    console.log(uomOption);
    await this.browserActions.click(uomOption);
  }

  public async selectCatagoryInFilter(catagory: string) {
    await this.browserActions.click(this.catagoryInFilter);
    const catagoryOption = `//label[contains(normalize-space(text()), "${catagory}")]`;
    console.log(catagoryOption);
    await this.browserActions.click(catagoryOption);
  }

  public async clickApplyButton() {
    await this.browserActions.click(this.applyButton);
  }

  public async clickClearButton() {
    await this.browserActions.click(this.clearButton);
  }

  public async clickDetailsInventoryPage() {
    await this.browserActions.click(this.detailsInventoryPage);
  }

  public async clickEditInventoryDetails() {
    await this.browserActions.click(this.editInventoryDetails);
  }

  public async isInventoryListPageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.inventoryList);
  }

  public async isDetailsInventoryPageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.detailsInventoryPage);
  }

  public async searchInventory(searchTerm: string) {
    await this.browserActions.inputText(this.searchBar, searchTerm);
  }

  public async clickUpdateButton() {
    await this.browserActions.click(this.updateButton);
  }

  public async clickBackButtonInUpdatePage() {
    await this.browserActions.click(this.backButtonInUpdatePage);
  }
}

