import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { DockDoorsPage } from '../pages/DockDoorsPage';
import { DockDoorsSchedulingPage } from '../pages/DockDoorsSchedulingPage';
let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let dockDoorsPage: DockDoorsPage;
let dockDoorsSchedulingPage: DockDoorsSchedulingPage;

test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    dockDoorsPage = new DockDoorsPage(page);
    dockDoorsSchedulingPage = new DockDoorsSchedulingPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
    await driver.closeBrowser();
});

test('TC001 Verify that Dock Doors Scheduling page is displayed', async ({ page }) => {
    await dockDoorsSchedulingPage.clickOnDockDoorManagementSubMenu();
    await dockDoorsSchedulingPage.clickOnDockDoorsSchedulingSubMenu();
    await page.waitForTimeout(5000);
    await expect(await dockDoorsSchedulingPage.isDockDoorsSchedulingPageDisplayed()).toBeTruthy();
});
test ('TC002 Verify Dock Doors Scheduling page displays schedules for incoming and outgoing shipments', async ({ page }) => {
    await dockDoorsSchedulingPage.clickOnDockDoorManagementSubMenu();
    await dockDoorsSchedulingPage.clickOnDockDoorsSchedulingSubMenu();
    await page.waitForTimeout(5000);
    await expect(await dockDoorsSchedulingPage.isDockDoorsSchedulingPageDisplayed()).toBeTruthy();
});
