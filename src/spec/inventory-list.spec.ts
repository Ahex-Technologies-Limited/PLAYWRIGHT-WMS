import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { InventoryListPage } from '../pages/InventoryListPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let inventoryListPage: InventoryListPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  inventoryListPage = new InventoryListPage(page);

  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new inventory', async () => {
  await warehouseListPage.warehouseCard(`Test Warehouse`);
  await inventoryListPage.clickOnProductManagementSubMenu();
  await inventoryListPage.clickOnInventoryListSideBar();
  await inventoryListPage.clickOnAddInventoryButton();
  await inventoryListPage.selectSku('MmRaTzXEqs');
  await inventoryListPage.enterShipmentId('1234');
  await inventoryListPage.enterQuantity('100');
  await inventoryListPage.enterLotNumber('1234');
  await inventoryListPage.enterCost('100');
  await inventoryListPage.enterSellingPrice('100');
  await inventoryListPage.selectExpiryDate('12/25/2024');
  await inventoryListPage.clickAddButton();
  await browserActions.waitForTimeout(5000);
  await expect(inventoryListPage.isInventoryListPageDisplayed()).toBeTruthy();
});

test('TC002 Verify that the user should be able to search for an inventory', async () => {
  await warehouseListPage.warehouseCard(`Test Warehouse`);
  await inventoryListPage.clickOnProductManagementSubMenu();
  await inventoryListPage.clickOnInventoryListSideBar();
  await inventoryListPage.searchInventory('MmRaTzXEqs');
  await browserActions.waitForTimeout(5000);
  await expect(inventoryListPage.isInventoryListPageDisplayed()).toBeTruthy();
});

test('TC003 Verify that the user should be able to edit an inventory', async () => {
  await warehouseListPage.warehouseCard(`Test Warehouse`);
  await inventoryListPage.clickOnProductManagementSubMenu();
  await inventoryListPage.clickOnInventoryListSideBar();
  await inventoryListPage.clickViewButton();
  await inventoryListPage.clickEditInventoryDetails();
  const costPriceInput = page.locator('//input[@formcontrolname="cost_price" and @type="number"]');
  await costPriceInput.fill('');
  await costPriceInput.fill('200');
  const sellingPriceInput = page.locator('//input[@formcontrolname="sales_price" and @type="number"]');
  await sellingPriceInput.fill('');
  await sellingPriceInput.fill('200')
  await inventoryListPage.clickUpdateButton();
  await browserActions.waitForTimeout(5000);
  await expect(inventoryListPage.isInventoryListPageDisplayed()).toBeTruthy();
});

test('TC004 Verify that the user should be able to filter an inventory', async () => {
  await warehouseListPage.warehouseCard(`Test Warehouse`);
  await inventoryListPage.clickOnProductManagementSubMenu();
  await inventoryListPage.clickOnInventoryListSideBar();
  await inventoryListPage.clickFilterButton();
  await inventoryListPage.selectUomInFilter('Milliliter');
  await inventoryListPage.selectCatagoryInFilter('Books');
  await inventoryListPage.clickApplyButton();
  await browserActions.waitForTimeout(5000);
  await expect(inventoryListPage.isInventoryListPageDisplayed()).toBeTruthy();
});

test('TC005 Verify that the user should be able to view details of an inventory', async () => {
  await warehouseListPage.warehouseCard(`Test Warehouse`);
  await inventoryListPage.clickOnProductManagementSubMenu();
  await inventoryListPage.clickOnInventoryListSideBar();
  await inventoryListPage.clickViewButton();
  await browserActions.waitForTimeout(5000);
  await expect(inventoryListPage.isDetailsInventoryPageDisplayed()).toBeTruthy();
});

test.only('TC006 Verify that the user should be able to clear the filter', async () => {
  await warehouseListPage.warehouseCard(`Test Warehouse`);
  await inventoryListPage.clickOnProductManagementSubMenu();
  await inventoryListPage.clickOnInventoryListSideBar();
  await inventoryListPage.clickFilterButton();
  await inventoryListPage.selectUomInFilter('Milliliter');
  await inventoryListPage.clickClearButton();
  await browserActions.waitForTimeout(5000);
  await expect(inventoryListPage.isInventoryListPageDisplayed()).toBeTruthy();
});
