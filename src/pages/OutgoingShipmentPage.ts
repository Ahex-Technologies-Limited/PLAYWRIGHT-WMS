import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OutgoingShipmentPage extends BasePage {
    private page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    //selectors
    public shipmentsSideBar = ``;
    public outgoingshipmentssideBar = ``;
    public outgoingshipmentList = ``;
    public addOutgoingShipmentButton = ``;
    public shippingDate = ``;
    public expectedDeliveryDate = ``;
    public loadingStartTime = ``;
    public loadingEndTime = ``;
    public orderNo = ``;
    public customerName = ``;
    public TrackingNumber = ``;
    public carrierName = ``;
    public shipmentNumber = ``;
    public numberOfPackages = ``;
    public dockDoor = ``;
    public address = ``;
    public country = ``;
    public state = ``;
    public city = ``;
    public pincode = ``;
    public remarks = ``;
    public nextButtonInShipmentDetails = ``;
    public nextButtonInPackages = ``;
    public packaginglistUploadButton = ``;
    public saveButton = ``;
    public editButton = ``;
    public deleteButton = ``;
    public backButton = ``;
    public yesButton = ``;
    public noButton = ``;
    public searchBar = ``;
    public viewButton = ``;
    public viewDetaiilsPage = ``;
    public updateButton = ``;
    public successMessageForAdd = ``;
    public status=``;
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
        const shippingDateOption = `//li[@role="option" and @aria-label="${shippingdate}"]`;
        console.log(shippingDateOption);
        await this.browserActions.click(shippingDateOption);
    }
    public async selectExpectedDeliveryDate(expectedDeliverydate: string) {
        await this.browserActions.click(this.expectedDeliveryDate);
        const expectedDeliveryDateOption = `//li[@role="option" and @aria-label="${expectedDeliverydate}"]`;
        console.log(expectedDeliveryDateOption);
        await this.browserActions.click(expectedDeliveryDateOption);
    }
    public async selectLoadingStartTime(loadingStarttime: string) {
        await this.browserActions.click(this.loadingStartTime);
        const loadingStartTimeOption = `//li[@role="option" and @aria-label="${loadingStarttime}"]`;
        console.log(loadingStartTimeOption);
        await this.browserActions.click(loadingStartTimeOption);
    }
    public async selectLoadingEndTime(loadingEndtime: string) {
        await this.browserActions.click(this.loadingEndTime);
        const loadingEndTimeOption = `//li[@role="option" and @aria-label="${loadingEndtime}"]`;
        console.log(loadingEndTimeOption);
        await this.browserActions.click(loadingEndTimeOption);
    }
    public async selectOrderNo(orderno: string) {
        await this.browserActions.click(this.orderNo);
        const orderNoOption = `//li[@role="option" and @aria-label="${orderno}"]`;
        console.log(orderNoOption);
        await this.browserActions.click(orderNoOption);
    }
    public async enterCustomerName(customername: string) {
        await this.browserActions.inputText(this.customerName, customername);
    }
    public async enterTrackingNumber(trackingnumber: string) {
        await this.browserActions.inputText(this.TrackingNumber, trackingnumber);
    }
    public async selectCarrierName(carriername: string) {
        await this.browserActions.click(this.carrierName);
        const carrierNameOption = `//li[@role="option" and @aria-label="${carriername}"]`;
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
        const dockDoorOption=``;
        console.log(dockDoorOption);
        await this.browserActions.click(dockDoorOption);

    }
    public async enterAddress(Address: string) {
        await this.browserActions.inputText(this.address, Address);
    }
    public async selectCountry(country: string) {
        await this.browserActions.click(country);
        const countryoption=``;
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


    





}