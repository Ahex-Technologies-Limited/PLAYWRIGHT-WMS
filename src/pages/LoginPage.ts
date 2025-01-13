import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Basic elements
  public emailField = `//input[@formcontrolname='email']`; 
  public passwordField = `//input[@formcontrolname='password']`;
  public loginButton = `//button[@type='submit']`;
  public forgotPasswordLink = `//a[@href='#/auth/forget-password']`; 
  public createAccountLink = `//a[@href='#/auth/register']`;
  public selectWarehousePage = 'body > app-root > app-secondlayout > app-warehouse > div > div > div > div > div > button';
  public addWarehouseButton = 'body > app-root > app-secondlayout > app-warehouse > div > div > div > div > div > button';

  public async open(): Promise<void> {
    await this.browserActions.openUrl('/#/auth/login'); // Navigates to the login page
  }

  public async login(email: string, password: string): Promise<void> {
    await this.browserActions.inputText(this.emailField, email);
    await this.browserActions.inputText(this.passwordField, password);
    await this.browserActions.click(this.loginButton);
  }

  public async goToForgotPassword(): Promise<void> {
    await this.browserActions.click(this.forgotPasswordLink);
  }

  public async goToCreateAccount(): Promise<void> {
    await this.browserActions.click(this.createAccountLink);
  }

  public async isSelectWarehousePageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.selectWarehousePage);
  }

  public async clickAddWarehouseButton(): Promise<void> {
    await this.browserActions.waitForElement(this.addWarehouseButton, 20000);
    await this.browserActions.click(this.addWarehouseButton);
  }

}
