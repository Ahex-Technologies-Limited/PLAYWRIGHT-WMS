import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoadManagementPage extends BasePage {
    private page: Page;   
    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    // Selectors
    public loadManagementSideBar = `//a[span[contains(text(), 'Load Management')]]`;
    public noLoadAddedText = `//h2[@class='text-center mb-3' and text()='No Load Added']`;
    public loadListPage = `//a[@href='#/admin/load' and contains(@class, 'bredcrumb-text')]`;
    public selectLoadButton = `//button[contains(@class, 'button_add')]`; 
    public carrier = `//p-dropdown[@formcontrolname='carrier_id']`;
    public vheicle = `//p-dropdown[@formcontrolname='vehicle_id']`;
    public loadDate = `//*[@formcontrolname='load_date']`;
    public name = `//*[@formcontrolname='name']`;
    public referenceNumber = `//*[@formcontrolname='reference_number']`;
    public loadType = `//*[@formcontrolname='load_type']`;
    public weightUnit = `//*[@formcontrolname='weight_unit']`;
    public weight = `//*[@formcontrolname='weight']`;
    public volumeUnit = `//*[@formcontrolname='volume_unit']`;
    public volume = `//*[@formcontrolname='volume']`;
    public status   = `//*[@formcontrolname='status']`;
    public numberofPackages = `//*[@formcontrolname='package_count']`;
    public comments = `//*[@formcontrolname='comments']`;
    public nextButtonInLoadDetailsPage = `(//button[@type='submit' and contains(@class, 'button_add') and contains(text(), 'Next')])[1]`;
    public warehouseForPickup = `(//span[@role='combobox' and @aria-label='Select'])[1]`;
    public pickUpAddress = ``;
    public pickUpCountry = ``;
    public pickUpState = ``;
    public pickUpCity = ``;
    public pickUpPincode = ``;
    public contactPersonforPickup = `(//input[@formcontrolname='contact_name' and @name='name'])[1]`;
    public contactNumberforPickup = `(//input[@formcontrolname='contact_phone' and @placeholder='Enter'])[1]`;
    public sheduledPickUpDateandTime = `(//p-calendar[@formcontrolname='scheduled_time' and @placeholder='Select'])[1]`;
    public nextButtonInPickUpinfoPage = `(//button[@type='submit' and contains(@class, 'button_add') and contains(text(), 'Next')])[2]`;
    public warehouseForDelivery = `(//span[@role='combobox' and @aria-label='Select'])[1]`;
    public deliveryAddress = ``;
    public deliveryCountry = ``;
    public deliveryState = ``;
    public deliveryCity = ``;
    public deliveryPincode = ``;
    public contactPersonforDelivery = `(//input[@formcontrolname='contact_name' and @name='name'])[2]`;
    public contactNumberforDelivery = `(//input[@formcontrolname='contact_phone' and @placeholder='Enter'])[2]`;
    public scheduledDeliveryDateandTime = `(//p-calendar[@formcontrolname='scheduled_time' and @placeholder='Select'])[2]`;
    public nextButtonInDeliveryInfoPage = `(//button[@type='submit' and contains(@class, 'button_add') and contains(text(), 'Next')])[3]`;
    public costType = `//input[@formcontrolname='charge_type' and @name='name']`;
    public amountUnit = `//p-dropdown[@formcontrolname='currency' and contains(@class, 'p-inputwrapper')]`;
    public amount = `//input[@formcontrolname='amount' and @name='name']`;
    public nextButtonInPricingandChargesPage = `(//button[@type='submit' and contains(@class, 'button_add') and contains(text(), 'Next')])[4]`;
    public trckingNumber = `//input[@formcontrolname='tracking_number' and @name='tracking_number']`;
    public packages = `//p-multiselect[@formcontrolname='packages' and @placeholder='Select']`;
    public addButtonInTrackingInfoPage = ``;
//methods
    public async clickOnLoadManagementSubMenu() {
        await this.browserActions.click(this.loadManagementSideBar);
    }
    public async isLoadListPageDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.loadListPage);
    }
    public async clickOnSelectLoadButton() {
        await this.browserActions.click(this.selectLoadButton);
    }
    public async selectCarrier (value: string) {
        await this.browserActions.click(this.carrier);
        const carrierOption = `//span[text()='${value}']`;
        await this.browserActions.click(carrierOption); 
    }
    public async selectVehicle (value: string) {
        await this.browserActions.click(this.vheicle);
        const vehicleOption = `//span[text()='${value}']`;
        await this.browserActions.click(vehicleOption); 
    }
    public async selectLoadDate (value: string) {
        await this.browserActions.click(this.loadDate);
        await this.browserActions.waitForTimeout(500);
        const loadDateOption = `//span[text()='${value}']`;
        await this.browserActions.click(loadDateOption);
    }
    public async enterName (value: string) {
        await this.browserActions.inputText(this.name, value);
    }
    public async enterReferenceNumber (value: string) {
        await this.browserActions.inputText(this.referenceNumber, value);
    }
    public async selectLoadType (value: string) {
        await this.browserActions.click(this.loadType);
        await this.browserActions.waitForTimeout(2000);
        const loadTypeOption = `//span[text()='${value}']`;
        await this.browserActions.click(loadTypeOption);
    }
    public async selectWeightUnit (value: string) {
        await this.browserActions.click(this.weightUnit);
        await this.browserActions.waitForTimeout(2000);
        const weightUnitOption = `//span[text()='${value}']`;
        await this.browserActions.click(weightUnitOption);
    }
    public async enterWeight (value: string) {
        await this.browserActions.inputText(this.weight, value);
    }
    public async selectVolumeUnit (value: string) {
        await this.browserActions.click(this.volumeUnit);
        await this.browserActions.waitForTimeout(2000);
        const volumeUnitOption = `//span[text()='${value}']`;
        await this.browserActions.click(volumeUnitOption);
    }
    public async enterVolume (value: string) {
        await this.browserActions.inputText(this.volume, value);
    }
    public async selectStatus (value: string) {
        await this.browserActions.click(this.status);
        await this.browserActions.waitForTimeout(2000);
        const statusOption = `//span[text()='${value}']`;
        await this.browserActions.click(statusOption);
    }
    public async enterNumberOfPackages (value: string) {
        await this.browserActions.inputText(this.numberofPackages, value);
    }
    public async enterComments (value: string) {
        await this.browserActions.inputText(this.comments, value);
    }
    public async clickOnNextButtonInLoadDetailsPage() {
        await this.browserActions.click(this.nextButtonInLoadDetailsPage);
    }


    public async selectWarehouseForPickup (value: string) {
        await this.browserActions.click(this.warehouseForPickup);
        await this.browserActions.waitForTimeout(500);
        const warehouseForPickupOption = `//span[text()='${value}']`;
        await this.browserActions.click(warehouseForPickupOption);
    }
    public async enterPickupAddress (value: string) {
        await this.browserActions.inputText(this.pickUpAddress, value);
    }

    public async enterPickupCountry (value: string) {
        await this.browserActions.inputText(this.pickUpCountry, value);
    }

    public async enterPickupState (value: string) {
        await this.browserActions.inputText(this.pickUpState, value);
    }

    public async enterPickupCity (value: string) {
        await this.browserActions.inputText(this.pickUpCity, value);
    }
    public async enterPickupPincode (value: string) {
        await this.browserActions.inputText(this.pickUpPincode, value);
    }
    public async enterContactPersonforPickup (value: string) {
        await this.browserActions.inputText(this.contactPersonforPickup, value);
    }
    public async enterContactNumberforPickup (value: string) {
        await this.browserActions.inputText(this.contactNumberforPickup, value);
    }
    public async selectScheduledPickUpDateandTime (value: string) {
        await this.browserActions.click(this.sheduledPickUpDateandTime);
        const sheduledPickUpDateandTimeOption = `//span[text()='${value}']`;
        await this.browserActions.click(sheduledPickUpDateandTimeOption);
    }

    public async clickOnNextButtonInPickUpInfoPage() {
        await this.browserActions.click(this.nextButtonInPickUpinfoPage);
    }

    public async selectWarehouseForDelivery (value: string) {
        await this.browserActions.click(this.warehouseForDelivery);
        await this.browserActions.waitForTimeout(500);
        const warehouseForDeliveryOption = `(//span[text()='${value}'])[2]`;
        await this.browserActions.click(warehouseForDeliveryOption);
    }
    public async enterDeliveryAddress (value: string) {
        await this.browserActions.inputText(this.deliveryAddress, value);
    }
    public async enterDeliveryCountry (value: string) {
        await this.browserActions.inputText(this.deliveryCountry, value);
    }
    public async enterDeliveryState (value: string) {
        await this.browserActions.inputText(this.deliveryState, value);
    }
    public async enterDeliveryCity (value: string) {
        await this.browserActions.inputText(this.deliveryCity, value);
    }
    public async enterDeliveryPincode (value: string) {
        await this.browserActions.inputText(this.deliveryPincode, value);
    }
    public async enterContactPersonforDelivery (value: string) {
        await this.browserActions.inputText(this.contactPersonforDelivery, value);
    }
    public async enterContactNumberforDelivery (value: string) {
        await this.browserActions.inputText(this.contactNumberforDelivery, value);
    }
    public async selectScheduledDeliveryDateandTime (value: string) {
        await this.browserActions.click(this.scheduledDeliveryDateandTime);
        await this.browserActions.waitForTimeout(500);
        const scheduledDeliveryDateandTimeOption = `//span[text()='${value}']`;
        await this.browserActions.click(scheduledDeliveryDateandTimeOption);
    }
    public async clickOnNextButtonInDeliveryInfoPage() {
        await this.browserActions.click(this.nextButtonInDeliveryInfoPage);
    }
    public async enterCostType(value: string) {
        await this.browserActions.inputText(this.costType, value);
    }
    public async selectAmountUnit (value: string) {
        await this.browserActions.click(this.amountUnit);
        await this.browserActions.waitForTimeout(500);
        const amountUnitOption = `//span[text()='${value}']`;
        await this.browserActions.click(amountUnitOption);
    }
    public async enterAmount (value: string) {
        await this.browserActions.inputText(this.amount, value);
    }
    public async clickOnNextButtonInPricingandChargesPage() {
        await this.browserActions.click(this.nextButtonInPricingandChargesPage);
    }
    public async enterTrackingNumber (value: string) {
        await this.browserActions.inputText(this.trckingNumber, value);
    }
    public async selectPackages (value: string) {
        await this.browserActions.click(this.packages);
        await this.browserActions.waitForTimeout(500);
        const packagesOption = `//span[text()='${value}']`;
        await this.browserActions.click(packagesOption);
    }
    public async clickOnAddButtonInTrackingInfoPage() {
        await this.browserActions.click(this.addButtonInTrackingInfoPage);
    }
    public async isNoLoadAddedTextDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.noLoadAddedText);
    }
    


    
       




    









} 