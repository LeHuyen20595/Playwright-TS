import { expect, Page, test } from "@playwright/test";
import HomePage from "../pages/home-page";
import { getRandomEmployee } from "../testdata/data-generator";
import logger from "../utils/logger-utils";
import PIMPage from "../pages/employee-page";

let page: Page;
let homePage: HomePage;
let pimPage: PIMPage;
const employeeData = getRandomEmployee();

test.describe.configure({mode: "serial"});

test.beforeAll(async({browser}) => {
    page = await browser.newPage();
    homePage = new HomePage(page);
    await homePage.goToDashboard();
    await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
    logger.info("Left component PIM is clicked");
    pimPage = new PIMPage(page);
})

test.only("Add employee", async () => {
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");
  logger.info("Top component Add Employee is clicked");
  await pimPage.getAddEmployeeComponent().addEmployee(employeeData);
  await expect(pimPage.getAddEmployeeComponent().successfulMsg).toBeVisible();
  logger.info("Add employee test is completed");
});

test.only("Search employee", async() => {
  await homePage.getTopMenuComponent().selectTopMenuItem("Employee list");
  logger.info("Top component Employee List is clicked");
  await pimPage.getEmployeeListComponent().searchEmployee(employeeData.employeeId);
  logger.info("Search employee test is completed");
});
