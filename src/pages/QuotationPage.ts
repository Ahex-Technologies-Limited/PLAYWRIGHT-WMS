import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import path from 'path';

export class QuotationPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  //Selectors
  public quotationSideBar= `//a[@class='p-panelmenu-header-action ng-tns-c147418153-1 ng-star-inserted' and @href='#/admin/quotation/list']`;
  public quotationList= `//a[contains(@class, 'no-underline') and span[contains(text(),'Quotation')]]`;
  public quotationSearchBar= `//input[@placeholder='Search...']`;
  public quotationAddButton= `//button[@label='Add']`;
  public quotationEditButton= `(//button[i[contains(@class, 'pi-pencil')]])[1]`;
  public updateButton= `(//button[contains(@class, 'button_add') and contains(text(),'Update')])[1]`;
  public quotationFilterButton= `//button[span[contains(text(),'Filters')]]`;
  public statusButton= `//li[contains(@class, 'cursor-pointer')]`;
  public downloadButton= `(//button[i[contains(@class, 'pi-download')]])[1]`;
  public validDate = `(//input[@role='combobox' and @placeholder='Select'])[2]`;
  public customerName = `//input[@formcontrolname='name']`;
  public emailAddress = `//input[@formcontrolname='email']`;
  public phoneNumber = `//input[@formcontrolname='phone']`;
  public contactPerson = `//input[@formcontrolname='contact_person']`;
  public address = `//input[@formcontrolname='address_line_one']`;
  public country = `//*[@formcontrolname='country']`;
  public city = `//*[@formcontrolname='city']`;
  public state = `//*[@formcontrolname='state']`;
  public pinCode = `//*[@formcontrolname='pincode']`;
  public shippingAddressLink = `//span[contains(text(),'Shipping Address')]`;
  public nextButtonInCustomerInformation = `(//button[contains(text(),'Next')])[1]`;
  public sku = `//p-dropdown[@formcontrolname='product_id']`;
  public price = `//*[@formcontrolname='unit_price']`;
  public quantity = `//*[@formcontrolname='quantity']`;
  public discount = `//*[@formcontrolname='discount']`;
  public taxType = `//*[@formcontrolname='tax_rates_id']`;
  public taxRate = `//*[@formcontrolname='tax_rate']`;
  public deleteIcon= `//i[contains(@class, 'pi-trash')]`;
  public nextbuttonInItemDetails = `(//button[contains(text(),'Next')])[2]`;
  public referenceNumber = `//input[@formcontrolname='reference_number']`;
  public currency = `//*[@formcontrolname='currency']`;
  public salesRepresentative = `//*[@formcontrolname='sales_representative']`;
  public projectName = `//*[@formcontrolname='project_name']`;
  public authorizedSignature = `//*[@formcontrolname='authorized_signature']`;
  public customerSignature = `//*[@formcontrolname='customer_signature']`;
  public termsAndConditions = `//*[@formcontrolname='terms']`;
  public comments = `//*[@formcontrolname='comments']`;
  public uploadInvoice= `//input[@type='file' and @accept='.pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg']`;
  public addButton = `//button[@type='button' and contains(@class, 'button_add') and contains(text(),'Add')]`;
  public successmesssageAfterDownload= ``;
  private async ensurePageIsOpen() {
    if (this.page.isClosed()) {
      throw new Error('Page is closed');
    }
  }
//methods
public async clickOnQuotationSideBar(){
  await this.browserActions.click(this.quotationSideBar);
}
public async isQuotationListDisplayed(): Promise<boolean> {
 return await this.browserActions.isElementDisplayed(this.quotationList);
}
public async isSuccessfulDownloadMessageDisplayed(): Promise<boolean> {
  return await this.browserActions.isElementDisplayed(this.successmesssageAfterDownload);
 }
public async clickOnQuotationSearchBar(){
  await this.browserActions.click(this.quotationSearchBar);
  await this.browserActions.inputText(this.quotationSearchBar, 'test');
}

public async clickOnQuotationAddButton(){
  await this.browserActions.click(this.quotationAddButton);
}

public async clickOnEditButton(){
  await this.browserActions.click(this.quotationEditButton);
}

public async clickOnUpdateButton(){
  await this.browserActions.click(this.updateButton);
}

