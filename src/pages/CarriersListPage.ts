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
  public nextButton = '//button[@type="submit" and contains(@class, "button_add")]';
  public backButton = '//*[@_ngcontent-ng-c4204489659]/div/form/div[@class="block md:flex justify-content-center items-center"]/div[@class="field col-12 md:col-2"]/button[contains(@class, "button_back")]';
  public nextButtonInDocument = '//*[@_ngcontent-ng-c4204489659]/div/form/div[@class="block md:flex justify-content-center items-center mt-4"]/div[@class="field col-12 md:col-2"]/button[contains(@class, "button_add")]';
  public backButtonInDocument = '//*[@_ngcontent-ng-c4204489659]/div/form/div[@class="block md:flex justify-content-center items-center mt-4"]/div[@class="field col-12 md:col-2"]/button[contains(@class, "button_back")]';
  public editButton = `(//td[contains(@class, 'actions-cell')]/div[@class='dropdown-menu']/button[@tooltipposition='top' and i[contains(@class, 'pi-pencil')]])[1]`;
  public deleteButton = `(//td[contains(@class, 'actions-cell')]/div[@class='dropdown-menu']/button[@tooltipposition='top' and i[contains(@class, 'pi-trash')]])[1]`;
  public viewButton = `(//button[@tooltipposition='top' and contains(@class, 'dropdown-item') and i[contains(@class, 'pi-eye')]])[1]`;
  public updateCarriersButton = '//button[@type="submit" and contains(@class, "button_add")]';
  public nextButtonInUpdateCarrier = `(//button[@type='button' and contains(@class, 'button_add') and normalize-space(text())='Update'])[2]`;
  public yesButton = '//button[@type="button" and contains(@class, "button_yes")]';
  public noButton = '//button[@type="button" and contains(@class, "button_no")]';
  public deleteMessage = '//div[contains(@class, "p-toast-message-text") and contains(., "Success") and contains(., "Carrier deleted successfully.")]';
  public searchCarriers = '//input[contains(@class, "search-input") and @placeholder="Search..."]';
  public status = `(//p-dropdown[@placeholder='Select Status']//div[@class='p-dropdown-trigger'])[1]`;
  public viewCarriers = '//span[contains(@class, "ml-2") and text()="View Carriers"]';
  public editButtonInViewPage = '//button[contains(@class, "p-button") and contains(@class, "p-button-contrast") and contains(@class, "p-button-rounded")]';
  public capacityUnit = `//p-dropdown[@formcontrolname='capacity_unit']`;
  public createButton = `//button[contains(text(), 'Create')]`;

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
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

  }

  public async enterContactPerson(contactPerson: string): Promise<void> {
    await this.browserActions.inputText(this.contactPerson, contactPerson);
  }

  public async enterContactPhoneNumber(contactPhoneNumber: string): Promise<void> {
    const countryCode = `//*[@formcontrolname="contact_country_code"]`;
    await this.browserActions.click(countryCode);
    const countryCodeOption = `//span[contains(@class, 'ng-star-inserted') and text()='+91']`;
    await this.browserActions.click(countryCodeOption);
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
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async selectSafetyRating(safetyRating: string): Promise<void> {
    await this.browserActions.click(this.safetyRating);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async selectEquipmentType(equipmentType: string): Promise<void> {
    await this.browserActions.click(this.equipmentType);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    const closeButtonIcon = `//button[@aria-label='Close']`;
    await this.browserActions.click(closeButtonIcon);
  }
public async selectCapacityUnit(capacityUnit: string): Promise<void> {
   await this.browserActions.click(this.capacityUnit);
   await this.browserActions.waitForTimeout(200);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
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
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async clickEditButtonInViewPage(): Promise<void> {
    await this.browserActions.click(this.editButtonInViewPage);
  }
  public async clickCreateButton(): Promise<void> {
    await this.browserActions.click(this.createButton);
  }
}

