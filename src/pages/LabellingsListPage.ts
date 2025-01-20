import { Page } from '@playwright/test';

export class LabellingsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  public labellingsidebar = `//span[contains(@class, 'p-menuitem-text') and contains(text(), 'Labellings')]`;
  public labelPage = `//span[contains(@class, 'ml-2') and text()='label']`;
  public labellist = `//span[@class='ml-2' and text()='label']`;
  public addLabelButton = `//button[contains(@class, 'button_add') and contains(@class, 'p-button')]`;
  public labelType = `//span[@role='combobox' and @aria-label='Select Label Type']`;
  public format = `//span[@role='combobox' and @aria-label='Select Format']`;
  public showValue = `//input[@formcontrolname='show']`;
  public separator = `//p-dropdown[@formcontrolname='separator']`;
  public deleteIcon = `//i[contains(@class, 'pi-trash') and contains(@class, 'text-red')]`;
  public addFormatLink = `//span[@class='p-button-label ng-star-inserted' and text()='Add format']`;
  public previewButton = `//button[@type='submit' and normalize-space(text())='Preview' and contains(@class, 'button_add')]`;
  public createButton = `//button[@type='button' and normalize-space(text())='Create' and contains(@class, 'button_add')]`;
  public searchBar = `//input[normalize-space(@placeholder)='Search...' and contains(@class, 'search-input')]`;
  public filterButton = `//button//span[normalize-space(text())='Filters']`;
  public filterStatus = `//li[normalize-space(.//span[text()='Status'])]`;
  public status = `//span[@role='combobox' and contains(@class, 'p-dropdown-label') and text()='Active']`;
  public applyButton = `//span[normalize-space(text())='Apply']`;
  public clearButton = `//span[normalize-space(text())='Clear']`;

  // Methods
  public async clickOnLabelSideBar() {
    await this.page.click(this.labellingsidebar);
  }

  public async clickOnLabelPage() {
    await this.page.click(this.labelPage);
  }

  public async clickOnLabelList() {
    await this.page.click(this.labellist);
  }

  public async clickOnAddLabelButton() {
    await this.page.click(this.addLabelButton);
  }

  public async selectLabelType(labelType: string) {
    await this.page.click(this.labelType);
    const labelTypeElement = `//li[normalize-space(@aria-label)='SKU']//span[normalize-space(text())='${labelType}']`;
    await this.page.click(labelTypeElement);
  }

  public async selectFormat(format: string) {
    await this.page.click(this.format);
    const formatElement = `//li[@aria-label='${format}']`;
    await this.page.click(formatElement);
  }

  public async enterShowValue(showValue: string) {
    await this.page.fill(this.showValue, showValue);
  }

  public async selectSeparator() {
    await this.page.click(this.separator);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async clickOnDeleteIcon() {
    await this.page.click(this.deleteIcon);
  }

  public async clickOnAddFormatLink() {
    await this.page.click(this.addFormatLink);
  }

  public async clickOnPreviewButton() {
    await this.page.click(this.previewButton);
  }

  public async clickOnCreateButton() {
    await this.page.click(this.createButton);
  }

  public async enterInSearchBar(searchBar: string) {
    await this.page.fill(this.searchBar, searchBar);
  }

  public async clickOnFilterButton() {
    await this.page.click(this.filterButton);
  }

  public async selectFilterStatus(filterStatus: string) {
    await this.page.click(this.filterStatus);
    const statusElement = `//p-checkbox//label[normalize-space(text())='${filterStatus}']`;
    await this.page.click(statusElement);
  }

  public async selectStatus() {
    await this.page.click(this.status);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    const yesButton = `//button[@type='button' and contains(@class, 'button_yes') and normalize-space(text())='Yes']`;
    await this.page.click(yesButton);
  }

  public async clickOnApplyButton() {
    await this.page.click(this.applyButton);
  }

  public async clickOnClearButton() {
    await this.page.click(this.clearButton);
  }

  public async isLabelPageDisplayed() {
    return await this.page.isVisible(this.labelPage);
  }

  public async isLabelListDisplayed() {
    return await this.page.isVisible(this.labellist);
  }

  public async isTemplatePageDisplayed() {
    const templatePage = `//span[contains(@class, 'ml-2') and normalize-space(text())='Template']`;
    return await this.page.isVisible(templatePage);
  }
}