import { expect, test } from "@playwright/test";
import HomePage from "../pages/home-page";
import { getDateRangeForNoResultSearch } from "../testdata/data-generator";
import logger from "../utils/logger-utils";
import { LeavePage } from "../pages/leave-page";

test("Seach leave", async ({ page }) => {
  const homePage = new HomePage(page);
  const leavePage = new LeavePage(page);
  await homePage.goToDashboard();
  await homePage.getLeftMenuComponent().selectLeftMenuItem("Leave");
  logger.info("Left component Leave is clicked");
  await homePage.getTopMenuComponent().selectTopMenuItem("Leave List");
  logger.info("Top component Leave List is clicked");
  await leavePage.searchLeave(getDateRangeForNoResultSearch());
  await expect(leavePage.noResultMessage).toBeVisible();
  logger.info("Search leave test is completed");
});
