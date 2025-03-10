import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { IncomingShipmentsListPage } from '../pages/IncomingShipmentsListPage';
import { OutgoingShipmentPage } from '../pages/OutgoingShipmentPage';
import { OrderListPage } from '../pages/OrderListPage';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let page: Page;
let incomingShipmentsListPage: IncomingShipmentsListPage;
let outgoingshipmentListPage: OutgoingShipmentPage;
let orderListPage: OrderListPage;

test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    orderListPage = new OrderListPage(page);
    incomingShipmentsListPage = new IncomingShipmentsListPage(page);
    outgoingshipmentListPage = new OutgoingShipmentPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    

});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
});


test('TC001 verify that user can add an outgoing shipment', async () => {
    await outgoingshipmentListPage.clickOnShipmentsSideBar();
    await outgoingshipmentListPage.clickOnOutgoingShipmentsSideBar();
    await outgoingshipmentListPage.clickOnAddOutgoingShipmentButton();
    await outgoingshipmentListPage.selectShippingDate('2025-3-26');
    await outgoingshipmentListPage.selectExpectedDeliveryDate('2025-3-28');
    await outgoingshipmentListPage.selectLoadingStartTime('11:00');
    await outgoingshipmentListPage.selectLoadingEndTime('14:00');
    await outgoingshipmentListPage.selectOrderNo('ORD-250204054916');
    await outgoingshipmentListPage.enterTrackingNumber('123456789');
    await outgoingshipmentListPage.selectCarrierName('Carrier 1');
    await outgoingshipmentListPage.enterShipmentNumber('SHIP123');
    await outgoingshipmentListPage.enterNumberOfPackages('5');
    await outgoingshipmentListPage.selectDockDoor('Dock Door 2');
    await outgoingshipmentListPage.enterAddress('123 Main St');
    await outgoingshipmentListPage.selectCountry('India');
    await outgoingshipmentListPage.enterCity('New York');
    await outgoingshipmentListPage.enterState('NY');
    await outgoingshipmentListPage.enterPincode('10001');
    await outgoingshipmentListPage.enterRemarks('Handle with care');
    await outgoingshipmentListPage.clickNextButtonInShipmentDetails();
    await outgoingshipmentListPage.clickNextButtonInPackage();
    await outgoingshipmentListPage.uploadPackagingList('./src/resources/packing-slip.png');
    await outgoingshipmentListPage.clickSaveButton();
    expect(await outgoingshipmentListPage.successMessageForAddOutgoingShipment()).toBeTruthy();
});

test('TC002 verify that user can edit an outgoing shipment', async () => {
    await outgoingshipmentListPage.clickOnShipmentsSideBar();
    await outgoingshipmentListPage.clickOnOutgoingShipmentsSideBar();
    await outgoingshipmentListPage.clickOnOutgoingShipmentsList();
    await outgoingshipmentListPage.clickEditButton();
    await outgoingshipmentListPage.enterRemarks('Updated remarks');
    await outgoingshipmentListPage.clickUpdateButton();
    await browserActions.waitForTimeout(5000);
    expect(await outgoingshipmentListPage.isOutgoingShipmentListPageDisplayed()).toBeTruthy();
});

test('TC003 verify that user can delete an outgoing shipment', async () => {
    await outgoingshipmentListPage.clickOnShipmentsSideBar();
    await outgoingshipmentListPage.clickOnOutgoingShipmentsSideBar();
    await outgoingshipmentListPage.clickOnOutgoingShipmentsList();
    await outgoingshipmentListPage.clickDeleteButton();
    await outgoingshipmentListPage.clickYesButton();
    await browserActions.waitForTimeout(5000);
    expect(await outgoingshipmentListPage.isOutgoingShipmentListPageDisplayed()).toBeFalsy();
});

test('TC004 verify that user can view incoming shipment details', async () => {
    await outgoingshipmentListPage.clickOnShipmentsSideBar();
    await outgoingshipmentListPage.clickOnOutgoingShipmentsSideBar();
    await outgoingshipmentListPage.clickOnOutgoingShipmentsList();
    await outgoingshipmentListPage.clickViewButton();
    await browserActions.waitForTimeout(5000);
    expect(await outgoingshipmentListPage.isViewdetailsPageDisplayed()).toBeTruthy();
});

test('TC005 verify that user can search for an outgoing shipment', async () => {
    await outgoingshipmentListPage.clickOnShipmentsSideBar();
    await outgoingshipmentListPage.clickOnOutgoingShipmentsSideBar();
    await outgoingshipmentListPage.clickonSearchBar('SHIP123');
    await browserActions.waitForTimeout(5000);
    expect(await outgoingshipmentListPage.isOutgoingShipmentListPageDisplayed()).toBeTruthy();
});

test('TC006 verify that user can change the status of an outgoing shipment', async () => {
    await outgoingshipmentListPage.clickOnShipmentsSideBar();
    await outgoingshipmentListPage.clickOnOutgoingShipmentsSideBar();
    await outgoingshipmentListPage.clickOnOutgoingShipmentsList()
    await outgoingshipmentListPage.selectStatus('Delivered');
    await browserActions.waitForTimeout(5000);
    expect(await outgoingshipmentListPage.isOutgoingShipmentListPageDisplayed()).toBeTruthy();
});
