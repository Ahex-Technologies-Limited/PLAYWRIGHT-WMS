import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { OrderListPage } from '../pages/OrderListPage';
import { ReorderingRulesPage } from '../pages/ReorderingRulesPage';


let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let orderListPage: OrderListPage;
let reorderingRulesPage: ReorderingRulesPage;

test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    orderListPage = new OrderListPage(page);
    reorderingRulesPage = new ReorderingRulesPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await reorderingRulesPage.clickOnOperationsSideBar();
    await reorderingRulesPage.clickOnReorderingRulesSideBar();
});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
});
test('TC001 Verify that it should successfully add a reordering rule', async () => {
    await reorderingRulesPage.clickOnAddButton();
    await reorderingRulesPage.selectSKU('FASH-SHOE-NIKE-BB94');
    await reorderingRulesPage.enterReorderQuantity('100');
    await reorderingRulesPage.enterReorderPoint('50');
    await reorderingRulesPage.enterSafetyStockLevel('25');
    await reorderingRulesPage.enterMaxStockLevel('100');
    await reorderingRulesPage.selectAutomaticOrderPlacement('Yes');
    await reorderingRulesPage.clickOnAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await reorderingRulesPage.issuccessMessageAfterAddingReorderingRuleDisplayed()).toBeTruthy();
})

test('TC002 Verify that user can edit an reordering rule', async () => {
    await reorderingRulesPage.clickOnEditButton();
    await reorderingRulesPage.enterReorderQuantity('150');
    await reorderingRulesPage.clickOnUpdateButton();
    await browserActions.waitForTimeout(2000);
    await expect(await reorderingRulesPage.isReorderingRulesListDisplayed()).toBeTruthy();
})

test('TC003 Verify that user can view the reordering rule details', async () => {
    await reorderingRulesPage.clickOnViewButton();
    await browserActions.waitForTimeout(5000);
    await expect(await reorderingRulesPage.isReorderingRulesDetailsPageDisplayed()).toBeTruthy();
})

test('TC004 Verify that user can filter reordering rules by status', async () => {
    await reorderingRulesPage.clickOnFilterButton();
    await reorderingRulesPage.clickOnStatusFilter('Active');
    await reorderingRulesPage.clickOnApplyFilterButton();
    await browserActions.waitForTimeout(5000);
    await expect(await reorderingRulesPage.isReorderingRulesListDisplayed()).toBeTruthy();
})

test('TC005 Verify that user can search for a reordering rule by SKU', async () => {
    await reorderingRulesPage.enterOnSearchBar('HOME-REFR-NIKE-KL49');
    await browserActions.waitForTimeout(5000);
    await expect(await reorderingRulesPage.isReorderingRulesListDisplayed()).toBeTruthy();
})
