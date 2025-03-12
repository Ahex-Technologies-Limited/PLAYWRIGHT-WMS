import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CreateAccountPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  //selectors
  public fullNameField = `//input[@formcontrolname='fullName']`;
  public companyNameField = `//input[@formcontrolname='companyName']`;
  public emailAddressField = `//input[@formcontrolname='email']`;
  public phoneNumberField = `//input[@formcontrolname='phoneNumber']`;
  public domainNameField = `//input[@formcontrolname='domainName']`;
  public passwordField = `//input[@formcontrolname='password']`;
  public confirmPasswordField = `//input[@formcontrolname='confirmPassword']`;
  public signUpButton = `//button[@type='submit']`;
  public logInLink = `//a[@href='#/auth/login']`;
  public selectAModulePage=`//h2[text()='Select a Module']`;
  public warehouseManagementCheckBox = `//label[contains(text(),'Warehouse Management System')]/preceding-sibling::div//div[@class='p-checkbox-box']`;
  public transportManagementCheckBox = `//label[contains(text(),'Transport Management System')]/preceding-sibling::div//div[@class='p-checkbox-box']`;
  public orderManagementCheckBox = `//label[contains(text(),'Order Management System')]/preceding-sibling::div//div[@class='p-checkbox-box']`;
  public continueButton = `//button[text()=' Continue ']`;
  public successMessageAfterAddingModule = `//div[text()='Modules added successfully.']`;
  public monthlyTab=`//a[span[text()='MONTHLY']]`;
  public yearlyTab=`//span[text()='YEARLY']`;
  public quaterlyTab=`//span[text()='QUARTERLY']`;
  public choosePlanINMonthly = `(//span[text()='Choose Plan'])[3]`;
  public choosePlanINYearly = `(//button[span[contains(text(), 'Choose Plan')]])[11]`;
  public choosePlanINQuaterly = `(//button[span[contains(text(), 'Choose Plan')]])[7]`;
  public makeAPaymentButton = `//button[text()=' Make Payment ']`;
  public continueToLoginbutton = `//button[text()=' Continue to Login ']`;
  public logInPage = `//h2[text()='Log In']`;
  public successMessageAfterplanSelect = `//h1[text()='Payment Successful']`;
  public errorMessageForInvalidCredentials = `//div[contains(@class, 'p-toast-detail') and text()='Email already exists.']`;
  //methods
  public async enterFullName(fullName: string) {
    await this.page.locator(this.fullNameField).fill(fullName);
  }
  public async enterCompanyName(companyName: string) {
    await this.page.locator(this.companyNameField).fill(companyName);
  }
  public async enterEmailAddress(email: string) {
    await this.page.locator(this.emailAddressField).fill(email);
  }
  public async enterdomainName(domain: string) {
    await this.page.locator(this.domainNameField).fill(domain);
  }
  public async enterPhoneNumber(phoneNumber: string) {
    await this.page.locator(this.phoneNumberField).fill(phoneNumber);
  }
  public async enterPassword(password: string) {
    await this.page.locator(this.passwordField).fill(password);
  }
  public async enterConfirmPassword(confirmPassword: string) {
    await this.page.locator(this.confirmPasswordField).fill(confirmPassword);
  }
  public async clickSignUpButton() {
    await this.page.locator(this.signUpButton).click();
  }
  public async clickLogInLink() {
    await this.page.locator(this.logInLink).click();
  }
  public async isSelectAModulePageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.selectAModulePage);
  }
  public async clickWarehouseManagementCheckBox() {
    await this.page.locator(this.warehouseManagementCheckBox).click();
  }
  public async clickTransportManagementCheckBox() {
    await this.page.locator(this.transportManagementCheckBox).click();
  }
  public async clickOrderManagementCheckBox() {
    await this.page.locator(this.orderManagementCheckBox).click();
  }
  public async clickContinueButton() {
    await this.page.locator(this.continueButton).click();
  }
  public async successMessageAfterAddingModuleIsDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.successMessageAfterAddingModule);
  }

  public async clickMonthlyTab() {
    await this.page.locator(this.monthlyTab).click();
  }
  public async clickYearlyTab() {
    await this.page.locator(this.yearlyTab).click();
  }
  public async clickQuaterlyTab() {
    await this.page.locator(this.quaterlyTab).click();
  }
  public async clickChoosePlanINMonthly() {
    await this.page.locator(this.choosePlanINMonthly).click();
  }
  public async clickChoosePlanINYearly() {
    await this.page.locator(this.choosePlanINYearly).click();
  }
  public async clickChoosePlanINQuaterly() {
    await this.page.locator(this.choosePlanINQuaterly).click();
  }
  public async clickMakeAPaymentButton() {
    await this.page.locator(this.makeAPaymentButton).click();
  }
  public async clickContinueToLoginButton() {
    await this.page.locator(this.continueToLoginbutton).click();
  }

  public async isLogInPageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.logInPage);
  }
  public async successMessageAfterPlanSelectIsDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.successMessageAfterplanSelect);
  }
  public async errorMessageForInvalidCredentialsIsDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.errorMessageForInvalidCredentials);
  }




}
