import { Page } from '@playwright/test';
import { BrowserActions } from '../helpers/BrowserActions';

export class BasePage {
  browserActions: BrowserActions;
  constructor(page: Page) {
    this.browserActions = new BrowserActions(page);
  }
}
