import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { VehicleListPage } from '../pages/VehicleListPage';
import { DriversPage } from '../pages/DriversPage';
import { LoadManagementPage  } from '../pages/loadManagementPage';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let page: Page;
let vehicleListPage: VehicleListPage;
let driversPage: DriversPage;
let loadManagementPage: LoadManagementPage;
test.beforeEach(async () => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    vehicleListPage = new VehicleListPage(page);
    driversPage = new DriversPage(page);
    loadManagementPage = new LoadManagementPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await loadManagementPage.clickOnLoadManagementSubMenu();
    

});

test.afterEach(async () => {
    await driver.closeBrowser();
});

test('TC001 Verify that  befofe adding the Load the user should be able to view the no load added text', async () => {
    await loadManagementPage.clickOnLoadManagementSubMenu();
    await browserActions.waitForTimeout(5000);
    await expect(await loadManagementPage.isNoLoadAddedTextDisplayed()).toBeTruthy();
});
test.only('TC002 Verify that user is able to create a load', async () => {
    await loadManagementPage.clickOnSelectLoadButton();
    await loadManagementPage.selectCarrier('Carrier 1');
    await loadManagementPage.selectVehicle(' MH12AB123');
    await loadManagementPage.selectLoadDate('18');
    await loadManagementPage.enterName('Test Load');
    await loadManagementPage.enterReferenceNumber('123456');
    await loadManagementPage.selectLoadType('Full Truckload (FTL)');
    await loadManagementPage.selectWeightUnit('Kilograms (kg)');
    await loadManagementPage.enterWeight('1000');
    await loadManagementPage.selectVolumeUnit('Cubic Meters (m³)');
    await loadManagementPage.enterVolume('100');
    await loadManagementPage.selectStatus('Draft');
    await loadManagementPage.enterNumberOfPackages('10');
    await loadManagementPage.enterComments('Test Load');
    await loadManagementPage.clickOnNextButtonInLoadDetailsPage();
    await loadManagementPage.selectWarehouseForPickup('Warehouse2');
    await loadManagementPage.enterContactPersonforPickup('Test Person');
    await loadManagementPage.enterContactNumberforPickup('1234567890');
    await loadManagementPage.selectScheduledPickUpDateandTime('19');
    await loadManagementPage.clickOnNextButtonInPickUpInfoPage();
    await loadManagementPage.selectWarehouseForDelivery('Warehouse2');
    await loadManagementPage.enterContactPersonforDelivery('Test Person');
    await loadManagementPage.enterContactNumberforDelivery('1234567890');
    await loadManagementPage.selectScheduledDeliveryDateandTime('20');
    await browserActions.waitForTimeout(5000);
    await loadManagementPage.clickOnNextButtonInDeliveryInfoPage();
    await loadManagementPage.enterCostType('Flat Rate');
    await loadManagementPage.selectAmountUnit('INR');
    await loadManagementPage.enterAmount('100');
    await loadManagementPage.clickOnNextButtonInPricingandChargesPage();
    await loadManagementPage.enterTrackingNumber('ABC123');
    await loadManagementPage.selectPackages('Package 1');
    await loadManagementPage.clickOnAddButtonInTrackingInfoPage();
    await browserActions.waitForTimeout(5000);
    await expect (await loadManagementPage.isLoadListPageDisplayed()).toBeTruthy();
});


