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
import { QualityCheckPage } from '../pages/QualityCheckPage';


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
let qualityCheckPage: QualityCheckPage;

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
    qualityCheckPage = new QualityCheckPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
   await qualityCheckPage.clickOnOperationsSideBar();
   await qualityCheckPage.clickOnQualityCheckSidebar();
    
});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
});

test('TC001 Verify that Quality Check page is displayed', async ({ page }) => {
    await expect(await qualityCheckPage.isQualityCheckListDisplayed()).toBeTruthy();
});

test('TC002 Verify that the user should be able to add a new quality check', async ({ page }) => {
    await qualityCheckPage.clickOnQualityCheckAddButton();
    await qualityCheckPage.selectQualityCheckType('Outbound');
    await qualityCheckPage.selectStatus('In Progress');
    await qualityCheckPage.selectQualityCheckDate('2023-10-12');
    await qualityCheckPage.selectInspectorName('Test Inspector');
    await qualityCheckPage.selectAssignedTo('Test Assignee');
    await qualityCheckPage.clickOnNextButtonInGeneralInfo();
    await qualityCheckPage.clickOnNextButtonInItemDetails();
    await qualityCheckPage.clickOnViewBoxInQualityCheckedItemsPage();
    await qualityCheckPage.enterQuantityChecked('10');
    await qualityCheckPage.enterQuantityPassed('5');
    await qualityCheckPage.enterQuantityFailed('5');
    await qualityCheckPage.selectQualityCheckedItemStatus('5');
    await qualityCheckPage.clickOnNextButtonInQualityCheckedItemsPage();
    await qualityCheckPage.clickOnViewBoxInDisposition();
    await qualityCheckPage.selectDispositionType('Return');
    await qualityCheckPage.enterQuantityAffected('5');
    await qualityCheckPage.selectStatusInDisposition('Returned');
    await qualityCheckPage.clickOnNextButtonInDisposition();
    await qualityCheckPage.clickOnNextButtonInDocumentation();
    await expect(await qualityCheckPage.isSuccessMessageForNewQualityCheckDisplayed()).toBeTruthy();


});


