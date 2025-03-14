import { test, expect, Page } from '@playwright/test';
import { BrowserActions } from '../helpers/BrowserActions';
import { DriverActions } from '../helpers/DriverActions';
import { CreateAccountPage } from '../pages/CreateAccountPage';
import { LoginPage } from '../pages/LoginPage';
import { WarehouseListPage } from '../pages/WarehouseListPage';
import { AddWarehousePage } from '../pages/AddWarehousePage';
import { SubInventoryListPage } from '../pages/SubInventoryListPage';
import { ZoneListPage } from '../pages/ZoneListPage';
import { LocatorListPage } from '../pages/LocatorListPage';
import { SupplierManagementPage } from '../pages/SupplierManagement.page';
import { AttributesListPage } from '../pages/AttributesListPage';
import { LabellingsPage } from '../pages/LabellingsListPage';
import { ReorderingRulesPage } from '../pages/ReorderingRulesPage';
import { ReplenishmentPage } from '../pages/ReplenishmentsPage';
import { PoManagementPage } from '../pages/PoManagementPage';
import { UserManagementListPage } from '../pages/UserManagementListPage';
import { ManageRolesListPage } from '../pages/ManageRolesListPage';
import { DockDoorsPage } from '../pages/DockDoorsPage';
import { DockDoorsSchedulingPage } from '../pages/DockDoorsSchedulingPage';
import { IncomingShipmentsListPage } from '../pages/IncomingShipmentsListPage';
import { RoutesPage } from '../pages/RoutesPage';
import { ProductListPage } from '../pages/ProductListPage';
import { OrderListPage } from '../pages/OrderListPage';
import { InventoryListPage } from '../pages/InventoryListPage';

let driver: DriverActions;
let browserActions: BrowserActions;
let page: Page;
let createAccountPage: CreateAccountPage;
let loginPage: LoginPage;
let warehouseListPage: WarehouseListPage;
let addWarehousePage: AddWarehousePage;
let subInventoryListPage: SubInventoryListPage;
let zoneListPage: ZoneListPage;
let locatorListPage: LocatorListPage;
let supplierManagementPage: SupplierManagementPage;
let attributesListPage: AttributesListPage;
let labellingsPage: LabellingsPage;
let reorderingRulesPage: ReorderingRulesPage;
let replenishmentPage: ReplenishmentPage;
let poManagementPage: PoManagementPage;
let userManagementListPage: UserManagementListPage;
let manageRolesListPage: ManageRolesListPage;
let dockDoorsPage: DockDoorsPage;
let dockDoorsSchedulingPage: DockDoorsSchedulingPage;
let incomingShipmentsListPage: IncomingShipmentsListPage;
let routesPage: RoutesPage;
let productListPage: ProductListPage;
let orderListPage: OrderListPage;
let inventoryListPage: InventoryListPage;


test.beforeEach(async ({ page }) => {
    driver = new DriverActions();
    page = await driver.launchBrowser();
    browserActions = new BrowserActions(page);
    createAccountPage = new CreateAccountPage(page);
    loginPage = new LoginPage(page);
    warehouseListPage = new WarehouseListPage(page);
    addWarehousePage = new AddWarehousePage(page);
    subInventoryListPage = new SubInventoryListPage(page);
    zoneListPage = new ZoneListPage(page);
    locatorListPage = new LocatorListPage(page);
    supplierManagementPage = new SupplierManagementPage(page);
    attributesListPage = new AttributesListPage(page);
    labellingsPage = new LabellingsPage(page);
    reorderingRulesPage = new ReorderingRulesPage(page);
    replenishmentPage = new ReplenishmentPage(page);
    poManagementPage = new PoManagementPage(page);
    userManagementListPage = new UserManagementListPage(page);
    manageRolesListPage = new ManageRolesListPage(page);
    dockDoorsPage = new DockDoorsPage(page);
    dockDoorsSchedulingPage = new DockDoorsSchedulingPage(page);
    incomingShipmentsListPage = new IncomingShipmentsListPage(page);
    routesPage = new RoutesPage(page);
    productListPage = new ProductListPage(page);
    orderListPage = new OrderListPage(page);
    inventoryListPage = new InventoryListPage(page);
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/login');
    await browserActions.waitForTimeout(3000);
});

