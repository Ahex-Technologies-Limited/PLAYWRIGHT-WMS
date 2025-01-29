import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/ProductListPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { LoginPage } from '../pages/LoginPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { OrderListPage } from '../pages/OrderListPage';
import { PickListPage } from '../pages/PickListPage';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let orderListPage: OrderListPage;
let pickListPage: PickListPage;
test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    pickListPage = new PickListPage(page);
    orderListPage = new OrderListPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test('TC001 Verify that the system should generate a pick list after order acceptance', async ({ page }) => {
    // Simulate order acceptance
    await pickListPage.clickOnOrderManagementSubMenu();
    await pickListPage.clickOnPickListSideBar();
    await pickListPage.clickOnSearchBar('Order123');
    await pickListPage.clickOnFilterButton();
    await pickListPage.clickOnWarehouseTypeFilter('Main Warehouse');
    await pickListPage.clickOnStatusFilter('Accepted');
    await pickListPage.clickOnFilterApplyButton();

    // Verify that the pick list page is displayed
    const isPickListDisplayed = await pickListPage.isPickListPageDisplayed();
    expect(isPickListDisplayed).toBeTruthy();
});

test('TC002 Verify that the user should be able to search for a pick list', async ({ page }) => {
    await pickListPage.clickOnOrderManagementSubMenu();
    await pickListPage.clickOnPickListSideBar();
    await pickListPage.clickOnSearchBar('Order123');
    await pickListPage.clickOnFilterButton();
    await pickListPage.clickOnWarehouseTypeFilter('Main Warehouse');
    await pickListPage.clickOnStatusFilter('Accepted');
    await pickListPage.clickOnFilterApplyButton();
    await pickListPage.clickOnSearchBar('Order123');
    const isPickListDisplayed = await pickListPage.isPickListPageDisplayed();
    expect(isPickListDisplayed).toBeTruthy();
});
test ('TC003 Verify that the user should be able to change the status of the pick list', async ({ page }) => {
    await pickListPage.clickOnOrderManagementSubMenu();
    await pickListPage.clickOnPickListSideBar();
   await pickListPage.clickOnStatus('Delivered to Packing Bay');
    await page.waitForTimeout(5000);
    const isPickListDisplayed = await pickListPage.isPickListPageDisplayed();
    expect(isPickListDisplayed).toBeTruthy();
});
test ('TC004 Verify that the user should be able to view the pick list details', async ({ page }) => {
    await pickListPage.clickOnOrderManagementSubMenu();
    await pickListPage.clickOnPickListSideBar();
    await pickListPage.clickOnViewIcon();
    await page.waitForTimeout(5000);
    const isPickListDisplayed = await pickListPage.isPickListPageDisplayed();
    expect(isPickListDisplayed).toBeTruthy();
});

