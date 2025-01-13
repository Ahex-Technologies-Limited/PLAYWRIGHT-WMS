import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class UserManagementListPage extends BasePage {
  private page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public manageUserList = '//*[@class="table-parents user-list"]';
  public userManagementSideBar = '//span[contains(@class, "p-menuitem-text") and text()="User Management"]';
  public mangeuserSideBar = '//span[contains(@class, "p-menuitem-text") and text()="Manage User"]';
  public inviteUserButton = '//button[contains(@class, "p-button") and .//span[text()="Invite User"]]';
  public viewUserButton = '//i[contains(@class, "pi pi-eye")]';
  public resendInviteButton = '//button[@tooltipposition="top" and contains(@class, "p-element") and contains(@class, "dropdown-item") and contains(@class, "ng-star-inserted")]//i[@class="pi pi-refresh"]';
  public searchUser = '//input[@type="text" and @placeholder="Search..." and contains(@class, "search-input")]';
  public username = '//input[@type="text" and @placeholder="Enter name" and @formcontrolname="name" and contains(@class, "focus:border-none")]';
  public selectRole = '//*[@formcontrolname="roleId"]';
  public emailId = '//*[@formcontrolname="email"]';
  public inviteUser = '//button[contains(text(), "Invite User")]';
  public cancelInviteButton = '//button[contains(text(),"Cancel")]';

  // Methods

  public async clickManageUserList(): Promise<void> {
    await this.browserActions.click(this.manageUserList);
  }

  public async clickUserManagementSideBar(): Promise<void> {
    await this.browserActions.click(this.userManagementSideBar);
  }

  public async clickMangeuserSideBar(): Promise<void> {
    await this.browserActions.click(this.mangeuserSideBar);
  }

  public async clickInviteUserButton(): Promise<void> {
    await this.browserActions.click(this.inviteUserButton);
  }

  public async clickViewUserButton(): Promise<void> {
    await this.browserActions.click(this.viewUserButton);
  }

  public async clickResendInviteButton(): Promise<void> {
    await this.browserActions.click(this.resendInviteButton);
  }

  public async searchUserInSideBar(user: string): Promise<void> {
    await this.browserActions.inputText(this.searchUser, user);
  }

  public async enterUsername(username: string): Promise<void> {
    await this.browserActions.inputText(this.username, username);
  }

  public async selectUserRole(role: string): Promise<void> {
    await this.browserActions.click(this.selectRole);
   // await this.browserActions.pause(2000); // Optional, wait for dropdown to appear
    const roleOption = `//li[contains(@class, "p-dropdown-item") and @aria-label="${role}"]`;
    await this.browserActions.click(roleOption);
  }

  public async enterEmailId(email: string): Promise<void> {
    await this.browserActions.inputText(this.emailId, email);
  }

  public async clickInviteUser(): Promise<void> {
    await this.browserActions.click(this.inviteUser);
  }

  public async clickCancelInviteButton(): Promise<void> {
    await this.browserActions.click(this.cancelInviteButton);
  }

  public async isInvitationSent(): Promise<boolean> {
    const invitationSentMessage = await this.browserActions.isElementDisplayed(this.manageUserList);
    return invitationSentMessage;
  }

  public async isViewUserDisplayed(): Promise<boolean> {
    const userDetails = await this.browserActions.isElementDisplayed(this.manageUserList);
    return userDetails;
  }
}

