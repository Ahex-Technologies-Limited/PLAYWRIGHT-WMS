import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DriversPage extends BasePage {
    private page: Page;
    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    // Selectors
    public driverManagementSidebar = `//span[text()='Driver Management']`;
    public driversSidebar = `//a[span[text()='Drivers']]`;
    public driversList = '//a[contains(@class, "bredcrumb-text") and .//span[text()="Driver List"]]';
    public searchBar = `//input[contains(@class, 'search-input')]`;
    public editButton=`(//button[i[contains(@class, 'pi-pencil')]])[1]`;
    public viewButton=`(//button[i[contains(@class, 'pi-eye')]])[1]`;
    public assignVehicleButton=`(//button[i[contains(@class, 'pi-truck')]])[5]`;
    public filterButton=`//span[text()='Filters']`;
    public statusFilter=`//span[contains(text(),'Status')]`;
    public applyFilterButton=`//button[span[text()='Apply']]`;
    public clearFilterButton=`//button[span[text()='Clear']]`;
    public driversDetailsPage=`//span[contains(text(),'Driver Details')]`;
    public addDriverButton=`//button[@label='Add']`;
    public driverName=`//input[@formcontrolname='name']`;
    public joiningDate=`//p-calendar[@formcontrolname='joining_date']`;
    public driverPhoneNumber=`//input[@formcontrolname='phone']`;
    public driverEmail=`//input[@formcontrolname='email']`;
   public presentAddress=`//input[@formcontrolname='present_address']`;
   public permanentAddress=`//input[@formcontrolname='permanent_address']`;
    public driverLicenseNumber=`//input[@formcontrolname='license_number']`;
    public driverLicenseExpiryDate=`//*[@formcontrolname='license_expiry_date']`;
  public emergencyContactName=`//input[@formcontrolname='emergency_contact_name']`;
  public emergencyContactPhoneNumber=`//input[@formcontrolname='emergency_contact_number']`;
  public idProof=``;
  public licenceImageFront=``;
  public licenceImageBack=``;
  public addButton=`//button[contains(@class, 'button_next')]`;
  public uploadImage=``;
  public updateButton=`//button[contains(@class, 'button_next')]`;
  public assignVehicle=`//p-dropdown[@formcontrolname='vehicle_id']`;
  public assigneMentDate=`//p-calendar[@formcontrolname='assignment_date']`;
  public remark=`//textarea[@formcontrolname='remarks']`;
  public assignButton=`//button[contains(text(), 'Assign Vehicle')]`;
  public successMessageAfterAssigningVehicle=`//div[@data-pc-section='detail']`;
  public successMessageAfterAddingDriver=`//div[contains(@class, 'p-toast-detail') and text()='Driver added successfully']`;
  public successMessageAfterUpdatingDriver=`//div[contains(@class, 'p-toast-detail') and text()='Driver updated successfully']`;
//Methods
  public async clickOnDriversManagementSidebar() {
    await this.browserActions.click(this.driverManagementSidebar);
  }

  public async clickOnDriversSideBar() {
    await this.browserActions.click(this.driversSidebar);
  }

  public async clickOnDriversList() {
    await this.browserActions.click(this.driversList);
  }
  public async typeInSearchBar(searchText: string) {
    await this.browserActions.inputText(this.searchBar, searchText);
  }

  public async clickOnEditButton() {
    await this.browserActions.click(this.editButton);
  }
  public async clickOnViewButton() {
    await this.browserActions.click(this.viewButton);
  }
  public async clickOnAssignVehicleButton() {
    await this.browserActions.click(this.assignVehicleButton);
  }
  public async clickOnFilterButton() {
    await this.browserActions.click(this.filterButton);
  }

  public async selectStatusFilter(value: string) {
    await this.browserActions.click(this.statusFilter);
    const statusOption = `//label[contains(@class, 'p-checkbox-label') and normalize-space(text())='${value}']`;
    await this.browserActions.click(statusOption);
  }
  public async clickOnApplyFilterButton() {
    await this.browserActions.click(this.applyFilterButton);
  }

  public async clickOnClearFilterButton() {
    await this.browserActions.click(this.clearFilterButton);
  }
  public async clickOnAddDriverButton() {
    await this.browserActions.click(this.addDriverButton);
  }
  public async enterDriverName(name: string) {
    await this.browserActions.inputText(this.driverName, name);
  }
  public async selectJoiningDate(date: string) {
    await this.browserActions.click(this.joiningDate);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    
  }
  public async enterDriverPhoneNumber(number: string) {
    await this.browserActions.inputText(this.driverPhoneNumber, number);
  }

  public async enterDriverEmail(email: string) {
    await this.browserActions.inputText(this.driverEmail, email);
  }
  public async enterPresentAddress(address: string) {
    await this.browserActions.inputText(this.presentAddress, address);
  }
  public async enterPermanentAddress(address: string) {
    await this.browserActions.inputText(this.permanentAddress, address);
  }
  public async enterDriverLicenseNumber(number: string) {
    await this.browserActions.inputText(this.driverLicenseNumber, number);
  }

  public async selectDriverLicenseExpiryDate(date: string) {
    await this.browserActions.click(this.driverLicenseExpiryDate);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

  }
  public async enterEmergencyContactName(name: string) {
    await this.browserActions.inputText(this.emergencyContactName, name);
  }
  public async enterEmergencyContactPhoneNumber(number: string) {
    await this.browserActions.inputText(this.emergencyContactPhoneNumber, number);
  }
  public async selectIdProof() {
   await this.browserActions.click(this.idProof);
  }
  public async selectLicenceImageFront() {
   await this.browserActions.click(this.licenceImageFront);
  }
  public async selectLicenceImageBack() {
   await this.browserActions.click(this.licenceImageBack);
  }
  public async clickOnAddButton() {
    await this.browserActions.click(this.addButton);
  }
  public async clickOnUpdateButton() {
    await this.browserActions.click(this.updateButton);
  }
  public async isDriversListPageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.driversList);
  }
  public async isDriverDetailsPageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.driversDetailsPage);
  }
  public async isAddDriverButtonDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.addDriverButton);
  }
  public async isEditButtonDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.editButton);
  }
  public async isViewButtonDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.viewButton);
  }
  public async isAssignVehicleButtonDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.assignVehicleButton);
  }
  public async isSuccessMessageAfterAddingDriverDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.successMessageAfterAddingDriver);
  }
  public async isSuccessMessageAfterUpdatingDriverDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.successMessageAfterUpdatingDriver);
  }
   public async isUploadImageButtonDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.uploadImage);
  }
  public async isUpdateButtonDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.updateButton);
  }
   public async isAddButtonDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.addButton);
  }
  public async selectAssignVehicle (value: string){
    await this.browserActions.click(this.assignVehicle);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
}
  public async selectAssigneMentDate(date: string) {
    await this.browserActions.click(this.assigneMentDate);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

  }
  public async enterRemark(remark: string) {
    await this.browserActions.inputText(this.remark, remark);
  }
  public async clickOnAssignButton() {
    await this.browserActions.click(this.assignButton);
  }
  public async isSuccessMessageAfterAssigningVehicleDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.successMessageAfterAssigningVehicle);
  }


}