import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { ZoneListPage } from '../pages/ZoneListPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let zoneListPage: ZoneListPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  addWarehousePage = new AddWarehousePage(page);
  zoneListPage = new ZoneListPage(page);

  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new zone', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await warehouseListPage.clickWarehouseManagementSideBar();
  await zoneListPage.clickZoneSidebar();
  await zoneListPage.clickAddZoneButton();
  await zoneListPage.enterZoneName('Zone5');
  await zoneListPage.enterDescription('Test Description');
  await zoneListPage.selectZoneType('Storage');
  await zoneListPage.selectStatus('Active');
  await zoneListPage.selectSubInventoryAssociation('Subinventory2');
  await zoneListPage.selectCapacity('Square Feet (sq.ft)');
  await zoneListPage.enterCapacity('100');
  await zoneListPage.selectDimension('Meters (m)');
  await zoneListPage.enterLength('10');
  await zoneListPage.enterWidth('10');
  await zoneListPage.enterHeight('10');
  await zoneListPage.enterCycleCountFrequency('5');
  await zoneListPage.selectOperationHoursStartTime('09:00');
  await zoneListPage.selectOperationHoursEndTime('17:00');
  await zoneListPage.selectTemperatureControlled('No');
  await zoneListPage.clickAddButton();
  await browserActions.waitForTimeout(5000);
  await expect(await zoneListPage.isZoneListDisplayed()).toBeTruthy();
});

test('TC002 Verify that after clicking on the edit button the user should be able to edit the selected zone', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await warehouseListPage.clickWarehouseManagementSideBar();
  await zoneListPage.clickZoneSidebar();
  await zoneListPage.clickEditZoneIcon();
  const nameInput = await page.locator('[formcontrolname="name"]');
  const descriptionInput = await page.locator('[formcontrolname="description"]');
  await nameInput.fill('Zone5');
  await descriptionInput.fill('Updated Address');
  await zoneListPage.clickUpdateButton();
  await browserActions.waitForTimeout(5000);
  await expect(await zoneListPage.isZoneListDisplayed()).toBeTruthy();
});

test('TC003 Verify that after clicking on the delete button the user should be able to delete the selected zone', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await warehouseListPage.clickWarehouseManagementSideBar();
  await zoneListPage.clickZoneSidebar();
  await zoneListPage.clickDeleteZoneIcon();
  const reasonInput = await page.locator('//input[@placeholder="Enter"]');
  await reasonInput.fill('Test Reason');
  const yesButton = await page.locator('//button[contains(@class, "button_yes")]');
  await yesButton.click();
  await browserActions.waitForTimeout(5000);
  await expect(await zoneListPage.isZoneListDisplayed()).toBeTruthy();
});

test('TC004 Verify that the search functionality is working correctly', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await warehouseListPage.clickWarehouseManagementSideBar();
  await zoneListPage.clickZoneSidebar();
  await zoneListPage.enterSearchZone('Zone1');
  await browserActions.waitForTimeout(5000);
  await expect(await zoneListPage.isZoneListDisplayed()).toBeTruthy();
});

test('TC005 Verify that the filter functionality is working correctly based on the type', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await warehouseListPage.clickWarehouseManagementSideBar();
  await zoneListPage.clickZoneSidebar();
  await zoneListPage.clickFilter();
  await zoneListPage.selectZoneTypeFilter('Storage');
  await browserActions.waitForTimeout(5000);
  await expect(await zoneListPage.isZoneListDisplayed()).toBeTruthy();
});

test.only('TC006 Verify that the filter functionality is working correctly based on the status', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await warehouseListPage.clickWarehouseManagementSideBar();
  await zoneListPage.clickZoneSidebar();
  await zoneListPage.clickFilter();
  await zoneListPage.selectStatusFilter('Active');
  await browserActions.waitForTimeout(5000);
  await expect(await zoneListPage.isZoneListDisplayed()).toBeTruthy();
});
