import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { BasePage } from './BasePage';

export class WarehouseListPage extends BasePage {
  private page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public warehouseManagementSideBar = "//span[contains(@class, 'p-menuitem-text') and text()='Warehouse Management']";
  public warehouseList = "//span[contains(@class, 'ml-2') and text()='List']";
  public warehouseSubMenu = "//span[contains(@class, 'p-menuitem-text') and contains(@class, 'ng-star-inserted') and text() = 'Warehouses']";
  public addWarehouseButton = 'button[label="Add"]';
  public addButton= `(//div[contains(@class, 'field')]//button[contains(text(), 'Add') and contains(@class, 'button_add')])[1]`;
  public editWarehouseButton = `(//button[contains(@class, 'dropdown-item') and .//i[contains(@class, 'pi-pencil') and contains(@class, 'text-success')]])[1]`;
  public selectWarehouseCardName = '//span[contains(@class, "warehouse-title") and contains(text(), "Test Warehouse ")]';
  public warehouseName = '#name';
  public warehouseType = `//span[@role='combobox' and @aria-label='Select warehouse type' and text() = 'Select warehouse type']`;
  public description = '#inventoryDetails';
  public warehouseAddress = '#warehouseAddress';
  public city = `//*[@id="firstname2"][@placeholder="Enter City"]`;
  public stateProvince = `input[formcontrolname="state"]`;
  public country = `//span[@role='combobox' and @aria-label='Select Country' and text() = 'Select Country']`;
  public postalCode = `//*[@formcontrolname="pincode"]`;
  public warehouseManager = `//span[@aria-label='Select manager']`;
  public phoneNumber = `#contactPhone`;
  public contactEmail = '#email';
  public startTimeSelect = "//input[@type='text' and @role='combobox' and @placeholder='Select start time' and @id='calendar-timeonly']";
  public endTimeSelect = "//input[@type='text' and @role='combobox' and @placeholder='Select end time' and @id='calendar-timeonly']";
  public timeZoneSelect = '#timeZone > span';
  public selectMeasurementUnits = "//p-dropdown[@formcontrolname='measurement_unit']";
  public capacity = "//*[@id='firstname2'][@placeholder='Enter capacity']";
  public specialEquipment = '#specialEquipment > div > ul > li > input';
  public temperatureControl = `//div[@id='temperatureControl']//span[contains(text(), 'Select temperature control')]`;
  public dockingStation = '#dockingStations';
  public securityFeatures = "//*[@type='text'][@placeholder='Enter security features']";
  public unitOfMeasurement = "//p-multiselect[@optionlabel='name' and @optionvalue='id' and @formcontrolname='unit_of_measure_ids' and @placeholder='Select a unit of measurement' and @name='uom']";
  public defaultPickTaskType = 'p-dropdown[placeholder="Select pick task type"]';
  public status = 'p-dropdown[placeholder="Select Status"]';
  public updateButton = 'button[type="submit"].button_add';
  public backButton = 'button[type="button"].button_back';
  public deleteButton = `(//button[contains(@class, 'dropdown-item') and .//i[contains(@class, 'pi-trash') and contains(@class, 'text-danger')]])[1]`;
  public statusUpdateButton = "//div[@class='p-dropdown p-component p-inputwrapper' and @id='pn_id_48']//span[@role='combobox' and text()='Active']";

  // Methods
  public async clickAddButton(): Promise<void> {
    await this.browserActions.click(this.addButton);
  }
 public async clickWarehouseManagementSideBar(): Promise<void> {
  try {
    await this.browserActions.waitForElement(this.warehouseManagementSideBar, 30000);
    await this.browserActions.click(this.warehouseManagementSideBar);
  } catch (error) {
    console.error('Error clicking Warehouse Management SideBar:', error);
  }
 }
 public async isWarehouseListPageDisplayed(): Promise<boolean> {
   return await this.browserActions.isElementDisplayed(this.warehouseList);
   
 }
 public async clickWarehouseSubMenu(): Promise<void> {
   await this.browserActions.waitForElement(this.warehouseSubMenu, 20000);
   await this.browserActions.click(this.warehouseSubMenu);
 }
  public async clickStatusDropdown(status: string): Promise<void> {
    await this.browserActions.waitForElement(this.statusUpdateButton, 20000);
    await this.browserActions.click(this.statusUpdateButton);
    await this.page.keyboard.press('ArrowDown');
   await this.page.keyboard.press('Enter');
  }

  public async clickAddWarehouseButton(): Promise<void> {
    await this.browserActions.waitForElement(this.addWarehouseButton, 20000);
    await this.browserActions.click(this.addWarehouseButton);
  }

  public async clickEditWarehouseButton(): Promise<void> {
    await this.browserActions.waitForElement(this.editWarehouseButton, 20000);
    await this.browserActions.click(this.editWarehouseButton);
  }

  public async setWarehouseName(name: string): Promise<void> {
    await this.browserActions.inputText(this.warehouseName, name);
  }

  public async selectWarehouseType(type: string): Promise<void> {
    await this.browserActions.click(this.warehouseType);
   await this.page.keyboard.press('ArrowDown');
   await this.page.keyboard.press('Enter');
  }

