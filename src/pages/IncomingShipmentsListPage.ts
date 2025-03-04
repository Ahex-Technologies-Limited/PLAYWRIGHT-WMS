import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import path from 'path';

export class IncomingShipmentsListPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public incomingShipmentsList = '//a[span[contains(@class, "ml-2") and text()="List"]]';
  public shipmentsSideBar = `(//span[contains(@class, 'p-menuitem-text') and text()='Shipments'])[1]`;
  public incomingshipmentssideBar = `(//span[contains(@class, 'p-menuitem-text') and text()="Incoming Shipments"])[1]`;
  public editIncomingShipmentButton = `(//i[contains(@class, 'pi-pencil') and contains(@class, 'text-success')])[1]`;
  public addIncomingShipmentButton = '//div[contains(@class, "zone") and contains(@class, "align-items-center")]//button[@label="Add"]';
  public expectedArrivalDate = '//input[@type="text" and @role="combobox" and @placeholder="Select date"]';
  public carrierName = '//input[@name="name" and @formcontrolname="carrier_name"]';
  public assignTo = `//p-dropdown[@formcontrolname='assigned_to']`;
  public countryCode = `(//span[@role="combobox" and @aria-label="Select"])[1]`;
  public carrierContactNumber = '//*[@formcontrolname="carrier_contact_number"]';
  public dockDoor = '(//span[@role="combobox" and text()="Select"])[1]';
  public trackingNumber = '//*[@formcontrolname="tracking_number"]';
  public supplier = '(//span[@role="combobox" and text()="Select"])[1]';
  public nextButtonInShipmentDetails = '//app-shipment-detail-form//form//button[contains(@class, "button_add") and normalize-space(text())="Next"]';
  public BackButtonInShipmentDetails = '//div[@class="block md:flex justify-content-center items-center"]/div[1]/button';
  public nextButtonInItems = `(//button[contains(@class, 'button_add')])[2]`;
  public sku = `(//span[@role="combobox" and @aria-label="Select"])[1]`;
  public orderQuantity = `//input[@formcontrolname="quantity" and contains(@class, 'p-inputtext') and @type="number" and @placeholder="Enter"]`;
  public billOfLandingUploadButton = `(//input[@type='file' and @accept='.pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg'])[1]`;
  public viewButton = `//button[@type="button" and contains(@class, 'dropdown-item')]//i[@class="pi pi-eye"]`;
  public addButtonInDocumentations = `//button[@type="submit" and contains(@class, 'button_add') and text()=" Add "]`;
  public searchbar = `//input[@type="text" and @placeholder="Search"]`;
  public detailsPage = `//span[@class='ml-2' and text()='View Incoming Shipments']`;
  public status = `//span[@aria-label='Scheduled' and text()='Scheduled']`;
  public startTime = `//input[@role='combobox' and @placeholder='Select start time']`;
  public endTime = `//input[@role='combobox' and @placeholder='Select end time']`;
  public inspectionRequired = `//p-dropdown[@formcontrolname='inspection_required']`;
  private async ensurePageIsOpen() {
    if (this.page.isClosed()) {
      throw new Error('Page is closed');
    }
  }
  // Methods
  public async clickOnShipmentsSideBar() {
    await this.browserActions.click(this.shipmentsSideBar);
  }

  public async clickOnIncomingShipmentsSideBar() {
    await this.browserActions.click(this.incomingshipmentssideBar);
  }
  public async clickOnEditIncomingShipmentButton() {
    await this.browserActions.click(this.editIncomingShipmentButton);
  }

  public async clickOnAddIncomingShipmentButton() {
    await this.browserActions.click(this.addIncomingShipmentButton);
  }

  public async selectExpectedArrivalDate(date: string) {
    await this.browserActions.click(this.expectedArrivalDate);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
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
    const countryCodeOption = `//li[@role="option" and @aria-label="${countryCode}"]`;
    console.log(countryCodeOption);
    await this.browserActions.click(countryCodeOption);
  }

  public async enterCarrierContactNumber(carrierContactNumber: string) {
    await this.browserActions.inputText(this.carrierContactNumber, carrierContactNumber);
  }

  public async selectDockDoor(dockDoor: string) {
    await this.browserActions.click(this.dockDoor);
    await this.browserActions.waitForTimeout(200);
    const dockDoorOption = `//li[@aria-label="${dockDoor}"]`;
    console.log(dockDoorOption);
    await this.browserActions.click(dockDoorOption);
  }

  public async enterTrackingNumber(trackingNumber: string) {
    await this.browserActions.inputText(this.trackingNumber, trackingNumber);
  }

  public async selectSupplier(supplier: string) {
    await this.browserActions.click(this.supplier);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
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
  public async selectSku(sku: string) {
    await this.browserActions.click(this.sku);
    const skuOption = `//li[@role="option" and @aria-label="${sku}"]`;
    console.log(skuOption);
    await this.browserActions.click(skuOption);
  }
  public async enterOrderQuantity(orderQuantity: string) {
    await this.browserActions.inputText(this.orderQuantity, orderQuantity);
  }
  public async clickNextButtonInItems() {
    await this.browserActions.click(this.nextButtonInItems);

  }
 public async uploadBillOfLading(fileName: string): Promise<void> {
    await this.ensurePageIsOpen();
    const locator = await this.browserActions.getLocator(this.billOfLandingUploadButton);
    const filePath = path.join(__dirname, fileName);
    await locator.setInputFiles(filePath);
    await this.browserActions.waitForTimeout(5000);
 }
  public async clickAddButtonInDocumentations() {
    await this.browserActions.click(this.addButtonInDocumentations);
  }
  public async clickViewButton() {
    await this.browserActions.click(this.viewButton);
  }
  public async clickOnsearchBar() {
    await this.browserActions.click(this.searchbar);
  }
  public async isDetailsPageDispalyed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.detailsPage);
  }
  public async selectStatus(status: string) {
    await this.browserActions.click(this.status);
    const statusOption = `//li[@role="option" and @aria-label="${status}"]`;
    console.log(statusOption);
    await this.browserActions.click(statusOption);
  }
  public async selectStartTime(value:string){
    await this.browserActions.inputNumber(this.startTime,value);
  }
  public async selectendTime(value:string){
    await this.browserActions.inputNumber(this.endTime,value);
  }
  public async selectInspectionRequired(inspectionRequired: string) {
    await this.browserActions.click(this.inspectionRequired);
    await this.browserActions.waitForTimeout(200);
    const inspectionRequiredOption = `//li[@aria-label='${inspectionRequired}']`;
    console.log(inspectionRequiredOption);
    await this.browserActions.click(inspectionRequiredOption);
  
}
}
