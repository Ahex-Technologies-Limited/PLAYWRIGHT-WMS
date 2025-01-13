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
 // await warehouseListPage.selectWarehouseCardName(page);
//   await zoneListPage.clickZoneSidebar(page);
//   await zoneListPage.clickAddZoneButton(page);

//   await zoneListPage.enterZoneName(page, 'Zone5');
//   await zoneListPage.enterDescription(page, 'Test Description');
//   await zoneListPage.selectZoneType(page, 'Storage');
//   await zoneListPage.selectStatus(page, 'Active');
//   await zoneListPage.selectSubInventoryAssociation(page, 'Subinventory2');
//   await zoneListPage.selectCapacity(page, 'Square Feet (sq.ft)');
//   await zoneListPage.enterCapacity(page, '100');
//   await zoneListPage.selectDimension(page, 'Meters (m)');
//   await zoneListPage.enterLength(page, '10');
//   await zoneListPage.enterWidth(page, '10');
//   await zoneListPage.enterHeight(page, '10');
//   await zoneListPage.enterCycleCountFrequency(page, '5');
//   await zoneListPage.enterOperationHoursStartTime(page, '08:00');
//   await zoneListPage.enterOperationHoursEndTime(page, '17:00');
//   await zoneListPage.selectTemperatureControlled(page, 'No');
//   await zoneListPage.clickAddButton(page);

  //await expect(await zoneListPage.isZoneListDisplayed(page)).toBeTruthy();
});

test('TC002 Verify that after clicking on the edit button the user should be able to edit the selected zone', async () => {
//   await warehouseListPage.selectWarehouseCardName(page);
//   await zoneListPage.clickZoneSidebar(page);
//   await zoneListPage.clickEditZoneIcon(page);

  const nameInput = await page.locator('[formcontrolname="name"]');
  const descriptionInput = await page.locator('[formcontrolname="description"]');
  
  await nameInput.fill('Zone5');
  await descriptionInput.fill('Updated Address');
  
//  await zoneListPage.clickUpdateButton(page);

  //await expect(await zoneListPage.isZoneListDisplayed(page)).toBeTruthy();
});

test('TC003 Verify that after clicking on the delete button the user should be able to delete the selected zone', async () => {
 // await warehouseListPage.selectWarehouseCardName(page);
//   await zoneListPage.clickZoneSidebar(page);
//   await zoneListPage.clickDeleteZoneIcon(page);

  const reasonInput = await page.locator('//input[@placeholder="Enter"]');
  await reasonInput.fill('Test Reason');
  
  const yesButton = await page.locator('//button[contains(@class, "button_yes")]');
  await yesButton.click();

  //await expect(await zoneListPage.isZoneListDisplayed(page)).toBeTruthy();
});

test('TC004 Verify that the search functionality is working correctly', async () => {
 // await warehouseListPage.selectWarehouseCardName(page);
//   await zoneListPage.clickZoneSidebar(page);
//   await zoneListPage.enterSearchZone(page, 'Zone1');

 // await expect(await zoneListPage.isZoneListDisplayed(page)).toBeTruthy();
});

test('TC005 Verify that the filter functionality is working correctly based on the type', async () => {
//   await warehouseListPage.selectWarehouseCardName(page);
//   await zoneListPage.clickZoneSidebar(page);
  //await zoneListPage.selectZoneTypeFilter(page, 'Storage');

  //await expect(await zoneListPage.isZoneListDisplayed(page)).toBeTruthy();
});

test('TC006 Verify that the filter functionality is working correctly based on the status', async () => {
  //await warehouseListPage.selectWarehouseCardName(page);
//   await zoneListPage.clickZoneSidebar(page);
 // await zoneListPage.selectStatusFilter(page, 'Active');

  //await expect(await zoneListPage.isZoneListDisplayed(page)).toBeTruthy();
});
