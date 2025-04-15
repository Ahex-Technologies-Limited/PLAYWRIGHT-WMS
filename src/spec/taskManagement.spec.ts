import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { DriverActions } from '../helpers/DriverActions';
import { BrowserActions } from '../helpers/BrowserActions';
import { TaskManagementPage } from '../pages/TaskManagementPage';

let driver: DriverActions;
let browserActions: BrowserActions;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let taskManagementPage: TaskManagementPage;

test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    taskManagementPage = new TaskManagementPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
});
test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
}
);
test('TC001 Verify that Task Management page is displayed', async ({ page }) => {
    await taskManagementPage.clickTaskManagementSidebar();
    await page.waitForTimeout(5000);
    expect(await taskManagementPage.isTaskListPageDisplayed()).toBeTruthy();
}
);
test('TC002 Verify that after clicking on the Add button the user should be able to add a new task', async ({ page }) => {
    await taskManagementPage.clickTaskManagementSidebar();
    await taskManagementPage.clickAddTaskButton();
    await taskManagementPage.enterTitle('Test Task');
    await taskManagementPage.enterDescription('Test Description');
    await taskManagementPage.selectTaskType('Task Type 1');
    await taskManagementPage.selectStatus('Open');
    await taskManagementPage.selectPriority('High');
    await taskManagementPage.enterDueDate('2023-12-31');
    await taskManagementPage.enterEstimatedDuration('2 hours');
    await taskManagementPage.enterLocation('Test Location');
    await taskManagementPage.uploadFile('download (2).jpg');
    await taskManagementPage.clickAddTaskSubmitButton();
    expect(await taskManagementPage.isTaskListPageDisplayed()).toBeTruthy();
});
test('TC003 Verify that the user can filter tasks by status and type', async ({ page }) => {
    await taskManagementPage.clickTaskManagementSidebar();
    await taskManagementPage.clickFilterButton();
    await taskManagementPage.selectFilterByStatus('Open');
    await taskManagementPage.selectFilterByType('Task Type 1');
    expect(await taskManagementPage.isTaskListPageDisplayed()).toBeTruthy();
});
test('TC004 Verify that the user can view task details', async ({ page }) => {
    await taskManagementPage.clickTaskManagementSidebar();
    await taskManagementPage.clickViewTaskButton();
    expect(await taskManagementPage.isViewTaskPageDisplayed()).toBeTruthy();
});
test('TC005 Verify that the user can delete a task', async ({ page }) => {
    await taskManagementPage.clickTaskManagementSidebar();
    await taskManagementPage.clickDeleteTaskButton();
    expect(await taskManagementPage.isTaskListPageDisplayed()).toBeTruthy();
});
test('TC006 Verify that the user can edit a task', async ({ page }) => {
    await taskManagementPage.clickTaskManagementSidebar();
    await taskManagementPage.clickEditTaskButton();
    await taskManagementPage.enterTitle('Updated Task');
    await taskManagementPage.clickFilterButton();
    expect(await taskManagementPage.isTaskListPageDisplayed()).toBeTruthy();
}
);
test('TC007 Verify that the user can search a task', async ({ page }) => {
    await taskManagementPage.clickTaskManagementSidebar();
    await taskManagementPage.enterSearchText('Test Task');
    expect(await taskManagementPage.isTaskListPageDisplayed()).toBeTruthy();
});
