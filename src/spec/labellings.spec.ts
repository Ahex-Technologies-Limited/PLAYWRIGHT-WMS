import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { LabellingsPage } from '../pages/LabellingsListPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let labellingsPage: LabellingsPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  labellingsPage = new LabellingsPage(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new labelling', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await labellingsPage.clickOnLabelSideBar();
  await labellingsPage.clickOnAddLabelButton();
  await labellingsPage.selectLabelType('SKU');
  await labellingsPage.selectFormat('Custom Text');
  await labellingsPage.enterShowValue('5647');
  await labellingsPage.selectSeparator();
  await labellingsPage.clickOnAddFormatLink();
  await labellingsPage.selectFormat('Brand');
  await labellingsPage.selectSeparator();
  await labellingsPage.clickOnPreviewButton();
  await labellingsPage.clickOnCreateButton();
  await page.waitForTimeout(5000);
  await expect(await labellingsPage.isLabelListDisplayed()).toBeTruthy();
});

test('TC002 Verify that the user should be able to search for a labelling', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await labellingsPage.clickOnLabelSideBar();
  await labellingsPage.enterInSearchBar('SKU');
  await page.waitForTimeout(5000);
  await expect(await labellingsPage.isLabelPageDisplayed()).toBeTruthy();
});

test('TC003 Verify that the user should be able to change the status of the labellings', async () => {
  await warehouseListPage.warehouseCard(`Test Warehouse`);
  await labellingsPage.clickOnLabelSideBar();
  await labellingsPage.selectStatus();
  await page.waitForTimeout(5000);
  await expect(await labellingsPage.isLabelPageDisplayed()).toBeTruthy();
});

test('TC004 Verify that the user should be able to delete the labelling', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await labellingsPage.clickOnLabelSideBar();
  await labellingsPage.clickOnAddLabelButton();
  await labellingsPage.selectLabelType('SKU');
  await labellingsPage.selectFormat('Custom Text');
  await labellingsPage.enterShowValue('1234');
  await labellingsPage.selectSeparator();
  await labellingsPage.clickOnDeleteIcon();
  await page.waitForTimeout(5000);
  await expect(await labellingsPage.isTemplatePageDisplayed()).toBeTruthy();
});

test('TC005 Verify that the filter functionality is working correctly', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await labellingsPage.clickOnLabelSideBar();
  await labellingsPage.clickOnFilterButton();
  await labellingsPage.selectFilterStatus('Active');
  await labellingsPage.clickOnApplyButton();
  await page.waitForTimeout(5000);
  await expect(await labellingsPage.isLabelPageDisplayed()).toBeTruthy();
});

test.only('TC006 Verify that the user should be able to clear the filter', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await labellingsPage.clickOnLabelSideBar();
  await labellingsPage.clickOnFilterButton();
  await labellingsPage.selectFilterStatus('Active');
  await labellingsPage.clickOnClearButton();
  await page.waitForTimeout(5000);
  await expect(await labellingsPage.isLabelPageDisplayed()).toBeTruthy();
});