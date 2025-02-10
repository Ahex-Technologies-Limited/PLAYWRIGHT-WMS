import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RoutesPage extends BasePage {
    private page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    //Selectors
    public operationsSidebar = `//span[contains(@class, 'p-menuitem-text') and text()='Operations']`;
    public routesSidebar = `//span[contains(@class, 'p-menuitem-text') and text()='Routes']`;
    public routesList = `//li[a//span[text()='Routes']]`;
    public addRouteButton = `//button[contains(@class, 'button_add')]//span[contains(text(), 'Add')]`;
    public routeName = `//input[@formcontrolname='name']`;
    public routeType = `//*[@formcontrolname='type']`;
    public routeStatus = `//*[@formcontrolname='status']`;
    public startingLocation = `//input[@formcontrolname='start_point']`;
    public destination = `//input[@formcontrolname='end_point']`;
    public addStop = `//input[@formcontrolname='location']`;
    public addMorestopLink = `//span[contains(@class, 'p-button-label') and contains(text(), 'Add more Stops')]`;
    public handlingInstruction = `//*[@formcontrolname='handling_instructions']`;
    public addButton = `//button[contains(@class, 'p-button') and normalize-space(text())='Add']`;
    public viewButton = `//button[contains(@class, 'dropdown-item')]//i[contains(@class, 'pi-eye')]`;
    public assignProductIcon = `(//button[contains(@class, 'dropdown-item') and i[contains(@class, 'pi-cart-plus')]])[1]`;
    public assignProductCatagoryIcon = `(//button[i[contains(@class, 'pi-sitemap')]])[1]`;
    public assignProductButton = `//button[contains(@class, 'button_assignvehicle')]`;
    public selectProduct = `//p-multiselect[@formcontrolname='product_id']`;
    public selectProductCatagory = `//p-multiselect[@formcontrolname='product_category_id']`;
    public assignProductCatagoryButton = `//button[contains(@class, 'button_assignvehicle')]`;
    public searchBar = `//span[contains(@class, 'p-input-icon-left')]//input`;
    public viewDetailsPage = `//a[contains(@class, 'no-underline') and normalize-space(span/text())='View Details']`;
    //Methods
    public async clickOnOperationsSidebar() {
        await this.browserActions.click(this.operationsSidebar);
    }
    public async clickOnRoutesSidebar() {
        await this.browserActions.click(this.routesSidebar);
    }
    public async isRoutesListDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.routesList);
    }
    public async clickOnAddRouteButton() {
        await this.browserActions.click(this.addRouteButton);
    }
    public async enterRouteName(routeName: string) {
        await this.browserActions.inputText(this.routeName, routeName);
    }
    public async selectRouteType(value: string) {
        await this.browserActions.click(this.routeType);
        const routeTypeOption = `//li[@aria-label='${value}']`;
        await this.browserActions.click(routeTypeOption);
    }
    public async selectRouteStatus(value: string) {
        await this.browserActions.click(this.routeStatus);
        const routeStatusOption = `//li[@aria-label='${value}']`;
        await this.browserActions.click(routeStatusOption);
    }
    public async enterStartingLocation(startingLocation: string) {
        await this.browserActions.inputText(this.startingLocation, startingLocation);
    }

    public async enterDestination(destination: string) {
        await this.browserActions.inputText(this.destination, destination);
    }
    public async enterAddStop(addStop: string) {
        await this.browserActions.inputText(this.addStop, addStop);
    }

    public async clickOnAddMoreStopLink() {
        await this.browserActions.click(this.addMorestopLink);
    }
    public async enterHandlingInstruction(handlingInstruction: string) {
        await this.browserActions.inputText(this.handlingInstruction, handlingInstruction);
    }
    public async clickOnAddButton() {
        await this.browserActions.click(this.addButton);
    }
    public async clickOnViewButton() {
        await this.browserActions.click(this.viewButton);
    }
    public async clickOnAssignProductIcon() {
        await this.browserActions.click(this.assignProductIcon);
    }
    public async clickOnAssignProductCatagoryIcon() {
        await this.browserActions.click(this.assignProductCatagoryIcon);
    }
    public async clickOnAssignProductButton() {
        await this.browserActions.click(this.assignProductButton);
    }
    public async ProductSelect(value: string) {
        await this.browserActions.click(this.selectProduct);
        const selectProductOption = `//li[@aria-label='${value}']`;
        await this.browserActions.click(selectProductOption);
    }
  
    public async ProductCatagorySelect(value: string) {
        await this.browserActions.click(this.selectProductCatagory);
        const selectProductCatagoryOption = `//li[@aria-label='${value}']`;
        await this.browserActions.click(selectProductCatagoryOption);
    }
    public async clickOnAssignProductCatagoryButton() {
        await this.browserActions.click(this.assignProductCatagoryButton);
    }
    public async enterOnSearchBar(value: string) {
        await this.browserActions.inputText(this.searchBar, value);
        
    }
    public async clickOnViewDetailsPage() {
        await this.browserActions.click(this.viewDetailsPage);
    }
    public async isViewDetailsPageDisplayed(): Promise<boolean> {
        return await this.browserActions.isElementDisplayed(this.viewDetailsPage);
    }


}



