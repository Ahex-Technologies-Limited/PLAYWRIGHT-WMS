import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { UserManagementListPage } from '../pages/UserManagementListPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let userManagementListPage: UserManagementListPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  loginPage = new LoginPage(page);
  warehouseListPage = new WarehouseListPage(page);
  userManagementListPage = new UserManagementListPage(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await loginPage.login('tester@gmail.com', 'Supriya@12');
  await browserActions.openUrl('http://143.244.132.143:8200/#/admin/user-management/list');
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that after clicking on the add button the user should be able to add a new user', async () => {
//   await warehouseListPage.selectWarehouseCard();
//   await userManagementListPage.clickUserManagementSidebar();
//   await userManagementListPage.clickManageUserSidebar();
  await userManagementListPage.clickInviteUserButton();
  await userManagementListPage.enterUsername('TestUser');
  await userManagementListPage.selectUserRole('manager');
  await userManagementListPage.enterEmailId('supriyasahoo1399@gmail.com');
  await userManagementListPage.clickInviteUser();

  await expect(await userManagementListPage.isInvitationSent()).toBeTruthy();
});

test('TC002 Verify that after clicking on the view button the user should be able to view the details of the user', async () => {
//   await warehouseListPage.selectWarehouseCard();
//   await userManagementListPage.clickUserManagementSidebar();
//   await userManagementListPage.clickManageUserSidebar();
//   await userManagementListPage.clickViewUserButton();

  await expect(await userManagementListPage.isViewUserDisplayed()).toBeTruthy();
});

test('TC003 Verify that after clicking on the resend button the user should be able to resend the invitation to the user', async () => {
//   await warehouseListPage.selectWarehouseCard();
//   await userManagementListPage.clickUserManagementSidebar();
//   await userManagementListPage.clickManageUserSidebar();
//   await userManagementListPage.clickResendInviteButton();

  await expect(await userManagementListPage.isInvitationSent()).toBeTruthy();
});

test('TC004 Verify that after searching for a user the user should be able to view the user details', async () => {
//   await warehouseListPage.selectWarehouseCard();
//   await userManagementListPage.clickUserManagementSidebar();
//   await userManagementListPage.clickManageUserSidebar();
//   await userManagementListPage.searchUserInSidebar('TestUser');

  await expect(await userManagementListPage.isViewUserDisplayed()).toBeTruthy();
});

test('TC005 Verify that after clicking on the cancel button the user should be able to cancel the invitation', async () => {
//   await warehouseListPage.selectWarehouseCard();
//   await userManagementListPage.clickUserManagementSidebar();
//   await userManagementListPage.clickManageUserSidebar();
//   await userManagementListPage.clickInviteUserButton();
  await userManagementListPage.clickCancelInviteButton();

  await expect(await userManagementListPage.isInvitationSent()).toBeFalsy();
});
