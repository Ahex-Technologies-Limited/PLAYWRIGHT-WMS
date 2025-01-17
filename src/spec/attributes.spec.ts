import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AttributesListPage } from '../pages/AttributesListPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let attributesListPage: AttributesListPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  attributesListPage = new AttributesListPage(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/user-management/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new attribute', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await attributesListPage.clickOperationSideBar();
  await attributesListPage.clickAttributesSideBar();
  await attributesListPage.clickAddAttributesButton();
  await attributesListPage.enterAttributeName('Attribute 10');
  await attributesListPage.enterAttributeDescription('Test description');
  await attributesListPage.clickAddAttribute();

  await expect(attributesListPage.isAttributeListDisplayed()).toBeTruthy();
});

test('TC002 Verify that the user should be able to search for an attribute', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await attributesListPage.clickOperationSideBar();
  await attributesListPage.clickAttributesSideBar();
  await attributesListPage.enterSearchAttribute('Attribute2');

  await expect(attributesListPage.isAttributeDisplayed()).toBeTruthy();
});

test('TC003 Verify that the user should be able to edit the selected attribute', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await attributesListPage.clickOperationSideBar();
  await attributesListPage.clickAttributesSideBar();
  await attributesListPage.clickEditButton();
  const nameInput = await page.locator(`//input[@type='text' and @formcontrolname='name' and @placeholder='Enter attribute name']`);
  const descriptionInput = await page.locator(`//*[@type='text' and @formcontrolname='description' and @placeholder='Enter description']`);
  await nameInput.fill('Updated Attribute');
  await descriptionInput.fill('Updated description');
  await attributesListPage.clickUpdateButton();
  await browserActions.waitForTimeout(5000);
  await expect(attributesListPage.isAttributeUpdated()).toBeTruthy();
});

test('TC004 Verify that the user should be able to delete the selected attribute', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await attributesListPage.clickOperationSideBar();
  await attributesListPage.clickAttributesSideBar();
  await attributesListPage.clickDeleteButton();
  await attributesListPage.clickYesButton();
  await browserActions.waitForTimeout(5000);
  await expect(attributesListPage.isAttributeDeletedMessage()).toBeTruthy();
});

test('TC005 Verify that the user should be able to cancel the delete operation', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await attributesListPage.clickOperationSideBar();
  await attributesListPage.clickAttributesSideBar();
  await attributesListPage.clickDeleteButton();
  await attributesListPage.clickNoButton();
  await browserActions.waitForTimeout(5000);
  await expect(attributesListPage.isAttributeListDisplayed()).toBeTruthy();
});

test('TC006 Verify that the user should be able to change the status of the attribute', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await attributesListPage.clickOperationSideBar();
  await attributesListPage.clickAttributesSideBar();
  await attributesListPage.changeStatus('Active');
  await browserActions.waitForTimeout(5000);
  await expect(attributesListPage.isAttributeListDisplayed()).toBeTruthy();
});
