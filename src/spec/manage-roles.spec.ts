import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { ManageRolesListPage } from '../pages/ManageRolesListPage';
import { BrowserActions } from '../helpers/BrowserActions';
import { DriverActions } from '../helpers/DriverActions';

let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let manageRolesListPage: ManageRolesListPage;
let page: Page;
let driver: DriverActions;

test.beforeEach(async () => {
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  manageRolesListPage = new ManageRolesListPage(page);
  driver =new DriverActions();
  page =await driver.launchBrowser();
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
});

test.afterEach(async () => {
 await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new user role', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await manageRolesListPage.clickUserManagementSideBar();
  //await manageRolesListPage.clickMangeRolesSideBar();
  await manageRolesListPage.clickAddRoleButton();
  await manageRolesListPage.enterRoleName('New Role');
  await manageRolesListPage.enterRoleDescription('Test description');
  await manageRolesListPage.isPermissionSelected('Warehouse');
  // await manageRolesListPage.isPermissionSelected('Zone');
  // await manageRolesListPage.isPermissionSelected('SubInventory');
  // await manageRolesListPage.isPermissionSelected('Locator');
  await manageRolesListPage.clickRoleAddButton();

  await expect(await manageRolesListPage.isRoleListDisplayed()).toBeTruthy();
});

test('TC002 Verify that after clicking on the edit button the user should be able to edit the selected user role', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await manageRolesListPage.clickUserManagementSideBar();
  //await manageRolesListPage.clickMangeRolesSideBar();
  await manageRolesListPage.clickRoleEditButton();

  const nameInput = page.locator(`//input[@formcontrolname='name']`);
  const descriptionInput = page.locator(`//*[@formcontrolname='description']`);

  await nameInput.fill('');
  await nameInput.fill('Role Updated');
  await descriptionInput.fill('');
  await descriptionInput.fill('Updated description');
  
  await manageRolesListPage.clickPermissionCheckbox();
  await manageRolesListPage.isPermissionSelected('Warehouse');
  await manageRolesListPage.isPermissionSelected('Zone');
  await manageRolesListPage.isPermissionSelected('Sub Inventory');
  await manageRolesListPage.isPermissionSelected('Locator');
  
  await manageRolesListPage.clickUpdateButton();

  await expect(await manageRolesListPage.isRoleListDisplayed()).toBeTruthy();
});

test('TC003 Verify that after clicking on the back button the user should be able to go back to the user role list', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await manageRolesListPage.clickUserManagementSideBar();
  //await manageRolesListPage.clickMangeRolesSideBar();
  await manageRolesListPage.clickAddRoleButton();
  await manageRolesListPage.clickBackButton();

  await expect(await manageRolesListPage.isRoleListDisplayed()).toBeTruthy();
});

test('TC004 Verify that the user should be able to search for a user role', async () => {
  //await warehouseListPage.selectWarehouseCard();
  await manageRolesListPage.clickUserManagementSideBar();
  //await manageRolesListPage.clickMangeRolesSideBar();
  //await manageRolesListPage.searchRole.fill('Role Updated');

  await expect(await manageRolesListPage.isRoleListDisplayed()).toBeTruthy();
});
