import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AttributesListPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public attributesList = '//a[contains(@class, "bredcrumb-text") and .//span[text()="Attributes"]]';
  public operationSideBar = '//span[contains(@class, "p-menuitem-text") and text()="Operations"]';
  public attributesSideBar = '//a[contains(@class, "p-menuitem-link") and @href="#/admin/operations/attributes/list" and .//span[text()="Attributes"]]';
  public addAttributesButton = '//div[@class="zone flex justify-content-end px-3 py-3 align-items-center"]//button[@label="Add" and @icon="pi pi-plus"]';
  public attributeName = '//input[@type="text" and @formcontrolname="name" and @placeholder="Enter attribute name"]';
  public attributeDescription = '//textarea[@type="text" and @rows="6" and @formcontrolname="description" and @placeholder="Enter description"]';
  public addAttribute = '//button[@type="submit" and contains(@class, "button_add") and text()[normalize-space()="Add"]]';
  public backButton = '//button[@type="button" and contains(@class, "button_back") and text()[normalize-space()="Back"]]';
  public editButton = '//*[contains(text(),"Attribute3")]//ancestor::td/following-sibling::td//*[@class="pi pi-pencil text-success"]';
  public deleteButton = '//*[contains(text()," Attribute ")]//ancestor::td/following-sibling::td//*[@class="pi pi-trash text-danger"]';
  public updateButton = '//button[@type="submit" and contains(@class, "button_add") and text()[normalize-space()="Update"]]';
  public searchAttribute = '//input[@type="text" and @placeholder="Search..." and contains(@class, "search-input")]';
  public yesButton = '//*[@type="button"  and contains(@class, "p-element button_yes")]';
  public noButton = '//*[@type="button"  and contains(@class, "p-element button_no")]';
  public deleteMessage = '//div[contains(@class, "p-toast-message") and contains(@class, "p-toast-message-success")]';
  public status = '//*[contains(text()," Attribute 10 ")]//ancestor::td/following-sibling::td//*[@class="p-dropdown p-component p-inputwrapper"]';

  // Methods
  public async clickAttributesList(): Promise<void> {
    await this.browserActions.click(this.attributesList);
  }

  public async clickOperationSideBar(): Promise<void> {
    await this.browserActions.click(this.operationSideBar);
  }

  public async clickAttributesSideBar(): Promise<void> {
    await this.browserActions.click(this.attributesSideBar);
  }

  public async clickAddAttributesButton(): Promise<void> {
    await this.browserActions.click(this.addAttributesButton);
  }

  public async enterAttributeName(attributeName: string): Promise<void> {
    await this.browserActions.inputText(this.attributeName, attributeName);
  }

  public async enterAttributeDescription(attributeDescription: string): Promise<void> {
    await this.browserActions.inputText(this.attributeDescription, attributeDescription);
  }

  public async clickAddAttribute(): Promise<void> {
    await this.browserActions.click(this.addAttribute);
  }

  public async clickBackButton(): Promise<void> {
    await this.browserActions.click(this.backButton);
  }

  public async clickEditButton(): Promise<void> {
    await this.browserActions.click(this.editButton);
  }

  public async clickDeleteButton(): Promise<void> {
    await this.browserActions.click(this.deleteButton);
  }

  public async clickUpdateButton(): Promise<void> {
    await this.browserActions.click(this.updateButton);
  }

  public async enterSearchAttribute(searchAttribute: string): Promise<void> {
    await this.browserActions.inputText(this.searchAttribute, searchAttribute);
  }

  public async clickYesButton(): Promise<void> {
    await this.browserActions.click(this.yesButton);
  }

  public async clickNoButton(): Promise<void> {
    await this.browserActions.click(this.noButton);
  }

  public async isAttributeAdded(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.addAttributesButton);
  }

  public async isAttributeUpdated(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.updateButton);
  }

  public async isAttributeDeletedMessage(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.deleteMessage);
  }

  public async isAttributeDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.attributesList);
  }

  public async isAttributeEditDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.editButton);
  }

  public async isAttributeListDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.attributesList);
  }

  public async changeStatus(status: string): Promise<void> {
    await this.browserActions.click(this.status);
    const statusOption = await this.page.locator(`//li[@aria-label="${status}"]`);
    await statusOption.click();
  }
}