test.afterEach(async () => {
    await driver.closeBrowser();
});

test('Create a new account and complete the registration process.', async () => {
    await browserActions.openUrl('http://143.244.132.143:8200/#/auth/register');
    await browserActions.waitForTimeout(3000);
    await createAccountPage.enterFullName('Meghana');
    await createAccountPage.enterCompanyName('Meghanapvtlmt');
    await createAccountPage.enterEmailAddress('meghana@gmail.com');
    await createAccountPage.enterPhoneNumber('9856985632');
    await createAccountPage.enterdomainName('meghanaA');
    await createAccountPage.enterPassword('Test@123');
    await createAccountPage.enterConfirmPassword('Test@123');
    await createAccountPage.clickSignUpButton();
    await browserActions.waitForTimeout(5000);
    await expect(await browserActions.isElementDisplayed(createAccountPage.selectAModulePage)).toBe(true);
    await createAccountPage.clickWarehouseManagementCheckBox();
    await createAccountPage.clickTransportManagementCheckBox();
    await createAccountPage.clickOrderManagementCheckBox();
    await createAccountPage.clickContinueButton();
    await browserActions.waitForTimeout(5000);
    await createAccountPage.clickMonthlyTab();
    await createAccountPage.clickChoosePlanINMonthly();
    await createAccountPage.clickMakeAPaymentButton();
    await browserActions.waitForTimeout(5000);
    await expect(await browserActions.isElementDisplayed(createAccountPage.successMessageAfterplanSelect)).toBe(true);

});
test('Log in with valid credentials ', async () => {
    await loginPage.login('supriyasahoo1399@gmail.com', 'Supriya@12');
});
test(' Add warehouse upon selecting WMS ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await warehouseListPage.clickWarehouseManagementSideBar();
    await warehouseListPage.clickWarehouseSubMenu();
    await warehouseListPage.clickAddWarehouseButton();
    await warehouseListPage.setWarehouseName('Warehouse 10');
    await warehouseListPage.selectWarehouseType('Distribution Center');
    await warehouseListPage.setDescription('Test Description');
    await warehouseListPage.setWarehouseAddress(' Test Address');
    await warehouseListPage.setCity('Test City');
    await warehouseListPage.setStateProvince('Test State');
    await warehouseListPage.selectCountry('India');
    await warehouseListPage.setPostalCode('12345');
    await warehouseListPage.selectWarehouseManager('SupriyaTester');
    await warehouseListPage.setPhoneNumber('1234567890');
    await warehouseListPage.setContactEmail('supriyasahoo@gmail.com');
    await warehouseListPage.selectStarttime('08:00');
    await warehouseListPage.selectEndtime('17:00');
    await warehouseListPage.selectTimeZone('(UTC-05:00) Eastern Time (US & Canada)');
    await warehouseListPage.selectMeasurementUnit('Square Feet (sq:ft)');
    await warehouseListPage.setCapacity('1000');
    await warehouseListPage.enterSpecialEquipment('Trolleys');
    await warehouseListPage.selectTemperatureControl('Yes');
    await warehouseListPage.setDockingStation('5');
    await warehouseListPage.setSecurityFeatures('CCTV');
    await warehouseListPage.selectUnitOfMeasurement('Box');
    await warehouseListPage.selectDefaultPickTaskType('FIFO');
    await warehouseListPage.setStatus('Active');
    await browserActions.waitForTimeout(2000);
    await warehouseListPage.clickAddButton();
    await browserActions.waitForTimeout(2000);
    await expect(await warehouseListPage.isWarehouseListPageDisplayed()).toBeTruthy();
});
test(' Add sub-inventories under a warehouse ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await warehouseListPage.clickWarehouseManagementSideBar();
    await subInventoryListPage.clickSubInventorySidebar();
    await subInventoryListPage.clickSubInventoryAddButton();
    await subInventoryListPage.enterSubInventoryName('Subinventory11');
    await subInventoryListPage.enterDescription('Test Description');
    await subInventoryListPage.selectSubInventoryType('Raw Materials');
    await subInventoryListPage.enterCapacity('100');
    await subInventoryListPage.selectMeasurementUnits('Cubic Feet (cu.ft)'); ``
    await subInventoryListPage.selectDimension('Inches (in)');
    await subInventoryListPage.enterLength('10');
    await subInventoryListPage.enterWidth('10');
    await subInventoryListPage.enterHeight('10');
    await subInventoryListPage.selectStatus('Active');
    await subInventoryListPage.selectTemperatureControlled('No');
    await subInventoryListPage.clickAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await subInventoryListPage.isSubInventoryListDisplayed()).toBeTruthy();
});
test(' Add zones under a sub-inventory ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await warehouseListPage.clickWarehouseManagementSideBar();
    await zoneListPage.clickZoneSidebar();
    await zoneListPage.clickAddZoneButton();
    await zoneListPage.enterZoneName('Zone5');
    await zoneListPage.enterDescription('Test Description');
    await zoneListPage.selectZoneType('Storage');
    await zoneListPage.selectStatus('Active');
    await zoneListPage.selectSubInventoryAssociation('Subinventory6');
    await zoneListPage.selectCapacity('Square Feet (sq.ft)');
    await zoneListPage.enterCapacity('100');
    await zoneListPage.selectDimension('Meters (m)');
    await zoneListPage.enterLength('10');
    await zoneListPage.enterWidth('10');
    await zoneListPage.enterHeight('10');
    await zoneListPage.enterCycleCountFrequency('5');
    await zoneListPage.selectOperationHoursStartTime('09:00');
    await zoneListPage.selectOperationHoursEndTime('17:00');
    await zoneListPage.selectTemperatureControlled('No');
    await zoneListPage.clickAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await zoneListPage.isZoneListDisplayed()).toBeTruthy();
});
test(' Add locators under a zone ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await warehouseListPage.clickWarehouseManagementSideBar();
    await locatorListPage.clickLocatorSidebar();
    await locatorListPage.clickLocatorAddButton();
    await locatorListPage.enterLocatorName('Locator10');
    await locatorListPage.selectLocatorType('Level');
    await locatorListPage.enterDescription('Test Description');
    await locatorListPage.selectStatus('Active');
    await locatorListPage.selectAssociatedLocator('Locator1');
    await locatorListPage.selectLocatorCapacityUnit('Square Feet (sq.ft)');
    await locatorListPage.enterLocatorCapacity('100');
    await locatorListPage.selectDimension('Meters (m)');
    await locatorListPage.enterLength('10');
    await locatorListPage.enterWidth('10');
    await locatorListPage.enterHeight('10');
    await locatorListPage.enterGroundSlot('5');
    await locatorListPage.enterHeightInput('5');
    await locatorListPage.enterNumberOfLevelsOrRows('5');
    await locatorListPage.enterStartingRangeAB('AB');
    await locatorListPage.enterStartingRange01('01');
    await locatorListPage.enterEndingRangeAB('CD');
    await locatorListPage.enterEndingRange01('05');
    await locatorListPage.clickAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(locatorListPage.issuccessMessageAddingLocatorDisplayed()).toBeTruthy();
});
test(' Add supplier Information ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await supplierManagementPage.clickOnSupplierManagementSideBar();
    await supplierManagementPage.clickOnAddSupplierButton();
    await supplierManagementPage.enterSupplierName('Test Supplier');
    await supplierManagementPage.enterSupplierEmail('test@gmail.com');
    await supplierManagementPage.selectCountryCode('+91');
    await supplierManagementPage.enterSupplierPhoneNumber('1234567890');
    await supplierManagementPage.enterTaxId('1234567890');
    await supplierManagementPage.selectCurrency('Indian Rupee');
    await supplierManagementPage.selectPaymentMethods('Credit Card');
    await browserActions.waitForTimeout(3000);
    await supplierManagementPage.clickOnMarkAsPrimaryCheckbox();
    await supplierManagementPage.enterPrimaryContactName('Test Contact');
    await supplierManagementPage.enterPrimaryContactEmail('test@gmail.com');
    await supplierManagementPage.clickOnNextButtonInSupplierInfo();
    await supplierManagementPage.enterAddressLine1('Test Address');
    await supplierManagementPage.enterAddressLine2('Test Address');
    await supplierManagementPage.selectCountry('Saudi Arabia');
    await supplierManagementPage.enterState('Test State');
    await supplierManagementPage.enterCity('Test City');
    await supplierManagementPage.enterPinCode('875656');
    await supplierManagementPage.clickOnMarkAsMailingAddressCheckbox();
    await supplierManagementPage.enterMailingAddressLine1('Test Address');
    await supplierManagementPage.enterMailingAddressLine2('Test Address');
    await supplierManagementPage.selectMailingCountry('Kuwait');
    await supplierManagementPage.enterMailingState('Test State');
    await supplierManagementPage.enterMailingCity('Test City');
    await supplierManagementPage.enterMailingPinCode('875656');
    await supplierManagementPage.clickOnNextButtonInSupplierAddress();
    await supplierManagementPage.clickOnMarkAsPrimarycheckboxInFinancialInfo();
    await supplierManagementPage.enterBenificiaryName('Test Benificiary');
    await supplierManagementPage.enterBankAccountNumber('1234567890');
    await supplierManagementPage.enterBankName('Test Bank');
    await supplierManagementPage.enterBankAddress('Test Address');
    await supplierManagementPage.enterBankBranchCode('123456');
    await supplierManagementPage.enterIBAN('1234567890');
    await supplierManagementPage.enterSwiftCode('123456');
    await supplierManagementPage.clickOnNextButtonInSupplierFinancialInfo();
    await supplierManagementPage.selectStartDate('2025-3-19');
    await supplierManagementPage.selectEndDate('2025-3-22');
    await supplierManagementPage.enterDescription('Test Description');
    await supplierManagementPage.selectSku('HOME-REFR-NIKE-KL49');
    await supplierManagementPage.enterDiscount('10');
    await supplierManagementPage.clickOnNextButtonInContactInfo();;
    await supplierManagementPage.clickOnAddButtonInComplianceAndDocumentation();
    await browserActions.waitForTimeout(5000);
    expect(await supplierManagementPage.isSupplierPageDisplayed()).toBeTruthy();
});
test(' Add attributes  ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await attributesListPage.clickOperationSideBar();
    await attributesListPage.clickAttributesSideBar();
    await attributesListPage.clickAddAttributesButton();
    await attributesListPage.enterAttributeName('Attribute 12');
    await attributesListPage.enterAttributeDescription('Test description');
    await attributesListPage.clickAddAttribute();
    await browserActions.waitForTimeout(5000);
    await expect(attributesListPage.isAttributeListDisplayed()).toBeTruthy();
});
test(' Add labellings  ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await labellingsPage.clickOnLabelSideBar();
    await labellingsPage.clickOnAddLabelButton();
    await labellingsPage.selectLabelType('SKU');
    await labellingsPage.selectFormat('Custom Text');
    await labellingsPage.enterShowValue('5647');
    await labellingsPage.selectSeparator();
    await labellingsPage.clickOnAddFormatLink();
    await labellingsPage.selectFormat('Brand');
    await labellingsPage.selectSeparator();
    await labellingsPage.clickOnPreviewButton();
    await labellingsPage.clickOnCreateButton();
    await browserActions.waitForTimeout(5000);
    await expect(await labellingsPage.isLabelListDisplayed()).toBeTruthy();
});
test(' Add reordering rules  ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await reorderingRulesPage.clickOnOperationsSideBar();
    await reorderingRulesPage.clickOnReorderingRulesSideBar();
    await reorderingRulesPage.clickOnAddButton();
    await reorderingRulesPage.selectSKU('FASH-MEN -NIKE-WH04');
    await reorderingRulesPage.enterReorderQuantity('100');
    await reorderingRulesPage.enterReorderPoint('50');
    await reorderingRulesPage.enterSafetyStockLevel('25');
    await reorderingRulesPage.enterMaxStockLevel('100');
    await reorderingRulesPage.selectAutomaticOrderPlacement('Yes');
    await reorderingRulesPage.clickOnAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await reorderingRulesPage.issuccessMessageAfterAddingReorderingRuleDisplayed()).toBeTruthy();
});
test(' Add replenishment  ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await replenishmentPage.clickOnOperationsSideBar();
    await replenishmentPage.clickOnReplenishmentsSideBar();
    await replenishmentPage.clickOnAddReplenishmentButton();
    await replenishmentPage.selectSKU('NIKE-ELEC-1097');
    await replenishmentPage.inputReplenishmentQuantity('100');
    await replenishmentPage.selectExpectedDeliveryDate('7');
    await replenishmentPage.clickOnAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await replenishmentPage.isReplenishmentListPageDisplayed()).toBeTruthy();
});
test('Add Po ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await reorderingRulesPage.clickOnOperationsSideBar();
    await poManagementPage.clickOnPoManagementSideBar();
    await poManagementPage.clickOnAddPoButton();
    await poManagementPage.selectDate('2025-3-21');
    await poManagementPage.selectSupplier('fgvhjm');
    await poManagementPage.selectDeliveryDate('19');
    await poManagementPage.selectSKU('FASH-MEN -NIKE-WH04');
    await poManagementPage.inputPerUnitPrice('100');
    await poManagementPage.inputReorderQuantity('10');
    await poManagementPage.clickOnAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await poManagementPage.isPoListDisplayed()).toBeTruthy();

});
test(' Admin creates roles  ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await manageRolesListPage.clickUserManagementSideBar();
    await manageRolesListPage.clickManageRolesSideBar();
    await manageRolesListPage.clickAddRoleButton();
    await manageRolesListPage.enterRoleName('Security');
    await manageRolesListPage.enterRoleDescription('Test description');
    await manageRolesListPage.isPermissionSelected('Warehouse');
    await manageRolesListPage.isPermissionSelected('Zone');
    await manageRolesListPage.isPermissionSelected('Sub Inventory');
    await manageRolesListPage.isPermissionSelected('Locator');
    await manageRolesListPage.clickRoleAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await manageRolesListPage.isRoleListDisplayed()).toBeTruthy();
});

