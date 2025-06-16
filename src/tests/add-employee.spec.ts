import { expect, test } from "@playwright/test";
import HomePage from "../pages/home-page";
import AddEmployeePage from "../pages/employee-page";
import { getRandomEmployee } from "../testdata/data-generator";
import logger from "../utils/logger-utils";

test("Add employee", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goToDashboard();
  const addEmployeePage = new AddEmployeePage(page);
  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  logger.info("Left component PIM is clicked");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");
  logger.info("Top component Add Employee is clicked");
  await addEmployeePage.addEmployee(getRandomEmployee());
  await expect(addEmployeePage.successfulMsg).toBeVisible();
  logger.info("Add employee test is completed");
});
