import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import path from 'path';

export class QualityCheckPage extends BasePage {
    private page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    //selectors
    public operationsSideBar = `//span[normalize-space()='Operations']`;
    public qualityCheckSidebar = `//a[@class='p-menuitem-link ng-tns-c1818545701-29 ng-star-inserted p-menuitem-link-active']`;
    public qualityCheckListPage = `//span[@class='ml-2'][normalize-space()='Quality Check']`;
    public searchBar = `//input[contains(@class, 'search-input')]`;
    public qualityCheckAddButton = `//span[@class='p-button-label']`;
    public qualityCheckType = `//p-dropdown[@formcontrolname='qc_type']//span[@aria-label='Select'][normalize-space()='Select']`;
    public incomingShipment = ``;
    public statusInGeneralInfo = `(//p-dropdown[@placeholder='Select'])[2]`;
    public qualityCheckDate = `//input[@class='p-element ng-tns-c1685646730-76 p-inputtext p-component ng-star-inserted']`;
    public inspectorName = `//p-dropdown[@formcontrolname='checked_by']//span[@aria-label='Select'][normalize-space()='Select']`;
    public assignedTo = `//p-dropdown[@formcontrolname='assigned_to']//span[@aria-label='Select'][normalize-space()='Select']`;
    public nextButtonInGeneralInfo = `//form[@class='ng-touched ng-dirty ng-valid']//button[@type='submit'][normalize-space()='Next']`;
    public nextButtonInItemDetails = `//button[@class='p-element button_add justify-content-center p-button flex items-center outline-none w-full p-component']`;
    public viewBoxInQualityCheckeditemsPage = `//chevronrighticon[@class='p-element p-icon-wrapper ng-tns-c3596192458-133 p-accordion-toggle-icon ng-star-inserted']//*[name()='svg']`;
    public quantityChecked = `(//input[@id='name'])[7]`;
    public quantityPassed = `(//input[@id='name'])[8]`;
    public quantityFailed = `//div[@class='block md:flex col-12 p-0 gap-2 mb-4 ng-tns-c3596192458-133']//div[1]//input[1]`;
    public qualityCheckedItemStatus = `//div[@class='block md:flex col-12 p-0 gap-2 mb-4 ng-tns-c3596192458-133']//p-dropdown[@id='contactPhonecode']`;
    public qualityCheckedOn = `//input[@class='p-element ng-tns-c1685646730-134 p-inputtext p-component ng-star-inserted']`;
    public nextButtonInQualityCheckeditemsPage = `//form[@class='ng-dirty ng-touched ng-valid ng-submitted']//button[@type='submit'][normalize-space()='Next']`;
    public viewBoxInDisposition = `//chevronrighticon[@class='p-element p-icon-wrapper ng-tns-c3596192458-136 p-accordion-toggle-icon ng-star-inserted']//*[name()='svg']`;
    public dispositionType = `//chevronrighticon[@class='p-element p-icon-wrapper ng-tns-c3596192458-136 p-accordion-toggle-icon ng-star-inserted']//*[name()='svg']`;
    public quantityAffected = `//*[@formcontrolname='quantity_affected']`;
    public statusInDisposition = `//*[@formcontrolname='disposition_status']`;
    public nextButtonInDisposition = `(//button[normalize-space(text())='Next'])[4]`;
    public nextButtonInDocumentation = `(//button[normalize-space(text())='Next'])[5]`;
    public successMessageForNewQualityCheck = `//div[text()='Quality check added successfully.']`;

