import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { CarriersListPage } from '../pages/CarriersListPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let carriersListPage: CarriersListPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  carriersListPage = new CarriersListPage(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/user-management/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new carrier', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await carriersListPage.clickOperationSideBar();
  await carriersListPage.clickCarriersSideBar();
  await carriersListPage.clickAddCarriersButton();
  await carriersListPage.enterCarrierName('Carrier 1');
  await carriersListPage.selectCarrierType('Parcel');
  await carriersListPage.enterContactPerson('PersonA');
  await carriersListPage.enterContactPhoneNumber('1234567890');
  await carriersListPage.enterContactEmail('supriyasahoo1399@gmail.com');
  await carriersListPage.enterDotNumber('1234567');
  await carriersListPage.enterMcNumber('MC123456');
  await carriersListPage.selectInsuranceType('Cargo Insurance');
  await carriersListPage.selectSafetyRating('Unsatisfactory');
  await carriersListPage.selectEquipmentType('Bulk Trailers');
  await carriersListPage.enterCapacity('10');
  await carriersListPage.clickNextButton();
  await browserActions.waitForTimeout(5000);
  await expect(await carriersListPage.isCarrierListDisplayed()).toBeTruthy();
});

test('TC002 Verify that the user should be able to search for a carrier', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await carriersListPage.clickOperationSideBar();
  await carriersListPage.clickCarriersSideBar();
  await carriersListPage.enterSearchCarriers('Carrier1');
  await browserActions.waitForTimeout(5000);
  await expect(await carriersListPage.isCarrierListDisplayed()).toBeTruthy();
});

test('TC003 Verify that the user should be able to edit the selected carrier', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await carriersListPage.clickOperationSideBar();
  await carriersListPage.clickCarriersSideBar();
  await carriersListPage.clickEditButton();
  await browserActions.waitForTimeout(5000);
  const nameInput = await page.locator(`//input[@formcontrolname='name' and contains(@class, 'outline-none')]`);
  const contactPersonInput = await page.locator(`//input[@formcontrolname='contact_person' and contains(@class, 'outline-none')]`);
  await nameInput.fill('Carrier');
  await contactPersonInput.fill('Updated Person');
  await carriersListPage.clickNextButton();
  await carriersListPage.clickNextButtonInUpdateCarrier();
  await browserActions.waitForTimeout(5000);
  await expect(await carriersListPage.isCarrierListDisplayed()).toBeTruthy();
});

test('TC004 Verify that the user should be able to delete the selected carrier', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await carriersListPage.clickOperationSideBar();
  await carriersListPage.clickCarriersSideBar();
  await carriersListPage.clickDeleteButton();
  await carriersListPage.clickYesButton();
  await browserActions.waitForTimeout(5000);
  await expect(await carriersListPage.isCarrierListDisplayed()).toBeTruthy();
});

test('TC005 Verify that the user should be able to view the selected carrier', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await carriersListPage.clickOperationSideBar();
  await carriersListPage.clickCarriersSideBar();
  await carriersListPage.clickViewButton();
  await browserActions.waitForTimeout(5000);
  await expect(await carriersListPage.isCarrierDisplayed()).toBeTruthy();
});

test('TC006 Verify that the user should be able to cancel the delete operation', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await carriersListPage.clickOperationSideBar();
  await carriersListPage.clickCarriersSideBar();
  await carriersListPage.clickDeleteButton();
  await carriersListPage.clickNoButton();
  await browserActions.waitForTimeout(5000);
  await expect(await carriersListPage.isCarrierListDisplayed()).toBeTruthy();
});

test('TC007 Verify that the user should be able to update the status of the selected carrier', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await carriersListPage.clickOperationSideBar();
  await carriersListPage.clickCarriersSideBar();
  await carriersListPage.changeStatus('Active');
  await browserActions.waitForTimeout(5000);
  await expect(await carriersListPage.isCarrierListDisplayed()).toBeTruthy();
});

test.only('TC008 Verify that the user should be able to update the carrier details in the carrier view page', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await carriersListPage.clickOperationSideBar();
  await carriersListPage.clickCarriersSideBar();
  await carriersListPage.clickViewButton();
  await carriersListPage.clickEditButtonInViewPage();
  const nameInput = await page.locator(`//input[@formcontrolname='name' and contains(@class, 'outline-none')]`);
  const contactPersonInput = await page.locator(`//input[@formcontrolname='contact_person' and contains(@class, 'outline-none')]`);
  await nameInput.fill('Carrier 1');
  await contactPersonInput.fill('PersonA');
  await carriersListPage.clickNextButton();
  await carriersListPage.clickNextButtonInUpdateCarrier();
  await browserActions.waitForTimeout(5000);
  await expect(await carriersListPage.isCarrierListDisplayed()).toBeTruthy();
});
