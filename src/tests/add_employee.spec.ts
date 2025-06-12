import { expect, test } from "@playwright/test";
import Env from "../config/environment";
import LoginPage from "../../src/pages/login_page";
import HomePage from "../../src/pages/home_page";
import AddEmployeePage from "../../src/pages/employee_page";
import { getRandomEmployee } from "../../src/testdata/random_employee";

test("Add employee", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const addEmployeePage = new AddEmployeePage(page);
  await loginPage.visit();
  await loginPage.login(Env.USERNAME, Env.PASSWORD);
  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");
  await addEmployeePage.addEmployee(getRandomEmployee());
  await expect(addEmployeePage.successfulMsg).toBeVisible();
});
