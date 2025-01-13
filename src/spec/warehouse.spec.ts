import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  addWarehousePage = new AddWarehousePage(page);

  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new warehouse', async () => {
  
  //await warehouseListPage.selectWarehouseCard();

  // Click the add button
  await warehouseListPage.clickAddWarehouseButton();

  // Fill out the form
  await addWarehousePage.enterWarehouseName('Warehouse2');
  await addWarehousePage.selectWarehouseType('Distribution Center');
  await addWarehousePage.enterDescription('Test Description');
  await addWarehousePage.enterWarehouseAddress('123 Test Address');
  await addWarehousePage.enterCity('Test City');
  await addWarehousePage.enterState('Test State');
  //await addWarehousePage.enterCountry('Test Country');
  await addWarehousePage.enterPostalCode('12345');
  await addWarehousePage.selectWarehouseManager('SupriyaTester');
  await addWarehousePage.enterPhoneNumber('1234567890');
  await addWarehousePage.enterEmail('supriyasahoo@gmail.com');
  await addWarehousePage.selectStartTime('08:00');
  await addWarehousePage.selectEndTime('17:00');
  await addWarehousePage.selectTimeZone('(UTC-05:00) Eastern Time (US & Canada)');
  await addWarehousePage.selectMeasurementUnit('Square Feet (sq:ft)');
  await addWarehousePage.enterCapacity('1000');
  await addWarehousePage.enterSpecialEquipment('Trolleys');
  await addWarehousePage.selectTemperatureControl('Yes');
  await addWarehousePage.enterDockCount('5');
  await addWarehousePage.enterSecurityFeatures('CCTV');
  await addWarehousePage.selectUnitOfMeasurement('Box');
  await addWarehousePage.selectPickTaskType('FIFO');
  await addWarehousePage.selectStatusType('Active');
  await addWarehousePage.clickAddButton();

  // Verify that the warehouse is added successfully
  await expect(await addWarehousePage.isWarehouseListDisplayed()).toBeTruthy();
});

test('TC002 Verify that after clicking on the edit button the user should be able to edit the selected warehouse', async () => {
  //await warehouseListPage.selectWarehouseCard();
  const warehouseRow = await page.locator(`#pn_id_38-table > tbody > tr:nth-child(1)`);
  await warehouseListPage.clickEditWarehouseButton();
  const nameInput = await page.locator(`#name`);
  const descriptionInput = await page.locator(`textarea[formcontrolname="description"]`);
  
  await nameInput.fill('Updated Warehouse');
  await descriptionInput.fill('Updated Address');
  
  const updateButton = await page.locator(`button[type="submit"]`);
  await updateButton.click();
  
  await expect(await addWarehousePage.isWarehouseListDisplayed()).toBeTruthy();
});

test('TC003 Verify that after clicking on the delete button the user should be able to delete the selected warehouse', async () => {
  //await warehouseListPage.selectWarehouseCard();
  const warehouseRow = await page.locator(`#pn_id_38-table > tbody > tr:nth-child(1)`);
  await warehouseListPage.clickDeleteButton();
  const reasonInput = await page.locator(`//input[@id='name']`);
  await reasonInput.fill('Test Reason');
  const yesButton = await page.locator(`//button[text()=' Yes ']`);
  await yesButton.click();

  await expect(await addWarehousePage.isWarehouseListDisplayed()).toBeTruthy();
});

test('TC004 Verify that the search functionality is working correctly', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await warehouseListPage.searchWarehouse('Updated Warehouse');
  
  await expect(await addWarehousePage.isWarehouseListDisplayed()).toBeTruthy();
});

test('TC005 Verify that the filter functionality is working correctly', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await warehouseListPage.filterWarehouseType('Distribution Center');
  
  await expect(await addWarehousePage.isWarehouseListDisplayed()).toBeTruthy();
  
  await warehouseListPage.filterStatus('Active');
  
  await expect(await addWarehousePage.isWarehouseListDisplayed()).toBeTruthy();
});

test('TC006 Verify that the user can change the status', async () => {
  //await warehouseListPage.selectWarehouseCard();
  const warehouseRow = await page.locator(`#pn_id_38-table > tbody > tr:nth-child(1)`);
  await warehouseListPage.clickStatusDropdown("Active");

  await expect(await addWarehousePage.isWarehouseListDisplayed()).toBeTruthy();
});
