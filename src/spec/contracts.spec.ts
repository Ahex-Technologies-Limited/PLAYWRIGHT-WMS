import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { ContractsListPage } from '../pages/ContractsListPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let contractsListPage: ContractsListPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  contractsListPage = new ContractsListPage(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new contract', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await contractsListPage.clickOperationSideBar();
  await contractsListPage.clickContractsSideBar();
  await contractsListPage.clickAddContractsButton();
  await browserActions.waitForTimeout(5000);
  await contractsListPage.selectStartDate('02-12-2024');
  await contractsListPage.selectEndDate('09-12-2024');
  await contractsListPage.selectCarrierName('Carrier 2');
  await contractsListPage.selectContractType('Fixed-Price Contract');
  await contractsListPage.selectDeliveryType('Standard Delivery');
  await contractsListPage.selectDeliveryMode('Air Freight');
  await contractsListPage.clickNextButtonContractInfo();
  await contractsListPage.clickCreateButtonInContractAttachment();
  await browserActions.waitForTimeout(5000);
  await expect(await contractsListPage.isContractListDisplayed()).toBeTruthy();
});

test('TC002 Verify that the user should be able to search for a contract', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await contractsListPage.clickOperationSideBar();
  await contractsListPage.clickContractsSideBar();
  await contractsListPage.enterSearchContract('Carrier 1');
  await browserActions.waitForTimeout(5000);
  await expect(await contractsListPage.isContractListDisplayed()).toBeTruthy();
});

test('TC003 Verify that the user should be able to edit a contract', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await contractsListPage.clickOperationSideBar();
  await contractsListPage.clickContractsSideBar();
  await contractsListPage.clickEditionButton();
  await browserActions.waitForTimeout(5000);
  await contractsListPage.selectContractType('Fixed-Price Contract');
  await contractsListPage.clickNextButtonContractInfo();
  await contractsListPage.clickUpdateButtonInContractAttachment();
  await browserActions.waitForTimeout(5000);
  await expect(await contractsListPage.isContractListDisplayed()).toBeTruthy();
});

test('TC004 Verify that the user should be able to view the details of the selected contract', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await contractsListPage.clickOperationSideBar();
  await contractsListPage.clickContractsSideBar();
  await browserActions.waitForTimeout(5000);
  await contractsListPage.clickViewButton();
  await browserActions.waitForTimeout(5000);
  await expect(await contractsListPage.isContractListDisplayed()).toBeTruthy();
});

test('TC005 Verify that the user should be able to edit the selected contract in the view details page', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await contractsListPage.clickOperationSideBar();
  await contractsListPage.clickContractsSideBar();
  await contractsListPage.clickViewButton();
  await contractsListPage.clickEditIconInViewContract();
  await browserActions.waitForTimeout(5000);
  await contractsListPage.selectCarrierName('Carrier 1');
  await contractsListPage.clickNextButtonContractInfo();
  await contractsListPage.clickUpdateButtonInContractAttachment();
  await browserActions.waitForTimeout(5000);
  await expect(await contractsListPage.isContractListDisplayed()).toBeTruthy();
});

test('TC006 Verify that the user should be able to search for the contract', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await contractsListPage.clickOperationSideBar();
  await contractsListPage.clickContractsSideBar();
  await contractsListPage.enterSearchContract('Contract 1');
  await browserActions.waitForTimeout(5000);
  await expect(await contractsListPage.isContractListDisplayed()).toBeTruthy();
});

test('TC007 Verify that the user should be able to change the status of the selected contract', async () => {
  await warehouseListPage.warehouseCard('Test Warehouse');
  await contractsListPage.clickOperationSideBar();
  await contractsListPage.clickContractsSideBar();
  await contractsListPage.changeStatus('Active');
  await browserActions.waitForTimeout(5000);
  await expect(await contractsListPage.isContractListDisplayed()).toBeTruthy();
});
