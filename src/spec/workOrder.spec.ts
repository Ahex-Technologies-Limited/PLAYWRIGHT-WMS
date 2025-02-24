import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import {VehicleListPage} from '../pages/VehicleListPage';
import { WorkOrderPage } from '../pages/WorkOrderPage';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let page: Page;
let vehicleListPage: VehicleListPage;
let workOrderPage: WorkOrderPage;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  addWarehousePage = new AddWarehousePage(page);
  vehicleListPage = new VehicleListPage(page);
  workOrderPage = new WorkOrderPage(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
  await warehouseListPage.warehouseCard('Test Warehouse');
  await workOrderPage.clickOnVehicleManagementSubMenu();
  await workOrderPage.clickOnWorkOrderSidebar();

});

test.afterEach(async () => {
  await driver.closeBrowser();
});
test('Verify that user is able to create work order', async () => {
    await workOrderPage.clickOnAddWorkOrderButton();
    await workOrderPage.selectVehicle('TS79776556');
    await workOrderPage.selectServiceType('Oil Change');
    await workOrderPage.selectPriorityLevel('Low');
    await workOrderPage.enterAssignedMechanic('Test Work Order Type');
    await workOrderPage.enterEstimatedCost('100');
    await workOrderPage.selectEstimatedCompletetionDate('22');
    await workOrderPage.enterIssueDescription('Test Work Order');
    await workOrderPage.enterAdditionalNotes('Test Additional Notes');
    await workOrderPage.enterPartsRequired('Test Parts Required');
    await workOrderPage.uploadAttachments('download (1).jpg');
    await workOrderPage.clickOnSubmitButton();
    await browserActions.waitForTimeout(5000);
    await expect(await workOrderPage.isWorkOrderListPageDisplayed()).toBeTruthy();
    
});

test.only('Verify that user is able to search for a work order', async () => {
    await workOrderPage.searchWorkOrder('Test Work Order');
    await browserActions.waitForTimeout(5000);
    await expect(await workOrderPage.isWorkOrderListPageDisplayed()).toBeTruthy();
    
});