test('Admin invites new users ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await userManagementListPage.clickUserManagementSideBar();
    await userManagementListPage.clickMangeuserSideBar();
    await userManagementListPage.clickInviteUserButton();
    await userManagementListPage.enterUsername('TestUser');
    await userManagementListPage.selectUserRole('New Role');
    await userManagementListPage.enterEmailId('supriyasahoo1399@gmail.com');
    await userManagementListPage.clickInviteUser();
    await browserActions.waitForTimeout(5000);
    await expect(await userManagementListPage.isInvitationSent()).toBeTruthy();
});
test('Add dock doors for shipments', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await dockDoorsPage.clickOnDockDoorManagementSubMenu();
    await dockDoorsPage.clickOnDockDoorSideBar();
    await dockDoorsPage.clickOnAddDockDoorButton();
    await dockDoorsPage.inputDockDoorName('Dock Door 1');
    await dockDoorsPage.inputDockDoorLocation('Location 1');
    await dockDoorsPage.inputdockdoorStatus('Available');
    await dockDoorsPage.inputDockDoorType('Inbound');
    await dockDoorsPage.inputDockDoorCapacity('10');
    await dockDoorsPage.selectDockDoorCapacity('Square Feet (sq.ft)');
    await dockDoorsPage.inputDockDoorDescription('Dock Door 1 Description');
    await dockDoorsPage.clickOnAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await dockDoorsPage.isDockDoorListPageDisplayed()).toBeTruthy();
});

