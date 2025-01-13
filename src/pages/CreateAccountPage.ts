import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CreateAccountPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public fullNameField = 'body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(1) > div > input';
  public companyNameField = 'body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(2) > div > input';
  public emailAddressField = 'body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(3) > div > input';
  public phoneNumberField = 'body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(4) > div > div > input';
  public domainNameField = 'body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(5) > div > input';
  public passwordField = 'body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(6) > div > input';
  public confirmPasswordField = 'body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(7) > div.card.flex > input';

  public successMessage = 'body > app-root > p-toast > div > p-toastitem > div > div > div > div.p-toast-detail.ng-tns-c3576075022-34';
  public emailError = 'body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(3) > app-validation-error > div > small';
  public passwordError = 'body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(6) > app-validation-error > div > small';
  public confirmPasswordError = '#email';

  public fullNameInput = '//input[ @formcontrolname="fullName" ]';
  public companyNameInput = '//input[ @formcontrolname="companyName" ]';
  public emailInput = '//input[ @formcontrolname="email" ]';
  public phoneInput = '//input[@formcontrolname="phoneNumber" and @placeholder="Enter phone number"]';
  public domainNameInput = '//input[@formcontrolname="domainName" and @placeholder="Enter domain name"]';
  public passwordInput = '//input[@formcontrolname="password" and @placeholder="Enter your password"]';
  public confirmPasswordInput = '//input[@formcontrolname="confirmPassword" and @placeholder="Confirm your password"]';

  public selectModulePage = 'body > app-root';
  public signUpButton = '//div[@class="field col-12"]//button[@type="submit" and contains(@class, "button_add")]';
  public fullnameError = '';
  public companyNameError = '/html/body/app-root/app-register/div/div[2]/div/form/div[1]/app-validation-error/div/small';
  public emailAddressError = '//div[contains(@class, "error_message")]';
  public phoneNumberError = 'body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(4) > app-validation-error > div > small';
  public domainNameError = 'body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(5) > app-validation-error > div > small';
  public selectModuleTitle = '//h2[text()="Select a Module"]';

  // Methods
  public async register(
    fullName: string,
    companyName: string,
    email: string,
    phone: string,
    domain: string,
    password: string,
    confirmPassword: string
  ): Promise<void> {
    //await this.browserActions.waitForElement(this.signUpButton, { timeout: 10000 });
    
    await this.browserActions.inputText(this.fullNameInput, fullName);
    await this.browserActions.inputText(this.companyNameInput, companyName);
    await this.browserActions.inputText(this.emailInput, email);
    await this.browserActions.inputText(this.phoneInput, phone);
    await this.browserActions.inputText(this.domainNameInput, domain);
    await this.browserActions.inputText(this.passwordInput, password);
    await this.browserActions.inputText(this.confirmPasswordInput, confirmPassword);

    await this.browserActions.click(this.signUpButton);
  }

  // Override the open method to point to the registration page
  public async open(): Promise<void> {
    await this.page.goto('http://143.244.132.143:8200/#/auth/register');
  }
}

