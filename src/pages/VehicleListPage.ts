import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class VehicleListPage extends BasePage {
    private page: Page;
    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    // Selectors
    public vehicleManagementSidebar = `//span[contains(text(), 'Vehicle Management')]`;
    public vehicleListSideBar = `//a[contains(@class, 'p-menuitem-link') and span[text()='Vehicle List']]`;
    public vehicleListPage = `//a[contains(@class, 'bredcrumb-text') and span[text()='Vehicle List']]`;
    public searchBar = `//input[contains(@class, 'search-input')]`;
    public filterButton = `//button[span[text()='Filters']]`;
    public statusFilter = `//li[contains(@class, 'cursor-pointer') and span[text()='Status']]`;
    public statusFilterOptions = ``;
    public filterApplyButton = `//span[text()='Apply']`;
    public filterClearButton = `//span[text()='Clear']`;
    public vheicleAddButton = `//span[@class='p-button-label' and text()='Add']`;
    public vheiclemaker = `//input[@formcontrolname='make']`;
    public vheicleModel = `//input[@formcontrolname='model']`;
    public vheicleType = `//p-dropdown[@formcontrolname='type']`;
    public vheicleColor = `//input[@formcontrolname='color']`;
    public plateNumber = `//input[@formcontrolname='plate_number']`;
    public vin = `//input[@formcontrolname='vin']`;
    public registrationNumber = `//input[@formcontrolname='registration_number']`;
    public registrationExpiryDate = `//p-calendar[@formcontrolname='registration_expiary_date']`;
    public fuelType = `//p-dropdown[@formcontrolname='fuel_type']`;
    public milage = `//input[@formcontrolname='mileage']`;
    public capacityUnit = `//p-dropdown[@formcontrolname='capacity_unit']`;
    public capacity = `//input[@formcontrolname='capacity']`;
    public addButton = `//button[@type='submit' and contains(@class, 'button_next')]`;
    public updateButton = `//button[text()=' Update ']`;
    public viewButton = `(//button[contains(@class, 'dropdown-item') and contains(@class, 'p-element')])[1]`;
    public editButton = `(//i[contains(@class, 'pi-pencil')])[1]`;
    public vheicleMaintainanceButton = `(//button[i[contains(@class, 'pi-wrench')]])[last()]`;
    public serviceType = `//p-dropdown[@formcontrolname='service_type']`;
    public sheduledMonth = `//p-dropdown[@formcontrolname='scheduled_month']`;
    public sheduledDay = `//p-dropdown[@formcontrolname='scheduled_day']`;
    public mileageThershold = `//input[@formcontrolname='mileage_threshold']`;
    public serviceProvider = `//input[@formcontrolname='service_provider']`;
    public estimatedCost = `//input[@formcontrolname='estimated_cost']`;
    public description = `//textarea[@formcontrolname='additional_notes']`;
    public reminderenabledcheckbox = `//p-checkbox[@formcontrolname='reminder_enabled']`;
    public submitButton = `//button[contains(@class, 'button_add') and text()=' Submit ']`;
    public detailsPage = `//span[text()='vehicle Details']`;
    public updateButtonInVehicleMaintainanceService = `//button[normalize-space(text())='Update']`;
    public successMessageForUpdate= `//div[contains(@class, 'p-toast-detail') and text()='Vehicle updated successfully']`;
    //methods
    public async clickOnVehicleManagementSubMenu() {
        await this.browserActions.click(this.vehicleManagementSidebar);
    }
    public async clickOnVehicleListSideBar() {
        await this.browserActions.click(this.vehicleListSideBar);
    }
    public async isVehicleListPageDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.vehicleListPage);
    }
    public async clickOnSearchBar(value: string) {
        await this.browserActions.click(this.searchBar);
        await this.browserActions.inputText(this.searchBar, value);
    }
    public async clickOnFilterButton() {
        await this.browserActions.click(this.filterButton);
    }
    public async selectStatusFilter(status: string) {
        await this.browserActions.click(this.statusFilter);
        const statusOption = `//label[contains(text(),'${status}')]`;
        await this.browserActions.click(statusOption);
    }
    public async clickOnFilterApplyButton() {
        await this.browserActions.click(this.filterApplyButton);
    }
    public async clickOnFilterClearButton() {
        await this.browserActions.click(this.filterClearButton);
    }
    public async clickOnVehicleAddButton() {
        await this.browserActions.click(this.vheicleAddButton);
    }
    public async enterVehicleMaker(maker: string) {
        await this.browserActions.inputText(this.vheiclemaker, maker);
    }
    public async enterVehicleModel(model: string) {

        await this.browserActions.inputText(this.vheicleModel, model);

    }
    public async selectVehicleType(type: string) {
        await this.browserActions.click(this.vheicleType);
        const vehicleTypeOption = `//li[@aria-label='${type}']`;
        await this.browserActions.click(vehicleTypeOption);
    }
    public async enterVehicleColor(color: string) {
        await this.browserActions.inputText(this.vheicleColor, color);
    }
    public async enterPlateNumber(number: string) {
        await this.browserActions.inputText(this.plateNumber, number);
    }
    public async enterVin(vin: string) {
        await this.browserActions.inputText(this.vin, vin);
    }

    public async enterRegistrationNumber(number: string) {
        await this.browserActions.inputText(this.registrationNumber, number);
    }
    public async selectRegistrationExpiryDate(date: string) {
        await this.browserActions.click(this.registrationExpiryDate);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }
    public async selectFuelType(type: string) {
        await this.browserActions.click(this.fuelType);
        const fuelTypeOption = `//li[@aria-label='${type}']`;
        await this.browserActions.click(fuelTypeOption);
    }
    public async enterMileage(mileage: string) {
        await this.browserActions.inputText(this.milage, mileage);
    }

    public async selectCapacityUnit(unit: string) {
        await this.browserActions.click(this.capacityUnit);
        const capacityUnitOption = `//li[@aria-label='${unit}']`;
        await this.browserActions.click(capacityUnitOption);
    }
    public async enterCapacity(capacity: string) {
        await this.browserActions.inputText(this.capacity, capacity);
    }

    public async clickOnAddButton() {
        await this.browserActions.click(this.addButton);
    }
    public async clickOnUpdateButton() {
        await this.browserActions.click(this.updateButton);
    }
    public async clickOnViewButton() {
        await this.browserActions.click(this.viewButton);
    }
    public async clickOnEditButton() {
        await this.browserActions.click(this.editButton);
    }
    public async clickOnVehicleMaintainanceButton() {
        await this.browserActions.click(this.vheicleMaintainanceButton);
    }
    public async selectServiceType(type: string) {
        await this.browserActions.click(this.serviceType);
        const serviceTypeOption = `//label[contains(text(),'${type}')]`;
        await this.browserActions.click(serviceTypeOption);
    }
    public async selectScheduledMonth(month: string) {
        await this.browserActions.click(this.sheduledMonth);
        await this.page.keyboard.type(month);
        await this.page.keyboard.press('Arrow Down');
        await this.page.keyboard.press('Enter');
    }
    public async selectScheduledDay(day: string) {
        await this.browserActions.click(this.sheduledDay);
        await this.page.keyboard.type(day);
        await this.page.keyboard.press('Arrow Down');
        await this.page.keyboard.press('Enter');
    }
    public async enterMileageThershold(threshold: string) {
        await this.browserActions.inputText(this.mileageThershold, threshold);
    }
    public async eneterServiceProvider(serviceProvider: string) {
        await this.browserActions.inputText(this.serviceProvider, serviceProvider);
    }
    public async enterEstimatedCost(cost: string) {
        await this.browserActions.inputText(this.estimatedCost, cost);
    }
    public async enterDescription(description: string) {
        await this.browserActions.inputText(this.description, description);
    }
    public async clickOnReminderEnabledCheckbox() {
        await this.browserActions.click(this.reminderenabledcheckbox);
    }
    public async clickOnSubmitButton() {
        await this.browserActions.click(this.submitButton);
    }
    public async isDetailsPageDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.detailsPage);
    }
    public async clickOnUpdateButtonInVehicleMaintainanceService() {
        await this.browserActions.click(this.updateButtonInVehicleMaintainanceService);
    }
    public async isSuccessMessageForUpdateDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.successMessageForUpdate);
    }



}

