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
    await loadManagementPage.clickOnLoadListSubMenu();
    await browserActions.waitForTimeout(5000);
    await expect(await loadManagementPage.isNoLoadAddedTextDisplayed()).toBeTruthy();
});
test('TC002 Verify that user is able to create a load', async () => {
    await loadManagementPage.clickOnSelectLoadButton();
    await loadManagementPage.selectCarrier('Carrier 1');
    await loadManagementPage.selectVehicle(`KA-01A2345`);
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
    await loadManagementPage.clickOnNextButtonInDeliveryInfoPage();
    await loadManagementPage.enterCostType('Flat Rate');
    await loadManagementPage.selectAmountUnit('INR');
    await loadManagementPage.enterAmount('100');
    await loadManagementPage.clickOnNextButtonInPricingandChargesPage();
    await loadManagementPage.enterTrackingNumber('ABC123');
    await loadManagementPage.selectPackages('PKG-250218074856');
    await loadManagementPage.clickOnAddButtonInTrackingInfoPage();
    await browserActions.waitForTimeout(5000);
    await expect (await loadManagementPage.isLoadListPageDisplayed()).toBeTruthy();


});
test('TC003 Verify that user is able to view the added load data in the load list', async () => {
    await loadManagementPage.clickOnLoadManagementSubMenu();
    await loadManagementPage.clickOnLoadListSubMenu();
    await browserActions.waitForTimeout(5000);
    await expect(await loadManagementPage.isLoadListPageDisplayed()).toBeTruthy();
    await expect(await loadManagementPage.isLoadNumberDisplayed('LD-250218085922')).toBeTruthy();
    await expect(await loadManagementPage.isTrackingNumberDisplayed('53534234')).toBeTruthy();
    await expect(await loadManagementPage.isLoadDateDisplayed('Feb 20, 2025')).toBeTruthy();
    await expect(await loadManagementPage.isTotalWeightDisplayed('34.00 kg')).toBeTruthy();
    await expect(await loadManagementPage.isPickupAddressDisplayed('Test Address , Test City, Test State, AE, 12345')).toBeTruthy();
    await expect(await loadManagementPage.isDeliveryAddressDisplayed('123 Test Address , Test City, Test State, AE, 1234')).toBeTruthy();
    await expect(await loadManagementPage.isStatusDataDisplayed('Draft')).toBeTruthy();

});
test('TC004 Verify that user is able to edit the load', async () => {
    await loadManagementPage.clickOnLoadManagementSubMenu();
    await loadManagementPage.clickOnLoadListSubMenu();
    await browserActions.waitForTimeout(5000);
    await loadManagementPage.clickOnEditIcon();
    await loadManagementPage.enterName('Test Load Edited');
    await loadManagementPage.clickOnNextButtonInLoadDetailsPage();
    await loadManagementPage.clickOnNextButtonInPickUpInfoPage();
    await loadManagementPage.clickOnNextButtonInDeliveryInfoPage();
    await loadManagementPage.clickOnNextButtonInPricingandChargesPage();
    await loadManagementPage.clickOnUpdateButton();
    await browserActions.waitForTimeout(5000);
    await expect(await loadManagementPage.isLoadListPageDisplayed()).toBeTruthy();
    await expect(await loadManagementPage.isLoadNumberDisplayed('LD-250218085922')).toBeTruthy();
    await expect(await loadManagementPage.isTrackingNumberDisplayed('53534234')).toBeTruthy();
    await expect(await loadManagementPage.isLoadDateDisplayed('Feb 20, 2025')).toBeTruthy();
    await expect(await loadManagementPage.isTotalWeightDisplayed('34.00 kg')).toBeTruthy();
    await expect(await loadManagementPage.isPickupAddressDisplayed('Test Address, Test City, Test State, AE, 12345')).toBeTruthy();
    await expect(await loadManagementPage.isDeliveryAddressDisplayed('123 Test Address, Test City, Test State, AE, 1234')).toBeTruthy();
    await expect(await loadManagementPage.isStatusDataDisplayed('Draft')).toBeTruthy();
    
});
test('TC005 Verify that user is able to search for a load', async () => {
    await loadManagementPage.clickOnLoadManagementSubMenu();
    await loadManagementPage.clickOnLoadListSubMenu();
    await browserActions.waitForTimeout(5000);
    await loadManagementPage.enterOnSearchBar('Test Load Edited');
    await browserActions.waitForTimeout(5000);
    await expect(await loadManagementPage.isLoadListPageDisplayed()).toBeTruthy();
});
test('TC006 Verify that user is able to filter the load', async () => {
    await loadManagementPage.clickOnLoadManagementSubMenu();
    await browserActions.waitForTimeout(5000);
    await loadManagementPage.clickOnFilterButton();
    await loadManagementPage.selectStatusFilter('Draft');
    await loadManagementPage.clickOnFilterApplyButton();
    await browserActions.waitForTimeout(5000);
    await expect(await loadManagementPage.isLoadListPageDisplayed()).toBeTruthy();
    await expect(await loadManagementPage.isStatusDataDisplayed('Draft')).toBeTruthy();
});
test('TC007 Verify that user is able to assign load to vehicle', async () => {
    await loadManagementPage.clickOnLoadManagementSubMenu();
    await loadManagementPage.clickOnLoadListSubMenu();
    await browserActions.waitForTimeout(5000);
    await loadManagementPage.clickOnAssignVehicleIcon();
    await loadManagementPage.selectAssignVehicle('KA-01A2345');
    await loadManagementPage.selectAssignDate('25');
    await loadManagementPage.clickOnAssignButton();
    await browserActions.waitForTimeout(5000);
    await expect(await loadManagementPage.isLoadListPageDisplayed()).toBeTruthy();

});






  

