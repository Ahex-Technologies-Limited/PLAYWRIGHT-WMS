import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { SubInventoryListPage } from '../pages/SubInventoryListPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let subInventoryListPage: SubInventoryListPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  subInventoryListPage = new SubInventoryListPage(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new sub-inventory', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await subInventoryListPage.clickSubInventorySidebar();
  await subInventoryListPage.clickSubInventoryAddButton();
  await subInventoryListPage.enterSubInventoryName('Subinventory5');
  await subInventoryListPage.enterDescription('Test Description');
  await subInventoryListPage.selectSubInventoryType('Raw Materials');
  await subInventoryListPage.enterCapacity('100');
  await subInventoryListPage.selectDimension('Inches (in)');
  await subInventoryListPage.enterLength('10');
  await subInventoryListPage.enterWidth('10');
  await subInventoryListPage.enterHeight('10');
  await subInventoryListPage.selectStatus('Active');
  await subInventoryListPage.selectTemperatureControlled('No');
  await subInventoryListPage.clickAddButton();

  await expect(await subInventoryListPage.isSubInventoryListDisplayed()).toBeTruthy();
});

test('TC002 Verify that after clicking on the edit button the user should be able to edit the selected sub-inventory', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await subInventoryListPage.clickSubInventorySidebar();
  await subInventoryListPage.clickEditSubInventoryButton();

  const nameInput = await page.locator(`//input[@placeholder='Enter sub-inventory name']`);
  const descriptionInput = await page.locator(`#inventoryDetails`);
  
  await nameInput.fill('SubInventory');
  await descriptionInput.fill('Updated Address');

  await subInventoryListPage.clickUpdateButton();

  await expect(await subInventoryListPage.isSubInventoryListDisplayed()).toBeTruthy();
});

test('TC003 Verify that after clicking on the delete button the user should be able to delete the selected sub-inventory', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await subInventoryListPage.clickSubInventorySidebar();
  await subInventoryListPage.clickDeleteButton();

  const reasonInput = await page.locator(`//input[@placeholder='Enter']`);
  await reasonInput.fill('Test Reason');

  const yesButton = await page.locator(`button.button_yes`);
  await yesButton.click();

  await expect(await subInventoryListPage.isSubInventoryListDisplayed()).toBeTruthy();
});

test('TC004 Verify that the search functionality is working as expected', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await subInventoryListPage.clickSubInventorySidebar();
  await subInventoryListPage.searchSubInventory('Subinventory1');

  await expect(await subInventoryListPage.isSubInventoryListDisplayed()).toBeTruthy();
});

test('TC005 Verify that the filter functionality is working as expected based on type', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await subInventoryListPage.clickSubInventorySidebar();
  await subInventoryListPage.filterSubInventoryType('Raw Materials');

  await expect(await subInventoryListPage.isSubInventoryListDisplayed()).toBeTruthy();
});

test('TC006 Verify that the filter functionality is working as expected based on status', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await subInventoryListPage.clickSubInventorySidebar();
  await subInventoryListPage.filterStatus('Active');

  await expect(await subInventoryListPage.isSubInventoryListDisplayed()).toBeTruthy();
});
