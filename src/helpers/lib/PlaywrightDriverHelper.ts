import { chromium, Browser, Page } from 'playwright';

export class PlaywrightDriverHelper {
   private browser: Browser | null = null;

    async launchBrowser(): Promise<Page> {
        this.browser = await chromium.launch();
        const context = await this.browser.newContext();
        const page = await context.newPage();
        return page;
    }

    async closeBrowser(): Promise<void> {
        if (this.browser) {
            await this.browser.close();
        }
    }
}