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
import { PoManagementPage} from '../pages/PoManagementPage';


let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let orderListPage: OrderListPage;  
let reorderingRulesPage: ReorderingRulesPage; 
let replenishmentPage: ReplenishmentPage;
let routesPage: RoutesPage;
let poManagementPage: PoManagementPage;

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
    poManagementPage = new PoManagementPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await routesPage.clickOnOperationsSidebar();
    await poManagementPage.clickOnPoManagementSideBar();
});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
});
test('TC001 Verify that PO Management page is displayed', async ({ page }) => {

    await poManagementPage.isPoListDisplayed();

});
test('TC002 Verify that clicking on Add button the user should be able to add a new po',async({page}) => { 
    await poManagementPage.clickOnAddPoButton();
    await poManagementPage.selectDate('2025-2-25');
    await poManagementPage.selectSupplier('SupplierA');
    await poManagementPage.selectDeliveryDate('19');
    await poManagementPage.selectSKU('FASH-SHOE-NIKE-HA37');
    await poManagementPage.inputPerUnitPrice('100');
    await poManagementPage.inputReorderQuantity('10');
    await poManagementPage.clickOnAddButton();
    await browserActions.waitForTimeout(5000);
    await  expect(await poManagementPage.isPoListDisplayed()).toBeTruthy();
}); 
test('TC003 Verify that clicking on view button the user should be able to view the details of the po',async({page}) => {
    await poManagementPage.clickonViewIcon();
    await browserActions.waitForTimeout(5000);
    await  expect(await poManagementPage.isViewDetailspageDisplayed()).toBeTruthy();

});
test('TC004 Verify that clicking on download button the user should be able to download the po details',async({page}) => {
await poManagementPage.clickOnDownloadPoButtons();
await browserActions.waitForTimeout(5000);
await  expect(await poManagementPage.isPoListDisplayed()).toBeTruthy();

})
test.only ('TC005 Verify that the filter functionality is working correctly ',async({page}) => {
    await poManagementPage.clickOnFiltersButton();
    await poManagementPage.selectStatusFilter('Draft');
    await poManagementPage.clickOnApplyFilterButton();
    await browserActions.waitForTimeout(5000);
    await  expect(await poManagementPage.isPoListDisplayed()).toBeTruthy();

})

test ('TC006 Verify that the user can clear the filter',async({page}) => {
    await poManagementPage.clickOnFiltersButton();
    await poManagementPage.selectStatusFilter('Draft');
    await poManagementPage.clickOnClearFilterButton();
    await browserActions.waitForTimeout(5000);
    await  expect(await poManagementPage.isPoListDisplayed()).toBeTruthy();

})

test ('TC007 Verify that the user can search for a particular po',async({page}) => {
    await poManagementPage.clickOnSearchBar('PO-250210074548');
    await browserActions.waitForTimeout(5000);
    await  expect(await poManagementPage.isPoListDisplayed()).toBeTruthy();

})
