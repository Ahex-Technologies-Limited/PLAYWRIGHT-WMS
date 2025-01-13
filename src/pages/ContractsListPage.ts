import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContractsListPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public contractsList = '//li[@class="p-element ng-star-inserted"]//span[text()="Contracts"]';
  public operationSideBar = '//span[contains(@class, "p-menuitem-text") and text()="Operations"]';
  public contractsSideBar = '//span[contains(@class, "p-menuitem-text") and text()="Contracts"]';
  public addContractsButton = '//div[@class="zone flex justify-content-end px-3 py-3 align-items-center"]//button[@class="p-element button_add justify-content-center p-button flex items-center outline-none w-full p-component ng-star-inserted" and @label="Add"]';
  public startDate = '//input[@type="text" and @placeholder="Select date"]';
  public endDate = '//input[@type="text" and @placeholder="Select Date"]';
  public carrierName = '//*[@formcontrolname="carrier_id"]';
  public contractType = '//*[@formcontrolname="contract_type"]';
  public deliveryType = '//*[@formcontrolname="delivery_type"]';
  public deliveryMode = '//*[@formcontrolname="delivery_mode"]';
  public nextButtonContractInfo = '//div[@class="block md:flex justify-content-center items-center"]//button[contains(@class, "button_add") and normalize-space(text())="Next"]';
  public searchBar = '//span[contains(@class, "p-input-icon-left")]//input[@placeholder="Search..."]';
  public editIconButton = '//*[contains(text()," Carrier3 ")]//ancestor::td/following-sibling::td//*[@class="pi pi-pencil text-success"]';
  public viewButton = '//*[contains(text()," Carrier3 ")]//ancestor::td/following-sibling::td//*[@class="pi pi-eye"]';
  public updateContractsNextButton = '//div[@class="block md:flex justify-content-center items-center"]//button[contains(text(),"Next")]';
  public updateContractsBackButton = '//div[@class="block md:flex justify-content-center items-center"]//button[contains(text()," Back ")]';
  public nextButtonInDocument = '//div[@class="block md:flex justify-content-center items-center mt-4"]//button[contains(text(),"Next")]';
  public backButtonInDocument = '//div[@class="block md:flex justify-content-center items-center mt-4"]//button[contains(text(),"Back")]';
  public editIconInViewContract = '//button[span[@aria-hidden="false" and text()="Edit"]]';
  public clickToViewInDocuments = ''; // Placeholder if you have a selector
  public clickToViewInCarrierRateSheet = ''; // Placeholder if you have a selector
  public clickToViewInInsuranceCertificate = ''; // Placeholder if you have a selector
  public clickToviewInLegalDocuments = ''; // Placeholder if you have a selector
  public status = '//*[contains(text()," Carrier ")]//ancestor::td/following-sibling::td//*[@class="p-dropdown p-component p-inputwrapper"]';
  public yesButton = '//button[contains(@class, "button_yes") and text()=" Yes "]';
  public noButton = '//button[contains(@class, "button_no") and text()=" No "]';

  // Methods
  public async clickContractsList(): Promise<void> {
    await this.browserActions.click(this.contractsList);
  }

  public async clickOperationSideBar(): Promise<void> {
    await this.browserActions.click(this.operationSideBar);
  }

  public async clickContractsSideBar(): Promise<void> {
    await this.browserActions.click(this.contractsSideBar);
  }

  public async clickAddContractsButton(): Promise<void> {
    await this.browserActions.click(this.addContractsButton);
  }

  public async selectStartDate(startDate: string): Promise<void> {
    await this.browserActions.click(this.startDate);
    await this.browserActions.inputText(this.startDate, startDate);
  }

  public async selectEndDate(endDate: string): Promise<void> {
    await this.browserActions.click(this.endDate);
    await this.browserActions.inputText(this.endDate, endDate);
  }

  public async selectCarrierName(carrierName: string): Promise<void> {
    await this.browserActions.click(this.carrierName);
    const carrierNameOption = await this.page.locator(`//li[@aria-label="${carrierName}"]`);
    await carrierNameOption.click();
  }

  public async selectContractType(contractType: string): Promise<void> {
    await this.browserActions.click(this.contractType);
    const contractTypeOption = await this.page.locator(`//li[@aria-label="${contractType}"]`);
    await contractTypeOption.click();
  }

  public async selectDeliveryType(deliveryType: string): Promise<void> {
    await this.browserActions.click(this.deliveryType);
    const deliveryTypeOption = await this.page.locator(`//li[@aria-label="${deliveryType}"]`);
    await deliveryTypeOption.click();
  }

  public async selectDeliveryMode(deliveryMode: string): Promise<void> {
    await this.browserActions.click(this.deliveryMode);
    const deliveryModeOption = await this.page.locator(`//li[@aria-label="${deliveryMode}"]`);
    await deliveryModeOption.click();
  }

  public async clickNextButtonContractInfo(): Promise<void> {
    await this.browserActions.click(this.nextButtonContractInfo);
  }

  public async isContractListDisplayed(): Promise<boolean> {
    return this.browserActions.isElementDisplayed(this.contractsList);
  }

  public async enterSearchContract(searchContract: string): Promise<void> {
    await this.browserActions.inputText(this.searchBar, searchContract);
  }

  public async clickEditionButton(): Promise<void> {
    await this.browserActions.click(this.editIconButton);
  }

  public async clickViewButton(): Promise<void> {
    await this.browserActions.click(this.viewButton);
  }

  public async clickNextButtonInDocument(): Promise<void> {
    await this.browserActions.click(this.nextButtonInDocument);
  }

  public async clickBackButtonInDocument(): Promise<void> {
    await this.browserActions.click(this.backButtonInDocument);
  }

  public async clickEditIconInViewContract(): Promise<void> {
    await this.browserActions.click(this.editIconInViewContract);
  }

  public async clickToViewForDocuments(): Promise<void> {
    await this.browserActions.click(this.clickToViewInDocuments);
  }

  public async clickToViewForCarrierRateSheet(): Promise<void> {
    await this.browserActions.click(this.clickToViewInCarrierRateSheet);
  }

  public async clickToViewForInsuranceCertificate(): Promise<void> {
    await this.browserActions.click(this.clickToViewInInsuranceCertificate);
  }

  public async clickToviewForLegalDocuments(): Promise<void> {
    await this.browserActions.click(this.clickToviewInLegalDocuments);
  }

  public async changeStatus(status: string): Promise<void> {
    await this.browserActions.click(this.status);
    const statusOption = await this.page.locator(`//li[contains(@class, "p-ripple p-element p-dropdown-item") and @aria-label="${status}"]`);
    await statusOption.click();
  }

  public async clickYesButton(): Promise<void> {
    await this.browserActions.click(this.yesButton);
  }

  public async clickNoButton(): Promise<void> {
    await this.browserActions.click(this.noButton);
  }
}

