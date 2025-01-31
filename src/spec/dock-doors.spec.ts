import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { DockDoorsPage } from '../pages/DockDoorsPage';
let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let dockDoorsPage: DockDoorsPage;

test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    dockDoorsPage = new DockDoorsPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
});
test('TC001 Verify that Dock Doors page is displayed', async ({ page }) => {
    await dockDoorsPage.clickOnDockDoorManagementSubMenu();
    await dockDoorsPage.clickOnDockDoorSideBar();
    await page.waitForTimeout(5000);
    await expect(await dockDoorsPage.isDockDoorListPageDisplayed()).toBeTruthy();
});
test('TC002 Verify that the user should be able to search for a dock door', async ({ page }) => {
    await dockDoorsPage.clickOnDockDoorManagementSubMenu();
    await dockDoorsPage.clickOnDockDoorSideBar();
    await dockDoorsPage.clickOnSearchBar('Dock Door 1');
    await page.waitForTimeout(5000);
    await expect(await dockDoorsPage.isDockDoorListPageDisplayed()).toBeTruthy();
});
test('TC003 Verify that the user should be able to add a dock door', async ({ page }) => {
    await dockDoorsPage.clickOnDockDoorManagementSubMenu();
    await dockDoorsPage.clickOnDockDoorSideBar();
    await dockDoorsPage.clickOnAddDockDoorButton();
    await dockDoorsPage.inputDockDoorName('Dock Door 1');
    await dockDoorsPage.inputDockDoorLocation('Location 1');
    await dockDoorsPage.inputdockdoorStatus('Available');
    await dockDoorsPage.inputDockDoorType('Inbound');
    await dockDoorsPage.inputDockDoorCapacity('10');
    await dockDoorsPage.selectDockDoorCapacity('Square Feet (sq.ft)');
    await dockDoorsPage.inputDockDoorDescription('Dock Door 1 Description');
    await dockDoorsPage.clickOnAddButton();
    await page.waitForTimeout(5000);
    await expect(await dockDoorsPage.isDockDoorListPageDisplayed()).toBeTruthy();
});
test('TC004 Verify that the user should be able to edit a dock door', async ({ page }) => {
    await dockDoorsPage.clickOnDockDoorManagementSubMenu();
    await dockDoorsPage.clickOnDockDoorSideBar();
    await dockDoorsPage.clickOnEditButton();
    await dockDoorsPage.inputDockDoorName('Dock Door 2');
    await dockDoorsPage.inputDockDoorCapacity('13');
    await dockDoorsPage.clickOnUpdateButton();
    await page.waitForTimeout(5000);
    await expect(await dockDoorsPage.isDockDoorListPageDisplayed()).toBeTruthy();
});
test('TC005 Verify that the user should be able to view a dock door', async ({ page }) => {
    await dockDoorsPage.clickOnDockDoorManagementSubMenu();
    await dockDoorsPage.clickOnDockDoorSideBar();
    await dockDoorsPage.clickOnViewButton();
    await page.waitForTimeout(10000);
    await expect(await dockDoorsPage.isViewDetailsPageDisplayed()).toBeTruthy();
});
