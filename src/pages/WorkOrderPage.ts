import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import path from 'path';
export class WorkOrderPage extends BasePage {
  private page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  private async ensurePageIsOpen() {
    if (this.page.isClosed()) {
      throw new Error('Page is closed');
    }
  }
  //    selectors
  public VehicleManagementSubMenu = `//span[text()='Vehicle Management']`;
  public workOrderListPage = `//span[text()='Work Order List']`;
 public  workOrderSideBar =`//span[contains(@class, 'p-menuitem-text') and contains(text(), 'Work Order')]`;
 public searchField = `//input[@placeholder='Search...']`;
 public addWorkOrderButton = `//button[.//span[text()='Add']]`;
 public vehicle = `//p-dropdown[@formcontrolname='vehicle_id']`;
 public serviceType = `//p-dropdown[@formcontrolname='service_type']`;
 public priorityLevel = `//p-dropdown[@formcontrolname='priority_level']`;
 public assignedMechanic = `//*[@formcontrolname='service_provider']`;
 public estimatedCost = `//*[@formcontrolname='estimated_cost']`;
 public estimatedCompletetionDate = `//*[@formcontrolname='estimated_completion_date']`;
 public issueDescription= `//*[@formcontrolname='issue_reported']`;
 public additionalNotes = `//*[@formcontrolname='additional_notes']`;
 public partsRequired = `//*[@formcontrolname='work_description']`;
 public attachmentsUpload= `(//input[@type='file'])[1]`;
 public submitButton = `//button[@type='submit']`;
 public editIcon = `(//button[i[contains(@class, 'pi-pencil')]])[1]`;
 public viewIcon = `(//button[contains(@class, 'dropdown-item') and contains(@class, 'p-element')])[1]`;
 public updateButton = `//button[@pbutton and @type='submit' and contains(@class, 'button_add')]`;   
 public viewDetailsPage = `//span[text()='View Work Order Details']`;
 //methods
 public async clickOnVehicleManagementSubMenu() {
   await this.browserActions.click(this.VehicleManagementSubMenu);
 }
 public async isWorkOrderListPageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.workOrderListPage);
 }
    public async clickOnWorkOrderSidebar() {
        await this.browserActions.click(this.workOrderSideBar);
    }
    public async clickOnAddWorkOrderButton() {
        await this.browserActions.click(this.addWorkOrderButton);
    }
    public async selectVehicle(vehicle: string) {
      await this.page.click(this.vehicle);
      await this.browserActions.waitForTimeout(500);
        const vehicleOption = `//span[contains(text(),'${vehicle}')]`;
        await this.browserActions.click(vehicleOption);
    }
    public async selectServiceType(serviceType: string) {
      await this.page.click(this.serviceType);
      await this.browserActions.waitForTimeout(500);
        const serviceTypeOption = `//span[contains(text(),'${serviceType}')]`;
        await this.browserActions.click(serviceTypeOption);
    }
    public async selectPriorityLevel(priorityLevel: string) {
        await this.page.click(this.priorityLevel);
        await this.browserActions.waitForTimeout(500);
        const priorityLevelOption = `//span[contains(text(),'${priorityLevel}')]`;
        await this.browserActions.click(priorityLevelOption);
    }
    public async enterAssignedMechanic(value: string) {
        await this.browserActions.inputText(this.assignedMechanic, value);
    
    }
    public async enterEstimatedCost(value: string) {
        await this.browserActions.inputText(this.estimatedCost, value);

    }
    public async selectEstimatedCompletetionDate(date: string) {
        await this.page.click(this.estimatedCompletetionDate);
        await this.browserActions.waitForTimeout(500);
        const dateOption = `//span[contains(text(),'${date}')]`;
        await this.browserActions.click(dateOption);
    }
    public async enterIssueDescription(value: string) {
        await this.browserActions.inputText(this.issueDescription, value);
    }
    public async enterAdditionalNotes(value: string) {
        await this.browserActions.inputText(this.additionalNotes, value);
    }
    public async enterPartsRequired(value: string) {
        await this.browserActions.inputText(this.partsRequired, value);
    }
    public async uploadAttachments(fileName: string): Promise<void> {
        await this.ensurePageIsOpen();
        const locator = await this.browserActions.getLocator(this.attachmentsUpload);
        const filePath = path.join(__dirname, fileName);
        await locator.setInputFiles(filePath);
        await this.browserActions.waitForTimeout(5000);
    }
    public async clickOnSubmitButton() {
        await this.page.locator(this.submitButton).click();
    }
    public async searchWorkOrder(workOrderNumber: string) {
        await this.browserActions.inputText(this.searchField, workOrderNumber);
    }
  
  
    public async clickOnEditIcon() {
        await this.browserActions.click(this.editIcon);
    }
    public async clickOnViewIcon() {
        await this.browserActions.click(this.viewIcon);
    }
    public async clickOnUpdateButton() {
        await this.browserActions.click(this.updateButton);
    }
    public async isViewDetailsPageDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.viewDetailsPage);
    }
    
    




}