import { expect } from "@playwright/test";
import { getDateRangeForNoResultSearch } from "../../testdata/data-generator";
import logger from "../../utils/logger-utils";
import { test } from "../../fixture/customeFixture";

test("Seach leave", async ({ homePage, leavePage }) => {
  await homePage.goToDashboard();
  await homePage.getLeftMenuComponent().selectLeftMenuItem("Leave");
  logger.info("Left component Leave is clicked");
  await homePage.getTopMenuComponent().selectTopMenuItem("Leave List");
  logger.info("Top component Leave List is clicked");
  await leavePage.searchLeave(getDateRangeForNoResultSearch());
  await expect(leavePage.noResultMessage).toBeVisible();
  logger.info("Search leave test is completed");
});
