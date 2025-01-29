import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OrderListPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
    }

//selectors
public orderManagementSideBar = `//div[@role='button' and contains(@class, 'p-panelmenu-header') and @aria-label='Order Management']`;
public orderSideBar =`//a//span[text()='Orders']`;
public searchBar = `//input[@type='text' and @placeholder='Search...' and contains(@class, 'search-input')]`;
public filterButton = `//button[.//span[text()='Filters']]`;
public statusFilter = `//li[.//span[text()='Status']]`;
public filterApplyButton = `//span[@class='p-button-label' and text()='Apply']`;
public filterClearButton = `//span[@class='p-button-label' and text()='Clear']`;
public orderListPage = `//span[contains(@class, 'ml-2') and contains(text(), 'Order List')]`;
public orderAddButton = `//span[@class='p-button-label' and text()='Add']`;
public orderEditButton = `(//button[.//i[contains(@class, 'pi-pencil') and contains(@class, 'text-success')]])[1]`;
public orderDetailsIcon= `(//button[.//i[contains(@class, 'pi-eye')]])[1]`;
public status =`(//span[@role='combobox' and contains(text(), 'Processing')])[1]`;
public orderDate =`//input[@type='text' and @placeholder='Select order date ']`;
public contactNumber =`//input[@formcontrolname='contact']`;
public customerName =`(//input[@placeholder='Enter name'])[1]`;
public email =`//input[@formcontrolname='email']`;
public paymentMethod =`//span[contains(@class, 'p-dropdown-label') and text()='Select payment method']`;
public orderType =`//span[contains(@class, 'p-dropdown-label') and text()='Select order type']`;
public orderPriority =`//span[contains(@class, 'p-dropdown-label') and text()='Select priority']`;
public nextButtonInOrderDetailsPage =`(//button[@type='submit' and normalize-space( text())='Next'])[1]`;
public address = `(//input[@formcontrolname='address_line_one' and @type='text' and @placeholder='Enter address' and @id='name'])[1]`;
public country = `(//span[@role='combobox' and text()='Select Country'])[1]`;
public city = `(//input[@formcontrolname='city'])[1]`;
public state = `(//input[@formcontrolname='state'])[1]`;
public pincode = `(//input[@formcontrolname='pincode'])[1]`;
public sameAsShippingAddressLink = `(//span[text()='Same as Shipping Address'])[1]`;
public nextButtonnInAddress = `(//button[@type='submit' and normalize-space( text())='Next'])[2]`;
public sku =`//span[@role='combobox' and text()='Select']`;
public quantity =`//input[@formcontrolname='available_quantity']`;
public discount =`//input[@formcontrolname='discount']`;
public taxAmount = `//input[@formcontrolname='taxes']`;
public addButon = `//button[@pbutton='' and normalize-space(text())='Add']`;
public UpdateButton = ``;


//methods
public async clickOnOrderManagementSubMenu() {
  await this.browserActions.click(this.orderManagementSideBar);
}
public async clickOnOrderSideBar() {
  await this.browserActions.click(this.orderSideBar);
}
public async clickOnSearchBar(value: string) {
  await this.browserActions.inputText(this.searchBar, value);
}

public async clickOnFilterButton() {
  await this.browserActions.click(this.filterButton);

}

public async selectStatusFilter(status: string) {
  await this.browserActions.click(this.statusFilter);
  const statusOption = `//label[contains(@class, 'p-checkbox-label') and normalize-space(text())='${status}']`;
  await this.page.click(statusOption);
}
public async clickOnFilterApplyButton() {
  await this.browserActions.click(this.filterApplyButton);
}
public async clickOnFilterClearButton() {
  await this.browserActions.click(this.filterClearButton);
}
public async clickOnOrderAddButton() {
  await this.browserActions.click(this.orderAddButton);
}
public async clickOnOrderEditButton() {
  await this.browserActions.click(this.orderEditButton);
}
public async clickOnViewIcon() {
  await this.browserActions.click(this.orderDetailsIcon);
}
public async selectStatus (status: string) {
  await this.page.click(this.status);
  const statusElement = `//li[@data-p-focused='false' and @aria-setsize='13']//span[text()='${status}']`;
  await this.page.click(statusElement);
}
public async selectOrderDate (date: string) {
  await this.page.click(this.orderDate);
  await this.page.keyboard.press('ArrowDown');
  await this.page.keyboard.press('Enter');
}
public async enterContactNumber(value: string) {
  await this.browserActions.inputText(this.contactNumber, value);
}
public async enterCustomerName(value: string) {
  await this.browserActions.inputText(this.customerName, value);
}
public async enterEmail(value: string) {
  await this.browserActions.inputText(this.email, value);
}
public async selectPaymentMethod (paymentMethod: string) {
  await this.page.click(this.paymentMethod);
  const paymentMethodElement = `//li[@aria-label='UPI']`;
  await this.page.click(paymentMethodElement);
}
public async selectOrderType (orderType: string) {
  await this.page.click(this.orderType);
  const orderTypeElement = `//li[@aria-label='${orderType}']`;
  await this.page.click(orderTypeElement);
}
public async selectOrderPriority (orderPriority: string) {
  await this.page.click(this.orderPriority);
  const orderPriorityElement = `//li[@aria-label='${orderPriority}']`;
  await this.page.click(orderPriorityElement);
}
public async clickNextButtonInOrderDetailsPage() {
  await this.browserActions.click(this.nextButtonInOrderDetailsPage);
}
public async enterAddress(value: string) {
  await this.browserActions.inputText(this.address, value);
}
public async selectCountry (country: string) {
  await this.page.click(this.country);
  const countryElement = `//li[ @aria-label='${country}']`;
  await this.page.click(countryElement);
}
public async enterCity(value: string) {
  await this.browserActions.inputText(this.city, value);
}
public async enterState(value: string) {
  await this.browserActions.inputText(this.state, value);
}
public async enterPincode(value: string) {
  await this.browserActions.inputText(this.pincode, value);
}
public async clickSameAsShippingAddressLink() {
  await this.browserActions.click(this.sameAsShippingAddressLink);
}
public async clickNextButtonInAddress() {
  await this.browserActions.click(this.nextButtonnInAddress);
}
public async selectSku (sku: string) {
  await this.page.click(this.sku);
  const skuElement = `//li[@aria-label='${sku}']`;
  await this.page.click(skuElement);

}
public async enterQuantity(value: string) {
  await this.browserActions.inputText(this.quantity, value);
}
public async enterDiscount(value: string) {
  await this.browserActions.inputText(this.discount, value);
}
public async enterTaxAmount(value: string) {
  await this.browserActions.inputText(this.taxAmount, value);
}
public async clickAddButon() {
  await this.browserActions.click(this.addButon);
}
public async clickUpdateButton() {
  await this.browserActions.click(this.UpdateButton);
}
public async isOrderListPageDisplayed() {
  return await this.browserActions.isElementDisplayed(this.orderListPage);
}
public async isOrderDetailsPageDisplayed() {
  return await this.browserActions.isElementDisplayed(this.orderDetailsIcon);
}

}