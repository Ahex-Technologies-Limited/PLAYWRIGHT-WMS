import { test, Page, expect } from '@playwright/test';
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
  browserActions = new BrowserActions(page)
;
  loginPage = new LoginPage(page)
;
  warehouseListPage = new WarehouseListPage(page)
;
  addWarehousePage = new AddWarehousePage(page)
;

  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test.only('TC001 Verify that after clicking on the add button the user should be able to add a new warehouse', async () => {
  
  await warehouseListPage.warehouseCard('Test Warehouse');
  await warehouseListPage.clickWarehouseManagementSideBar();
  await warehouseListPage.clickWarehouseSubMenu();
  await warehouseListPage.clickAddWarehouseButton();
  await warehouseListPage.setWarehouseName('Warehouse2');
  await warehouseListPage.selectWarehouseType('Distribution Center');
  await warehouseListPage.setDescription('Test Description');
  await warehouseListPage.setWarehouseAddress('123 Test Address');
  await warehouseListPage.setCity('Test City');
  await warehouseListPage.setStateProvince('Test State');
  await warehouseListPage.selectCountry('India');
  await warehouseListPage.setPostalCode('12345');
  await warehouseListPage.selectWarehouseManager('SupriyaTester');
  await warehouseListPage.setPhoneNumber('1234567890');
  await warehouseListPage.setContactEmail('supriyasahoo@gmail.com');
  await warehouseListPage.selectStarttime('08:00');
  await warehouseListPage.selectEndtime('17:00');
  await warehouseListPage.selectTimeZone('(UTC-05:00) Eastern Time (US & Canada)');
  await warehouseListPage.selectMeasurementUnit('Square Feet (sq:ft)');
  await warehouseListPage.setCapacity('1000');
  await warehouseListPage.selectSpecialEquipment('Trolleys');
  await warehouseListPage.selectTemperatureControl('Yes');
  await warehouseListPage.setDockingStation('5');
  await warehouseListPage.setSecurityFeatures('CCTV');
  await warehouseListPage.selectUnitOfMeasurement('Box');
  await warehouseListPage.selectDefaultPickTaskType('FIFO');
  await warehouseListPage.setStatus('Active');
  await warehouseListPage.clickAddWarehouseButton();

  
  await expect(await warehouseListPage.isWarehouseListPageDisplayed()).toBeTruthy();
});

test('TC002 Verify that after clicking on the edit button the user should be able to edit the selected warehouse', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
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