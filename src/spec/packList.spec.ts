import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { OrderListPage } from '../pages/OrderListPage';  
import { PackListPage } from '../pages/PackListPage';



let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let orderListPage: OrderListPage;  
let packListPage: PackListPage; 

test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    orderListPage = new OrderListPage(page);
    packListPage = new PackListPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
});
test('TC001 Verify that Pack List page is displayed', async ({ page }) => {
    await packListPage.clickOnOrderManagementSubMenu();
    await packListPage.clickOnPackListSideBar();
    await page.waitForTimeout(5000);
    await expect(await packListPage.isPackListPageDisplayed()).toBeTruthy();
});
test('TC002 Verify that the user should be able to search for a pack list', async ({ page }) => {
    await packListPage.clickOnOrderManagementSubMenu();
    await packListPage.clickOnPackListSideBar();
    await packListPage.clickOnSearchBar('Order123');
    await page.waitForTimeout(5000);
    await expect(await packListPage.isPackListPageDisplayed()).toBeTruthy();
});
test('TC003 Verify that the user should be able to change the status of the pack list', async ({ page }) => {
    await packListPage.clickOnOrderManagementSubMenu();
    await packListPage.clickOnPackListSideBar();
    await packListPage.clickOnStatus('');
    await page.waitForTimeout(5000);
});
test('TC004 Verify that the user should be able to view the pack list details', async ({ page }) => {
    await packListPage.clickOnOrderManagementSubMenu();
    await packListPage.clickOnPackListSideBar();
    await packListPage.clickOnViewButton();
    await page.waitForTimeout(5000);
    await expect(await packListPage.isPackListPageDisplayed()).toBeTruthy();
});
test('TC005 Verify that the warehouseType filter functionality works', async ({ page }) => {
    await packListPage.clickOnOrderManagementSubMenu();
    await packListPage.clickOnPackListSideBar();
    await packListPage.clickOnFilterButton();
    await page.waitForTimeout(5000);
    await packListPage.clickOnWarehouseTypeFilter('Main Warehouse');
    await packListPage.clickOnFilterApplyButton();
    await page.waitForTimeout(5000);
    await expect(await packListPage.isPackListPageDisplayed()).toBeTruthy();
});
test('TC006 Verify that the status filter functionality works', async ({ page }) => {
    await packListPage.clickOnOrderManagementSubMenu();
    await packListPage.clickOnPackListSideBar();
    await packListPage.clickOnFilterButton();
    await page.waitForTimeout(5000);
    await packListPage.clickOnStatusFilter('Accepted');
    await packListPage.clickOnFilterApplyButton();
    await page.waitForTimeout(5000);
    await expect(await packListPage.isPackListPageDisplayed()).toBeTruthy();
});
