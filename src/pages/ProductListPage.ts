import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductListPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Selectors
  public productList = "//span[@class='ml-2' and text()='Products']";
  public productManagementSubMenu = "//span[contains(text(), 'Product Management')]";
  public productSideBar = "//span[contains(@class, 'p-menuitem-text') and text()='Products']";
  public swapIconForlistView = "//button[.//barsicon]";
  public swapIconForgridView = "//button[.//thlargeicon]";
  public addProductButton = "//div[@class='flex gap-2']//button[contains(@class, 'button_add')]";
  public productNameInput = "//*[@formcontrolname='product_name']";
  public productCategorySelect = "//*[@formcontrolname='category_id']";
  public subCategorySelect = "//*[@formcontrolname='sub_category_id']";
  public uomSelect = "//*[@formcontrolname='uom']";
  public descriptionInput = "//*[@formcontrolname='description']";
  public nextButtonInProductDetails = "//button[contains(@class, 'button_next') and text()=' Next ']";
  public attributesSelect = "//*[@formcontrolname='attribute']";
  public valuesInput = "//li[@role='option' and contains(@class, 'p-chips-input-token')]//input";
  public deleteButtonInAttributes = "(//table//tr//i[contains(@class, 'pi-trash')])[1]";
  public addAttributesLink = "//button[span[@class='p-button-label ng-star-inserted' and text()='Add Attribute']]";
  public configureButton = "//button[contains(@class, 'button_add') and contains(text(), 'Configure')]";
  public reorderLevelInput = "//*[@formcontrolname='reorderLevel']";
  public quantityInput = "//*[@formcontrolname='available_quantity']";
  public deleteButtonInItem = "(//tbody//tr//td//div[@class='icon-border']//i[contains(@class, 'pi-trash')])[2]";
  public copyToAllInReorderLevel = "//*[contains(text(),'Reorder Level ')]//a[text()='Copy to All' and contains(@class, 'no-underline')]";
  public copyToAllInQuantity = "//th[contains(text(), 'Quantity')]//a[text()='Copy to All' and contains(@class, 'no-underline')]";
  public nextButtonInAttributes = "//button[contains(text(), 'Next') and contains(@class, 'button_add')]";
  public backButtonInAttributes = "//button[contains(text(), 'Back') and contains(@class, 'button_back')]";
  public addButtonInSupplier = "//button[contains(text(), 'Add') and contains(@class, 'button_add')]";
  public viewIcon = "(//tr//td[contains(@class, 'actions-cell')]//button[1]//i[contains(@class, 'pi-eye')])[1]";
  public editIcon = "(//tr//td[contains(@class, 'actions-cell')]//button[2]//i[contains(@class, 'pi-pencil')])[1]";
  public deleteIcon = "(//tr//td[contains(@class, 'actions-cell')]//button[3]//i[contains(@class, 'pi-trash')])[1]";
  public searchBarInput = "//input[@placeholder='Search...']";
  public filterButton = "//span[text()='Filters']";
  public categoryInFilter = "//li[span[text()='Category']]";
  public applyButtonInFilter = "//span[@class='p-button-label' and text()='Apply']";
  public clearButtonInFilter = "//button[@class='p-element button_clear justify-content-center p-button flex items-center outline-none w-full p-component' and @label='Clear']";
  public productDetailsPage = "//span[@class='ml-2' and text()='Product Details']";
  public updateButton = "//button[contains(text(),'Update')]";
  public backButton = "//button[contains(text(),'Back')]";
  public yesButton = "//button[contains(text(),'Yes')]";
  public noButton = "//button[contains(text(),'No')]";
  public skuInput = "//input[@formcontrolname='sku' and @id='name' and @name='name' and @type='text' and @placeholder='Enter']";
  public brand= `//span[@role='combobox' and @aria-label='Select Brand']`;
  public manufacturer = `//span[@role='combobox' and @aria-label='Select Manufacturer']`;

  // Methods to interact with elements
  public async clickOnProductList(): Promise<void> {
    await this.browserActions.click(this.productList);
  }

  public async clickOnProductManagementSubMenu(): Promise<void> {
    await this.browserActions.click(this.productManagementSubMenu);
  }

  public async clickOnProductSideBar(): Promise<void> {
    await this.browserActions.click(this.productSideBar);
  }

  public async clickOnSwapIconForListView(): Promise<void> {
    await this.browserActions.click(this.swapIconForlistView);
  }

  public async clickOnSwapIconForGridView(): Promise<void> {
    await this.browserActions.click(this.swapIconForgridView);
  }

  public async clickOnAddProductButton(): Promise<void> {
    await this.browserActions.click(this.addProductButton);
  }

  public async enterProductName(productName: string): Promise<void> {
    await this.browserActions.inputText(this.productNameInput, productName);
  }

  public async selectProductCategory(productCategory: string): Promise<void> {
    await this.page.click(this.productCategorySelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async selectSubCategory(subCategory: string): Promise<void> {
    await this.page.click(this.subCategorySelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async selectUOM(uom: string): Promise<void> {
    await this.page.click(this.uomSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async enterDescription(description: string): Promise<void> {
    await this.browserActions.inputText(this.descriptionInput, description);
  }

  public async clickNextButtonInProductDetails(): Promise<void> {
    await this.browserActions.click(this.nextButtonInProductDetails);
  }

  public async selectAttributes(attributes: string): Promise<void> {
    await this.page.click(this.attributesSelect);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async enterValues(values: string): Promise<void> {
    await this.browserActions.inputText(this.valuesInput, values);
    await this.page.keyboard.press('Enter');
  }

  public async clickDeleteButtonInAttributes(): Promise<void> {
    await this.browserActions.click(this.deleteButtonInAttributes);
  }

  public async clickAddAttributesLink(): Promise<void> {
    await this.browserActions.click(this.addAttributesLink);
  }

  public async clickConfigureButton(): Promise<void> {
    await this.browserActions.click(this.configureButton);
  }

  public async enterReorderLevel(reorderLevel: string): Promise<void> {
    await this.browserActions.inputText(this.reorderLevelInput, reorderLevel);
  }

  public async enterQuantity(quantity: string): Promise<void> {
    await this.browserActions.inputText(this.quantityInput, quantity);
  }

  public async clickDeleteButtonInItem(): Promise<void> {
    await this.browserActions.click(this.deleteButtonInItem);
  }

  public async clickCopyToAllInReorderLevel(): Promise<void> {
    await this.browserActions.click(this.copyToAllInReorderLevel);
  }

  public async clickCopyToAllInQuantity(): Promise<void> {
    await this.browserActions.click(this.copyToAllInQuantity);
  }

  public async clickNextButtonInAttributes(): Promise<void> {
    await this.browserActions.click(this.nextButtonInAttributes);
  }

  public async clickBackButtonInAttributes(): Promise<void> {
    await this.browserActions.click(this.backButtonInAttributes);
  }

  public async clickAddButtonInSupplier(): Promise<void> {
    await this.browserActions.click(this.addButtonInSupplier);
  }

  public async clickViewIcon(): Promise<void> {
    await this.browserActions.click(this.viewIcon);
  }

  public async clickEditIcon(): Promise<void> {
    await this.browserActions.click(this.editIcon);
  }

  public async clickDeleteIcon(): Promise<void> {
    await this.browserActions.click(this.deleteIcon);
  }

  public async enterSearchBar(searchBar: string): Promise<void> {
    await this.browserActions.inputText(this.searchBarInput, searchBar);
  }

  public async clickFilterButton(): Promise<void> {
    await this.browserActions.click(this.filterButton);
  }

  public async selectCategoryInFilter(categoryInFilterOption: string): Promise<void> {
    await this.page.click(this.categoryInFilter);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  public async clickApplyButtonInFilter(): Promise<void> {
    await this.browserActions.click(this.applyButtonInFilter);
  }

  public async clickClearButtonInFilter(): Promise<void> {
    await this.browserActions.click(this.clearButtonInFilter);
  }

  public async clickProductDetailsPage(): Promise<void> {
    await this.browserActions.click(this.productDetailsPage);
  }

  public async clickUpdateButton(): Promise<void> {
    await this.browserActions.click(this.updateButton);
  }

  public async clickBackButton(): Promise<void> {
    await this.browserActions.click(this.backButton);
  }

  public async clickYesButton(): Promise<void> {
    await this.browserActions.click(this.yesButton);
  }

  public async clickNoButton(): Promise<void> {
    await this.browserActions.click(this.noButton);
  }

  // Additional assertions
  public async isProductListPageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.productList);
  }

  public async isProductDetailsPageDisplayed(): Promise<boolean> {
    return await this.browserActions.isElementDisplayed(this.productDetailsPage);
  }
  public async entersku(sku: string): Promise<void> {
    await this.browserActions.inputText(this.skuInput, sku);
  }
  public async selectBrand(brand: string): Promise<void> {
    await this.page.click(this.brand);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }
  public async selectManufacturer(manufacturer: string): Promise<void> {
    await this.page.click(this.manufacturer);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }
}

