import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { SupplierManagementPage } from '../pages/SupplierManagement.page';



let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let supplierManagementPage: SupplierManagementPage;

test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    supplierManagementPage = new SupplierManagementPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
});

test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
});

test('TC001 Verify that Supplier Management page is displayed', async ({ page }) => {
    await supplierManagementPage.clickOnSupplierManagementSideBar();
    await page.waitForTimeout(5000);
    expect(await supplierManagementPage.isSupplierPageDisplayed()).toBeTruthy();
});

test('TC002 Verify that after clicking on the Add button the user should be able to add a new supplier', async ({ page }) => {
    await supplierManagementPage.clickOnSupplierManagementSideBar();
    await supplierManagementPage.clickOnAddSupplierButton();
    await supplierManagementPage.enterSupplierName('Test Supplier');
    await supplierManagementPage.enterSupplierEmail('test@gmail.com');
    await supplierManagementPage.selectCountryCode('+91');
    await supplierManagementPage.enterSupplierPhoneNumber('1234567890');
    await supplierManagementPage.enterTaxId('1234567890');
    await supplierManagementPage.selectCurrency('Indian Rupee');
    await supplierManagementPage.selectPaymentMethods('Credit Card');
    await browserActions.waitForTimeout(3000);
    await supplierManagementPage.clickOnMarkAsPrimaryCheckbox();
    await supplierManagementPage.enterPrimaryContactName('Test Contact');
    await supplierManagementPage.enterPrimaryContactEmail('test@gmail.com');
    await supplierManagementPage.clickOnNextButtonInSupplierInfo();
    await supplierManagementPage.enterAddressLine1('Test Address');
    await supplierManagementPage.enterAddressLine2('Test Address');
    await supplierManagementPage.selectCountry('Saudi Arabia');
    await supplierManagementPage.enterState('Test State');
    await supplierManagementPage.enterCity('Test City');
    await supplierManagementPage.enterPinCode('875656');
    await supplierManagementPage.clickOnMarkAsMailingAddressCheckbox();
    await supplierManagementPage.enterMailingAddressLine1('Test Address');
    await supplierManagementPage.enterMailingAddressLine2('Test Address');
    await supplierManagementPage.selectMailingCountry('Kuwait');
    await supplierManagementPage.enterMailingState('Test State');
    await supplierManagementPage.enterMailingCity('Test City');
    await supplierManagementPage.enterMailingPinCode('875656');
    await supplierManagementPage.clickOnNextButtonInSupplierAddress();
    await supplierManagementPage.clickOnMarkAsPrimarycheckboxInFinancialInfo();
    await supplierManagementPage.enterBenificiaryName('Test Benificiary');
    await supplierManagementPage.enterBankAccountNumber('1234567890');
    await supplierManagementPage.enterBankName('Test Bank');
    await supplierManagementPage.enterBankAddress('Test Address');
    await supplierManagementPage.enterBankBranchCode('123456');
    await supplierManagementPage.enterIBAN('1234567890');
    await supplierManagementPage.enterSwiftCode('123456');
    await supplierManagementPage.clickOnNextButtonInSupplierFinancialInfo();
    await supplierManagementPage.selectStartDate('2025-0-7');
    await supplierManagementPage.selectEndDate('2025-0-23');
    await supplierManagementPage.enterDescription('Test Description');
    await supplierManagementPage.selectSku('cK3tCOYuLp');
    await supplierManagementPage.enterDiscount('10');
    await supplierManagementPage.clickOnUploadButton();
    await supplierManagementPage.clickOnUploadAnnexuresOrAttachments('path/to/annexure.jpg');
    await supplierManagementPage.clickOnUploadProofOfSigningAuthority('path/to/proof.jpg');
    await supplierManagementPage.clickOnUploadSupplierAgreement('path/to/agreement.jpg');
    await supplierManagementPage.clickOnNextButtonInContactInfo();
    await supplierManagementPage.clickOnAddButtonInComplianceAndDocumentation();
    await page.waitForTimeout(5000);
    expect(await supplierManagementPage.isSupplierPageDisplayed()).toBeTruthy();
});

test('TC003 Verify that after clicking on the edit button the user should be able to edit the Supplier details', async ({ page }) => {
    await supplierManagementPage.clickOnSupplierManagementSideBar();
    await supplierManagementPage.clickOnEditIcon();
    await supplierManagementPage.enterSupplierName('Test Supplier Updated');
    await supplierManagementPage.clickOnUpdateButton();
    await page.waitForTimeout(5000);
    expect(await supplierManagementPage.isSupplierPageDisplayed()).toBeTruthy();

});

test('TC004 Verify that after clicking on the view button the user should be able to view the selected supplier details', async ({ page }) => {
    await supplierManagementPage.clickOnSupplierManagementSideBar();
    await supplierManagementPage.clickOnViewIcon();
    await page.waitForTimeout(5000);
    expect(await supplierManagementPage.isSupplierDetailsDisplayed()).toBeTruthy();
});

test('TC005 Verify that after clicking on the search bar the user should be able to search for a supplier', async ({ page }) => {
    await supplierManagementPage.clickOnSupplierManagementSideBar();
    await supplierManagementPage.enterInSearchBar('Supplier');
    await page.waitForTimeout(5000);
    expect(await supplierManagementPage.isSupplierPageDisplayed()).toBeTruthy();
});
