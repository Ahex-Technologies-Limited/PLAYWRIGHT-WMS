import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import {VehicleListPage} from '../pages/VehicleListPage';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let page: Page;
let vehicleListPage: VehicleListPage;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  addWarehousePage = new AddWarehousePage(page);
  vehicleListPage = new VehicleListPage(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
  await warehouseListPage.warehouseCard('Test Warehouse');
  await vehicleListPage.clickOnVehicleManagementSubMenu();
  await vehicleListPage.clickOnVehicleListSideBar();

});

test.afterEach(async () => {
  await driver.closeBrowser();
});
test('TC001 Verify that user is able to see the vehicle list page', async () => {
  await vehicleListPage.isVehicleListPageDisplayed();
});
test('TC002 Verify that user is able to add a new vehicle ', async () => {
  await vehicleListPage.clickOnVehicleAddButton();
  await vehicleListPage.enterVehicleMaker('Honda');
  await vehicleListPage.enterVehicleModel('Civic');
  await vehicleListPage.selectVehicleType('Hatchback');
  await vehicleListPage.enterVehicleColor('Black');
  await vehicleListPage.enterPlateNumber('KA-01A2345');
  await vehicleListPage.enterVin('WBA1234567890');
  await vehicleListPage.enterRegistrationNumber('1234567890');
  await vehicleListPage.selectRegistrationExpiryDate('2025-0-7');
  await vehicleListPage.selectFuelType('Petrol');
  await vehicleListPage.enterMileage('10000');
  await vehicleListPage.selectCapacityUnit('Kilometers');
  await vehicleListPage.enterCapacity('10');
  await vehicleListPage.clickOnAddButton();
  await browserActions.waitForTimeout(5000);
  await expect(await vehicleListPage.isVehicleListPageDisplayed()).toBeTruthy();
});
test('TC003 Verify that user is able to edit a vehicle ', async () => {
  await vehicleListPage.clickOnEditButton();
  await vehicleListPage.enterVehicleColor('Red');
  await vehicleListPage.enterPlateNumber('KA-02A2345');
  await vehicleListPage.clickOnUpdateButton();
  await browserActions.waitForTimeout(5000);
  await expect(await vehicleListPage.isVehicleListPageDisplayed()).toBeTruthy();
});

test('TC004 Verify that user is able to see the vehicle list page with filter applied ', async () => {
    await vehicleListPage.clickOnFilterButton();
    await vehicleListPage.selectStatusFilter('Active');
    await vehicleListPage.clickOnFilterApplyButton();
    await expect(await vehicleListPage.isVehicleListPageDisplayed()).toBeTruthy();
});

test('TC005 Verify that user is able to see the vehicle list page with search applied ', async () => {
    await vehicleListPage.clickOnSearchBar('Honda');
    await expect(await vehicleListPage.isVehicleListPageDisplayed()).toBeTruthy();
});

test('TC006 Verify that user is able to see the vehicle list page with clear filter applied ', async () => {
    await vehicleListPage.clickOnFilterButton();
    await vehicleListPage.clickOnFilterClearButton();
    await expect(await vehicleListPage.isVehicleListPageDisplayed()).toBeTruthy();
});

test('TC007 Verify that user is able to add the vehicle Maintainance to the vehicle', async () => {
    await vehicleListPage.clickOnVehicleMaintainanceButton();
    await vehicleListPage.selectServiceType('Oil Change');
    await vehicleListPage.selectScheduledMonth('January');
    await vehicleListPage.selectScheduledDay('1');
    await vehicleListPage.enterMileageThershold('10000');
    await vehicleListPage.eneterServiceProvider('ABC Dealership');
    await vehicleListPage.enterEstimatedCost('1000');
    await vehicleListPage.enterDescription('Regular Maintenance');
    await vehicleListPage.clickOnReminderEnabledCheckbox();
    await vehicleListPage.clickOnSubmitButton();
    await browserActions.waitForTimeout(5000);
    await expect(await vehicleListPage.isVehicleListPageDisplayed()).toBeTruthy();
});

test('TC008 Verify that user is able to view the vehicle details ', async () => {
    await vehicleListPage.clickOnViewButton();
    await expect(await vehicleListPage.isDetailsPageDisplayed()).toBeTruthy();
});

test('TC009 Verify that user is able to edit the vehicle maintainance details ', async () => {
    await vehicleListPage.clickOnVehicleMaintainanceButton();
    await vehicleListPage.selectServiceType('Tire Rotation');
    await vehicleListPage.enterMileageThershold('20000');
    await vehicleListPage.eneterServiceProvider('XYZ Dealership');
    await vehicleListPage.enterEstimatedCost('2000');
    await vehicleListPage.enterDescription('Minor Maintenance');
    await vehicleListPage.clickOnReminderEnabledCheckbox();
    await vehicleListPage.clickOnUpdateButtonInVehicleMaintainanceService();
    await browserActions.waitForTimeout(5000);
    await expect(await vehicleListPage.isVehicleListPageDisplayed()).toBeTruthy();
});




    


