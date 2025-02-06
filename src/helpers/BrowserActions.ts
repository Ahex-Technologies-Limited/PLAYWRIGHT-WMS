import { Locator, Page } from '@playwright/test';
import { PlaywrightBrowserHelper } from './lib/PlaywrightBrowserHelper';

export class BrowserActions  {
  private helper: PlaywrightBrowserHelper;

  constructor(page:Page) {
    this.helper = new PlaywrightBrowserHelper(page);
  }

  async openUrl(url: string): Promise<void> {
    await this.helper.openUrl(url);
  }

  async click(selector: string): Promise<void> {
    await this.helper.click(selector);
  }

  async inputText(selector: string, text: string): Promise<void> {
    await this.helper.inputText(selector, text);
  }

  async pressEnter(selector: string): Promise<void> {
    await this.helper.pressEnter(selector);
  }


  //   async getTextFromElement(selector: string): Promise<string> {
  //     return await this.helper.getText(selector);
  //   }

 
  async isElementDisplayed(locator: string): Promise<boolean> {
    return this.helper.isElementDisplayed(locator);
  }

  async waitForElement(locator: string,
    timeout: number = 5000,
  ): Promise<void> {
    await this.helper.waitForElement(locator, timeout);
  }

  public async scrollToElement(locator: string): Promise<void> {
    await this.helper.scrollToElement(locator);
  }
  public async selectOption(locator: string, valueOrLabel: string | number): Promise<void> {
    await this.helper.selectOption(locator, valueOrLabel);
  }

  public async isElementEnabled(locator: string): Promise<boolean> {
    return await this.helper.isElementEnabled(locator);
  }

  public async waitForTimeout(timeout: number): Promise<void> {
    await this.helper.waitForTimeout(timeout);
 }
   async getLocator(selectorOrElement: string | Locator): Promise<Locator> {
   return await this.helper.getLocator(selectorOrElement);
    
 }

}
