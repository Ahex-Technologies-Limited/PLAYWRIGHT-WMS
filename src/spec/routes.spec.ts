import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { OrderListPage } from '../pages/OrderListPage';  
import { ReorderingRulesPage } from '../pages/ReorderingRulesPage';
import { ReplenishmentPage } from '../pages/ReplenishmentsPage';
import { RoutesPage } from '../pages/RoutesPage';


let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let orderListPage: OrderListPage;  
let reorderingRulesPage: ReorderingRulesPage; 
let replenishmentPage: ReplenishmentPage;
let routesPage: RoutesPage;

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
    routesPage = new RoutesPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await routesPage.clickOnOperationsSidebar();
    await routesPage.clickOnRoutesSidebar();
});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
});
test('TC001 Verify that user is able to create a new route', async ({ page }) => {
    await routesPage.clickOnAddRouteButton();
    await routesPage.enterRouteName('Test Route');
    await routesPage.selectRouteType('Incoming');
    await routesPage.selectRouteStatus('Active');
    await routesPage.enterStartingLocation('Test Location');
    await routesPage.enterDestination('Test Location');
    await routesPage.enterAddStop('Test Location');
    await routesPage.enterHandlingInstruction('Test Location');
    await routesPage.clickOnAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await routesPage.isRoutesListDisplayed()).toBeTruthy();
});

test('TC002 Verify that user is able to view details of a route', async ({ page }) => {
    await routesPage.clickOnViewButton();
    await browserActions.waitForTimeout(5000);
    await expect(await routesPage.isViewDetailsPageDisplayed()).toBeTruthy();
});
test.only ('TC003 Verify that user can assignProducts to a route', async ({ page }) => {
    await routesPage.clickOnAssignProductIcon();
    await routesPage.ProductSelect('T-Shirts');
    await routesPage.clickOnAssignProductButton();
    await browserActions.waitForTimeout(5000);
    await expect(await routesPage.isRoutesListDisplayed()).toBeTruthy();
});
test ('TC004Verify that user can assign product Catagory to a route', async ({ page }) => {
    await routesPage.clickOnAssignProductCatagoryIcon();
    await routesPage.ProductCatagorySelect('Fashion');
    await routesPage.clickOnAssignProductCatagoryButton();
    await browserActions.waitForTimeout(5000);
    await expect(await routesPage.isRoutesListDisplayed()).toBeTruthy();
});
test ('TC005 Verify that user can search for a route', async ({ page }) => {
    await routesPage.enterOnSearchBar('Test Route');
    await browserActions.waitForTimeout(5000);
    await expect(await routesPage.isRoutesListDisplayed()).toBeTruthy();
});

