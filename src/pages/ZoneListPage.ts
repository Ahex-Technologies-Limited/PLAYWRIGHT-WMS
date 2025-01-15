import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ZoneListPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors for add zone
  public zoneSidebar = 'a[href="#/admin/warehouse/zone"].p-menuitem-link';
  public addZoneButton = 'button span:text("Add")';
  public zonePage = 'span.ml-2:text("Zone")';
  public zoneList = 'span.ml-2:text("List")';
  public zoneAddButton = 'button.p-button span.pi-plus';
  public zoneName = 'input[formcontrolname="name"]';
  public description = 'textarea#address';
  public zoneType = 'p-dropdown[formcontrolname="type"]';
  public status = 'p-dropdown[formcontrolname="status"]';
  public subInventoryAssociation = 'p-dropdown[formcontrolname="sub_inventory_id"]';
  public capacity = 'p-dropdown[formcontrolname="measurement_unit"]';
  public inputCapacity = 'input[formcontrolname="capacity"]';
  public dimension = 'p-dropdown[formcontrolname="unit"]';
  public length = 'input[formcontrolname="length"]';
  public width = 'input[formcontrolname="width"]';
  public height = 'input[name="height"]';
  public cycleCountFrequency = 'input[placeholder="Enter time intervals in days/weeks/months(e.g., 2)"]';
  public operationHoursStartTime = 'input[placeholder="Select start time"]';
  public operationHoursEndTime = 'input[placeholder="Select end time"]';
  public temperatureControlled = 'p-dropdown[formcontrolname="temperature_controlled"]';
  public addButton = 'button.button_add.p-button';
  public backButton = 'button.button_back.p-button';
  public successfullMessage = 'div:text("Zone added successfully.")';

  // Update zone selectors
  public editZoneIcon = 'button.dropdown-item i.pi-pencil';
  public zoneNameUpdate = 'input[formcontrolname="name"]';
  public descriptionUpdate = 'textarea#address';
  public zoneTypeUpdate = 'p-dropdown[formcontrolname="type"]';
  public statusUpdate = 'p-dropdown[formcontrolname="status"]';
  public subInventoryAssociationUpdate = 'p-dropdown[formcontrolname="sub_inventory_id"]';
  public capacityUpdate = 'p-dropdown[formcontrolname="measurement_unit"]';
  public enterCapacityUpdate = 'input[formcontrolname="capacity"]';
  public dimensionUpdate = 'p-dropdown[formcontrolname="unit"]';
  public lengthUpdate = 'input[formcontrolname="length"]';
  public widthUpdate = 'input[formcontrolname="width"]';
  public heightUpdate = 'input[name="height"]';
  public cycleCountFrequencyUpdate = 'input[placeholder="Enter time intervals in days/weeks/months(e.g., 2)"]';
  public operationHoursStartTimeUpdate = 'input[placeholder="Select start time"]';
  public operationHoursEndTimeUpdate = 'input[placeholder="Select end time"]';
  public temperatureControlledUpdate = 'p-dropdown[formcontrolname="temperature_controlled"]';
  public updateButton = `//button[contains(@class, 'button_add') and normalize-space(text())='Update']`;
  public backUpdateButton = 'button:text("Back")';
  public successfullMessageUpdate = 'div:text("Zone updated successfully.")';

  // Delete zone selectors
  public deleteZoneIcon = 'button[type="button"].dropdown-item i.pi-trash';

  // Search zone selectors
  public searchZone = 'input[placeholder="Search..."]';

  // Filter zone based on zone type and status
  public filter=`//span[@class='p-button-label ng-star-inserted' and text()='Filters']`;
  public zoneTypeFilter = `//span[normalize-space(text())='Zone Type']`;
  public statusFilter = `//span[normalize-space(text())='Status']`;

  // Pagination selectors
  public rowsPerPage = 'span:text("5").p-dropdown-label';
  public nextPage = 'button[aria-label="Next Page"]';
  public previousPage = 'button[aria-label="Previous Page"]';
  public lastPage = 'button[aria-label="Last Page"]';
  public firstPage = 'button[aria-label="First Page"]';

  // Methods for add zone
  public async clickZoneSidebar(): Promise<void> {
    await this.page.click(this.zoneSidebar);
  }

  public async clickAddZoneButton(): Promise<void> {
    await this.page.click(this.addZoneButton);
  }

  public async isZonePageDisplayed(): Promise<boolean> {
    return await this.page.isVisible(this.zonePage);
  }

  public async isZoneListDisplayed(): Promise<boolean> {
    return await this.page.isVisible(this.zoneList);
  }

  public async clickZoneAddButton(): Promise<void> {
    await this.page.click(this.zoneAddButton);
  }

  public async enterZoneName(zoneName: string): Promise<void> {
    await this.page.fill(this.zoneName, zoneName);
  }

  public async enterDescription(description: string): Promise<void> {
    await this.page.fill(this.description, description);
  }

  public async selectZoneType(zoneType: string): Promise<void> {
    await this.page.click(this.zoneType);
   await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async selectStatus(status: string): Promise<void> {
    await this.page.click(this.status);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async selectSubInventoryAssociation(subInventoryAssociation: string): Promise<void> {
    await this.page.click(this.subInventoryAssociation);
   await this.page.keyboard.press('ArrowDown');
   await this.page.keyboard.press('Enter');
  }

  public async selectCapacity(capacity: string): Promise<void> {
    await this.page.click(this.capacity);
   await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async enterCapacity(enterCapacity: string): Promise<void> {
    await this.page.fill(this.inputCapacity, enterCapacity);
  }

  public async selectDimension(dimension: string): Promise<void> {
    await this.page.click(this.dimension);
   await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async enterLength(length: string): Promise<void> {
    await this.page.fill(this.length, length);
  }

  public async enterWidth(width: string): Promise<void> {
    await this.page.fill(this.width, width);
  }

  public async enterHeight(height: string): Promise<void> {
    await this.page.fill(this.height, height);
  }

  public async enterCycleCountFrequency(cycleCountFrequency: string): Promise<void> {
    await this.page.fill(this.cycleCountFrequency, cycleCountFrequency);
  }

  public async selectOperationHoursStartTime(operationHoursStartTime: string): Promise<void> {
    await this.page.click(this.operationHoursStartTime);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async selectOperationHoursEndTime(operationHoursEndTime: string): Promise<void> {
 await this.page.click(this.operationHoursEndTime);
 await this.page.keyboard.press('ArrowDown');
 await this.page.keyboard.press('ArrowDown');
 await this.page.keyboard.press('Enter');
  }

  public async selectTemperatureControlled(temperatureControlled: string): Promise<void> {
    await this.page.click(this.temperatureControlled);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async clickAddButton(): Promise<void> {
    await this.page.click(this.addButton);
  }

  public async clickBackButton(): Promise<void> {
    await this.page.click(this.backButton);
  }

  public async isSuccessfulMessageDisplayed(): Promise<boolean> {
    return await this.page.isVisible(this.successfullMessage);
  }

  // Methods for update zone
  public async clickEditZoneIcon(): Promise<void> {
    await this.page.click(this.editZoneIcon);
  }

  public async enterZoneNameUpdate(zoneNameUpdate: string): Promise<void> {
    await this.page.fill(this.zoneNameUpdate, zoneNameUpdate);
  }

  public async clickUpdateButton(): Promise<void> {
    await this.page.click(this.updateButton);
  }

  public async isSuccessfulMessageUpdateDisplayed(): Promise<boolean> {
    return await this.page.isVisible(this.successfullMessageUpdate);
  }

  // Methods for delete zone
  public async clickDeleteZoneIcon(): Promise<void> {
    await this.page.click(this.deleteZoneIcon);
  }

  // Methods for search zone
  public async enterSearchZone(searchZone: string): Promise<void> {
    await this.page.fill(this.searchZone, searchZone);
    await this.page.waitForTimeout(2000);
  }

  public async clickFilter(): Promise<void> {
    await this.page.click(this.filter);
    await this.page.waitForTimeout(2000);
  }

  // Methods for filter zone based on zone type and status
  public async selectZoneTypeFilter(zoneTypeFilter: string): Promise<void> {
    await this.page.click(this.zoneTypeFilter);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    const zoneTypeOption = `//label[@class='p-checkbox-label ng-star-inserted' and normalize-space(text())='Receiving']`;
    await this.page.click(zoneTypeOption);
    const applyButton = `(//span[@class='p-button-label' and text()='Apply'])[1]`;
    await this.page.click(applyButton);

  }

  public async selectStatusFilter(statusFilter: string): Promise<void> {
    await this.page.click(this.statusFilter);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    const statusOption = `//label[contains(@class, 'p-checkbox-label') and contains(@class, 'ng-star-inserted') and normalize-space(text())='Active']`;
    await this.page.click(statusOption);
    const applyButton = `(//span[@class='p-button-label' and text()='Apply'])[1]`;
    await this.page.click(applyButton);

  }

  // Methods for pagination
  public async clickNextPage(): Promise<void> {
    await this.page.click(this.nextPage);
    await this.page.waitForTimeout(2000);
  }

  public async clickPreviousPage(): Promise<void> {
    await this.page.click(this.previousPage);
    await this.page.waitForTimeout(2000);
  }

  public async clickLastPage(): Promise<void> {
    await this.page.click(this.lastPage);
    await this.page.waitForTimeout(2000);
  }

  public async clickFirstPage(): Promise<void> {
    await this.page.click(this.firstPage);
    await this.page.waitForTimeout(2000);
  }

  public async selectRowsPerPage(): Promise<void> {
    await this.page.click(this.rowsPerPage);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('ArrowUp');
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(2000);
  }
}
