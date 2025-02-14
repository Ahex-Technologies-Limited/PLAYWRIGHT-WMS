import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { VehicleListPage } from '../pages/VehicleListPage';
import { DriversPage } from '../pages/DriversPage';
import { FuelManagementPage } from '../pages/FuelManagementPage';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let page: Page;
let vehicleListPage: VehicleListPage;
let driversPage: DriversPage;
let fuelManagementPage: FuelManagementPage;
test.beforeEach(async () => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    vehicleListPage = new VehicleListPage(page);
    driversPage = new DriversPage(page);
    fuelManagementPage = new FuelManagementPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await fuelManagementPage.clickOnFuelManagementSubMenu();

});

test.afterEach(async () => {
    await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new fuel', async () => {
    await fuelManagementPage.clickOnAddFuelButton();
    await fuelManagementPage.selectVehicle(' MH12AB123');
    await fuelManagementPage.enterFuelType('Diesel');
    await fuelManagementPage.enterMeterReading('1000');
    await fuelManagementPage.enterFuelConsumed('50');
    await fuelManagementPage.selectCurrency('Saudi Riyal');
    await fuelManagementPage.enterAmount('10');
    await fuelManagementPage.selectPurchaseDate('2022-01-01');
    await fuelManagementPage.uploadReferenceImage('src\resources\download.jpg');
    await fuelManagementPage.clickOnAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await fuelManagementPage.isSuccessMessageForAddFuelDisplayed()).toBeTruthy();
});

test('TC002 Verify that user can search for a fuel', async () => {
    await fuelManagementPage.searchFuel('Diesel');
    await browserActions.waitForTimeout(5000);
    await expect(await fuelManagementPage.isFuelListDisplayed()).toBeTruthy();
});

test('TC003 Verify that user can view fuel details', async () => {
    await fuelManagementPage.clickOnViewButton();
    await browserActions.waitForTimeout(5000);
    await expect(await fuelManagementPage.isDetailsPageDisplayed()).toBeTruthy();
});

test('TC004 Verify that user can edit fuel details', async () => {
    await fuelManagementPage.clickOnEditButton();
    await fuelManagementPage.enterAmount('20');
    await fuelManagementPage.clickOnUpdateButton();
    await browserActions.waitForTimeout(5000);
    await expect(await fuelManagementPage.isSuccessMessageForUpdateFuelDisplayed()).toBeTruthy();
});

test('TC005 Verify that user can delete a fuel', async () => {
    await fuelManagementPage.clickOnDeleteButton();
    const yesButton = await page.waitForSelector(`//button[text()=' Yes ']`);
    await yesButton.click();
    await browserActions.waitForTimeout(5000);
    await expect(await fuelManagementPage.isSuccessMessageForDeleteFuelDisplayed()).toBeTruthy();
});

test('TC006 Verify that by cicking on click to view in the list page the user can able to see the uploaded image', async () => {
    await fuelManagementPage.clickOnViewButtonInListPage();
    await browserActions.waitForTimeout(5000);
    const image = await page.waitForSelector('src\resources\download (1).jpg');
    await expect(image).toBeTruthy();
});

test('TC007 Verify that by clicking on click to view in the update page the user can able to see the uploaded image', async () => {

    await fuelManagementPage.clickOnViewButtonInUpdatePage();
    await browserActions.waitForTimeout(5000);
    const image = await page.waitForSelector('src\resources\download (1).jpg');
    await expect(image).toBeTruthy();
});

test('TC008 Verify that by clicking on click to view in the details page the user can able to see the uploaded image', async () => {
    await fuelManagementPage.clickOnViewButtonInDetailsPage();
    await browserActions.waitForTimeout(5000);
    const image = await page.waitForSelector('src\resources\download (1).jpg');
    await expect(image).toBeTruthy();
});

