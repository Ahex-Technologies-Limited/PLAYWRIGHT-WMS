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
  
  await expect(await addWarehousePage.isNoWarehouseTextDisplayed()).toBeTruthy();
});

test('TC002 Verify that it should navigate to Add Warehouse page when "Add Warehouse" button is clicked', async () => {
 
  await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
  await addWarehousePage.clickAddWarehouseButton();
  await expect(addWarehousePage.isAddWarehousePageDisplayed()).toBeTruthy();
});

test('TC003 Verify that it should display the sidebar when "Add Later" link is clicked', async () => {
  
  await logInPage.login('tester@gmail.com', 'Supriya@12');
  
//  await expect(addWarehousePage.isAddLaterLinkDisplayed()).toBeTruthy();
  await addWarehousePage.clickAddLaterLink();

  await expect(addWarehousePage.isSideBarDisplayed()).toBeTruthy();
});

test('TC004 Verify that it should successfully add a warehouse', async () => {

  await logInPage.login('tester@gmail.com', 'Supriya@12');
  
  await addWarehousePage.clickAddWarehouseButton();
  await expect(addWarehousePage.isAddWarehousePageDisplayed()).toBeTruthy();


  await addWarehousePage.addWarehouse({
    
    name: 'Test Warehouse A',
    type: 'Storage',
    description: 'This is a test warehouse',
    address: '123 Test Street',
    city: 'Test City',
    state: 'Test State',
    country: 'Test Country',
    postalCode: '12345',
    manager: 'Supriya Sahoo',
    phone: '1234567890',
    email: 'supriyasahoo1399@gmail.com',
    startTime: '12:30',
    endTime: '12:40',
    timeZone: '(UTC-05:00) Eastern Time (US & Canada)',
    // measurementUnit: 'Square Feet (sq.ft)',
    capacity: '100',
    specialEquipment: 'Test Equipment',
    temperatureControl: 'Yes',
    dockCount: '5',
    securityFeatures: 'Test Security',
    unitOfMeasurement: 'Meter',
    pickTaskType: 'FIFO',
    statusType: 'Active'
  });

  await addWarehousePage.clickAddButton();

  await expect(addWarehousePage.isWarehouseListDisplayed()).toBeTruthy();
});

test('TC005 Verify that it should display the warehouse list after adding a warehouse', async () => {
  await logInPage.open();
  await logInPage.login('tester@gmail.com', 'Supriya@12');
  
  await addWarehousePage.clickAddWarehouseButton();
  await expect(addWarehousePage.isAddWarehousePageDisplayed()).toBeTruthy();

  // Fill in the warehouse details
//   await addWarehousePage.enterWarehouseDetails({
//     name: 'Test Warehouse A',
//     type: 'Distribution Center',
//     description: 'This is a test warehouse',
//     address: '123 Test Street',
//     city: 'Test City',
//     state: 'Test State',
//     country: 'India',
//     postalCode: '12345',
//     manager: 'Test Manager',
//     phone: '1234567890',
//     email: 'supriyasahoo1399@gmail.com',
//     startTime: '10:00 AM',
//     endTime: '06:00 PM',
//     timeZone: '(UTC-05:00) Eastern Time (US & Canada)',
//     measurementUnit: 'Square Feet (sq.ft)',
//     capacity: '100',
//     specialEquipment: 'Test Equipment',
//     temperatureControl: 'Yes',
//     dockCount: '5',
//     securityFeatures: 'Test Security',
//     unitOfMeasurement: 'Meter',
//     pickTaskType: 'FIFO',
//     statusType: 'Active'
//   });

  await addWarehousePage.clickAddButton();
  await expect(addWarehousePage.isWarehouseListDisplayed()).toBeTruthy();
});

test('TC006 Verify that it should navigate back without adding a warehouse when "Back" button is clicked', async () => {
  await logInPage.open();
  await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
  
  await addWarehousePage.clickAddWarehouseButton();
  await expect(addWarehousePage.isAddWarehousePageDisplayed()).toBeTruthy();
  
  await addWarehousePage.clickBackButton();
  
  await expect(addWarehousePage.isNoWarehouseTextDisplayed()).toBeTruthy();
});

test('TC007 Verify that the add warehouse button is disabled when the mandatory fields are not filled', async () => {
  await logInPage.open();
  await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
  
  await addWarehousePage.clickAddWarehouseButton();
  await expect(addWarehousePage.isAddWarehousePageDisplayed()).toBeTruthy();

  // Verify that the "Add" button is disabled
  expect(await addWarehousePage.isAddButtonEnabled()).toBeFalsy();
});
