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
  public subInventoryList = `//span[@class='ml-2' and text()='Sub Inventory']`;
  public subInventoryAddButton = '//span[@class="p-button-label" and normalize-space(text())="Add"]';
  public subInventoryNameInput = '//input[@id="firstname2" and @type="text" and @placeholder="Enter sub-inventory name" and @formcontrolname="name" and @name="name"]';
  public descriptionInput = '//textarea[@id="inventoryDetails" and @formcontrolname="description" and @placeholder="Enter description" and @name="inventoryDetails"]';
  public subInventoryTypeSelect = `//span[@aria-label='Select sub-inventory type']`;
  public capacityInput = '//*[@formcontrolname="capacity"]';
  public measurementUnits = `//span[@aria-label='Select measurement Units']`;
  public dimensionSelect = `//span[@aria-label='Select  unit']`;
  public lengthInput = '//input[@type="number" and @placeholder="Length" and @formcontrolname="length" and @name="length"]';
  public widthInput = '//input[@type="number" and @placeholder="Width" and @formcontrolname="width" and @name="Width"]';
  public heightInput = '//input[@type="number" and @placeholder="Height" and @formcontrolname="height" and @name="height"]';
  public statusSelect = `//span[@role='combobox' and @aria-label='Select status']`;
  public temperatureControlledSelect = '//span[@role="combobox" and normalize-space(text())="Select temperature control"]';
  public addButton = '//div[@class="field col-12 md:col-2"]//button[@type="submit" and normalize-space(text())="Add"]';
  public backButton = '//button[@type="button" and normalize-space(text())="Back"]';
  public successMessage = '';
  public editSubInventoryButton = `(//i[contains(@class, "pi-pencil")])[1]`;
  public updateButton = 'button[type="submit"]';
  public deleteButton = `(//button[@type='button' and contains(@class, 'dropdown-item') and .//i[contains(@class, 'pi-trash')]])[1]`;

  // Methods

  public async clickWarehouseCardName(): Promise<void> {
    await this.browserActions.click(this.warehouseCardName);
  }

  public async clickSubInventorySidebar(): Promise<void> {
    // Using nth() method to select the first element
    await this.page.locator('a[href="#/admin/warehouse/subinventory"]').nth(0).click();

    // Alternatively, if the text content is unique, use it to refine the locator
    await this.page.locator('a:has-text("Sub-Inventories")').click();
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
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async enterCapacity(capacity: string): Promise<void> {
    await this.browserActions.inputText(this.capacityInput, capacity);
  }

  public async selectMeasurementUnits(units: string): Promise<void> {
    await this.browserActions.scrollToElement(this.measurementUnits);
    await this.browserActions.click(this.measurementUnits);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async selectDimension(dimension: string): Promise<void> {
    await this.browserActions.scrollToElement(this.dimensionSelect);
    await this.browserActions.click(this.dimensionSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
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
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('ArrowUp');
    await this.page.keyboard.press('Enter');
  }

  public async selectTemperatureControlled(temperatureControlled: string): Promise<void> {
    await this.browserActions.click(this.temperatureControlledSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
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
    const searchInput = `//input[contains(@class, 'search-input') and @placeholder='Search...']`;
    await this.browserActions.inputText(searchInput, subInventoryName);
  }

  public async filterSubInventoryType(type: string): Promise<void> {
    const filterButton = 'button.p-button span.p-button-icon.pi-filter';
    await this.browserActions.click(filterButton);
    const filterType = `//span[normalize-space(text())='Sub Inventory Type']`;
    await this.browserActions.click(filterType);
    await this.browserActions.waitForTimeout(2000);
    const option = `//p-checkbox//label[normalize-space(text())='Raw Materials']`;
    await this.browserActions.click(option);
    const applyButton = `//span[contains(@class, 'p-button-label') and text()='Apply']`;
    await this.browserActions.click(applyButton);
  }

  public async filterStatus(status: string): Promise<void> {
    const filterButton = 'button.p-button span.p-button-icon.pi-filter';
    await this.browserActions.click(filterButton);
    const filterStatus = `//span[normalize-space(text())='Status']`;
    await this.browserActions.click(filterStatus);
    const statusOption = `//p-checkbox//label[normalize-space(text())='Active']`;
    await this.browserActions.click(statusOption);
    const applyButton = `//span[contains(@class, 'p-button-label') and text()='Apply']`;
    await this.browserActions.click(applyButton);
  }
}

