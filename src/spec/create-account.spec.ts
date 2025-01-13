import { test, expect, Page } from '@playwright/test';
import { CreateAccountPage } from '../pages/CreateAccountPage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let createAccountPage: CreateAccountPage;
let page: Page;

test.beforeEach(async () => {
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  createAccountPage = new CreateAccountPage(page);
  await browserActions.openUrl('your-app-url'); // Replace with the actual URL
});

test.afterEach(async () => {
  await driver.closeBrowser();
});

test('TC001 Verify that the Create Account form should display with all the fields', async () => {
//   await expect(await createAccountPage.fullNameField.isVisible()).toBe(true);
//   await expect(await createAccountPage.companyNameField.isVisible()).toBe(true);
//   await expect(await createAccountPage.emailAddressField.isVisible()).toBe(true);
//   await expect(await createAccountPage.phoneNumberField.isVisible()).toBe(true);
//   await expect(await createAccountPage.domainNameField.isVisible()).toBe(true);
//   await expect(await createAccountPage.passwordField.isVisible()).toBe(true);
//   await expect(await createAccountPage.confirmPasswordField.isVisible()).toBe(true);
//   await expect(await createAccountPage.signUpButton.isVisible()).toBe(true);
});

test('TC002 Verify the SignUp functionality with valid credentials', async () => {
  await createAccountPage.register(
    'John Doe',
    'TechCompany',
    'supriyasahoo1399@example.com',
    '2345678912',
    'domainName',
    'Password@123',
    'Password@123'
  );

  //await expect(await createAccountPage.selectModuleTitle.isVisible()).toBe(true);
});

test('TC003 Verify that an error message should display for invalid email format', async () => {
  //await createAccountPage.emailInput.fill('invalid-email');

  //await expect(await createAccountPage.emailAddressError.isVisible()).toBe(true);
  //await expect(await createAccountPage.emailAddressError.textContent()).toContain('Please enter a valid email address');
});

test('TC004 Verify that an error message should display for short password', async () => {
  //await createAccountPage.passwordInput.fill('short');

  const passwordError = await page.locator('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(6) > app-validation-error > div > small');
  await expect(await passwordError.isVisible()).toBe(true);
  //await expect(await createAccountPage.passwordError.textContent()).toContain('Please ensure your password is at least 8 characters long and includes an uppercase letter, a lowercase letter, a number, and a special character');
});

test('TC005 Verify that an error message should display for empty fields', async () => {
  await createAccountPage.register('', '', '', '', '', '', '');

  const companyNameError = await page.locator('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(2) > app-validation-error > div > small');
  const emailAddressError = await page.locator('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(3) > app-validation-error > div > small');
  const phoneNumberError = await page.locator('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(4) > app-validation-error > div > small');
  const domainNameError = await page.locator('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(5) > app-validation-error > div > small');
  const passwordError = await page.locator('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(6) > app-validation-error > div > small');
  const confirmPasswordError = await page.locator('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(7) > div.error_message.ng-star-inserted > div');

  await expect(await companyNameError.isVisible()).toBe(true);
  await expect(await emailAddressError.isVisible()).toBe(true);
  await expect(await phoneNumberError.isVisible()).toBe(true);
  await expect(await domainNameError.isVisible()).toBe(true);
  await expect(await passwordError.isVisible()).toBe(true);
  await expect(await confirmPasswordError.isVisible()).toBe(true);
});

test('TC006 Verify that it should show an error message for mismatched passwords', async () => {
  //await createAccountPage.passwordInput.fill('password12');

  //await expect(await createAccountPage.passwordError.isVisible()).toBeTruthy();
  //await expect(await createAccountPage.passwordError.textContent()).toContain('Please ensure your password is at least 8 characters long and includes an uppercase letter, a lowercase letter, a number, and a special character');
});

test('TC007 Verify it should show an error message for invalid phone number', async () => {
  //await createAccountPage.phoneInput.fill('invalid-phone');

  const phoneError = await page.locator('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(4) > app-validation-error > div > small');
  await expect(await phoneError.isVisible()).toBe(true);
  await expect(await phoneError.textContent()).toContain('Please enter a valid phone number');
});

test('TC008 Verify it should show an error message for already registered email', async () => {
  await createAccountPage.register(
    'John Doe',
    'TechCompany',
    'supriyasahoo1399@gmail.com',
    '2345678912',
    'domainNameabc',
    'Password@123',
    'Password@123'
  );

  //await createAccountPage.emailError.waitFor({ state: 'visible', timeout: 20000 });

  const emailError = await page.locator('//p-toast-detail');
  await expect(await emailError.isVisible()).toBe(true);
  await expect(await emailError.textContent()).toContain('Email already exists');
});

test('TC009 Verify that the form should reset after successful submission', async () => {
  await createAccountPage.register(
    'John Doe',
    'TechCompany',
    'john.doe@example.com',
    '+1234567890',
    'techcomp',
    'Password@123!',
    'Password@123!'
  );

//   await expect(await createAccountPage.successMessage.isVisible()).toBe(true);

//   await expect(await createAccountPage.fullNameField.inputValue()).toBe('');
//   await expect(await createAccountPage.companyNameField.inputValue()).toBe('');
//   await expect(await createAccountPage.emailAddressField.inputValue()).toBe('');
//   await expect(await createAccountPage.phoneNumberField.inputValue()).toBe('');
//   await expect(await createAccountPage.domainNameField.inputValue()).toBe('');
//   await expect(await createAccountPage.passwordField.inputValue()).toBe('');
//   await expect(await createAccountPage.confirmPasswordField.inputValue()).toBe('');
});

test('TC010 Verify that the form should not submit with invalid domain name', async () => {
  //await createAccountPage.domainNameInput.fill('invalid domain name');

  const domainError = await page.locator('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(5) > app-validation-error > div > small');
  await expect(await domainError.isVisible()).toBe(true);
  await expect(await domainError.textContent()).toContain('Please enter a valid domain name');
});
