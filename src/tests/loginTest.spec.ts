import { expect, test } from "@playwright/test";
import LoginPage from "../pages/loginPage";

test("Login Test", async function ({ page }) {
  let loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage
    .login("huyen978@agentforce.com", "runro1-tUvjyj-puhbyz")
    .then(async (homePage) =>
      expect(await homePage.verifyHomePage()).toBe("Service")
    );
});
