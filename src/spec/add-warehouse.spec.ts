import { test, expect, Page } from '@playwright/test';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { LoginPage } from '../pages/LoginPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let addWarehousePage: AddWarehousePage;
let logInPage: LoginPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  logInPage = new LoginPage(page);
  addWarehousePage = new AddWarehousePage(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await browserActions.waitForTimeout(3000);
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that "No Warehouse Added" text should display initially', async () => {
  await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
  await browserActions.waitForTimeout(3000);
  await expect(addWarehousePage.isNoWarehouseTextDisplayed()).toBeTruthy();
});

test('TC002 Verify that it should navigate to Add Warehouse page when "Add Warehouse" button is clicked', async () => {
  await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
  await addWarehousePage.clickAddWarehouseButton();
  await browserActions.waitForTimeout(3000);
  await expect(addWarehousePage.isAddWarehousePageDisplayed()).toBeTruthy();
});

test('TC003 Verify that it should display the sidebar when "Add Later" link is clicked', async () => {

  await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
  await browserActions.waitForTimeout(3000);
  await addWarehousePage.clickAddLaterLink();
  await browserActions.waitForTimeout(3000);
  await expect(addWarehousePage.isSideBarDisplayed()).toBeTruthy();
});

test.only('TC004 Verify that it should successfully add a warehouse', async () => {
  await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
  await addWarehousePage.clickAddWarehouseButton();
  await addWarehousePage.enterWarehouseName('Test Warehouse');
  await addWarehousePage.selectWarehouseType('Storage');
  await addWarehousePage.selectStatus('Active');
  await addWarehousePage.enterDescription('Test Description');
  await addWarehousePage.enterWarehouseAddress('Test Warehouse');
  await addWarehousePage.selectCountry('India');
  await addWarehousePage.enterCity('Test City');
  await addWarehousePage.enterState('Test State');
  await addWarehousePage.enterPostalCode('123456');
  await addWarehousePage.selectWarehouseManager('Supriya Sahoo');
  await addWarehousePage.enterPhoneNumber('1234567890');
  await addWarehousePage.enterEmail('supriyasahoo@gmail.com');
  await addWarehousePage.enterCapacity('100');
  await addWarehousePage.selectMeasurementUnitsOfCapacity('Cubic Feet (cu.ft)');
  await addWarehousePage.selectTimeZone('(UTC-05:00) Eastern Time (US & Canada)');
  await addWarehousePage.selectStartTime('09:00');
  await addWarehousePage.selectEndTime('18:00');
  await addWarehousePage.selectPickTaskType('FIFO');
  await addWarehousePage.selectUnitOfMeasurement('Box');
  await addWarehousePage.enterDockCount('2');
  await addWarehousePage.selectTemperatureControl('No');
  await addWarehousePage.enterSecurityFeatures('Test Security Features');
  await addWarehousePage.enterSpecialEquipment('Test Special Equipment');
  await addWarehousePage.clickAddButton();
  await browserActions.waitForTimeout(3000);
  await expect(addWarehousePage.isWarehouseListDisplayed()).toBeTruthy();
});



test('TC005 Verify that it should navigate back without adding a warehouse when "Back" button is clicked', async () => {
  await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
  await addWarehousePage.clickAddWarehouseButton();
  await browserActions.waitForTimeout(3000);
  await expect(addWarehousePage.isAddWarehousePageDisplayed()).toBeTruthy();
  await browserActions.waitForTimeout(3000);
  await addWarehousePage.clickBackButton();
  await browserActions.waitForTimeout(3000);
  await expect(addWarehousePage.isNoWarehouseTextDisplayed()).toBeTruthy();
});

test('TC006 Verify that the add warehouse button is disabled when the mandatory fields are not filled', async () => {

  await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
  await addWarehousePage.clickAddWarehouseButton();
  await browserActions.waitForTimeout(3000);
  await expect(await addWarehousePage.isAddButtonEnabled()).toBeFalsy();
});
