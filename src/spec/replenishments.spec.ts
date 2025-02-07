import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { OrderListPage } from '../pages/OrderListPage';  
import { ReorderingRulesPage } from '../pages/ReorderingRulesPage';
import { ReplenishmentPage } from '../pages/ReplenishmentsPage';


let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let orderListPage: OrderListPage;  
let reorderingRulesPage: ReorderingRulesPage; 
let replenishmentPage: ReplenishmentPage;

test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    orderListPage = new OrderListPage(page);
    reorderingRulesPage = new ReorderingRulesPage(page);
    replenishmentPage = new ReplenishmentPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await replenishmentPage.clickOnOperationsSideBar();
    await replenishmentPage.clickOnReplenishmentsSideBar();
});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
});

test('TC001 Verify that user can add a replenishment', async () => {
    await replenishmentPage.clickOnAddReplenishmentButton();
    await replenishmentPage.selectSKU('NIKE-ELEC-1097');
    await replenishmentPage.inputReplenishmentQuantity('100');
    await replenishmentPage.selectExpectedDeliveryDate('12/25/2024');
    await replenishmentPage.clickOnAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await replenishmentPage.isReplenishmentListPageDisplayed()).toBeTruthy();
});

test('TC002 Verify that user can search for a replenishment', async () => {
    await replenishmentPage.enterOnSearchBar('Test SKU');
    await browserActions.waitForTimeout(5000);
    await expect(await replenishmentPage.isReplenishmentListPageDisplayed()).toBeTruthy();
});

test('TC003 Verify that user can filter replenishments by status', async () => {
    await replenishmentPage.clickOnFilterButton();
    await replenishmentPage.clickOnStatusFilter('Draft');
    await replenishmentPage.clickOnApplyFilterButton();
    await browserActions.waitForTimeout(5000);
    await expect(await replenishmentPage.isReplenishmentListPageDisplayed()).toBeTruthy();
});

test.only('TC004 Verify that user can edit a replenishment', async () => {
    await replenishmentPage.clickOnEditButton();
    await replenishmentPage.inputReplenishmentQuantity('150');
    await replenishmentPage.clickOnUpdateButton();
    await browserActions.waitForTimeout(5000);
    await expect(await replenishmentPage.isReplenishmentListPageDisplayed()).toBeTruthy();
});

test('TC005 Verify that user can view a replenishment', async () => {
    await replenishmentPage.clickOnViewButton();
    await browserActions.waitForTimeout(5000);
    await expect(await replenishmentPage.isReplenishmentDetailsPageDisplayed()).toBeTruthy();
});

