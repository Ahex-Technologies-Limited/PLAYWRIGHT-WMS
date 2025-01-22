import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class SupplierManagementPage  extends BasePage {
  private page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
  }

  // Selectors
  public supplierManagementSideBar = `//a[span[contains(text(), 'Supplier Management')]]`;
  public supplierPage = `//a[contains(@class, 'bredcrumb-text') and span[contains(text(), 'Suppliers')]]`;
  public supplierList = ``;
  public searchBar = `//input[@type='text' and contains(@class, 'search-input')]`;
  public editIcon = `(//i[contains(@class, 'pi-pencil') and contains(@class, 'text-success')])[1]`;
  public viewIcon = `(//button[contains(@class, 'dropdown-item') and contains(@class, 'ng-star-inserted') and .//i[contains(@class, 'pi-eye')]])[1]`;
  public addSupplierButton = `//button[@label='Add' and span[contains(text(), 'Add')]]`;
  public supplierName = `//input[@formcontrolname='supplier_name']`;
  public supplierEmail = `//input[@id='name' and @formcontrolname='email']`;
  public countryCode = `(//p-dropdown[@id='contactPhonecode'])[1]`;
  public supplierPhoneNumber = `(//input[@id='name'][@formcontrolname='phone'][@type='text'])[1]`;
  public taxId = `(//input[@formcontrolname='tax_id'])[1]`;
  public currency = `//p-dropdown[@formcontrolname='currency']`;
  public paymentMethods = `//p-dropdown[@formcontrolname='payment_method']`;
  public markAsPrimaryCheckbox = `(//div[@data-pc-section='input']//ancestor::div[@class='p-checkbox-box'])[1]`;
  public primaryContactName = `//input[@formcontrolname='name' and @name='name' and @placeholder='Enter']`;
  public primaryContactEmail = `(//input[@formcontrolname='email'])[2]`;
  public primaryContactCountryCode = `(//p-dropdown[@formcontrolname='country_code'])[2]`;
  public primaryContactPhoneNumber = `(//input[@formcontrolname='phone'])[2]`;
  public addcontactLink = `//button[@type='button' and normalize-space(.//span[text()])='Add contact']`;
  public nextButtonInSupplierInfo = `(//div//button[contains(@class, 'button_add') and normalize-space(text())='Next'])[1]`;
  public backButtonInSupplierInfo = `(//div//button[contains(@class, 'button_back ') and normalize-space(text())='Back'])[1]`;
  public addressLine1 = `(//textarea[@formcontrolname='address_line1'])[1]`;
  public addressLine2 = `(//textarea[@formcontrolname='address_line2'])[1]`;
  public country = `(//p-dropdown[@formcontrolname='country'])[1]`;
  public state = `(//input[@formcontrolname='state'])[1]`;
  public city = `(//input[@formcontrolname='city'])[1]`;
  public pinCode = `(//input[@formcontrolname='postal_code'])[1]`;
  public markAsMailingAddressCheckbox = `(//div[@class='p-checkbox-box' and @data-pc-section='input' and @data-p-highlight='false'])[1]`;
  public MailingAddressLine1 = `(//textarea[@formcontrolname='address_line1'])[2]`;
  public MailingAddressLine2 = `(//textarea[@formcontrolname='address_line2'])[2]`;
  public MailingCountry = `(//p-dropdown[@formcontrolname='country'])[2]`;
  public MailingState = `(//input[@formcontrolname='state'])[2]`;
  public MailingCity = `(//input[@formcontrolname='city'])[2]`;
  public MailingPinCode = `(//input[@formcontrolname='postal_code'])[2]`;
  public addMailingAddressLink = `//span[contains(text(), 'Add Mailing Address')]`;
  public deleteIconInMailingAddress = `(//div[contains(@class, 'remove-icon')])[1]`;
  public nextButtonInSupplierAddress = `(//button[contains(@class, 'button_add')])[2]`;
  public backButtonInSupplierAddress = `(//button[contains(@class, 'button_back')])[2]`;
  public markAsPrimarycheckboxInFinancialInfo = `//div[@class='p-checkbox-box' and @data-p-highlight='false' and @data-p-focused='false']`;
  public benificiaryName = `//input[@formcontrolname='beneficiary_name']`;
  public bankAccountNumber = `//input[@formcontrolname='account_number']`;
  public bankName = `//input[@formcontrolname='bank_name']`;
  public bankAddress = `//input[@formcontrolname='bank_address']`;
  public bankBranchCode = `//input[@formcontrolname='branch_code']`;
  public IBAN = `//input[@formcontrolname='iban']`;
  public swiftCode = `//input[@formcontrolname='swift_code']`;
  public addAccountLink = `//button//span[text()='Add Account']`;
  public nextButtonInSupplierFinancialInfo = `(//button[contains(@class, 'button_add')])[3]`;
  public backButtonInSupplierFinancialInfo = `(//button[contains(@class, 'button_back ')])[3]`;
  public deleteIconInFinancialInfo = `(//div[contains(@class, 'remove-icon')]//i[contains(@class, 'pi-trash')])[2]`;
  public startDate = `(//input[@placeholder='Select date' and @role='combobox'])[1]`;
  public endDate = `(//input[@placeholder='Select date' and @role='combobox'])[2]`;
  public description = `//textarea[@formcontrolname='description']`;
  public sku = `(//span[@role='combobox' and @aria-label='Select' and @aria-haspopup='listbox'])[2]`;
  public name = `//input[@formcontrolname='name' and @readonly and @placeholder='Enter']`;
  public catagory = `//input[@formcontrolname='category']`;
  public subCatagory = `//input[@formcontrolname='sub_category']`;
  public salesPrice = `//input[@formcontrolname='sales_price']`;
  public discount = `//input[@formcontrolname='discount_percentage']`;
  public removeIcon = `(//i[contains(@class, 'pi-trash') and contains(@class, 'text-red')])[2]`;
  public addItemLink = `//button[@label='Add item' and @icon='pi pi-plus']`;
  public uploadButton = `(//span[@class='p-button-label ng-star-inserted' and text()='Upload'])[1]`;
  public uploadAnnexuresOrAttachments = `(//input[@aria-label='Browse Files'])[1]`;
  public uploadSupplierAgreement = `(//input[@aria-label='Browse Files'])[2]`;
  public uploadProofOfSigningAuthority = `(//input[@aria-label='Browse Files'])[3]`;
  public nextButtonInContactInfo = `(//button[@type='submit'])[4]`;
  public backButtonInContactInfo = `(//button[@type='button'])[9]`;
  public addButtonInComplianceAndDocumentation = `(//button[normalize-space(text())='Add'])[1]`;

  // Methods
  public async clickOnSupplierManagementSideBar() {
    await this.page.click(this.supplierManagementSideBar);
  }

  public async clickOnSupplierPage() {
    await this.page.click(this.supplierPage);
  }

  public async clickOnSupplierList() {
    await this.page.click(this.supplierList);
  }

  public async enterInSearchBar(searchBar: string) {
    await this.page.fill(this.searchBar, searchBar);
  }

  public async clickOnAddSupplierButton() {
    await this.page.click(this.addSupplierButton);
  }

  public async enterSupplierName(supplierName: string) {
    await this.page.fill(this.supplierName, supplierName);
  }

  public async enterSupplierEmail(supplierEmail: string) {
    await this.page.fill(this.supplierEmail, supplierEmail);
  }

  public async selectCountryCode(countryCode: string) {
    await this.page.click(this.countryCode);
    const countryCodeElement = `//li[@aria-label='${countryCode}']`;
    await this.page.click(countryCodeElement);
  }

  public async enterSupplierPhoneNumber(supplierPhoneNumber: string) {
    await this.page.fill(this.supplierPhoneNumber, supplierPhoneNumber);
  }

  public async enterTaxId(taxId: string) {
    await this.page.fill(this.taxId, taxId);
  }

  public async selectCurrency(currency: string) {
    await this.page.click(this.currency);
    const currencyElement = `//li[@aria-label='${currency}']`;
    await this.page.click(currencyElement);
  }

  public async selectPaymentMethods(paymentMethods: string) {
    await this.page.click(this.paymentMethods);
    const paymentMethodsElement = `//li[@aria-label='${paymentMethods}']`;
    await this.page.click(paymentMethodsElement);
  }

  public async clickOnMarkAsPrimaryCheckbox() {
    await this.page.click(this.markAsPrimaryCheckbox);
  }

  public async enterPrimaryContactName(primaryContactName: string) {
    await this.page.fill(this.primaryContactName, primaryContactName);
  }

  public async enterPrimaryContactEmail(primaryContactEmail: string) {
    await this.page.fill(this.primaryContactEmail, primaryContactEmail);
  }

  public async selectPrimaryContactCountryCode(primaryContactCountryCode: string) {
    await this.page.click(this.primaryContactCountryCode);
    const primaryContactCountryCodeElement = `//li[@aria-label='${primaryContactCountryCode}']`;
    await this.page.click(primaryContactCountryCodeElement);
  }

  public async enterPrimaryContactPhoneNumber(primaryContactPhoneNumber: string) {
    await this.page.fill(this.primaryContactPhoneNumber, primaryContactPhoneNumber);
  }

  public async clickOnAddcontactLink() {
    await this.page.click(this.addcontactLink);
  }

  public async clickOnNextButtonInSupplierInfo() {
    await this.page.click(this.nextButtonInSupplierInfo);
  }

  public async clickOnBackButtonInSupplierInfo() {
    await this.page.click(this.backButtonInSupplierInfo);
  }

  public async enterAddressLine1(addressLine1: string) {
    await this.page.fill(this.addressLine1, addressLine1);
  }

  public async enterAddressLine2(addressLine2: string) {
    await this.page.fill(this.addressLine2, addressLine2);
  }

  public async selectCountry(country: string) {
    await this.page.click(this.country);
    const countryElement = `//li[@aria-label='${country}']`;
    await this.page.click(countryElement);
  }

  public async enterState(state: string) {
    await this.page.fill(this.state, state);
  }

  public async enterCity(city: string) {
    await this.page.fill(this.city, city);
  }

  public async enterPinCode(pinCode: string) {
    await this.page.fill(this.pinCode, pinCode);
  }

  public async clickOnMarkAsMailingAddressCheckbox() {
    await this.page.click(this.markAsMailingAddressCheckbox);
  }

  public async enterMailingAddressLine1(MailingAddressLine1: string) {
    await this.page.fill(this.MailingAddressLine1, MailingAddressLine1);
  }

  public async enterMailingAddressLine2(MailingAddressLine2: string) {
    await this.page.fill(this.MailingAddressLine2, MailingAddressLine2);
  }

  public async selectMailingCountry(MailingCountry: string) {
    await this.page.click(this.MailingCountry);
    const MailingCountryElement = `//li[@aria-label='${MailingCountry}']`;
    await this.page.click(MailingCountryElement);
  }

  public async enterMailingState(MailingState: string) {
    await this.page.fill(this.MailingState, MailingState);
  }

  public async enterMailingCity(MailingCity: string) {
    await this.page.fill(this.MailingCity, MailingCity);
  }

  public async enterMailingPinCode(MailingPinCode: string) {
    await this.page.fill(this.MailingPinCode, MailingPinCode);
  }

  public async clickOnAddMailingAddressLink() {
    await this.page.click(this.addMailingAddressLink);
  }

  public async clickOnDeleteIconInMailingAddress() {
    await this.page.click(this.deleteIconInMailingAddress);
  }

  public async clickOnNextButtonInSupplierAddress() {
    await this.page.click(this.nextButtonInSupplierAddress);
  }

  public async clickOnBackButtonInSupplierAddress() {
    await this.page.click(this.backButtonInSupplierAddress);
  }

  public async clickOnMarkAsPrimarycheckboxInFinancialInfo() {
    await this.page.click(this.markAsPrimarycheckboxInFinancialInfo);
  }

  public async enterBenificiaryName(benificiaryName: string) {
    await this.page.fill(this.benificiaryName, benificiaryName);
  }

  public async enterBankAccountNumber(bankAccountNumber: string) {
    await this.page.fill(this.bankAccountNumber, bankAccountNumber);
  }

  public async enterBankName(bankName: string) {
    await this.page.fill(this.bankName, bankName);
  }

  public async enterBankAddress(bankAddress: string) {
    await this.page.fill(this.bankAddress, bankAddress);
  }

  public async enterBankBranchCode(bankBranchCode: string) {
    await this.page.fill(this.bankBranchCode, bankBranchCode);
  }

  public async enterIBAN(IBAN: string) {
    await this.page.fill(this.IBAN, IBAN);
  }

  public async enterSwiftCode(swiftCode: string) {
    await this.page.fill(this.swiftCode, swiftCode);
  }

  public async clickOnAddAccountLink() {
    await this.page.click(this.addAccountLink);
  }

  public async clickOnNextButtonInSupplierFinancialInfo() {
    await this.page.click(this.nextButtonInSupplierFinancialInfo);
  }

  public async clickOnBackButtonInSupplierFinancialInfo() {
    await this.page.click(this.backButtonInSupplierFinancialInfo);
  }

  public async clickOnDeleteIconInFinancialInfo() {
    await this.page.click(this.deleteIconInFinancialInfo);
  }

  public async selectStartDate(startDate: string) {
    await this.page.click(this.startDate);
    const startDateElement = `//span[@data-date='${startDate}']`;
    await this.page.click(startDateElement);
  }

  public async selectEndDate(endDate: string) {
    await this.page.click(this.endDate);
    const endDateElement = `//span[@data-date='${endDate}']`;
    await this.page.click(endDateElement);
  }

  public async enterDescription(description: string) {
    await this.page.fill(this.description, description);
  }

  public async selectSku(sku: string) {
    await this.page.click(this.sku);
    const skuElement = `//li[@aria-label='${sku}']`;
    await this.page.click(skuElement);
  }

  public async enterName(name: string) {
    await this.page.fill(this.name, name);
  }

  public async selectCatagory(catagory: string) {
    await this.page.click(this.catagory);
    const catagoryElement = ``;
    await this.page.click(catagoryElement);
  }

  public async selectSubCatagory(subCatagory: string) {
    await this.page.click(this.subCatagory);
    const subCatagoryElement = ``;
    await this.page.click(subCatagoryElement);
  }

  public async enterSalesPrice(salesPrice: string) {
    await this.page.fill(this.salesPrice, salesPrice);
  }

  public async enterDiscount(discount: string) {
    await this.page.fill(this.discount, discount);
  }

  public async clickOnRemoveIcon() {
    await this.page.click(this.removeIcon);
  }

  public async clickOnAddItemLink() {
    await this.page.click(this.addItemLink);
  }

  public async clickOnUploadButton() {
    await this.page.click(this.uploadButton);
  }

  public async clickOnUploadAnnexuresOrAttachments(filePath: string) {
    await this.page.setInputFiles(this.uploadAnnexuresOrAttachments, filePath);
  }

  public async clickOnUploadSupplierAgreement(filePath: string) {
    await this.page.setInputFiles(this.uploadSupplierAgreement, filePath);
  }

  public async clickOnUploadProofOfSigningAuthority(filePath: string) {
    await this.page.setInputFiles(this.uploadProofOfSigningAuthority, filePath);
  }

  public async clickOnNextButtonInContactInfo() {
    await this.page.click(this.nextButtonInContactInfo);
  }

  public async clickOnBackButtonInContactInfo() {
    await this.page.click(this.backButtonInContactInfo);
  }

  public async clickOnAddButtonInComplianceAndDocumentation() {
    await this.page.click(this.addButtonInComplianceAndDocumentation);
  }

  public async isSupplierListDisplayed(): Promise<boolean> {
    return this.page.isVisible(this.supplierList);
  }

  public async isSupplierPageDisplayed(): Promise<boolean> {
    return this.page.isVisible(this.supplierPage);
  }

  public async clickOnEditIcon() {
    await this.page.click(this.editIcon);
  }

  public async clickOnViewIcon() {
    await this.page.click(this.viewIcon);
  }

  public async clickOnUpdateButton() {
    const updateButton = `(//button[contains(@class, 'button_add') and contains(@class, 'p-button') and text()[normalize-space()='Update']])[1]`;
    await this.page.click(updateButton);
  }
}

export default SupplierManagementPage;