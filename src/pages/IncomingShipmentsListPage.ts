import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class IncomingShipmentsListPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public incomingShipmentsList = '//a[span[contains(@class, "ml-2") and text()="List"]]';
  public shipmentsSideBar = '//span[@class="p-menuitem-text ng-tns-c147418153-4 ng-star-inserted" and text()="Shipments"]';
  public incomingshipmentssideBar = '//span[@class="p-menuitem-text ng-tns-c2900264064-12 ng-star-inserted" and text()="Incoming Shipment"]';
  public addIncomingShipmentButton = '//div[contains(@class, "zone") and contains(@class, "align-items-center")]//button[@label="Add"]';
  public expectedArrivalDate = '//input[@type="text" and @role="combobox" and @placeholder="Select date"]';
  public carrierName = '//input[@name="name" and @formcontrolname="carrier_name"]';
  public assignTo = '(//span[@role="combobox" and text()="Select"])[1]';
  public countryCode = '(//span[@role="combobox" and text()="Select"])[2]';
  public carrierContactNumber = '//*[@formcontrolname="carrier_contact_number"]';
  public dockDoor = '(//span[@role="combobox" and text()="Select"])[3]';
  public trackingNumber = '//*[@formcontrolname="tracking_number"]';
  public supplier = '(//span[@role="combobox" and text()="Select"])[4]';
  public nextButtonInShipmentDetails = '//app-shipment-detail-form//form//button[contains(@class, "button_add") and normalize-space(text())="Next"]';
  public BackButtonInShipmentDetails = '//div[@class="block md:flex justify-content-center items-center"]/div[1]/button';

  // Methods
  public async clickOnShipmentsSideBar() {
    await this.browserActions.click(this.shipmentsSideBar);
  }

  public async clickOnIncomingShipmentsSideBar() {
    await this.browserActions.click(this.incomingshipmentssideBar);
  }

  public async clickOnAddIncomingShipmentButton() {
    await this.browserActions.click(this.addIncomingShipmentButton);
  }

  public async selectExpectedArrivalDate(date: string) {
    await this.browserActions.click(this.expectedArrivalDate);
    const dateElement = `//td[@aria-label='${date}']`;
    console.log(dateElement);
    await this.browserActions.click(dateElement);
  }

  public async enterCarrierName(carrierName: string) {
    await this.browserActions.inputText(this.carrierName, carrierName);
  }

  public async selectAssignTo(assignTo: string) {
    await this.browserActions.click(this.assignTo);
    const assignToOption = `//span[@class="ng-star-inserted" and text()="${assignTo}"]`;
    console.log(assignToOption);
    await this.browserActions.click(assignToOption);
  }

  public async selectCountryCode(countryCode: string) {
    await this.browserActions.click(this.countryCode);
    const countryCodeOption = `//span[@class="ng-star-inserted" and text()="${countryCode}"]`;
    console.log(countryCodeOption);
    await this.browserActions.click(countryCodeOption);
  }

  public async enterCarrierContactNumber(carrierContactNumber: string) {
    await this.browserActions.inputText(this.carrierContactNumber, carrierContactNumber);
  }

  public async selectDockDoor(dockDoor: string) {
    await this.browserActions.click(this.dockDoor);
    const dockDoorOption = `//li[@aria-label="${dockDoor}"]`;
    console.log(dockDoorOption);
    await this.browserActions.click(dockDoorOption);
  }

  public async enterTrackingNumber(trackingNumber: string) {
    await this.browserActions.inputText(this.trackingNumber, trackingNumber);
  }

  public async selectSupplier(supplier: string) {
    await this.browserActions.click(this.supplier);
    const supplierOption = `//li[contains(@class, "p-dropdown-empty-message") and normalize-space(text()) = "${supplier}"]`;
    console.log(supplierOption);
    await this.browserActions.click(supplierOption);
  }

  public async clickNextButtonInShipmentDetails() {
    await this.browserActions.click(this.nextButtonInShipmentDetails);
  }

  public async clickBackButtonInShipmentDetails() {
    await this.browserActions.click(this.BackButtonInShipmentDetails);
  }

  public async isIncomingShipmentsListPageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.incomingShipmentsList);
  }
}

