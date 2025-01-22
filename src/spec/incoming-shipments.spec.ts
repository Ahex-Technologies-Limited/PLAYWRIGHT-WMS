import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { IncomingShipmentsListPage } from '../pages/IncomingShipmentsListPage';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let page: Page;
let incomingShipmentsListPage: IncomingShipmentsListPage;

test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    incomingShipmentsListPage = new IncomingShipmentsListPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
});

test.only('TC001 Verify adding a new incoming shipment', async () => {
    await warehouseListPage.warehouseCard('Test Warehouse');
    await browserActions.waitForTimeout(2000);
    await incomingShipmentsListPage.clickOnShipmentsSideBar();
    await incomingShipmentsListPage.clickOnIncomingShipmentsSideBar();
    await incomingShipmentsListPage.clickOnAddIncomingShipmentButton();
    await incomingShipmentsListPage.selectExpectedArrivalDate('12/31/2024 10:03');
    await incomingShipmentsListPage.enterCarrierName('Carrier1');
    await incomingShipmentsListPage.selectAssignTo('SupriyaTester');
    await incomingShipmentsListPage.selectCountryCode('India (+91)');
    await incomingShipmentsListPage.enterCarrierContactNumber('8976545567');
    await incomingShipmentsListPage.selectDockDoor('Dock Door 1');
    await incomingShipmentsListPage.enterTrackingNumber('1234');
    await incomingShipmentsListPage.selectSupplier('SupplierA');
    await incomingShipmentsListPage.clickNextButtonInShipmentDetails();
    await incomingShipmentsListPage.selectSku('hns2zvloF1');
    await incomingShipmentsListPage.enterOrderQuantity('1');
    await incomingShipmentsListPage.clickNextButtonInItems();
    await incomingShipmentsListPage.clickBillOfLandigUploadButton();
    await incomingShipmentsListPage.clickAddButtonInDocumentations();
    await browserActions.waitForTimeout(2000);
    await expect(await incomingShipmentsListPage.isIncomingShipmentsListPageDisplayed()).toBeTruthy();
});

test('TC002 Verify editing an incoming shipment', async () => {
    await warehouseListPage.warehouseCard('Test Warehouse');
    await incomingShipmentsListPage.clickOnShipmentsSideBar();
    await incomingShipmentsListPage.clickOnIncomingShipmentsSideBar();
    await incomingShipmentsListPage.clickOnEditIncomingShipmentButton();
    await incomingShipmentsListPage.selectExpectedArrivalDate('12/31/2024 10:03');
    await incomingShipmentsListPage.enterCarrierName('Carrier2');
    await incomingShipmentsListPage.selectAssignTo('SupriyaTester');
    await incomingShipmentsListPage.clickNextButtonInShipmentDetails();
    await browserActions.waitForTimeout(2000);
    await expect(await incomingShipmentsListPage.isIncomingShipmentsListPageDisplayed()).toBeTruthy();
});

test('TC003 Verify viewing details of an incoming shipment', async () => {
    await warehouseListPage.warehouseCard('Test Warehouse');
    await incomingShipmentsListPage.clickOnShipmentsSideBar();
    await incomingShipmentsListPage.clickOnIncomingShipmentsSideBar();
    await incomingShipmentsListPage.clickViewButton();
    await browserActions.waitForTimeout(2000);
    await expect(await incomingShipmentsListPage.isDetailsPageDispalyed()).toBeTruthy();
});

test('TC004 Verify searching for an incoming shipment', async () => {
    await warehouseListPage.warehouseCard('Test Warehouse');
    await incomingShipmentsListPage.clickOnShipmentsSideBar();
    await incomingShipmentsListPage.clickOnIncomingShipmentsSideBar();
    await incomingShipmentsListPage.clickOnsearchBar();
    await browserActions.waitForTimeout(2000);
    await expect(await incomingShipmentsListPage.isIncomingShipmentsListPageDisplayed()).toBeTruthy();
});

test('TC005 Verify changing the status of an incoming shipment', async () => {
    await warehouseListPage.warehouseCard('Test Warehouse');
    await incomingShipmentsListPage.clickOnShipmentsSideBar();
    await incomingShipmentsListPage.clickOnIncomingShipmentsSideBar();
    await incomingShipmentsListPage.selectStatus('In Transit');
    await browserActions.waitForTimeout(2000);
    await expect(await incomingShipmentsListPage.isIncomingShipmentsListPageDisplayed()).toBeTruthy();
});
