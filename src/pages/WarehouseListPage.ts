import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class WarehouseListPage extends BasePage {
  private page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public addWarehouseButton = 'button[label="Add"]';
  public editWarehouseButton = 'button.dropdown-item .pi.pi-pencil';
  public selectWarehouseCardName = '//span[contains(@class, "warehouse-title") and contains(text(), "Test Warehouse ")]';
  public warehouseName = '#name';
  public warehouseType = '#Warehousetype';
  public description = '#inventoryDetails';
  public warehouseAddress = '#warehouseAddress';
  public city = "//*[@id='firstname2'][@placeholder='Enter City']";
  public stateProvince = '#stateName';
  public country = '#Country';
  public postalCode = '#postalCode';
  public warehouseManager = '#warehouseManager';
  public phoneNumber = '#contactPhone';
  public contactEmail = '#email';
  public startTimeSelect = "//input[@type='text' and @role='combobox' and @placeholder='Select start time' and @id='calendar-timeonly']";
  public endTimeSelect = "//input[@type='text' and @role='combobox' and @placeholder='Select end time' and @id='calendar-timeonly']";
  public timeZoneSelect = '#timeZone > span';
  public selectMeasurementUnits = "//p-dropdown[@formcontrolname='measurement_unit']";
  public capacity = "//*[@id='firstname2'][@placeholder='Enter capacity']";
  public specialEquipment = '#specialEquipment > div > ul > li > input';
  public temperatureControl = '#temperatureControl > div';
  public dockingStation = '#dockingStations';
  public securityFeatures = "//*[@type='text'][@placeholder='Enter security features']";
  public unitOfMeasurement = "//p-multiselect[@optionlabel='name' and @optionvalue='id' and @formcontrolname='unit_of_measure_ids' and @placeholder='Select a unit of measurement' and @name='uom']";
  public defaultPickTaskType = 'p-dropdown[placeholder="Select pick task type"]';
  public status = 'p-dropdown[placeholder="Select Status"]';
  public updateButton = 'button[type="submit"].button_add';
  public backButton = 'button[type="button"].button_back';
  public deleteButton = "//button[i[contains(@class, 'pi-trash')]]";
  public statusUpdateButton = "//div[@class='p-dropdown p-component p-inputwrapper' and @id='pn_id_48']//span[@role='combobox' and text()='Active']";

  // Methods

  public async clickStatusDropdown(status: string): Promise<void> {
    await this.browserActions.waitForElement(this.statusUpdateButton, 20000);
    await this.browserActions.click(this.statusUpdateButton);
  //  await this.browserActions.typeKeys('ArrowDown');
   // await this.browserActions.typeKeys('Enter');
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
    const typeOption = `//*[@id='Warehousetype_list']//li[@aria-label='${type}']`;
    await this.browserActions.click(typeOption);
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

  public async setCountry(country: string): Promise<void> {
    await this.browserActions.inputText(this.country, country);
  }

  public async setPostalCode(postalCode: string): Promise<void> {
    await this.browserActions.inputText(this.postalCode, postalCode);
  }

  public async selectWarehouseManager(manager: string): Promise<void> {
    await this.browserActions.click(this.warehouseManager);
    const managerOption = `//*[@id='warehouseManager_list']//li[@aria-label='${manager}']`;
    await this.browserActions.click(managerOption);
  }

  public async setPhoneNumber(phone: string): Promise<void> {
    await this.browserActions.inputText(this.phoneNumber, phone);
  }

  public async setContactEmail(email: string): Promise<void> {
    await this.browserActions.inputText(this.contactEmail, email);
  }

  public async selectStarttime(hours: string): Promise<void> {
    await this.browserActions.click(this.startTimeSelect);
    const hoursOption = `//input[@value='${hours}']`;  // Adjust based on actual selector
    await this.browserActions.click(hoursOption);
  }

  public async selectEndtime(hours: string): Promise<void> {
    await this.browserActions.click(this.endTimeSelect);
    const hoursOption = `//input[@value='${hours}']`;  // Adjust based on actual selector
    await this.browserActions.click(hoursOption);
  }

  public async selectTimeZone(timeZone: string): Promise<void> {
    await this.browserActions.click(this.timeZoneSelect);
    const timeZoneOption = `//*[@id='timeZone_list']//li[@aria-label='${timeZone}']`;
    await this.browserActions.click(timeZoneOption);
  }

  public async selectMeasurementUnit(measurementUnits: string): Promise<void> {
  //  await this.browserActions.scrollIntoView(this.selectMeasurementUnits);
    await this.browserActions.click(this.selectMeasurementUnits);
   // await this.browserActions.typeKeys('ArrowDown');
  //  await this.browserActions.typeKeys('Enter');
  }

  public async setCapacity(capacity: string): Promise<void> {
    await this.browserActions.inputText(this.capacity, capacity);
  }

  public async selectSpecialEquipment(equipment: string): Promise<void> {
    await this.browserActions.click(this.specialEquipment);
    const equipmentOption = `//*[@id='specialEquipment_list']//li[@aria-label='${equipment}']`;
    await this.browserActions.click(equipmentOption);
  }

  public async selectTemperatureControl(control: string): Promise<void> {
    await this.browserActions.click(this.temperatureControl);
    const controlOption = `//*[@id='temperatureControl_list']//li[@aria-label='${control}']`;
    await this.browserActions.click(controlOption);
  }

  public async setDockingStation(station: string): Promise<void> {
    await this.browserActions.inputText(this.dockingStation, station);
  }

  public async setSecurityFeatures(features: string): Promise<void> {
    await this.browserActions.inputText(this.securityFeatures, features);
  }

  public async selectUnitOfMeasurement(unit: string): Promise<void> {
    await this.browserActions.click(this.unitOfMeasurement);
    const unitOption = `//*[@id='unitOfMeasurement_list']//li[@aria-label='${unit}']`;
    await this.browserActions.click(unitOption);
  }

  public async selectDefaultPickTaskType(taskType: string): Promise<void> {
    await this.browserActions.click(this.defaultPickTaskType);
    const taskTypeOption = `//*[@id='defaultPickTaskType_list']//li[@aria-label='${taskType}']`;
    await this.browserActions.click(taskTypeOption);
  }

  public async setStatus(status: string): Promise<void> {
    await this.browserActions.click(this.status);
    const statusOption = `//*[@id='status_list']//li[@aria-label='${status}']`;
    await this.browserActions.click(statusOption);
  }

  public async clickUpdateButton(): Promise<void> {
    await this.browserActions.waitForElement(this.updateButton, 20000);
    await this.browserActions.click(this.updateButton);
  }

  public async clickDeleteButton(): Promise<void> {
    await this.browserActions.waitForElement(this.deleteButton, 20000);
    await this.browserActions.click(this.deleteButton);
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
    const filterButton = '//span[text()="Filters"]';
    await this.browserActions.click(filterButton);

    const warehouseType = '//li[span[text()="Warehouse Type"]]';
    await this.browserActions.click(warehouseType);
    
    const warehouseTypeSearch = `//input[@type='text' and @placeholder='Search...']`;
    await this.browserActions.inputText(warehouseTypeSearch, warehouseName);

    const applyButton = '//button[@label="Apply"]';
    await this.browserActions.click(applyButton);
  }

  public async filterStatus(statusValue: string): Promise<void> {
    const status = '//li[span[text()="Status"]]';
    await this.browserActions.click(status);
    
    const statusSearch = `//input[@placeholder='Search...']`;
    await this.browserActions.inputText(statusSearch, statusValue);

    const applyButton = '//button[@label="Apply"]';
    await this.browserActions.click(applyButton);

    const closeButton = '//button[@label="Clear"]';
    await this.browserActions.click(closeButton);
  }
}

