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

test('TC004 Verify that it should successfully add a warehouse', async () => {
  await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
  await addWarehousePage.clickAddWarehouseButton();
  await addWarehousePage.addWarehouse(
    'Test Warehouse A',
    'Storage',
    'Active',
    'This is a test warehouse',
    '123 Test Street',
    'Test City',
    'Test State',
    'India',
    '12345',
    'NameA',
    '1234567890',
    'supriyasahoo1399@gmail.com',
    '18:38',
    '18:50',
    '(UTC-05:00) Eastern Time (US & Canada)',
    'Square Feet (sq.ft)',
    '100',
    'Test Equipment',
    'No',
    '5',
    'Test Security',
    'Box',
    'FIFO',

  );

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
