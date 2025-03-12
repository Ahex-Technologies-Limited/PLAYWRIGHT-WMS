import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BrowserActions } from '../helpers/BrowserActions';
import { DriverActions } from '../helpers/DriverActions';
import { CreateAccountPage } from '../pages/CreateAccountPage';
import { VALID_CREDENTIAL } from '../data/LoginData';

let browserActions: BrowserActions;
let loginPage: LoginPage;
let page: Page;
let driver: DriverActions;
let createAccountPage: CreateAccountPage;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  loginPage = new LoginPage(page);
  browserActions = new BrowserActions(page);
  createAccountPage = new CreateAccountPage(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/register');
  await browserActions.waitForTimeout(3000);
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that user should be able to create an account', async () => {
  await createAccountPage.enterFullName('Test User');
  await createAccountPage.enterCompanyName('Test Company');
  await createAccountPage.enterEmailAddress('test@gmail.com');
  await createAccountPage.enterPhoneNumber('1234567890');
  await createAccountPage.enterdomainName('testABC')
  await createAccountPage.enterPassword('Test@123');
  await createAccountPage.enterConfirmPassword('Test@123');
  await createAccountPage.clickSignUpButton();
  await browserActions.waitForTimeout(5000);
  await expect(await browserActions.isElementDisplayed(createAccountPage.selectAModulePage)).toBe(true);

});
test('TC002 Verify that user should be able to select warehouse management module', async () => {
  await createAccountPage.enterFullName('UserA');
  await createAccountPage.enterCompanyName('Comp');
  await createAccountPage.enterEmailAddress('supriya@mailinator.com');
  await createAccountPage.enterPhoneNumber('6985458525');
  await createAccountPage.enterdomainName('testABC')
  await createAccountPage.enterPassword('Test@123');
  await createAccountPage.enterConfirmPassword('Test@123');
  await createAccountPage.clickSignUpButton();
  await browserActions.waitForTimeout(5000);
  await expect(await browserActions.isElementDisplayed(createAccountPage.selectAModulePage)).toBe(true);
  await createAccountPage.clickWarehouseManagementCheckBox();
  await createAccountPage.clickTransportManagementCheckBox();
  await createAccountPage.clickOrderManagementCheckBox();
  await createAccountPage.clickContinueButton();
  await expect(await browserActions.isElementDisplayed(createAccountPage.successMessageAfterAddingModule)).toBe(true);
});
test('TC003 Verify that user should be able to select a plan', async () => {
  await createAccountPage.enterFullName('Test User');
  await createAccountPage.enterCompanyName('Test Company');
  await createAccountPage.enterEmailAddress('test@gmail.com');
  await createAccountPage.enterdomainName('testABC')
  await createAccountPage.enterPhoneNumber('1234567890');
  await createAccountPage.enterPassword('Test@123');
  await createAccountPage.enterConfirmPassword('Test@123');
  await createAccountPage.clickSignUpButton();
  await browserActions.waitForTimeout(5000);
  await expect(await browserActions.isElementDisplayed(createAccountPage.selectAModulePage)).toBe(true);
  await createAccountPage.clickWarehouseManagementCheckBox();
  await createAccountPage.clickTransportManagementCheckBox();
  await createAccountPage.clickOrderManagementCheckBox();
  await createAccountPage.clickContinueButton();
  await browserActions.waitForTimeout(5000);
  await expect(await browserActions.isElementDisplayed(createAccountPage.successMessageAfterAddingModule)).toBe(true);
  await createAccountPage.clickMonthlyTab();
  await createAccountPage.clickChoosePlanINMonthly();
  await createAccountPage.clickMakeAPaymentButton();
  await browserActions.waitForTimeout(5000);
  await expect(await browserActions.isElementDisplayed(createAccountPage.successMessageAfterplanSelect)).toBe(true);
});

test('TC004 Verify that user should redirect to the login page after creating an account', async () => {
  await createAccountPage.enterFullName('Test User');
  await createAccountPage.enterCompanyName('Test Company');
  await createAccountPage.enterEmailAddress('test@gmail.com');
  await createAccountPage.enterPhoneNumber('1234567890');
  await createAccountPage.enterdomainName('testABC')
  await createAccountPage.enterPassword('Test@123');
  await createAccountPage.enterConfirmPassword('Test@123');
  await createAccountPage.clickSignUpButton();
  await browserActions.waitForTimeout(5000);
  await expect(await browserActions.isElementDisplayed(createAccountPage.selectAModulePage)).toBe(true);
  await createAccountPage.clickWarehouseManagementCheckBox();
  await createAccountPage.clickTransportManagementCheckBox();
  await createAccountPage.clickOrderManagementCheckBox();
  await createAccountPage.clickContinueButton();
  await browserActions.waitForTimeout(5000);
  await expect(await browserActions.isElementDisplayed(createAccountPage.successMessageAfterAddingModule)).toBe(true);
  await createAccountPage.clickMonthlyTab();
  await createAccountPage.clickChoosePlanINMonthly();
  await createAccountPage.clickMakeAPaymentButton();
  await browserActions.waitForTimeout(5000);
  await expect(await browserActions.isElementDisplayed(createAccountPage.successMessageAfterplanSelect)).toBe(true);
  await createAccountPage.clickLogInLink();
  await browserActions.waitForTimeout(5000);
  await expect(await browserActions.isElementDisplayed(createAccountPage.logInPage)).toBe(true);

});
test('TC005 Verify that user can not create an account with an existing email id', async () => {
  await createAccountPage.enterFullName('Test User');
  await createAccountPage.enterCompanyName('Test Company');
  await createAccountPage.enterEmailAddress('test@gmail.com');
  await createAccountPage.enterPhoneNumber('1234567890');
  await createAccountPage.enterdomainName('testABC')
  await createAccountPage.enterPassword('Test@123');
  await createAccountPage.enterConfirmPassword('Test@123');
  await createAccountPage.clickSignUpButton();
  await browserActions.waitForTimeout(5000);
 await expect (await createAccountPage.errorMessageForInvalidCredentialsIsDisplayed()).toBeTruthy();
});

