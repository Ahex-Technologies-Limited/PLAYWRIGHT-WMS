import { Page } from 'playwright';
import { PlaywrightDriverHelper } from './lib/PlaywrightDriverHelper';

export class DriverActions {
    private driver: PlaywrightDriverHelper;
    constructor() {
        this.driver = new PlaywrightDriverHelper();
    }

    async launchBrowser(): Promise<Page> {
      return await this.driver.launchBrowser();
    }

    async closeBrowser(): Promise<void> {
        await  this.driver.closeBrowser();
    }
}