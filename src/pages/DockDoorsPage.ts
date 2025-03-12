import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DockDoorsPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);

    this.page = page;
    }
    //selectors
    public dockDoorManagementSideBar = `//a[span[contains(text(), 'Dock Door Management')]]`;
    public dockDoorSideBar = `(//span[contains(@class, 'p-menuitem-text') and contains(text(), 'Dock Doors')])[1]`;
    public dockDoorListPage = `//span[contains(@class, 'ml-2') and contains(text(), 'Dock Doors')]`;
    public searchBar = `//input[contains(@class, 'search-input')]`;
    public editButton = `(//button[i[contains(@class, 'pi-pencil')]])[1]`;
    public viewButton = `(//button[i[contains(@class, 'pi-eye')]])[1]`;
    public addDockDoorButton = `//span[text()='Add']`;
    public status = `//span[text()='Available']`;
    public dockDoorName = `//input[@formcontrolname='name']`;
    public dockDoorLocation = `//input[@placeholder='Enter' and @formcontrolname='location']`;
    public dockdoorStatus = `(//span[contains(@class, 'p-dropdown-label') and text()='Select'])[1]`;
    public dockDoorType = `(//span[contains(@class, 'p-dropdown-label') and text()='Select'])[1]`;
    public dockdoorCapacity = `//input[@type='number' and @formcontrolname='capacity']`;
    public dockDoorCapacityselect = `(//span[contains(@class, 'p-dropdown-label') and text()='Select'])[1]`;
    public dockDoorDescription = `//textarea[@name='name' and @formcontrolname='description']`;
    public addButton = `//button[contains(@class, 'p-button') and normalize-space(text())='Add']`;
    public updateButton = `//button[contains(@class, 'p-button') and normalize-space(text())='Update']`;
    public viewDetailsPage = `//a[contains(@class, 'no-underline') and normalize-space(span/text())='View Details']`;    

    //methods
    public async clickOnDockDoorManagementSubMenu() {
      await this.browserActions.click(this.dockDoorManagementSideBar);
    }
    public async clickOnDockDoorSideBar() {
      await this.browserActions.click(this.dockDoorSideBar);
    }
    public async clickOnSearchBar(value: string) {
      await this.browserActions.inputText(this.searchBar, value);
    }
    public async clickOnEditButton() {
      await this.browserActions.click(this.editButton);
    }
    public async clickOnViewButton() {
      await this.browserActions.click(this.viewButton);
    }
    public async clickOnAddDockDoorButton() {
      await this.browserActions.click(this.addDockDoorButton);
    }
    public async clickOnStatus(value: string) {
      await this.browserActions.click(this.status);
   await this.page.keyboard.press('ArrowDown');
   await this.page.keyboard.press('Enter');
    }
    public async inputDockDoorName(value: string) {
      await this.browserActions.inputText(this.dockDoorName, value);
    }
    public async inputDockDoorLocation(value: string) {
      await this.browserActions.inputText(this.dockDoorLocation, value);
    }
    public async inputdockdoorStatus(value: string) {
      await this.browserActions.click(this.dockdoorStatus);
      const status = `//li[normalize-space(span/text())='${value}']`;
      await this.browserActions.click(status);
    }
    public async inputDockDoorType(value: string) {
      await this.browserActions.click(this.dockDoorType);
     await this.page.keyboard.press('ArrowDown');
     await this.page.keyboard.press('Enter');
    }
    public async inputDockDoorCapacity(value: string) {
      await this.browserActions.inputText(this.dockdoorCapacity, value);
    }
    public async selectDockDoorCapacity(value: string) {
      await this.browserActions.click(this.dockDoorCapacityselect);
      await this.page.keyboard.press('ArrowDown');
      await this.page.keyboard.press('Enter');
    }
    public async inputDockDoorDescription(value: string) {
      await this.browserActions.inputText(this.dockDoorDescription, value);
    }
    public async clickOnAddButton() {
      await this.browserActions.click(this.addButton);
    }
    public async clickOnUpdateButton() {
      await this.browserActions.click(this.updateButton);
    }
    public async isViewDetailsPageDisplayed() {
      await this.browserActions.isElementDisplayed(this.viewDetailsPage);
    }
    public async isDockDoorListPageDisplayed() {
      return this.browserActions.isElementDisplayed(this.dockDoorListPage);
    }

}