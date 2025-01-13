import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { BasePage } from './BasePage';


export class AddWarehousePage extends BasePage {
  private page:Page;
  constructor(page: Page) {
    super(page)
    this.page=page;
  }

  // Basic elements
  public noWarehouseText = 'p[_ngcontent-ng-c435294142]';
  public addWarehouseButton = '//button[contains(@class, "button_add") and @type="button" and contains(., "Add Warehouse")]';
  public addWarehousePageHeader = 'h3.font-semibold.text-2xl.bg-color.m-0';
  public addLaterLink = 'a.text-center.mt-3[href="#/admin/warehouse"]';
  public sideBar = 'body > app-root > app-layout > div > app-sidebar';

  // Warehouse Form Inputs
  public warehouseNameInput = '#name';
  public warehouseTypeSelect = '#Warehousetype';
  public descriptionInput = '#inventoryDetails';
  public warehouseAddressInput = '#warehouseAddress';
  public cityInput = '//*[@id="firstname2"][@placeholder="Enter City"]';
  public stateInput = '#stateName';
  public countryInput = '#Country';
  public postalCodeInput = '#postalCode';
  public warehouseManagerSelect = 'body > app-root > app-layout > div > div > app-add-warehouse > form > div > div > div.form.col-12.p-0.column-gap-6 > div:nth-child(6) > div:nth-child(1) > div:nth-child(2)';
  public phoneNumberInput = '#contactPhone';
  public emailInput = '#email';

  // Time Selectors
  public startTimeSelect = "//input[@type='text' and @role='combobox' and @placeholder='Select start time' and @id='calendar-timeonly']";
  public endTimeSelect = "//input[@type='text' and @role='combobox' and @placeholder='Select end time' and @id='calendar-timeonly']";
  public timeZoneSelect = '#timeZone > span';

  // Dropdowns
  public selectMeasurementUnits = "//p-dropdown[@formcontrolname='measurement_unit']";
  public unitOfMeasurementSelect = "//p-multiselect[@optionlabel='name' and @optionvalue='id' and @formcontrolname='unit_of_measure_ids' and @placeholder='Select a unit of measurement' and @name='uom']";
  public pickTaskTypeSelect = 'p-dropdown[placeholder="Select pick task type"]';
  public statusTypeSelect = 'p-dropdown[placeholder="Select Status"]';

  // Other inputs
  public capacityInput = '//*[@id="firstname2"][@placeholder="Enter capacity"]';
  public specialEquipmentInput = '#specialEquipment > div > ul > li > input';
  public temperatureControlSelect = '#temperatureControl > div';
  public dockCountInput = '#dockingStations';
  public securityFeaturesInput = "//*[@type='text'][@placeholder='Enter security features']";

  // Buttons
  public addButton = "//button[@type='submit' and contains(text(),'Add')]";
  public backButton = 'button.p-element.button_back.flex.justify-content-center.items-center';

  // Warehouse List
  public warehouseList = 'app-warhouse-list .table-parents .wharehouse-list';

  // Warehouse List Item (with dynamic name)
  public warehouseListItem(name: string) {
    return `selector-for-warehouse-list-item[name="${name}"]`;
  }