    //methods
    public async clickOnOperationsSideBar() {
        await this.browserActions.click(this.operationsSideBar);
    }
    public async clickOnQualityCheckSidebar() {
        await this.browserActions.click(this.qualityCheckSidebar);
    }
    public async isQualityCheckListDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.qualityCheckListPage);

    }
    public async clickOnQualityCheckAddButton() {
        await this.browserActions.click(this.qualityCheckAddButton);
    }
    public async selectQualityCheckType(type: string) {
        await this.browserActions.click(this.qualityCheckType);
        const qualityCheckTypeOption = `//label[contains(text(),'${type}')]`;
        await this.browserActions.click(qualityCheckTypeOption);
    }
    public async selectInComingShipment() {
        await this.browserActions.click(this.incomingShipment);
        const incomingShipmentOption = `//label[contains(text(),'Incoming Shipment')]`;
        await this.browserActions.click(incomingShipmentOption);
    }
    public async selectStatus(status: string) {
        await this.browserActions.click(this.statusInGeneralInfo);
        const statusOption = `//label[contains(text(),'${status}')]`;
        await this.browserActions.click(statusOption);
    }
    public async selectQualityCheckDate(date: string) {
        await this.browserActions.click(this.qualityCheckDate);
        const dateOption = `//td[@aria-label='${date}']`;
        await this.browserActions.click(dateOption);
    }
    public async selectInspectorName(name: string) {
        await this.browserActions.click(this.inspectorName);
        const inspectorNameOption = `//label[contains(text(), '${name}')]`;
        await this.browserActions.click(inspectorNameOption);

    }
    public async selectAssignedTo(name: string) {
        await this.browserActions.click(this.assignedTo);
        const assignedToOption = `//label[contains(text(), '${name}')]`;
        await this.browserActions.click(assignedToOption);
    }
    public async clickOnNextButtonInGeneralInfo() {
        await this.browserActions.click(this.nextButtonInGeneralInfo);
    }
    public async clickOnNextButtonInItemDetails() {
        await this.browserActions.click(this.nextButtonInItemDetails);
    }
    public async clickOnViewBoxInQualityCheckedItemsPage() {
        await this.browserActions.click(this.viewBoxInQualityCheckeditemsPage);
    }
    public async enterQuantityChecked(quantity: string) {
        await this.browserActions.inputText(this.quantityChecked, quantity);
    }
    public async enterQuantityPassed(quantity: string) {
        await this.browserActions.inputText(this.quantityPassed, quantity);
    }
    public async enterQuantityFailed(quantity: string) {
        await this.browserActions.inputText(this.quantityFailed, quantity);
    }
    public async selectQualityCheckedItemStatus(status: string) {
        await this.browserActions.click(this.qualityCheckedItemStatus);
        const qualityCheckedItemStatusOption = `//label[contains(text(), '${status}')]`;
        await this.browserActions.click(qualityCheckedItemStatusOption);
    }
    public async selectQualityCheckedOn(date: string) {
        await this.browserActions.click(this.qualityCheckedOn);
        const dateOption = `//td[@aria-label='${date}']`;
        await this.browserActions.click(dateOption);
    }
    public async clickOnNextButtonInQualityCheckedItemsPage() {
        await this.browserActions.click(this.nextButtonInQualityCheckeditemsPage);
    }
    public async clickOnViewBoxInDisposition() {
        await this.browserActions.click(this.viewBoxInDisposition);
    }
    public async selectDispositionType(type: string) {
        await this.browserActions.click(this.dispositionType);
        const dispositionTypeOption = `//label[contains(text(), '${type}')]`;
        await this.browserActions.click(dispositionTypeOption);
    }
    public async enterQuantityAffected(quantity: string) {
        await this.browserActions.inputText(this.quantityAffected, quantity);
    }
    public async selectStatusInDisposition(status: string) {
        await this.browserActions.click(this.statusInDisposition);
        const statusInDispositionOption = `//label[contains(text(), '${status}')]`;
        await this.browserActions.click(statusInDispositionOption);
    }
    public async clickOnNextButtonInDisposition() {
        await this.browserActions.click(this.nextButtonInDisposition);
    }
    public async clickOnNextButtonInDocumentation() {
        await this.browserActions.click(this.nextButtonInDocumentation);
    }
    public async isSuccessMessageForNewQualityCheckDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.successMessageForNewQualityCheck);
    }
    public async uploadFile(filePath: string) {
        const fileInput = this.page.locator('input[type="file"]');
        await fileInput.setInputFiles(filePath);
    }
}



