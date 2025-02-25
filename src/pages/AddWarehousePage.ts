import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { BasePage } from './BasePage';


export class AddWarehousePage extends BasePage {
  private page: Page;
  constructor(page: Page) {
    super(page)
    this.page = page;
  }

  // Basic elements
  public noWarehouseText = `//h2[@class='text-center mb-3' and text()='No Warehouse Added']`;
  public addWarehouseButton = '//button[contains(@class, "button_add") and @type="button" and contains(., "Add Warehouse")]';
  public addWarehousePageHeader = 'h3.font-semibold.text-2xl.bg-color.m-0';
  public addLaterLink = 'a.text-center.mt-3[href="#/admin/warehouse"]';
  public sideBar = 'body > app-root > app-layout > div > app-sidebar';

  // Warehouse Form Inputs
  public warehouseNameInput = '#name';
  public warehouseTypeSelect = `//*[@formcontrolname='type']`;
  public descriptionInput = `//*[@formcontrolname='description']`;
  public warehouseAddressInput = `//*[@formcontrolname='address']`;
  public cityInput = `//*[@formcontrolname="city"]`;
  public stateInput = `//*[@formcontrolname='state']`;
  public countryInput = `//*[@formcontrolname='country']`;
  public postalCodeInput = '#postalCode';
  public warehouseManagerSelect = `//*[@formcontrolname='manager_id']`;
  public phoneNumberInput = '#contactPhone';
  public emailInput = '#email';

  // Time Selectors
  public startTimeSelect = "//input[@type='text' and @role='combobox' and @placeholder='Select start time' and @id='calendar-timeonly']";
  public endTimeSelect = "//input[@type='text' and @role='combobox' and @placeholder='Select end time' and @id='calendar-timeonly']";
  public timeZoneSelect = '#timeZone > span';

  // Dropdowns
  public selectMeasurementUnits = "//p-dropdown[@formcontrolname='measurement_unit']";
  public unitOfMeasurementSelect = "//*[@formcontrolname='unit_of_measure_ids']";
  public pickTaskTypeSelect = `//*[@formcontrolname='default_pick_type']`;
  public statusTypeSelect = `//*[@formcontrolname='status']`;
  public MeasurementUnitsOfCapacity = `//*[@formcontrolname='measurement_unit']`;
  // Other inputs
  public capacityInput = `//*[@formcontrolname='capacity']`;
  public specialEquipmentInput = `(//div[@data-pc-name='chips']//input[@placeholder='Enter'])[2]`;
  public temperatureControlSelect = `//*[@formcontrolname='temperature_controlled']`;
  public dockCountInput = `//*[@formcontrolname='dock_count']`;
  public securityFeaturesInput = `(//div[@data-pc-name='chips']//input[@placeholder='Enter'])[1]`;

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


  public async clickAddWarehouseButton(){
    await this.browserActions.waitForElement(this.addWarehouseButton, 20000);
    await this.browserActions.click(this.addWarehouseButton);
  }


  public async clickAddLaterLink() {
    await this.browserActions.click(this.addLaterLink);
  }

  public async isWarehouseListPageDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.warehouseList);
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

  public async selectWarehouseType(type: string){

    await this.browserActions.click(this.warehouseTypeSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    // await this.warehouseTypeSelect.selectByVisibleText(type);
  }
  public async selectStatus(status: string) {
    await this.browserActions.click(this.statusTypeSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    // const statusOption = `//li[@role='option' and @aria-label='${status}']`;
    // console.log(statusOption);
    // await this.browserActions.click(statusOption);
    // await this.warehouseTypeSelect.selectByVisibleText(type);

  }

  public async enterDescription(description: string) {
    await this.browserActions.inputText(this.descriptionInput, description);
  }

  public async enterWarehouseAddress(address: string) {
    await this.browserActions.inputText(this.warehouseAddressInput, address);
  }

  public async enterCity(city: string): Promise<void> {
    await this.browserActions.inputText(this.cityInput, city);
  }

  public async enterState(state: string){
    await this.browserActions.inputText(this.stateInput, state);
  }

  public async selectCountry(country: string) {
    await this.browserActions.click(this.countryInput);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async enterPostalCode(postalCode: string) {
    await this.browserActions.inputText(this.postalCodeInput, postalCode);
  }

  public async selectWarehouseManager(manager: string) {
    await this.browserActions.click(this.warehouseManagerSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    // const managerOption = `//li[@aria-label='${manager}']`;
    // await this.browserActions.click(managerOption);
    //await this.warehouseManagerSelect.selectByVisibleText(manager);

  }
  public async enterPhoneNumber(phoneNumber: string) {
    await this.browserActions.inputText(this.phoneNumberInput, phoneNumber);
  }

  public async enterEmail(email: string) {
    await this.browserActions.inputText(this.emailInput, email);
  }

  public async selectStartTime(startTime: string) {
    await this.browserActions.click(this.startTimeSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');



  }

  public async selectEndTime(endTime: string) {
    await this.browserActions.click(this.endTimeSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');

  }


  public async selectTimeZone(timeZone: string) {
    await this.browserActions.click(this.timeZoneSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    // const timeZoneOption = `//li[@aria-label='${timeZone}']`;
    // await this.browserActions.click(timeZoneOption);
  }

  public async selectMeasurementUnit(measurementUnit: string) {
    await this.browserActions.scrollToElement(this.selectMeasurementUnits);
    await this.browserActions.click(this.selectMeasurementUnits);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async enterCapacity(capacity: string) {
    await this.browserActions.inputText(this.capacityInput, capacity);
  }
  public async selectMeasurementUnitsOfCapacity(MeasurementUnitsOfCapacity: string) {
    await this.browserActions.scrollToElement(this.selectMeasurementUnits);
    await this.browserActions.click(this.selectMeasurementUnits);
    const MeasurementUnitsOfCapacityOption = `//span[text()='${MeasurementUnitsOfCapacity}']`;
    await this.browserActions.click(MeasurementUnitsOfCapacityOption);

  }

  public async enterSpecialEquipment(equipment: string) {
    await this.browserActions.inputText(this.specialEquipmentInput, equipment);
  }

  public async selectTemperatureControl(option: string){
    await this.browserActions.click(this.temperatureControlSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async enterDockCount(dockCount: string) {
    await this.browserActions.inputNumber(this.dockCountInput, dockCount);
  }

  public async enterSecurityFeatures(features: string) {
    await this.browserActions.inputText(this.securityFeaturesInput, features);
  }

  public async selectUnitOfMeasurement(unit: string) {
    await this.browserActions.click(this.unitOfMeasurementSelect);
    const unitOption = `//li[@aria-label='${unit}']`;
    await this.browserActions.click(unitOption);
  }

  public async selectPickTaskType(taskType: string) {
    await this.browserActions.click(this.pickTaskTypeSelect);
    const taskTypeOption = `//ul[@role='listbox']//li[@aria-label='${taskType}']`;
    await this.browserActions.click(taskTypeOption);
    //await this.browserActions.selectOption(taskType);  // Similar to above
  }

  public async selectStatusType(statusType: string) {
    await this.browserActions.click(this.statusTypeSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('ArrowUp');
    await this.page.keyboard.press('Enter');

    //await this.browserActions.selectOption(statusType);  // Same as above
  }

  public async clickAddButton(){
    await this.browserActions.click(this.addButton);
  }

  public async clickBackButton() {
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





}