  public async isNoWarehouseTextDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.noWarehouseText);
  }


  public async clickAddWarehouseButton(): Promise<void> {
    await this.browserActions.waitForElement(this.addWarehouseButton, 20000);
    await this.browserActions.click(this.addWarehouseButton);
  }


  public async clickAddLaterLink(): Promise<void> {
    await this.browserActions.click(this.addLaterLink);
  }

  public async isAddWarehousePageDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.addWarehousePageHeader);
  }

  public async isSideBarDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.sideBar);
  }

  public async enterWarehouseName(name: string): Promise<void> {
    await this.browserActions.inputText(this.warehouseNameInput, name);
  }

  public async selectWarehouseType(type: string): Promise<void> {

    await this.browserActions.click(this.warehouseTypeSelect);
    const typeOption = `//*[@id='Warehousetype_list']//li[@aria-label='${type}']`;
    console.log(typeOption);
    await this.browserActions.click(typeOption);
    // await this.warehouseTypeSelect.selectByVisibleText(type);
  }

  public async enterDescription(description: string): Promise<void> {
    await this.browserActions.inputText(this.descriptionInput, description);
  }

  public async enterWarehouseAddress(address: string): Promise<void> {
    await this.browserActions.inputText(this.warehouseAddressInput, address);
  }

  public async enterCity(city: string): Promise<void> {
    await this.browserActions.inputText(this.cityInput, city);
  }

  public async enterState(state: string): Promise<void> {
    await this.browserActions.inputText(this.stateInput, state);
  }

  public async enterCountry(country: string): Promise<void> {
    await this.browserActions.inputText(this.countryInput, country);
  }

  public async enterPostalCode(postalCode: string): Promise<void> {
    await this.browserActions.inputText(this.postalCodeInput, postalCode);
  }

  public async selectWarehouseManager(manager: string): Promise<void> {
    await this.browserActions.click(this.warehouseManagerSelect);
    const managerOption = `#manager_0`;  // Assuming a static manager option for simplicity
    await this.browserActions.click(managerOption);
    //await this.warehouseManagerSelect.selectByVisibleText(manager);

  }
  public async enterPhoneNumber(phoneNumber: string): Promise<void> {
    await this.browserActions.inputText(this.phoneNumberInput, phoneNumber);
  }

  public async enterEmail(email: string): Promise<void> {
    await this.browserActions.inputText(this.emailInput, email);
  }

  public async selectStartTime(startTime: string): Promise<void> {
    await this.browserActions.inputText(this.startTimeSelect, startTime);
  }

  public async selectEndTime(endTime: string): Promise<void> {
    await this.browserActions.inputText(this.endTimeSelect, endTime);
  }


  public async selectTimeZone(timeZone: string): Promise<void> {
    await this.browserActions.click(this.timeZoneSelect);
    const timeZoneOption = `//*[@id='timeZone_list']//li[@aria-label='${timeZone}']`;
    await this.browserActions.click(timeZoneOption);
  }

  public async selectMeasurementUnit(measurementUnit: string): Promise<void> {
    await this.browserActions.scrollToElement(this.selectMeasurementUnits);
    await this.browserActions.click(this.selectMeasurementUnits);
    //await this.browserActions.selectOption(measurementUnit);  // Assuming `selectOption` works for dropdowns
  }

  public async enterCapacity(capacity: string): Promise<void> {
    await this.browserActions.inputText(this.capacityInput, capacity);
  }

  public async enterSpecialEquipment(equipment: string): Promise<void> {
    await this.browserActions.inputText(this.specialEquipmentInput, equipment);
  }

  public async selectTemperatureControl(option: string): Promise<void> {
    await this.browserActions.click(this.temperatureControlSelect);
    const temperatureControlOption = `//*[@id='temperatureControl_list']//li[@aria-label='${option}']`;
    await this.browserActions.click(temperatureControlOption);
  }

  public async enterDockCount(dockCount: string): Promise<void> {
    await this.browserActions.inputText(this.dockCountInput, dockCount);
  }

  public async enterSecurityFeatures(features: string): Promise<void> {
    await this.browserActions.inputText(this.securityFeaturesInput, features);
  }

  public async selectUnitOfMeasurement(unit: string): Promise<void> {
    await this.browserActions.click(this.unitOfMeasurementSelect);
    const unitOption = `//ul[@role='listbox']//li[@aria-label='${unit}']`;
    await this.browserActions.click(unitOption);
  }

  public async selectPickTaskType(taskType: string): Promise<void> {
    await this.browserActions.click(this.pickTaskTypeSelect);
    //await this.browserActions.selectOption(taskType);  // Similar to above
  }

  public async selectStatusType(statusType: string): Promise<void> {
    await this.browserActions.click(this.statusTypeSelect);
    //await this.browserActions.selectOption(statusType);  // Same as above
  }

  public async clickAddButton(): Promise<void> {
    await this.browserActions.click(this.addButton);
  }

  public async clickBackButton(): Promise<void> {
    await this.browserActions.click(this.backButton);
  }

  public async isWarehouseListDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.warehouseList);
  }

  public async isWarehouseInList(name: string): Promise<boolean> {
    const warehouseItemSelector = this.warehouseListItem(name);
    return this.browserActions.isElementDisplayed(warehouseItemSelector);
  }

  public async isAddButtonEnabled(): Promise<boolean> {
    return this.browserActions.isElementEnabled(this.addButton);
  }



  public async addWarehouse(
    name: string,
    type: string,
    description: string,
    address: string,
    city: string,
    state: string,
    country: string,
    postalCode: string,
    manager: string,
    phoneNumber: string,
    email: string,
    startTime: string,
    endTime: string,
    timeZone: string,
    capacity: string,
    equipment: string,
    temperatureControl: string,
    dockCount: string,
    securityFeatures: string,
    unitOfMeasurement: string,
    pickTaskType: string
  ): Promise<void> {
    await this.enterWarehouseName(name);
    await this.selectWarehouseType(type);
    await this.enterDescription(description);
    await this.enterWarehouseAddress(address);
    await this.enterCity(city);
    await this.enterState(state);
    await this.enterCountry(country);
    await this.enterPostalCode(postalCode);
    await this.selectWarehouseManager(manager);
    await this.enterPhoneNumber(phoneNumber);
    await this.enterEmail(email);
    await this.selectStartTime(startTime);
    await this.selectEndTime(endTime);
    await this.selectTimeZone(timeZone);
    await this.enterCapacity(capacity);
    await this.enterSpecialEquipment(equipment);
    await this.selectTemperatureControl(temperatureControl);
    await this.enterDockCount(dockCount);
    await this.enterSecurityFeatures(securityFeatures);
    await this.selectUnitOfMeasurement(unitOfMeasurement);
    await this.selectPickTaskType(pickTaskType);
    await this.clickAddButton();
  }

}

