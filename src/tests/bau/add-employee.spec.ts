import { expect } from "@playwright/test";
// import HomePage from "../pages/home-page";
import { getRandomEmployee } from "../../testdata/data-generator";
import logger from "../../utils/logger-utils";
import { test } from "../../fixture/customeFixture";

test("Add employee", async ({ homePage, pimPage }) => {
  await homePage.goToDashboard();
  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  logger.info("Left component PIM is clicked");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");
  logger.info("Top component Add Employee is clicked");
  await pimPage.getAddEmployeeComponent().addEmployee(getRandomEmployee());
  await expect(pimPage.getAddEmployeeComponent().successfulMsg).toBeVisible();
  logger.info("Add employee test is completed");
});
