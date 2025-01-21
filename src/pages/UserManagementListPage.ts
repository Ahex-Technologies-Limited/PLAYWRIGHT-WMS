import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class UserManagementListPage extends BasePage {
  private page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public manageUserList = `//span[contains(@class, 'ml-2') and text()='Manage User']`;
  public userManagementSideBar = '//span[contains(@class, "p-menuitem-text") and text()="User Management"]';
  public mangeuserSideBar = '//span[contains(@class, "p-menuitem-text") and text()="Manage Users"]';
  public inviteUserButton = '//button[contains(@class, "p-button") and .//span[text()="Invite User"]]';
  public viewUserButton = `(//button[contains(@class, 'dropdown-item') and contains(@class, 'ng-star-inserted') and contains(@tooltipposition, 'top')])[1]`;
  public resendInviteButton = '(//button[@tooltipposition="top" and contains(@class, "p-element") and contains(@class, "dropdown-item") and contains(@class, "ng-star-inserted")]//i[@class="pi pi-refresh"])[1]';
  public searchUser = '//input[@type="text" and @placeholder="Search..." and contains(@class, "search-input")]';
  public username = '//input[@type="text" and @placeholder="Enter name" and @formcontrolname="name" and contains(@class, "focus:border-none")]';
  public selectRole = '//*[@formcontrolname="roleId"]';
  public emailId = '//*[@formcontrolname="email"]';
  public inviteUser = '//button[contains(text(), "Invite User")]';
  public cancelInviteButton = '//button[contains(text(),"Cancel")]';
  public userDetails = `//span[contains(@class, 'ml-2') and text()='View User']`;

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
    const userDetails = await this.browserActions.isElementDisplayed(this.userDetails);
    return userDetails;
  }
  public async isuserListDisplayed(): Promise<boolean> {
    const userList = await this.browserActions.isElementDisplayed(this.manageUserList);
    return userList;
  }
}