test('Add new incoming shipments', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await incomingShipmentsListPage.clickOnShipmentsSideBar();
    await incomingShipmentsListPage.clickOnIncomingShipmentsSideBar();
    await incomingShipmentsListPage.clickOnAddIncomingShipmentButton();
    await incomingShipmentsListPage.selectExpectedArrivalDate('12/31/2024 10:03');
    await incomingShipmentsListPage.selectStartTime('10:03');
    await incomingShipmentsListPage.selectendTime('11:03');
    await incomingShipmentsListPage.enterCarrierName('Carrier1');
    await incomingShipmentsListPage.selectAssignTo('SupriyaTester');
    await incomingShipmentsListPage.selectCountryCode('India (+91)');
    await incomingShipmentsListPage.enterCarrierContactNumber('8976545567');
    await incomingShipmentsListPage.selectDockDoor('Dock Door 2');
    await incomingShipmentsListPage.enterTrackingNumber('1234');
    await incomingShipmentsListPage.selectSupplier('SupplierA');
    await incomingShipmentsListPage.selectInspectionRequired('No');
    await incomingShipmentsListPage.clickNextButtonInShipmentDetails();
    await incomingShipmentsListPage.selectSku('hns2zvloF1');
    await incomingShipmentsListPage.enterOrderQuantity('1');
    await incomingShipmentsListPage.clickNextButtonInItems();
    await incomingShipmentsListPage.uploadBillOfLading('download.jpg');
    await incomingShipmentsListPage.clickAddButtonInDocumentations();
    await browserActions.waitForTimeout(2000);
    await expect(await incomingShipmentsListPage.isIncomingShipmentsListPageDisplayed()).toBeTruthy();
});
test('Set up routes for product categories', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await routesPage.clickOnOperationsSidebar();
    await routesPage.clickOnRoutesSidebar();
    await routesPage.clickOnAddRouteButton();
    await routesPage.enterRouteName('Test Route');
    await routesPage.selectRouteType('Incoming');
    await routesPage.selectRouteStatus('Active');
    await routesPage.enterStartingLocation('Test Location');
    await routesPage.enterDestination('Test Location');
    await routesPage.enterAddStop('Test Location');
    await routesPage.enterHandlingInstruction('Test Location');
    await routesPage.clickOnAddButton();
    await browserActions.waitForTimeout(5000);
    await expect(await routesPage.isRoutesListDisplayed()).toBeTruthy();
});
test('Add new products ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await productListPage.clickOnProductManagementSubMenu();
    await productListPage.clickOnProductSideBar();
    await productListPage.clickOnAddProductButton();
    await productListPage.enterProductName('Product 4');
    await productListPage.selectProductCategory('Fashion');
    await productListPage.selectSubCategory('KIDS CLOTHING');
    await productListPage.selectUOM('Meter');
    await productListPage.enterDescription('Test description 2');
    await productListPage.clickNextButtonInProductDetails();
    await productListPage.selectAttributes('Attribute 7');
    await productListPage.enterValues('red');
    await productListPage.clickConfigureButton();
    await productListPage.entersku('Brand-1234');
    await productListPage.enterReorderLevel('12');
    await productListPage.clickNextButtonInAttributes();
    await productListPage.clickAddButtonInSupplier();
    await browserActions.waitForTimeout(5000);
    await expect(await productListPage.isProductListPageDisplayed()).toBeTruthy();
});
test('Process orders based on warehouse stock ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await orderListPage.clickOnOrderManagementSubMenu();
    await orderListPage.clickOnOrderSideBar();
    await orderListPage.clickOnOrderAddButton();
    await browserActions.waitForTimeout(3000);
    await orderListPage.selectOrderDate('2021-12-30');
    await orderListPage.enterContactNumber('1234567890');
    await orderListPage.enterCustomerName('Test Customer');
    await orderListPage.enterEmail('3iC2o@example.com');
    await orderListPage.selectPaymentMethod('Debit Card');
    await orderListPage.selectOrderType('Mobile Orders');
    await orderListPage.selectOrderPriority('Low');
    await orderListPage.clickNextButtonInOrderDetailsPage();
    await browserActions.waitForTimeout(3000);
    await orderListPage.enterAddress('Test Address');
    await orderListPage.selectCountry('India');
    await orderListPage.enterCity('Test City');
    await orderListPage.enterState('Test State');
    await orderListPage.enterPincode('875656');
    await orderListPage.clickSameAsShippingAddressLink();
    await orderListPage.clickNextButtonInAddress();
    await browserActions.waitForTimeout(3000);
    await orderListPage.selectSku('HOME-REFR-NIKE-KL49');
    await orderListPage.enterQuantity('1');
    await orderListPage.clickOnVerifyButton();
    await orderListPage.enterDiscount('10');
    await orderListPage.enterTaxAmount('10');
    await orderListPage.clickAddButon();
    await browserActions.waitForTimeout(3000);
    await expect(await orderListPage.isOrderListPageDisplayed()).toBeTruthy();
});
test.only('Automatic Replenishment Order Generation ', async () => {
    await loginPage.login('tester@gmail.com', 'Supriya@12');
    await browserActions.openUrl('http://143.244.132.143:8200/#/admin/warehouse/list');
    await warehouseListPage.warehouseCard('Test Warehouse');
    await productListPage.clickOnProductManagementSubMenu();
    await productListPage.clickOnProductSideBar();
    await productListPage.clickOnAddProductButton();
    await productListPage.enterProductName('Product 5');
    await productListPage.selectProductCategory('Fashion');
    await productListPage.selectSubCategory('KIDS CLOTHING');
    await productListPage.selectUOM('Meter');
    await productListPage.enterDescription('Test description 2');
    await productListPage.clickNextButtonInProductDetails();
    await productListPage.selectAttributes('Attribute 7');
    await productListPage.enterValues('red');
    await productListPage.clickConfigureButton();
    await productListPage.entersku('Brand-1234');
    await productListPage.enterReorderLevel('12');
    await productListPage.clickNextButtonInAttributes();
    await productListPage.clickAddButtonInSupplier();
    await browserActions.waitForTimeout(5000);
    await expect(await productListPage.isProductListPageDisplayed()).toBeTruthy();
      await inventoryListPage.clickOnInventoryListSideBar();
      await inventoryListPage.clickOnAddInventoryButton();
      await inventoryListPage.selectSku('MmRaTzXEqs');
      await inventoryListPage.enterShipmentId('1234');
      await inventoryListPage.enterQuantity('20');
      await inventoryListPage.enterLotNumber('1234');
      await inventoryListPage.enterCost('100');
      await inventoryListPage.enterSellingPrice('100');
      await inventoryListPage.selectExpiryDate('12/25/2024');
      await inventoryListPage.clickAddButton();
      await browserActions.waitForTimeout(5000);
      await expect(inventoryListPage.isInventoryListPageDisplayed()).toBeTruthy();
      await reorderingRulesPage.clickOnOperationsSideBar();
      await reorderingRulesPage.clickOnReorderingRulesSideBar();
      await reorderingRulesPage.clickOnAddButton();
      await reorderingRulesPage.selectSKU('FASH-SHOE-NIKE-BB94');
      await reorderingRulesPage.enterReorderQuantity('10');
      await reorderingRulesPage.enterReorderPoint('10');
      await reorderingRulesPage.enterSafetyStockLevel('10');
      await reorderingRulesPage.enterMaxStockLevel('10');
      await reorderingRulesPage.selectAutomaticOrderPlacement('Yes');
      await reorderingRulesPage.clickOnAddButton();
      await browserActions.waitForTimeout(5000);
      await expect(await reorderingRulesPage.issuccessMessageAfterAddingReorderingRuleDisplayed()).toBeTruthy();
      await orderListPage.clickOnOrderManagementSubMenu();
      await orderListPage.clickOnOrderSideBar();
      await orderListPage.clickOnOrderAddButton();
      await browserActions.waitForTimeout(3000);
      await orderListPage.selectOrderDate('2021-12-30');
      await orderListPage.enterContactNumber('1234567890');
      await orderListPage.enterCustomerName('Test Customer');
      await orderListPage.enterEmail('3iC2o@example.com');
      await orderListPage.selectPaymentMethod('Debit Card');
      await orderListPage.selectOrderType('Mobile Orders');
      await orderListPage.selectOrderPriority('Low');
      await orderListPage.clickNextButtonInOrderDetailsPage();
      await browserActions.waitForTimeout(3000);
      await orderListPage.enterAddress('Test Address');
      await orderListPage.selectCountry('India');
      await orderListPage.enterCity('Test City');
      await orderListPage.enterState('Test State');
      await orderListPage.enterPincode('875656');
      await orderListPage.clickSameAsShippingAddressLink();
      await orderListPage.clickNextButtonInAddress();
      await browserActions.waitForTimeout(3000);
      await orderListPage.selectSku('HOME-REFR-NIKE-KL49');
      await orderListPage.enterQuantity('1');
      await orderListPage.clickOnVerifyButton();
      await orderListPage.enterDiscount('10');
      await orderListPage.enterTaxAmount('10');
      await orderListPage.clickAddButon();
      await browserActions.waitForTimeout(3000);
      await expect(await orderListPage.isOrderListPageDisplayed()).toBeTruthy();


    
})








