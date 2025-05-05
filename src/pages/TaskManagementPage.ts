import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import path from 'path';

export class TaskManagementPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public taskManagementSidebar = `//span[@class='p-menuitem-text ng-tns-c147418153-4 ng-star-inserted'][normalize-space()='Task Management']`;
  public taskListPage = `//span[@class='ml-2'][normalize-space()='Task Management']`;
  public addTaskButton = `//button[normalize-space()='Add']`;
  public titleInput = `//input[@id='name']`;
  public descriptionInput = `//textarea[@placeholder='Description']`;
  public taskTypeSelect = `//select[@placeholder='Task Type']`;
  public statusSelect = `//select[@placeholder='Status']`;
  public prioritySelect = `//select[@placeholder='Priority']`;
  public duedateselect = `//input[@placeholder='Due Date']`;
  public estimatedDurationInput = `//input[@placeholder='Estimated Duration']`;
  public locationInput = `//input[@placeholder='Location']`;
  public uploadFileButton = `//input[@type='file']`;
  public addTaskSubmitButton = `//button[@class='btn btn-primary']`;
  public editTaskButton = `//button[@class='btn btn-primary']`;
  public updateButton = `//button[@class='btn btn-primary']`;
  public viewTaskButton = `//button[@class='btn btn-primary']`;
  public deleteTaskButton = `//button[@class='btn btn-primary']`;
  public searchBar = `//input[@placeholder='Search']`;
  public filterButton = `//button[@class='btn btn-primary']`;
  public filterByStatus = `//select[@placeholder='Status']`;
  public filterByType = `//select[@placeholder='Task Type']`;
  public viewDetailsPage = `//a[contains(@class, 'bredcrumb-text') and span[text()='Task Details']]`;






  //methods
  public async clickTaskManagementSidebar(): Promise<void> {
    await this.browserActions.click(this.taskManagementSidebar);
  }

  public async isTaskListPageDisplayed(): Promise<void> {
    await this.browserActions.waitForElement(this.taskListPage, 5000);
  }

  public async clickAddTaskButton(): Promise<void> {
    await this.browserActions.click(this.addTaskButton);
  }
  public async enterTitle(title: string): Promise<void> {
    await this.browserActions.inputText(this.titleInput, title);
  }
  public async enterDescription(description: string): Promise<void> {
    await this.browserActions.inputText(this.descriptionInput, description);
  }
  public async selectTaskType(taskType: string): Promise<void> {
    await this.page.click(this.taskTypeSelect);
    const taskTypeOption = `//option[contains(text(), '${taskType}')]`;
    await this.page.click(taskTypeOption);

  }
  public async selectStatus(status: string): Promise<void> {
    await this.page.click(this.statusSelect);
    const statusOption = `//option[contains(text(), '${status}')]`;
    await this.page.click(statusOption);

  }
  public async selectPriority(priority: string): Promise<void> {
    await this.page.click(this.prioritySelect);
    const priorityOption = `//option[contains(text(), '${priority}')]`;
    await this.page.click(priorityOption);

  }
  public async enterDueDate(dueDate: string): Promise<void> {
    await this.browserActions.inputText(this.duedateselect, dueDate);
  }
  public async enterEstimatedDuration(estimatedDuration: string): Promise<void> {
    await this.browserActions.inputText(this.estimatedDurationInput, estimatedDuration);
  }
  public async enterLocation(location: string): Promise<void> {
    await this.browserActions.inputText(this.locationInput, location);
  }
  public async uploadFile(filePath: string): Promise<void> {
    const absolutePath = path.resolve(__dirname, filePath);
    await this.page.setInputFiles(this.uploadFileButton, absolutePath);
  }
  public async clickAddTaskSubmitButton(): Promise<void> {
    await this.browserActions.click(this.addTaskSubmitButton);
  }
  public async clickEditTaskButton(): Promise<void> {
    await this.browserActions.click(this.editTaskButton);
  }
  public async clickUpdateButton(): Promise<void> {
    await this.browserActions.click(this.updateButton);
  }
  public async clickViewTaskButton(): Promise<void> {
    await this.browserActions.click(this.viewTaskButton);
  }
  public async clickDeleteTaskButton(): Promise<void> {
    await this.browserActions.click(this.deleteTaskButton);
  }
  public async enterSearchText(searchText: string): Promise<void> {
    await this.browserActions.inputText(this.searchBar, searchText);
  }
  public async clickFilterButton(): Promise<void> {
    await this.browserActions.click(this.filterButton);
  }
  public async selectFilterByStatus(status: string): Promise<void> {
    await this.page.click(this.filterByStatus);
    const statusOption = `//option[contains(text(), '${status}')]`;
    await this.page.click(statusOption);
  }
  public async selectFilterByType(taskType: string): Promise<void> {
    await this.page.click(this.filterByType);
    const taskTypeOption = `//option[contains(text(), '${taskType}')]`;
    await this.page.click(taskTypeOption);
  }
  public async isViewTaskPageDisplayed(): Promise<void> {
    await this.browserActions.waitForElement(this.viewDetailsPage, 5000);
  }


}
