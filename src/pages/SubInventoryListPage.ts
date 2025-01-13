import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SubInventoryListPage extends BasePage {
  private page: Page;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public warehouseCardName = '//span[@class="warehouse-title" and normalize-space(text())="Supriya1"]';
  public subInventorySidebar = 'a[href="#/admin/warehouse/subinventory"]';
  public subInventoryPage = '//span[@class="ml-2" and normalize-space(text())="Sub Inventory"]';
  public subInventoryList = '.table-parents .sub-inventory-table';
  public subInventoryAddButton = '//span[@class="p-button-label" and normalize-space(text())="Add"]';
  public subInventoryNameInput = '//input[@id="firstname2" and @type="text" and @placeholder="Enter sub-inventory name" and @formcontrolname="name" and @name="name"]';
  public descriptionInput = '//textarea[@id="inventoryDetails" and @formcontrolname="description" and @placeholder="Enter description" and @name="inventoryDetails"]';
  public subInventoryTypeSelect = '//p-dropdown[@placeholder="Select sub-inventory type"]';
  public capacityInput = '//*[@formcontrolname="capacity"]';
  public dimensionSelect = '//span[@aria-label="Select unit"]';
  public lengthInput = '//input[@type="number" and @placeholder="Length" and @formcontrolname="length" and @name="length"]';
  public widthInput = '//input[@type="number" and @placeholder="Width" and @formcontrolname="width" and @name="Width"]';
  public heightInput = '//input[@type="number" and @placeholder="Height" and @formcontrolname="height" and @name="height"]';
  public statusSelect = '//span[@role="combobox" and normalize-space(text())="Select status"]';
  public temperatureControlledSelect = '//span[@role="combobox" and normalize-space(text())="Select temperature control"]';
  public addButton = '//div[@class="field col-12 md:col-2"]//button[@type="submit" and normalize-space(text())="Add"]';
  public backButton = '//button[@type="button" and normalize-space(text())="Back"]';
  public successMessage = '';
  public editSubInventoryButton = '//i[contains(@class, "pi-pencil")]';
  public updateButton = 'button[type="submit"]';
  public deleteButton = 'i[_ngcontent-ng-c435294142].pi.pi-trash';

  // Methods

  public async clickWarehouseCardName(): Promise<void> {
    await this.browserActions.click(this.warehouseCardName);
  }

  public async clickSubInventorySidebar(): Promise<void> {
    await this.browserActions.click(this.subInventorySidebar);
  }

  public async clickSubInventoryPage(): Promise<void> {
    await this.browserActions.click(this.subInventoryPage);
  }

  public async clickSubInventoryList(): Promise<void> {
    await this.browserActions.waitForElement(this.subInventoryList, 5000);
  }

  public async clickSubInventoryAddButton(): Promise<void> {
    await this.browserActions.click(this.subInventoryAddButton);
  }

  public async enterSubInventoryName(name: string): Promise<void> {
    await this.browserActions.inputText(this.subInventoryNameInput, name);
  }

  public async enterDescription(description: string): Promise<void> {
    await this.browserActions.inputText(this.descriptionInput, description);
  }

  public async selectSubInventoryType(type: string): Promise<void> {
    await this.browserActions.click(this.subInventoryTypeSelect);
   // await this.browserActions.pause(2000);
    //await this.browserActions.keys('ArrowDown');
   // await this.browserActions.keys('Enter');
  }

  public async enterCapacity(capacity: string): Promise<void> {
    await this.browserActions.inputText(this.capacityInput, capacity);
  }

  public async selectDimension(dimension: string): Promise<void> {
    await this.browserActions.scrollToElement(this.dimensionSelect);
    await this.browserActions.click(this.dimensionSelect);
   // await this.browserActions.pause(2000);
    //await this.browserActions.keys('ArrowDown');
    //await this.browserActions.keys('Enter');
  }

  public async enterLength(length: string): Promise<void> {
    await this.browserActions.inputText(this.lengthInput, length);
  }

  public async enterWidth(width: string): Promise<void> {
    await this.browserActions.inputText(this.widthInput, width);
  }

  public async enterHeight(height: string): Promise<void> {
    await this.browserActions.inputText(this.heightInput, height);
  }

  public async selectStatus(status: string): Promise<void> {
    await this.browserActions.click(this.statusSelect);
  //  await this.browserActions.pause(2000);
   // await this.browserActions.keys('ArrowDown');
    //await this.browserActions.keys('ArrowUp');
    //await this.browserActions.keys('Enter');
  }

  public async selectTemperatureControlled(temperatureControlled: string): Promise<void> {
    await this.browserActions.click(this.temperatureControlledSelect);
  //  await this.browserActions.pause(2000);
   // await this.browserActions.keys('ArrowDown');
   // await this.browserActions.keys('Enter');
  }

  public async clickAddButton(): Promise<void> {
    await this.browserActions.click(this.addButton);
  }

  public async clickBackButton(): Promise<void> {
    await this.browserActions.click(this.backButton);
  }

  public async isSubInventoryListDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.subInventoryList);
  }

  public async successMessageForAddSubInventory(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.successMessage);
  }

  public async clickEditSubInventoryButton(): Promise<void> {
    await this.browserActions.click(this.editSubInventoryButton);
  }

  public async clickUpdateButton(): Promise<void> {
    await this.browserActions.click(this.updateButton);
  }

  public async clickDeleteButton(): Promise<void> {
    await this.browserActions.click(this.deleteButton);
  }

  public async searchSubInventory(subInventoryName: string): Promise<void> {
    const searchInput = 'input.search-input';
    await this.browserActions.inputText(searchInput, subInventoryName);
  }

  public async filterSubInventoryType(type: string): Promise<void> {
    const filterButton = 'button.p-button span.p-button-icon.pi-filter';
    await this.browserActions.click(filterButton);
    await this.browserActions.click(this.subInventoryTypeSelect);
 //   await this.browserActions.pause(2000);
    const option = `//label[contains(text(), '${type}')]`;
    await this.browserActions.click(option);
  }

  public async filterStatus(status: string): Promise<void> {
    const filterButton = 'button.p-button span.p-button-icon.pi-filter';
    await this.browserActions.click(filterButton);
    await this.browserActions.click(this.statusSelect);
    //await this.browserActions.pause(2000);
    const statusOption = `//label[contains(text(), '${status}')]`;
    await this.browserActions.click(statusOption);
  }
}