  public async setDescription(description: string): Promise<void> {
    await this.browserActions.inputText(this.description, description);
  }

  public async setWarehouseAddress(address: string): Promise<void> {
    await this.browserActions.inputText(this.warehouseAddress, address);
  }

  public async setCity(city: string): Promise<void> {
    await this.browserActions.inputText(this.city, city);
  }

  public async setStateProvince(state: string): Promise<void> {
    await this.browserActions.inputText(this.stateProvince, state);
  }

  public async selectCountry(country: string): Promise<void> {
    await this.browserActions.click(this.country);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async setPostalCode(postalCode: string): Promise<void> {
    await this.browserActions.inputText(this.postalCode, postalCode);
  }

  public async selectWarehouseManager(manager: string): Promise<void> {
    await this.browserActions.click(this.warehouseManager);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async setPhoneNumber(phone: string): Promise<void> {
    await this.browserActions.inputText(this.phoneNumber, phone);
  }

  public async setContactEmail(email: string): Promise<void> {
    await this.browserActions.inputText(this.contactEmail, email);
  }

  public async selectStarttime(hours: string): Promise<void> {
    await this.browserActions.click(this.startTimeSelect);
  await this.page.keyboard.press('ArrowDown');
  await this.page.keyboard.press('Enter');
 
  }

  public async selectEndtime(hours: string): Promise<void> {
    await this.browserActions.click(this.endTimeSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');

  }

  public async selectTimeZone(timeZone: string): Promise<void> {
    await this.browserActions.click(this.timeZoneSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async selectMeasurementUnit(measurementUnits: string): Promise<void> {
    await this.browserActions.click(this.selectMeasurementUnits);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async setCapacity(capacity: string): Promise<void> {
    await this.browserActions.inputText(this.capacity, capacity);
  }

  public async enterSpecialEquipment(equipment: string): Promise<void> {
    await this.browserActions.inputText(this.specialEquipment, equipment);
  
  }

  public async selectTemperatureControl(control: string): Promise<void> {
    await this.browserActions.click(this.temperatureControl);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async setDockingStation(station: string): Promise<void> {
    await this.browserActions.inputText(this.dockingStation, station);
  }

  public async setSecurityFeatures(features: string): Promise<void> {
    await this.browserActions.inputText(this.securityFeatures, features);
  }

  public async selectUnitOfMeasurement(unit: string): Promise<void> {
    await this.browserActions.click(this.unitOfMeasurement);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async selectDefaultPickTaskType(taskType: string): Promise<void> {
    await this.browserActions.click(this.defaultPickTaskType);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async setStatus(status: string): Promise<void> {
    await this.browserActions.click(this.status);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('ArrowUp');
    await this.page.keyboard.press('Enter');
  }

  public async clickUpdateButton(): Promise<void> {
    await this.browserActions.waitForElement(this.updateButton, 20000);
    await this.browserActions.click(this.updateButton);
  }

  public async clickDeleteButton(): Promise<void> {
    await this.browserActions.waitForElement(this.deleteButton, 20000);
    await this.browserActions.click(this.deleteButton);
    const reasonInput = await this.page.locator(`//*[@id='name']`);
    await reasonInput.fill('Test Reason');
    const yesButton = await this.page.locator(`//button[contains(@class, 'button_yes') and text() = ' Yes ']`);
    await yesButton.click();

 
  }
  public async clickBackButton(): Promise<void> {
    await this.browserActions.waitForElement(this.backButton, 20000);
    await this.browserActions.click(this.backButton);
 
  }



  public async warehouseCard(name: string): Promise<void> {
    const warehouseCardSelector = `//span[contains(@class, 'warehouse-title') and contains(text(), '${name}')]`;
    await this.browserActions.click(warehouseCardSelector);
  }

  public async selectWarehouseAndEdit(warehouseName: string): Promise<void> {
    const selectedWarehouseName = `//tr[.//span[contains(text(),'${warehouseName}')]]`;
    await this.browserActions.click(selectedWarehouseName);
  }

  public async searchWarehouse(warehouseName: string): Promise<void> {
    const searchInput = `//input[@type='text' and @placeholder='Search...']`;
    await this.browserActions.inputText(searchInput, warehouseName);
  }

  public async filterWarehouseType(warehouseName: string): Promise<void> {
    const warehouseType = '//li[span[text()="Warehouse Type"]]';
    await this.browserActions.click(warehouseType);
    const warehouseTypeOption = `//label[normalize-space(text())='Distribution Center']`;
    await this.page.click(warehouseTypeOption);
    const applyButton = '//button[@label="Apply"]';
    await this.page.click(applyButton);
  }

  public async filterStatus(statusValue: string): Promise<void> {
    const status = '//li[span[text()="Status"]]';
    await this.browserActions.click(status);
    const statusOption = `//label[normalize-space(text())='${statusValue}']`;
    await this.browserActions.click(statusOption);
    const applyButton = '//button[@label="Apply"]';
    await this.browserActions.click(applyButton);
 
  }
}

