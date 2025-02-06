import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OutgoingShipmentPage extends BasePage {
    private page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    //selectors
    public shipmentsSideBar = `(//span[contains(@class, 'p-menuitem-text') and text()='Shipments'])[1]`;
    public outgoingshipmentssideBar = `//a[@href='#/admin/shipments/outgoing-shipments/list']`;
    public outgoingshipmentList = `//span[@class='ml-2' and text()='List']`;
    public addOutgoingShipmentButton = `//button[contains(@class, 'button_add') and span[text()='Add']]`;
    public shippingDate = `//p-calendar[@formcontrolname='shipment_date']`;
    public expectedDeliveryDate = `//p-calendar[@formcontrolname='expected_delivery_date']`;
    public loadingStartTime = `//p-calendar//input[@placeholder='Select start time']`;
    public loadingEndTime = `//p-calendar//input[@placeholder='Select end time']`;
    public orderNo = `//p-dropdown[@formcontrolname='order_number']`;
    public customerName = ``;
    public TrackingNumber = `//input[@formcontrolname='tracking_number' and @placeholder='Enter']`;
    public carrierName = `//p-dropdown[@formcontrolname='carrier_id']`;
    public shipmentNumber = `//input[@formcontrolname='outgoing_shipment_number']`;
    public numberOfPackages = `//input[@formcontrolname='package_count']`;
    public dockDoor = `//p-dropdown[@formcontrolname='dock_door']`;
    public address = `//textarea[@formcontrolname='address']`;
    public country = `//p-dropdown[@formcontrolname='country']`;
    public state = `//input[@formcontrolname='state']`;
    public city = `//input[@formcontrolname='city']`;
    public pincode = `//input[@formcontrolname='pincode']`;
    public remarks = `//textarea[@formcontrolname='remarks']`;
    public nextButtonInShipmentDetails = `(//button[contains(@class, 'button_add') and contains(@class, 'p-button')])[1]`;
    public nextButtonInPackages = `(//button[contains(@class, 'button_add') and contains(@class, 'p-button')])[2]`;
    public packaginglistUploadButton = `//*[text()='Packaging List']/..//input`;
    public saveButton = `//button[@type='button' and contains(@class, 'button_add') and text()=' Save ']`;
    public editButton = `(//button[i[contains(@class, 'pi-pencil') and contains(@class, 'text-success')]])[1]`;
    public deleteButton = `(//i[contains(@class, 'pi-trash') and contains(@class, 'text-danger')])[1]`;
    public backButton = `(//button[normalize-space(text())='Back'])[1]`;
    public yesButton = `//button[contains(@class, 'button_yes') and contains(@class, 'p-button')]`;
    public noButton = `//button[contains(@class, 'button_no') and contains(@class, 'p-button')]`;
    public searchBar = `//input[contains(@class, 'search-input')]`;
    public viewButton = `//i[contains(@class, 'pi-eye')]`;
    public viewDetaiilsPage = `//span[text()='View Outgoing Shipments']`;
    public updateButton = `(//button[normalize-space(text())='Update'])[1]`;
    public successMessageForAdd = ``;
    public status=`//span[normalize-space(text())='In-Transit']`;
    //methods
    public async clickOnShipmentsSideBar() {
        await this.browserActions.click(this.shipmentsSideBar);
    }
    public async clickOnOutgoingShipmentsSideBar() {
        await this.browserActions.click(this.outgoingshipmentssideBar);
    }
    public async clickOnOutgoingShipmentsList() {
        await this.browserActions.click(this.outgoingshipmentList);
    }
    public async clickOnAddOutgoingShipmentButton() {
        await this.browserActions.click(this.addOutgoingShipmentButton);
    }
    public async selectShippingDate(shippingdate: string) {
        await this.browserActions.click(this.shippingDate);
        const shippingDateOption = `//span[@data-date='${shippingdate}']`;
        console.log(shippingDateOption);
        await this.browserActions.click(shippingDateOption);
    }
    public async selectExpectedDeliveryDate(expectedDeliverydate: string) {
        await this.browserActions.click(this.expectedDeliveryDate);
        // const expectedDeliveryDateOption = `//span[@data-date='${expectedDeliverydate}']`;
        // console.log(expectedDeliveryDateOption);
        // await this.browserActions.click(expectedDeliveryDateOption);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }
    public async selectLoadingStartTime(value: string) {
        await this.browserActions.click(this.loadingStartTime);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

      
    }
    public async selectLoadingEndTime(value: string) {
        await this.browserActions.click(this.loadingEndTime);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.keyboard.press('Enter');
  
    }
    public async selectOrderNo(orderno: string) {
        await this.browserActions.click(this.orderNo);
        await this.page.keyboard.press('ArrowDown');
       await this.page.keyboard.press('Enter');
        // const orderNoOption = `//span[normalize-space(text())='${orderno}']`;
        // console.log(orderNoOption);
        // await this.browserActions.click(orderNoOption);
    }
    public async enterCustomerName(customername: string) {
        await this.browserActions.inputText(this.customerName, customername);
    }
    public async enterTrackingNumber(trackingnumber: string) {
        await this.browserActions.inputText(this.TrackingNumber, trackingnumber);
    }
    public async selectCarrierName(carriername: string) {
        await this.browserActions.click(this.carrierName);
        const carrierNameOption = `//span[normalize-space(text())='${carriername}']`;
        console.log(carrierNameOption);
        await this.browserActions.click(carrierNameOption);
    }
    public async enterShipmentNumber(shipmentnumber: string) {
        await this.browserActions.inputText(this.shipmentNumber,shipmentnumber);
    }
    public async enterNumberOfPackages(Numberofpackages: string) {
        await this.browserActions.inputText(this.numberOfPackages,Numberofpackages);
    }
    public async selectDockDoor(DockDoor:string){
        await this.browserActions.click(this.dockDoor);
        const dockDoorOption=`//span[text()='${DockDoor}']`;
        console.log(dockDoorOption);
        await this.browserActions.click(dockDoorOption);

    }
    public async enterAddress(Address: string) {
        await this.browserActions.inputText(this.address, Address);
    }
    public async selectCountry(country: string) {
        await this.browserActions.click(this.country);
        const countryoption=`//span[normalize-space(text())='${country}']`;
        console.log(countryoption);
        await this.browserActions.click(countryoption);
    }
    public async enterState(state: string) {
        await this.browserActions.inputText(this.state, state);
    }
    public async enterCity(city: string) {
        await this.browserActions.inputText(this.city, city);
    }
    public async enterPincode(pincode: string) {
        await this.browserActions.inputText(this.pincode, pincode);
    }
    public async enterRemarks(remarks: string) {
        await this.browserActions.inputText(this.remarks, remarks);
    }
    public async clickNextButtonInShipmentDetails() {
        await this.browserActions.click(this.nextButtonInShipmentDetails);
    }
    public async clickNextButtonInPackage() {
        await this.browserActions.click(this.nextButtonInPackages);
    }
    public async clickPackagingListUploadButton() {
        await this.browserActions.click(this.packaginglistUploadButton);
    }
    public async clickSaveButton() {
        await this.browserActions.click(this.saveButton);
    }
    public async clickEditButton() {
        await this.browserActions.click(this.editButton);
    }
    public async clickDeleteButton() {
        await this.browserActions.click(this.deleteButton);
    }
    public async clickBackButton() {
        await this.browserActions.click(this.backButton);
    }
    public async clickYesButton() {
        await this.browserActions.click(this.yesButton);
    }
    public async clickNoButton() {
        await this.browserActions.click(this.noButton);
    }
    public async clickonSearchBar(searchbar: string) {
        await this.browserActions.inputText(this.searchBar, searchbar);
    }
    public async clickViewButton() {
        await this.browserActions.click(this.viewButton);
    }
    public async isViewdetailsPageDisplayed():Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.viewDetaiilsPage);
    }
    public async isOutgoingShipmentListPageDisplayed():Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.outgoingshipmentList);
    }
    public async clickUpdateButton() {
        await this.browserActions.click(this.updateButton);
    }
    public async successMessageForAddOutgoingShipment(): Promise<boolean> {
        return this.browserActions.isElementDisplayed(this.successMessageForAdd);
    }

public async selectStatus(status: string): Promise<void> {
  await this.browserActions.click(this.status);
  await this.page.keyboard.press('ArrowDown');
  await this.page.keyboard.press('ArrowUp');
  await this.page.keyboard.press('Enter');
}
public async uploadPackagingList(packagingList: string): Promise<void> {
    const locator =  await this.browserActions.getLocator(this.packaginglistUploadButton);
    await locator.setInputFiles('src/resources/packing-slip.png');
    await this .browserActions.waitForTimeout(5000);
  }

}


    





