import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { QuotationPage } from '../pages/QuotationPage';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let quotationPage: QuotationPage;

test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    quotationPage = new QuotationPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await quotationPage.clickOnQuotationSideBar();


});
test.afterEach(async () => {
    await driver.closeBrowser();
});
test('TC001 Verify that the user can add new quotation by clicking on add button', async () => {
    await quotationPage.clickOnQuotationAddButton();
    await quotationPage.selectValidDate('12');
    await quotationPage.enterCustomerName('Customer 1');
    await quotationPage.enterEmailAddress('customer@example.com');
    await quotationPage.enterPhoneNumber('8965852365');
    await quotationPage.enterContactPerson('Test person');
    await quotationPage.enterAddress('address');
    await quotationPage.selctCountry('India');
    await quotationPage.enterCity('city');
    await quotationPage.enterState('state');
    await quotationPage.enterPinCode('67890');
    await quotationPage.clickOnShippingAddressLink();
    await browserActions.waitForTimeout(200);
    await quotationPage.clickOnNextButtonInCustomerInformation();
    await quotationPage.selectSku('ELEC-ACCE-HACK-I23X');
    await quotationPage.enterPrice('100');
    await quotationPage.enterQuantity('1');
    await quotationPage.enterDiscount('5');
    await quotationPage.selectTaxType('VAT UAE');
    await quotationPage.selectTaxRate('5');
    await browserActions.waitForTimeout(200);
    await quotationPage.clickOnNextButtonInItemDetails();
    await quotationPage.enterReferenceNumber('ref123');
    await quotationPage.selectCurrency('SAR');
    await quotationPage.enterSalesRepresentative('Sales Representative 1');
    await quotationPage.enterProjectName('Project 1');
    await quotationPage.enterAuthorizedSignature('Signature 1');
    await quotationPage.enterCustomerSignature('Signature 2');
    await quotationPage.enterTermsAndConditions('Terms and conditions');
    await quotationPage.enterComments('Comments');
    await quotationPage.uploadInvoiceImage('download (1).jpg');
    await quotationPage.clickOnAddButtonInTermsandCondutions();
    await browserActions.waitForTimeout(5000);
    await expect (quotationPage.isQuotationListDisplayed()).toBeTruthy();
});

test('TC002 Verify that after clicking on the edit button the user should be able to edit the quotation details', async () => {
    await quotationPage.clickOnEditButton();
    await browserActions.waitForTimeout(5000);
    await quotationPage.enterCustomerName('Updated Customer 1');
    await quotationPage.clickOnUpdateButton();
    await browserActions.waitForTimeout(5000);
    await expect (quotationPage.isQuotationListDisplayed()).toBeTruthy();
});

test('TC003 Verify that after clicking on the downloadButton the user should be able to download the quotation details', async () => {
    await quotationPage.clickOnDownloadButton();
    await browserActions.waitForTimeout(5000);
    await expect (quotationPage.isSuccessfulDownloadMessageDisplayed()).toBeTruthy();
});
test('TC004 Verify that after clicking on the searchBar the user should be able to search for  the quotation details', async () => {
    await quotationPage.clickOnQuotationSearchBar();
    await browserActions.waitForTimeout(5000);
    await expect (quotationPage.isQuotationListDisplayed()).toBeTruthy();
});

test('TC005 Verify that after clicking on the filter button the user should be able to filter the quotation details', async () => {
    await quotationPage.clickOnFilterButton();
    await quotationPage.selectStatus('Pending');
    await browserActions.waitForTimeout(5000);
    await expect (quotationPage.isQuotationListDisplayed()).toBeTruthy();
});

