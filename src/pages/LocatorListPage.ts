import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LocatorListPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public warehouseCardName = '//span[@class="warehouse-title" and normalize-space(text())="Supriya1"]';
  public locatorSidebar = "//li[@role='treeitem']//span[text()='Locator']";
  public locatorPage = "//div[@class='table-parents']";
  public locatorList = "//span[text()='List']";
  public locatorAddButton = "//button[.//span[text()='Add']]";
  public locatorNameInput = "//input[@formcontrolname='name']";
  public locatorTypeSelect = "//*[@formcontrolname='locator_type']";
  public descriptionInput = "//*[@formcontrolname='description']";
  public locatorStatusSelect = "//*[@formcontrolname='status']";
  public associatedLocatorSelect = "//*[@formcontrolname='parent_locator_id']";
  public locatorCapacityUnitSelect = "//*[@formcontrolname='measurement_unit']";
  public locatorCapacityInput = "//*[@formcontrolname='capacity']";
  public locatorDimensionSelect = "//*[@formcontrolname='unit']";
  public locatorLengthInput = "//*[@formcontrolname='length']";
  public locatorWidthInput = "//*[@formcontrolname='width']";
  public locatorHeightInput = "//input[@type='number' and @formcontrolname='height' and @placeholder='Height']";
  public associatedInventorySelect = "//*[@formcontrolname='sub_inventory_id']";
  public associatedZonesSelect = "//*[@formcontrolname='zone_id']";
  public groundSlotInput = "//*[@formcontrolname='ground_slots']";
  public heightInput = "//input[@type='number' and @formcontrolname='height' and @placeholder='Enter']";
  public numberOfLevelsOrRowsInput = "//*[@formcontrolname='number_of_rows']";
  public startingRangeABInput = "//*[@formcontrolname='from_prefix']";
  public startingRange01Input = "//*[@formcontrolname='from_suffix']";
  public endingRangeABInput = "//*[@formcontrolname='to_prefix']";
  public endingRange01Input = "//*[@formcontrolname='to_suffix']";
  public addButton = "//button[contains(@class, 'button_add') and contains(@class, 'p-button')]";
  public backButton = "//button[@routerlink='/admin/warehouse/locator']";
  public editLocatorButton = "//button[contains(@class, 'dropdown-item')]//i[contains(@class, 'pi pi-pencil')]";
  public updateButton = "//button[normalize-space(text()) = 'Update']";
  public deleteButton = "//button[@type='button' and contains(@class, 'dropdown-item') and .//i[contains(@class, 'pi-trash')]]";
  public locatorListDisplayed = "//span[text()='List']";
  public locatorTypeFilter = "//li[span[text()='Locator Type']]";
  public statusFilter = "//li[span[text()='Status']]";
  public searchBar = "//input[@type='text' and @placeholder='Search...' and contains(@class, 'search-input')]";

  // Methods to interact with elements
  public async clickWarehouseCardName(): Promise<void> {
    await this.browserActions.click(this.warehouseCardName);
  }

  public async clickLocatorSidebar(): Promise<void> {
    await this.browserActions.click(this.locatorSidebar);
  }

  public async clickLocatorPage(): Promise<void> {
    await this.browserActions.click(this.locatorPage);
  }

  public async clickLocatorList(): Promise<void> {
    await this.browserActions.waitForElement(this.locatorList, 5000);
  }

  public async clickLocatorAddButton(): Promise<void> {
    await this.browserActions.click(this.locatorAddButton);
  }

  public async enterLocatorName(locatorName: string): Promise<void> {
    await this.browserActions.inputText(this.locatorNameInput, locatorName);
  }

  public async selectLocatorType(locatorType: string): Promise<void> {
    await this.browserActions.click(this.locatorTypeSelect);
    const locatorTypeOption = `//li[@aria-label='${locatorType}']`;
    await this.browserActions.click(locatorTypeOption);
  }

  public async enterDescription(description: string): Promise<void> {
    await this.browserActions.inputText(this.descriptionInput, description);
  }

  public async selectStatus(status: string): Promise<void> {
    await this.browserActions.click(this.locatorStatusSelect);
    const statusOption = `//li[@aria-label='${status}']`;
    await this.browserActions.click(statusOption);
  }

  public async selectAssociatedLocator(associatedLocator: string): Promise<void> {
    await this.browserActions.click(this.associatedLocatorSelect);
    const associatedLocatorOption = `//li[@aria-label='${associatedLocator}']`;
    await this.browserActions.click(associatedLocatorOption);
  }

  public async selectLocatorCapacityUnit(locatorCapacityUnit: string): Promise<void> {
    await this.browserActions.click(this.locatorCapacityUnitSelect);
    const locatorCapacityUnitOption = `//li[@aria-label='${locatorCapacityUnit}']`;
    await this.browserActions.click(locatorCapacityUnitOption);
  }

  public async enterLocatorCapacity(locatorCapacity: string): Promise<void> {
    await this.browserActions.inputText(this.locatorCapacityInput, locatorCapacity);
  }

  public async selectDimension(dimension: string): Promise<void> {
    await this.browserActions.click(this.locatorDimensionSelect);
    const dimensionOption = `//li[@aria-label='${dimension}']`;
    await this.browserActions.click(dimensionOption);
  }

  public async enterLength(length: string): Promise<void> {
    await this.browserActions.inputText(this.locatorLengthInput, length);
  }

  public async enterWidth(width: string): Promise<void> {
    await this.browserActions.inputText(this.locatorWidthInput, width);
  }

  public async enterHeight(height: string): Promise<void> {
    await this.browserActions.inputText(this.locatorHeightInput, height);
  }

  public async selectAssociatedInventory(associatedInventory: string): Promise<void> {
    await this.browserActions.click(this.associatedInventorySelect);
    const associatedInventoryOption = `//li[@aria-label='${associatedInventory}']`;
    await this.browserActions.click(associatedInventoryOption);
  }

  public async selectAssociatedZones(associatedZones: string): Promise<void> {
    await this.browserActions.click(this.associatedZonesSelect);
    const associatedZonesOption = `//li[@aria-label='${associatedZones}']`;
    await this.browserActions.click(associatedZonesOption);
  }

  public async enterGroundSlot(groundSlot: string): Promise<void> {
    await this.browserActions.inputText(this.groundSlotInput, groundSlot);
  }

  public async enterHeightInput(height: string): Promise<void> {
    await this.browserActions.inputText(this.heightInput, height);
  }

  public async enterNumberOfLevelsOrRows(numberOfLevelsOrRows: string): Promise<void> {
    await this.browserActions.inputText(this.numberOfLevelsOrRowsInput, numberOfLevelsOrRows);
  }

  public async enterStartingRangeAB(startingRangeAB: string): Promise<void> {
    await this.browserActions.inputText(this.startingRangeABInput, startingRangeAB);
  }

  public async enterStartingRange01(startingRange01: string): Promise<void> {
    await this.browserActions.inputText(this.startingRange01Input, startingRange01);
  }

  public async enterEndingRangeAB(endingRangeAB: string): Promise<void> {
    await this.browserActions.inputText(this.endingRangeABInput, endingRangeAB);
  }

  public async enterEndingRange01(endingRange01: string): Promise<void> {
    await this.browserActions.inputText(this.endingRange01Input, endingRange01);
  }

  public async clickAddButton(): Promise<void> {
    await this.browserActions.click(this.addButton);
  }

  public async clickBackButton(): Promise<void> {
    await this.browserActions.click(this.backButton);
  }

  public async clickEditLocatorButton(): Promise<void> {
    await this.browserActions.click(this.editLocatorButton);
  }

  public async clickUpdateButton(): Promise<void> {
    await this.browserActions.click(this.updateButton);
  }

  public async clickDeleteButton(): Promise<void> {
    await this.browserActions.click(this.deleteButton);
  }

  public async isLocatorListDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.locatorListDisplayed);
  }

  public async selectLocatorTypeFilter(locatorTypeFilter: string): Promise<void> {
    await this.browserActions.click(this.locatorTypeFilter);
    const filterOption = `//label[contains(text(),'${locatorTypeFilter}')]`;
    await this.browserActions.click(filterOption);
  }

  public async selectStatusFilter(statusFilter: string): Promise<void> {
    await this.browserActions.click(this.statusFilter);
    const filterOption = `//label[contains(text(),'${statusFilter}')]`;
    await this.browserActions.click(filterOption);
  }

  public async enterSearchBar(searchBar: string): Promise<void> {
    await this.browserActions.inputText(this.searchBar, searchBar);
  }

}

