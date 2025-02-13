import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { VehicleListPage } from '../pages/VehicleListPage';
import { DriversPage } from '../pages/DriversPage';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let page: Page;
let vehicleListPage: VehicleListPage;
let driversPage: DriversPage;
test.beforeEach(async () => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    vehicleListPage = new VehicleListPage(page);
    driversPage = new DriversPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await driversPage.clickOnDriversManagementSidebar();
    await driversPage.clickOnDriversSideBar();
});

test.afterEach(async () => {
    await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new driver', async () => {
    await driversPage.clickOnAddDriverButton();
    await driversPage.enterDriverName('Test Driver');
    await driversPage.selectJoiningDate('2022-12-31');
    await driversPage.enterDriverPhoneNumber('+919876543210');
    await driversPage.enterDriverEmail('testdriver@gmail.com');
    await driversPage.enterPresentAddress('Test Address');
    await driversPage.enterPermanentAddress('Test Address');
    await driversPage.enterDriverLicenseNumber('DL1234567890');
    await driversPage.selectDriverLicenseExpiryDate('2023-12-31');
    await driversPage.enterEmergencyContactName('Test Emergency Contact');
    await driversPage.enterEmergencyContactPhoneNumber('+919876543210');
    // await driversPage.selectIdProof();
    // await driversPage.selectLicenceImageFront();
    // await driversPage.selectLicenceImageBack();
    await driversPage.clickOnAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(driversPage.isSuccessMessageAfterAddingDriverDisplayed()).toBeTruthy();
});

test('TC002 Verify that after clicking on the edit button the user should be able to edit the driver details', async () => {
    await driversPage.clickOnEditButton();
    await browserActions.waitForTimeout(5000);
    await driversPage.enterDriverName('Updated Test Driver');
    await driversPage.clickOnUpdateButton();
    await browserActions.waitForTimeout(5000);
    await expect(driversPage.isSuccessMessageAfterUpdatingDriverDisplayed()).toBeTruthy();
});

test('TC003 Verify that after clicking on the view button the user should be able to view the driver details', async () => {
    await driversPage.clickOnViewButton();
    await browserActions.waitForTimeout(5000);
    await expect(driversPage.isDriverDetailsPageDisplayed()).toBeTruthy();
});

test('TC004 Verify that after clicking on the assign vehicle button the user should be able to assign the driver to a vehicle', async () => {
    await driversPage.clickOnAssignVehicleButton();
    await browserActions.waitForTimeout(5000);
    await driversPage.selectAssignVehicle('Test Vehicle');
    await driversPage.selectAssigneMentDate('02/13/2025');
    await driversPage.enterRemark('Test Remark');
   await driversPage.clickOnAssignButton();
    await browserActions.waitForTimeout(5000);
    await expect(driversPage.isSuccessMessageAfterAssigningVehicleDisplayed()).toBeTruthy();
});

test('TC005 Verify that after clicking on the status filter button the user should be able to filter the drivers based on their status', async () => {
    await driversPage.clickOnFilterButton();
    await driversPage.selectStatusFilter("Active");
    await driversPage.clickOnApplyFilterButton();
    await browserActions.waitForTimeout(5000);
    await expect(driversPage.isDriversListPageDisplayed()).toBeTruthy();
});

test('TC006 Verify that after clicking on the clear filter button the user should be able to clear the filter', async () => {
    await driversPage.clickOnFilterButton();
    await driversPage.selectStatusFilter("Active");
    await driversPage.clickOnApplyFilterButton();
    await driversPage.clickOnClearFilterButton();
    await browserActions.waitForTimeout(5000);
    await expect(driversPage.isDriversListPageDisplayed()).toBeTruthy();
});

test.only('TC007 Verify that after clicking on the search bar the user can search for a particular driver', async () => {
    await driversPage.typeInSearchBar('Test Driver');
    await browserActions.waitForTimeout(5000);
    await expect(driversPage.isDriversListPageDisplayed()).toBeTruthy();
});

   
