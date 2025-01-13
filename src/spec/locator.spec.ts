import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { LocatorListPage } from '../pages/LocatorListPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let locatorListPage: LocatorListPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  locatorListPage = new LocatorListPage(page);

  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test.only('TC001 Verify that after clicking on the add button the user should be able to add a new locator', async () => {
  //await warehouseListPage.selectWarehouseCardName();
  await locatorListPage.clickLocatorSidebar();
  await locatorListPage.clickLocatorAddButton();
  await locatorListPage.enterLocatorName('Locator3');
  await locatorListPage.selectLocatorType('Level');
  await locatorListPage.enterDescription('Test Description');
  await locatorListPage.selectStatus('Active');
  await locatorListPage.selectAssociatedLocator('Locator1');
  await locatorListPage.selectLocatorCapacityUnit('Square Feet (sq.ft)');
  await locatorListPage.enterLocatorCapacity('100');
  await locatorListPage.selectDimension('Meters (m)');
  await locatorListPage.enterLength('10');
  await locatorListPage.enterWidth('10');
  //await locatorListPage.enterLocatorHeight('10');
  await locatorListPage.enterGroundSlot('5');
  await locatorListPage.enterHeight('5');
  await locatorListPage.enterNumberOfLevelsOrRows('5');
  await locatorListPage.enterStartingRangeAB('AB');
  await locatorListPage.enterStartingRange01('01');
  await locatorListPage.enterEndingRangeAB('CD');
  await locatorListPage.enterEndingRange01('05');
  await locatorListPage.clickAddButton();

  await expect(locatorListPage.isLocatorListDisplayed()).toBeTruthy();
});

test('TC002 Verify that after clicking on the edit button the user should be able to edit the selected locator', async () => {
  //await warehouseListPage.selectWarehouseCardName();
  await locatorListPage.clickLocatorSidebar();
  await locatorListPage.clickEditLocatorButton();

  const nameInput = page.locator(`//*[@formcontrolname="name"]`);
  const descriptionInput = page.locator(`//*[@formcontrolname="description"]`);
  await nameInput.fill('');
  await nameInput.fill('Locator');
  await descriptionInput.fill('');
  await descriptionInput.fill('Updated Address');

  await locatorListPage.clickUpdateButton();

  await expect(locatorListPage.isLocatorListDisplayed()).toBeTruthy();
});

test('TC003 Verify that after clicking on the delete button the user should be able to delete the selected locator', async () => {
  //await warehouseListPage.selectWarehouseCardName();
  await locatorListPage.clickLocatorSidebar();
  await locatorListPage.clickDeleteButton();

  const reasonInput = page.locator(`//input[@placeholder='Enter']`);
  await reasonInput.fill('Test Reason');
  
  const yesButton = page.locator(`//button[contains(@class, 'button_yes')]`);
  await yesButton.click();

  await expect(locatorListPage.isLocatorListDisplayed()).toBeTruthy();
});

test('TC004 Verify that search functionality is working as expected', async () => {
  //await warehouseListPage.selectWarehouseCardName();
  await locatorListPage.clickLocatorSidebar();
  await locatorListPage.enterSearchBar('Locator');

  await expect(locatorListPage.isLocatorListDisplayed()).toBeTruthy();
});

test('TC005 Verify that the filter functionality is working as expected based on the locator type', async () => {
  //await warehouseListPage.selectWarehouseCardName();
  await locatorListPage.clickLocatorSidebar();
  await locatorListPage.selectLocatorTypeFilter('Level');

  await expect(locatorListPage.isLocatorListDisplayed()).toBeTruthy();
});

test('TC006 Verify that the filter functionality is working as expected based on the status', async () => {
  //await warehouseListPage.selectWarehouseCardName();
  await locatorListPage.clickLocatorSidebar();
  await locatorListPage.selectStatusFilter('Active');

  await expect(locatorListPage.isLocatorListDisplayed()).toBeTruthy();
});