public async clickOnDownloadButton(){
  await this.browserActions.click(this.downloadButton);
}
public async clickOnFilterButton(){
  await this.browserActions.click(this.quotationFilterButton);
}

public async selectStatus(value:string){
  await this.browserActions.click(this.statusButton);
  const statusOption = `//label[contains(text(),'${value}')]`;
  await this.browserActions.click(statusOption);
  const applyButton = `//button[span[contains(text(),'Apply')]]`;
  await this.browserActions.click(applyButton);
}

public async selectValidDate(value: string) {
  await this.browserActions.click(this.validDate);
  const dateOptions = `//td[@aria-label='${value}']`;
  await this.browserActions.click(dateOptions);

}

public async enterCustomerName(value: string){
  await this.browserActions.inputText(this.customerName, value);
}

public async enterEmailAddress(value: string){
  await this.browserActions.inputText(this.emailAddress, value);
}

public async enterPhoneNumber(value: string){
  await this.browserActions.inputText(this.phoneNumber, value);
}
public async enterContactPerson(value: string){
  await this.browserActions.inputText(this.contactPerson, value);
}

public async enterAddress(value: string){
  await this.browserActions.inputText(this.address, value);
}

public async selctCountry(value: string) {
  await this.browserActions.click(this.country);
  const countryOption=`//span[normalize-space(text())='${value}']`;
  await this.browserActions.click(countryOption);
}

public async enterCity(value: string){
  await this.browserActions.inputText(this.city, value);
}

public async enterState(value: string){
  await this.browserActions.inputText(this.state, value);
}

public async enterPinCode(value: string){
  await this.browserActions.inputText(this.pinCode, value);
}
public async clickOnShippingAddressLink(){
  await this.browserActions.click(this.shippingAddressLink);
}
public async clickOnNextButtonInCustomerInformation(){
  await this.browserActions.click(this.nextButtonInCustomerInformation);
}

public async selectSku(value: string){
  await this.browserActions.click(this.sku);
  const skuOption=`//span[normalize-space(text())='${value}']`;
  await this.browserActions.click(skuOption);
}

public async enterPrice(value: string){
  await this.browserActions.inputText(this.price, value);
}

public async enterQuantity(value: string){
  await this.browserActions.inputText(this.quantity, value);
}

public async enterDiscount(value: string){
  await this.browserActions.inputText(this.discount, value);
}

public async selectTaxType(value: string) {
  await this.browserActions.click(this.taxType);
  const taxTypeOption=`//span[normalize-space(text())='${value}']`;
  await this.browserActions.click(taxTypeOption);
}

public async selectTaxRate (value: string) {
  await this.browserActions.click(this.taxRate);
  const taxRateOption=`//span[normalize-space(text())='${value}']`;
  await this.browserActions.click(taxRateOption);
}

public async deleteItem(){
  await this.browserActions.click(this.deleteIcon);
}
public async clickOnNextButtonInItemDetails(){
  await this.browserActions.click(this.nextbuttonInItemDetails);
}

public async enterReferenceNumber(value: string){
  await this.browserActions.inputText(this.referenceNumber, value);
}

public async selectCurrency(value: string) {
  await this.browserActions.click(this.currency);
  const currencyOption=`//span[normalize-space(text())='${value}']`;
  await this.browserActions.click(currencyOption);

}

public async enterSalesRepresentative(value: string){
  await this.browserActions.inputText(this.salesRepresentative, value);
}

public async enterProjectName(value: string){
  await this.browserActions.inputText(this.projectName, value);
}

public async enterAuthorizedSignature(value: string){
  await this.browserActions.inputText(this.authorizedSignature, value);
}

public async enterCustomerSignature(value: string){
  await this.browserActions.inputText(this.customerSignature, value);
}

public async enterTermsAndConditions(value: string){
  await this.browserActions.inputText(this.termsAndConditions, value);
}
public async enterComments(value: string){
  await this.browserActions.inputText(this.comments, value);
}

public async uploadInvoiceImage(fileName: string): Promise<void> {
    await this.ensurePageIsOpen();
    const locator = await this.browserActions.getLocator(this.uploadInvoice);
    const filePath = path.join(__dirname, fileName);
    await locator.setInputFiles(filePath);
    await this.browserActions.waitForTimeout(5000);
}

public async clickOnAddButtonInTermsandCondutions(){
  await this.browserActions.click(this.addButton);
}

}










  
