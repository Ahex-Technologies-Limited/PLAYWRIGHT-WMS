import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BrowserActions } from '../helpers/BrowserActions';
import { DriverActions } from '../helpers/DriverActions';
import { VALID_CREDENTIAL } from '../data/LoginData';

let browserActions: BrowserActions;
let loginPage: LoginPage;
let page: Page;
let driver: DriverActions;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  loginPage = new LoginPage(page);
  browserActions = new BrowserActions(page);
  await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
  await browserActions.waitForTimeout(3000);
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that  it should display the login form', async () => {
  await expect(await browserActions.isElementDisplayed(loginPage.emailField)).toBe(true);
  await expect(await browserActions.isElementDisplayed(loginPage.passwordField)).toBe(true);
  await expect(await browserActions.isElementDisplayed(loginPage.loginButton)).toBe(true);
  await expect(await browserActions.isElementDisplayed(loginPage.forgotPasswordLink)).toBe(true);
  await expect(await browserActions.isElementDisplayed(loginPage.createAccountLink)).toBe(true);
});

test('TC002 Verify it should login with valid credentials', async () => {
  await loginPage.login('supriyasahoo1399@gmail.com', 'Supriya@12');

  // await loginPage.login(VALID_CREDENTIAL.EMAIL, VALID_CREDENTIAL.PASSWORD);
});



test('TC003 Verify it should show an error message for incorrect password', async () => {
  await loginPage.login('supriyasahoo1399@gmail.com', 'wrongpassword');
  const passwordError = page.locator('body > app-root > app-login > p-toast > div > p-toastitem > div > div');
  await passwordError.waitFor({ timeout: 10000 });
  await expect(passwordError).toBeVisible();
  await expect(passwordError).toContainText('Error: Invalid credentials.');
});

test('TC004 Verify it should navigate to create account page when create account link is clicked', async () => {
  // const createAccountLink = page.locator(`//a[@href='#/auth/register']`);
  // await createAccountLink.click();
  await loginPage.goToCreateAccount();
  const createAccountPageName = page.locator('body > app-root > app-register > div > div.register-right.relative > div > h2');
  await expect(createAccountPageName).toBeVisible();
});


test('TC005 Verify it should show an error message for unregistered email', async () => {
  await loginPage.login('unregistered@example.com', 'Supriya@12');

  const unregisteredEmailError = page.locator(`(//div[contains(@class, 'p-toast-message-content') and contains(., 'Error')])[2]`);
  await unregisteredEmailError.waitFor({ timeout: 10000 });
  await expect(unregisteredEmailError).toBeVisible();
  await expect(unregisteredEmailError).toContainText('Error: Invalid credentials.');
});
