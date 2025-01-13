import { test, expect, Page } from '@playwright/test';
import { BrowserActions } from '../helpers/BrowserActions';
import { HomePage } from '../pages/HomePage';
import { DriverActions } from '../helpers/DriverActions';

let driver: DriverActions;
let browserActions: BrowserActions;
let homePage: HomePage;
let page: Page;

test.beforeEach(async() =>{
  driver = new DriverActions();
  page = await driver.launchBrowser();
  browserActions = new BrowserActions(page);
  await browserActions.openUrl('https://www.google.com/');
})

test.afterEach(async()=>{
  await driver.closeBrowser();
});

test('First Test', async () => {
  homePage = new HomePage(page);
  await homePage.searchText('Playwright Tutorial');
});

test('Seconds Test', async () => {
  homePage = new HomePage(page);
  await homePage.searchText('Javascript Tutorial');
});


