
import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { ProductListPage } from '../pages/ProductListPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let productListPage: ProductListPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  productListPage = new ProductListPage(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new product', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await productListPage.clickOnProductManagementSubMenu();
  await productListPage.clickOnProductSideBar();
  await productListPage.clickOnAddProductButton();

  await productListPage.enterProductName('Product 4');
  await productListPage.selectProductCategory('Fashion');
  await productListPage.selectSubCategory('KIDS CLOTHING');
  await productListPage.selectUOM('Meter');
  await productListPage.enterDescription('Test description 2');
  await productListPage.clickNextButtonInProductDetails();
  await productListPage.selectAttributes('Attribute 7');
  await productListPage.enterValues('red');
  await productListPage.clickConfigureButton();
  await productListPage.enterReorderLevel('12');
  await productListPage.enterQuantity('1234');
  await productListPage.clickNextButtonInAttributes();
  await productListPage.clickAddButtonInSupplier();

  await expect(await productListPage.isProductListPageDisplayed()).toBeTruthy();
});

test('TC002 Verify that the user should be able to search for a product', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await productListPage.clickOnProductManagementSubMenu();
  await productListPage.clickOnProductSideBar();
  await productListPage.enterSearchBar('Product 4');

  await expect(await productListPage.isProductListPageDisplayed()).toBeTruthy();
});

test('TC003 Verify that the user should be able to edit a product', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await productListPage.clickOnProductManagementSubMenu();
  await productListPage.clickOnProductSideBar();
  //await productListPage.clickOnSwapIconForlistView();
  await productListPage.clickEditIcon();

  const nameInput = await page.locator(`//*[@formcontrolname='name']`);
  await nameInput.fill('Product 5');
  
  const selectBrandName = await page.locator(`//*[@formcontrolname='brand']`);
  await selectBrandName.click();
  
  const brandOption = await page.locator(`//span[contains(text(),'Brand 1')]`);
  await brandOption.click();

  await productListPage.clickNextButtonInProductDetails();
  await productListPage.clickNextButtonInAttributes();
  await productListPage.clickAddButtonInSupplier();

  await expect(await productListPage.isProductListPageDisplayed()).toBeTruthy();
});

test('TC004 Verify that the user should be able to delete a product', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await productListPage.clickOnProductManagementSubMenu();
  await productListPage.clickOnProductSideBar();
  //await productListPage.clickOnSwapIconForlistView();
  await productListPage.clickDeleteIcon();
  await productListPage.clickYesButton();

  await expect(await productListPage.isProductListPageDisplayed()).toBeTruthy();
});

test('TC005 Verify that the user should be able to view the product details', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await productListPage.clickOnProductManagementSubMenu();
  await productListPage.clickOnProductSideBar();
  //await productListPage.clickOnSwapIconForlistView();
  await productListPage.clickViewIcon();

  await expect(await productListPage.isProductDetailsPageDisplayed()).toBeTruthy();
});

test('TC006 Verify that the user should be able to cancel the delete operation', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await productListPage.clickOnProductManagementSubMenu();
  await productListPage.clickOnProductSideBar();
  //await productListPage.clickOnSwapIconForlistView();
  await productListPage.clickDeleteIcon();
  await productListPage.clickNoButton();

  await expect(await productListPage.isProductListPageDisplayed()).toBeTruthy();
});

test('TC007 Verify that the user should be able to filter the product list', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await productListPage.clickOnProductManagementSubMenu();
  await productListPage.clickOnProductSideBar();
  await productListPage.clickFilterButton();
  //await productListPage.selectCatagoryInFilter('Fashion');
  await productListPage.clickApplyButtonInFilter();

  await expect(await productListPage.isProductListPageDisplayed()).toBeTruthy();
});

test('TC008 Verify that the user should be able to clear the filter', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await productListPage.clickOnProductManagementSubMenu();
  await productListPage.clickOnProductSideBar();
  await productListPage.clickFilterButton();
  //await productListPage.selectCatagoryInFilter('Fashion');
  await productListPage.clickClearButtonInFilter();

  await expect(await productListPage.isProductListPageDisplayed()).toBeTruthy();
});
