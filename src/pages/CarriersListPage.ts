import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CarriersListPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public carriersList = '//span[@class="ml-2" and text()="Carriers"]';
  public operationSideBar = '//span[contains(@class, "p-menuitem-text") and text()="Operations"]';
  public carriersSideBar = '//span[contains(@class, "p-menuitem-text") and text()="Carriers"]';
  public addCarriersButton = '//button[@class="p-element button_add justify-content-center p-button flex items-center outline-none w-full p-component" and @label="Add"]//span[text()="Add"]';
  public carrierName = '//input[@id="name" and @name="name" and @formcontrolname="name" and @placeholder="Enter"]';
  public carrierType = '//p-multiselect[@formcontrolname="type"]//div[contains(@class, "p-multiselect-label") and text()="Select"]';
  public contactPerson = '//*[@formcontrolname="contact_person"]';
  public contactPhoneNumber = '//*[@formcontrolname="contact_phone"]';
  public contactEmail = '//*[@formcontrolname="contact_email"]';
  public dotNumber = '//*[@formcontrolname="dot_number"]';
  public mcNumber = '//*[@formcontrolname="mc_number"]';
  public insuranceType = '//*[@formcontrolname="insurance_details"]';
  public safetyRating = '//*[@formcontrolname="safety_ratings"]';
  public equipmentType = '//*[@formcontrolname="equipment_types"]';
  public capacity = '//*[@formcontrolname="capacity"]';
  public nextButton = '//*[@_ngcontent-ng-c4204489659]/div/form/div[@class="block md:flex justify-content-center items-center"]/div[@class="field col-12 md:col-2"]/button[contains(@class, "button_add")]';
  public backButton = '//*[@_ngcontent-ng-c4204489659]/div/form/div[@class="block md:flex justify-content-center items-center"]/div[@class="field col-12 md:col-2"]/button[contains(@class, "button_back")]';
  public nextButtonInDocument = '//*[@_ngcontent-ng-c4204489659]/div/form/div[@class="block md:flex justify-content-center items-center mt-4"]/div[@class="field col-12 md:col-2"]/button[contains(@class, "button_add")]';
  public backButtonInDocument = '//*[@_ngcontent-ng-c4204489659]/div/form/div[@class="block md:flex justify-content-center items-center mt-4"]/div[@class="field col-12 md:col-2"]/button[contains(@class, "button_back")]';
  public editButton = '//*[contains(text()," Carrier ")]//ancestor::td/following-sibling::td//*[@class="pi pi-pencil text-success"]';
  public deleteButton = '//*[contains(text()," Carrier ")]//ancestor::td/following-sibling::td//*[@class="pi pi-trash text-danger"]';
  public viewButton = '//*[contains(text()," Carrier ")]//ancestor::td/following-sibling::td//*[@class="pi pi-eye"]';
  public updateCarriersButton = '//button[@type="submit" and contains(@class, "button_add")]';
  public nextButtonInUpdateCarrier = '//app-carrier-documents[@_ngcontent-ng-c4204489659]/div/form/div[@class="block md:flex justify-content-center items-center mt-4"]/div[@class="field col-12 md:col-2"]/button[contains(@class, "button_add")]';
  public yesButton = '//button[@type="button" and contains(@class, "button_yes")]';
  public noButton = '//button[@type="button" and contains(@class, "button_no")]';
  public deleteMessage = '//div[contains(@class, "p-toast-message-text") and contains(., "Success") and contains(., "Carrier deleted successfully.")]';
  public searchCarriers = '//input[contains(@class, "search-input") and @placeholder="Search..."]';
  public status = '//*[contains(text()," Carrier ")]//ancestor::td/following-sibling::td//*[@class="p-dropdown p-component p-inputwrapper"]';
  public viewCarriers = '//span[contains(@class, "ml-2") and text()="View Carriers"]';
  public editButtonInViewPage = '//button[contains(@class, "p-button") and contains(@class, "p-button-contrast") and contains(@class, "p-button-rounded")]';

  // Methods
  public async clickCarriersList(): Promise<void> {
    await this.browserActions.click(this.carriersList);
  }

  public async clickOperationSideBar(): Promise<void> {
    await this.browserActions.click(this.operationSideBar);
  }

  public async clickCarriersSideBar(): Promise<void> {
    await this.browserActions.click(this.carriersSideBar);
  }

  public async clickAddCarriersButton(): Promise<void> {
    await this.browserActions.click(this.addCarriersButton);
  }

  public async enterCarrierName(carrierName: string): Promise<void> {
    await this.browserActions.inputText(this.carrierName, carrierName);
  }

  public async selectCarrierType(carrierType: string): Promise<void> {
    await this.browserActions.click(this.carrierType);
    const carrierTypeOption = await this.page.locator(`//li[@aria-label="${carrierType}"]`);
    await carrierTypeOption.click();
  }

  public async enterContactPerson(contactPerson: string): Promise<void> {
    await this.browserActions.inputText(this.contactPerson, contactPerson);
  }

  public async enterContactPhoneNumber(contactPhoneNumber: string): Promise<void> {
    await this.browserActions.inputText(this.contactPhoneNumber, contactPhoneNumber);
  }

  public async enterContactEmail(contactEmail: string): Promise<void> {
    await this.browserActions.inputText(this.contactEmail, contactEmail);
  }

  public async enterDotNumber(dotNumber: string): Promise<void> {
    await this.browserActions.inputText(this.dotNumber, dotNumber);
  }

  public async enterMcNumber(mcNumber: string): Promise<void> {
    await this.browserActions.inputText(this.mcNumber, mcNumber);
  }

  public async selectInsuranceType(insuranceType: string): Promise<void> {
    await this.browserActions.click(this.insuranceType);
    const insuranceTypeOption = await this.page.locator(`//li[contains(@class, "p-ripple p-element p-dropdown-item") and @aria-label="${insuranceType}"]`);
    await insuranceTypeOption.click();
  }

  public async selectSafetyRating(safetyRating: string): Promise<void> {
    await this.browserActions.click(this.safetyRating);
    const safetyRatingOption = await this.page.locator(`//li[contains(@class, "p-ripple p-element p-dropdown-item") and @aria-label="${safetyRating}"]`);
    await safetyRatingOption.click();
  }

  public async selectEquipmentType(equipmentType: string): Promise<void> {
    await this.browserActions.click(this.equipmentType);
    const equipmentTypeOption = await this.page.locator(`//li[contains(@class, "p-ripple p-element p-multiselect-item") and @aria-label="${equipmentType}"]`);
    await equipmentTypeOption.click();
  }

  public async enterCapacity(capacity: string): Promise<void> {
    await this.browserActions.inputText(this.capacity, capacity);
  }

  public async clickNextButton(): Promise<void> {
    await this.browserActions.click(this.nextButton);
  }

  public async clickBackButton(): Promise<void> {
    await this.browserActions.click(this.backButton);
  }

  public async clickNextButtonInDocument(): Promise<void> {
    await this.browserActions.click(this.nextButtonInDocument);
  }

  public async clickBackButtonInDocument(): Promise<void> {
    await this.browserActions.click(this.backButtonInDocument);
  }

  public async clickEditButton(): Promise<void> {
    await this.browserActions.click(this.editButton);
  }

  public async clickDeleteButton(): Promise<void> {
    await this.browserActions.click(this.deleteButton);
  }

  public async clickViewButton(): Promise<void> {
    await this.browserActions.click(this.viewButton);
  }

  public async clickUpdateCarriersButton(): Promise<void> {
    await this.browserActions.click(this.updateCarriersButton);
  }

  public async clickNextButtonInUpdateCarrier(): Promise<void> {
    await this.browserActions.click(this.nextButtonInUpdateCarrier);
  }

  public async clickYesButton(): Promise<void> {
    await this.browserActions.click(this.yesButton);
  }

  public async clickNoButton(): Promise<void> {
    await this.browserActions.click(this.noButton);
  }

  public async enterSearchCarriers(searchCarriers: string): Promise<void> {
    await this.browserActions.inputText(this.searchCarriers, searchCarriers);
  }

  public async isCarrierAdded(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.carriersList);
  }

  public async isCarrierUpdated(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.carriersList);
  }

  public async isCarrierDeletedMessage(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.deleteMessage);
  }

  public async isCarrierDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.viewCarriers);
  }

  public async isCarrierEditDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.carriersList);
  }

  public async isCarrierListDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.carriersList);
  }

  public async changeStatus(status: string): Promise<void> {
    await this.browserActions.click(this.status);
    const statusOption = await this.page.locator(`//li[contains(@class, "p-ripple p-element p-dropdown-item") and @aria-label="${status}"]`);
    await statusOption.click();
  }

  public async clickEditButtonInViewPage(): Promise<void> {
    await this.browserActions.click(this.editButtonInViewPage);
  }
}

