import { expect, test } from "@playwright/test";
import LoginPage from "../pages/login_page";
import Env from "../config/environment";
import logger from "../utils/logger_utils";

test("Login Test", async function ({ page }, testInfo) {
  let loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(Env.username, Env.password).then(async (homePage) => {
    expect(await homePage.getServiceTitle()).toBe("Service");
    logger.info("Homepage displayed");
  });
  logger.info(`${testInfo.title} has completed`);
});
