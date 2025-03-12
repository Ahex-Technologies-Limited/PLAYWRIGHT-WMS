import { Page, Locator } from 'playwright';

export class PlaywrightBrowserHelper {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openUrl(url: string): Promise<void> {
    if (!this.page) throw new Error('Page is not initialized!');
    await this.page.goto(url);
  }

  async click(selectorOrElement: string | Locator): Promise<void> {
    if (!this.page) throw new Error('Page is not initialized!');
    const element = await this.getLocator(selectorOrElement);
    await element.click();
  }

  async pressEnter(selectorOrElement: string |Locator): Promise<void> {
    if (!this.page) throw new Error('Page is not initialized!');
    const element = await this.getLocator(selectorOrElement);
    await element.press('Enter');
  }

  async getLocator(selectorOrElement: string | Locator): Promise<Locator> {
    if (typeof selectorOrElement === 'string') {
        return this.page.locator(selectorOrElement);
    }
    return selectorOrElement; // It's already a Locator
}


  async inputText(selectorOrElement: string | Locator, text: string): Promise<void> {
    if (!this.page) throw new Error('Page is not initialized!');
    const element = await this.getLocator(selectorOrElement);
    await element.fill(text);
  }
  async inputNumber(selectorOrElement: string | Locator, text:string): Promise<void> {
    if (!this.page) throw new Error('Page is not initialized!');
    const element = await this.getLocator(selectorOrElement);
    await element.type(text);
  }

  async getText(selectorOrElement: string | Locator): Promise<any> {
    if (!this.page) throw new Error('Page is not initialized!');
    const element = await this.getLocator(selectorOrElement);
    return await element.textContent();
    }

  /**
   * Checks if the element is displayed on the page.
   * @param locator - The locator for the element to check.
   * @returns A Promise that resolves to a boolean indicating if the element is displayed.
   */
  public async isElementDisplayed(locator: string): Promise<boolean> {
    if (!this.page) throw new Error('Page is not initialized!');
    try {
      const element = this.page.locator(locator);
      // Check if the element is visible on the page
      const isVisible = await element.isVisible();
      return isVisible;
    } catch (error) {
      // If there is an error locating the element, return false
      console.error(`Error while checking visibility of element: ${locator}`, error);
      return false;
    }
  }


  /**
   * Waits for an element to be visible on the page.
   * @param locator - The locator for the element to wait for.
   * @param timeout - The timeout in milliseconds to wait for the element to be visible.
   * @param errorMessage - Custom error message in case the element is not found within the timeout period.
   * @returns A Promise that resolves once the element is visible or throws an error if the timeout is exceeded.
   */
  public async waitForElement(
    locator: string,
    timeout: number = 10000,
    errorMessage: string = 'Element not visible after waiting'
  ): Promise<void> {
    if (!this.page) throw new Error('Page is not initialized!');

    const element: Locator = this.page.locator(locator);

    try {
      // Wait for the element to be visible within the given timeout
      await element.waitFor({ state: 'visible', timeout: timeout });

      // Optionally, you can check if the element is displayed or not after waiting
      const isVisible = await element.isVisible();
      if (!isVisible) {
        throw new Error(`Element is not visible: ${locator}`);
      }
    } catch (error) {
      // If the element is not visible within the timeout, throw a custom error
      if (error.message.includes('TimeoutError')) {
        throw new Error(`${errorMessage}. Locator: ${locator}`);
      }
      throw error;
    }
  }

  /**
 * Scrolls to the element specified by the locator.
 * @param locator - The locator for the element to scroll to.
 */
  public async scrollToElement(locator: string): Promise<void> {
    if (!this.page) throw new Error('Page is not initialized!');
    const element: Locator = this.page.locator(locator);
    await element.scrollIntoViewIfNeeded();
  }

  /**
     * Selects an option from a dropdown (select) element.
     * @param locator - The locator for the select element.
     * @param valueOrLabel - The value, label, or index of the option to select.
     */
  public async selectOption(locator: string, valueOrLabel: string | number): Promise<void> {
    if (!this.page) throw new Error('Page is not initialized!');
    const selectElement: Locator = this.page.locator(locator);

    // If valueOrLabel is a string, we'll try selecting by value or label.
    if (typeof valueOrLabel === 'string') {
      try {
        // Try selecting by the visible text (label)
        await selectElement.selectOption({ label: valueOrLabel });
      } catch (error) {
        // If selecting by label fails, fall back to selecting by value.
        await selectElement.selectOption({ value: valueOrLabel });
      }
    }
    // If valueOrLabel is a number, it will be interpreted as the index of the option.
    else if (typeof valueOrLabel === 'number') {
      await selectElement.selectOption({ index: valueOrLabel });
    }
  }


  /**
   * Checks if an element is enabled (i.e., it is not disabled).
   * @param locator - The locator for the element to check.
   * @returns A Promise that resolves to a boolean: true if the element is enabled, false if it is disabled.
   */
  public async isElementEnabled(locator: string): Promise<boolean> {
    if (!this.page) throw new Error('Page is not initialized!');
    const element: Locator = this.page.locator(locator);
    const isEnabled = await element.isEnabled();
    return isEnabled;
  }

  public async waitForTimeout(timeout: number): Promise<void> {
    await this.page.waitForTimeout(timeout);
  }



}
