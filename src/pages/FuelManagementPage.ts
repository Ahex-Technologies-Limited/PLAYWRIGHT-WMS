import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { promises } from 'node:fs';

export class FuelManagementPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  // Selectors
  public fuelManagementSideBar = `//a[span[contains(text(), 'Fuel Management')]]`;
  public addFuelButton = `//button[contains(@class, 'button_add')]`;
  public vehicle=`//p-dropdown[@formcontrolname='vehicle_id']`;
  public fuelType=`//*[@formcontrolname='fuel_type']`;
  public meterReading = `//*[@formcontrolname='meter_reading']`;
  public fuelConsumed = `//*[@formcontrolname='quantity']`;
  public currency = `//*[@formcontrolname='currency']`;
  public publicAmount = `//*[@formcontrolname='cost']`;
  public purchaseDate = `//*[@formcontrolname='purchase_date']`;
  public referenceImageUpload = `//input[@type='file' and @aria-label='Browse Files']`;
  public addButton = `//button[contains(@class, 'p-button') and normalize-space(text())='Add']`;
  public clicktoViewLinkInListPage = `(//a[text()='Click to View'])[1]`;
  public clicktoViewLinkInUpdatePage = `//a[text()='Click to View']`;
  public clicktoviewLinkInDetailsPage = `//a[text()='Click to View']`;
  public viewButton = `(//div[contains(@class, 'dropdown-menu')]//button[contains(@class, 'dropdown-item') and .//i[contains(@class, 'pi-eye')]])[1]`;
  public detailsPage = `//span[text()='View Fuel Purchase Details']`;
  public editButton = `(//i[@class='pi pi-pencil text-success'])[1]`;
  public updateButton = `//button[text()=' Update ']`;
  public deleteButton = `(//button[contains(@class, 'dropdown-item')]//i[contains(@class, 'pi-trash')])[1]`;
  public SearchBar = `//input[@placeholder='Search...']`;
  public fuelManagementListPage = `//a[@href='#/admin/fuel' and contains(@class, 'bredcrumb-text')]`;
  public successmessageForAddFuel = `//div[contains(@class, 'p-toast-detail') and text()='Fuel purchase added successfully.']`;
  public successmessageForUpdateFuel = `//div[contains(@class, 'p-toast-detail') and text()='Fuel purchase updated successfully.']`;
  public successmessageForDeleteFuel = `//div[contains(@class, 'p-toast-detail') and text()='Fuel purchase deleted successfully.']`;
  //methods
  public async clickOnFuelManagementSubMenu() {
    await this.browserActions.click(this.fuelManagementSideBar);
  }
  public async clickOnAddFuelButton() {
    await this.browserActions.click(this.addFuelButton);
  }
  public async selectVehicle(vehicle: string) {
    await this.browserActions.click(this.vehicle);
    const vehicleOption = `//span[text()='${vehicle}']`;
    await this.browserActions.click(vehicleOption); 
  }
  public async enterFuelType(fuelType: string) {
    await this.browserActions.inputText(this.fuelType, fuelType);
  }
  public async enterMeterReading(meterReading: string) {
    await this.browserActions.inputText(this.meterReading, meterReading);
  } 

  public async enterFuelConsumed(fuelConsumed: string) {
    await this.browserActions.inputText(this.fuelConsumed, fuelConsumed);
  }
  public async selectCurrency(value: string) {
    await this.browserActions.click(this.currency);
    const currencyOption = `//li[@aria-label='${value}']`;
    await this.browserActions.click(currencyOption);
  }
  public async enterAmount(publicAmount: string) {
    await this.browserActions.inputText(this.publicAmount, publicAmount);
  }
  public async selectPurchaseDate(purchaseDate: string) {
    await this.browserActions.click(this.purchaseDate);
await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }
  public async uploadReferenceImage(referenceImage: string): Promise<void> {
    const locator =  await this.browserActions.getLocator(this.referenceImageUpload);
    await locator.setInputFiles('src\resources\download.jpg');
    await this .browserActions.waitForTimeout(5000);
  }

  public async clickOnAddButton() {
    await this.browserActions.click(this.addButton);
  }

  public async clickOnViewButtonInListPage() {
    await this.browserActions.click(this.clicktoViewLinkInListPage);
  }
  public async clickOnViewButtonInUpdatePage() {
    await this.browserActions.click(this.clicktoViewLinkInUpdatePage);
  }
  public async clickOnViewButtonInDetailsPage() {
    await this.browserActions.click(this.clicktoviewLinkInDetailsPage);
  }

  public async clickOnViewButton() {
    await this.browserActions.click(this.viewButton);
  }
  public async isDetailsPageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.detailsPage);
  }

  public async clickOnEditButton() {
    await this.browserActions.click(this.editButton);
  }

  public async clickOnUpdateButton() {
    await this.browserActions.click(this.updateButton);
  }

  public async clickOnDeleteButton() {
    await this.browserActions.click(this.deleteButton);
  }
  public async isFuelManagementListPageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.fuelManagementListPage);
  }
  public async isSuccessMessageForAddFuelDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.successmessageForAddFuel);
  }
  public async isSuccessMessageForUpdateFuelDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.successmessageForUpdateFuel);
  }
  public async isSuccessMessageForDeleteFuelDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.successmessageForDeleteFuel);
  }
  public async searchFuel(fuelType: string) {
    await this.browserActions.inputText(this.SearchBar, fuelType);
    await this.browserActions.waitForTimeout(5000);
  }
  public async isFuelListDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.fuelManagementListPage);
  }






 

}