import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ManageRolesListPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public manageRolesList = "//span[contains(@class, 'ml-2') and text()='List']";
  public userManagementSideBar = "//span[contains(@class, 'p-menuitem-text') and text()='User Management']";
  public manageRolesSideBar = "//span[text()='Manage Roles']";
  public addRoleButton = "//button[contains(@class, 'button_add') and contains(@class, 'p-button')]";
  public roleNameInput = "//input[@formcontrolname='name']";
  public roleDescriptionInput = "//textarea[@formcontrolname='description']";
  public roleAddButton = "//button[contains(@class, 'button_add') and contains(@class, 'p-button') and text()=' Add ']";
  public roleEditButton = "//*[contains(text(),'New Role')]//ancestor::td/following-sibling::td//*[@class='pi pi-pencil']";
  public selectPermission = "//label[@for='binary1' or normalize-space(text())='Warehouse']";
  public backButton = "//button[contains(@class, 'button_back') and contains(@class, 'p-button')]";
  public updateButton = "//button[@type='button' and normalize-space(text())='Update']";
  public searchRoleInput = "//input[@placeholder='Search...']";

  // Methods to interact with elements
  public async clickManageRolesList(): Promise<void> {
    await this.browserActions.click(this.manageRolesList);
  }

  public async clickUserManagementSideBar(): Promise<void> {
    await this.browserActions.click(this.userManagementSideBar);
  }

  public async clickManageRolesSideBar(): Promise<void> {
    await this.browserActions.click(this.manageRolesSideBar);
  }

  public async clickAddRoleButton(): Promise<void> {
    await this.browserActions.click(this.addRoleButton);
  }

  public async enterRoleName(roleName: string): Promise<void> {
    await this.browserActions.inputText(this.roleNameInput, roleName);
  }

  public async enterRoleDescription(roleDescription: string): Promise<void> {
    await this.browserActions.inputText(this.roleDescriptionInput, roleDescription);
  }

  public async isPermissionSelected(permission: string): Promise<void> {
    const permissionCheckbox = `//label[text()='${permission}']//parent::div/p-checkbox`;
    await this.browserActions.click(permissionCheckbox);
  }

  public async clickRoleAddButton(): Promise<void> {
    await this.browserActions.click(this.roleAddButton);
  }

  public async clickBackButton(): Promise<void> {
    await this.browserActions.click(this.backButton);
  }

  public async clickRoleEditButton(): Promise<void> {
    await this.browserActions.click(this.roleEditButton);
  }

  public async clickUpdateButton(): Promise<void> {
    await this.browserActions.click(this.updateButton);
  }

  public async searchRoleInSearchBar(roleName: string): Promise<void> {
    await this.browserActions.inputText(this.searchRoleInput, roleName);
  }

  public async isRoleListDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.manageRolesList);
  }

  public async clickPermissionCheckbox(): Promise<void> {
    await this.browserActions.click(this.selectPermission);
  }
  
}

