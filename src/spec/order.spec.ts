import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { OrderListPage } from '../pages/OrderListPage';  



let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let orderListPage: OrderListPage;   

test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    orderListPage = new OrderListPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
});
test('TC001 Verify that Order List page is displayed', async ({ page }) => {
    await orderListPage.clickOnOrderManagementSubMenu();
    await orderListPage.clickOnOrderSideBar();
    await page.waitForTimeout(5000);
    await expect(await orderListPage.isOrderListPageDisplayed()).toBeTruthy();
});
test('TC002 Verify that after clicking on the Add button the user should be able to add a new order', async ({ page }) => {
    await orderListPage.clickOnOrderManagementSubMenu();
    await orderListPage.clickOnOrderSideBar();
    await orderListPage.clickOnOrderAddButton();
    await page.waitForTimeout(3000);
    await orderListPage.selectOrderDate('2021-12-30');
    await orderListPage.enterContactNumber('1234567890');
    await orderListPage.enterCustomerName('Test Customer');
    await orderListPage.enterEmail('3iC2o@example.com');
    await orderListPage.selectPaymentMethod('Debit Card');
    await orderListPage.selectOrderType('Mobile Orders');
    await orderListPage.selectOrderPriority('Low');
    await orderListPage.clickNextButtonInOrderDetailsPage();
    await page.waitForTimeout(3000);
    await orderListPage.enterAddress('Test Address');
    await orderListPage.selectCountry('India');
    await orderListPage.enterCity('Test City');
    await orderListPage.enterState('Test State');
    await orderListPage.enterPincode('875656');
    await orderListPage.clickSameAsShippingAddressLink();
    await orderListPage.clickNextButtonInAddress();
    await page.waitForTimeout(3000);
    await orderListPage.selectSku('cK3tCOYuLp');
    await orderListPage.enterQuantity('1');
    await orderListPage.clickOnVerifyButton();
    await orderListPage.enterDiscount('10');
    await orderListPage.enterTaxAmount('10');
    await orderListPage.clickAddButon();
    await page.waitForTimeout(3000);
    await expect(await orderListPage.isOrderListPageDisplayed()).toBeTruthy();
});
test('TC003 Verify that the user should be able to search for an order', async ({ page }) => {
    await orderListPage.clickOnOrderManagementSubMenu();
    await orderListPage.clickOnOrderSideBar();
    await orderListPage.clickOnSearchBar('Test Customer');
    await page.waitForTimeout(3000);
    await expect(await orderListPage.isOrderListPageDisplayed()).toBeTruthy();
});
test('TC004 Verify that the user should be able to view the order details', async ({ page }) => {
    await orderListPage.clickOnOrderManagementSubMenu();
    await orderListPage.clickOnOrderSideBar();
    await orderListPage.clickOnViewIcon();
    await page.waitForTimeout(3000);
    await expect(await orderListPage.isOrderDetailsPageDisplayed()).toBeTruthy();
});
test('TC005 Verify that the user should be able to edit an order', async ({ page }) => {
    await orderListPage.clickOnOrderManagementSubMenu();
    await orderListPage.clickOnOrderSideBar();
    await orderListPage.clickOnOrderEditButton();
    await page.waitForTimeout(3000);
    await orderListPage.enterCustomerName('Test Customer');
    await orderListPage.clickUpdateButton();
    await page.waitForTimeout(3000);
    await expect(await orderListPage.isOrderListPageDisplayed()).toBeTruthy();
});

test('TC006 Verify that the user should be able to filter an order based on the orderStatus', async ({ page }) => {
    await orderListPage.clickOnOrderManagementSubMenu();
    await orderListPage.clickOnOrderSideBar();
    await orderListPage.clickOnFilterButton();
    await orderListPage.selectStatusFilter('Processing');
    await orderListPage.clickOnFilterApplyButton();
    await page.waitForTimeout(3000);
    await expect(await orderListPage.isOrderListPageDisplayed()).toBeTruthy();
});