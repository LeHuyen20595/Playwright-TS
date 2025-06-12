import { expect, test } from "@playwright/test";
//import { decrypt } from "../utils/CryptojsUtil";
import logger from "../utils/logger_utils";
import cdata from "../testdata/contact.json";
//import { convertCsvFileToJsonFile } from "../utils/CsvtoJsonUtil";
// import {
//   exportToCsv,
//   exportToJson,
//   generateTestData,
// } from "../utils/FakerDataUtil";
// import { demoOutput } from "../utils/fakersample";
import LoginPage from "../pages/login_page";
import Env from "../config/environment";

for (const contact of cdata) {
  test.skip(`Contact test for ${contact.firstName} `, async ({ page }) => {
    logger.info("Test for Contact Creation is started...");
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const homePage = await loginPage.login(Env.username, Env.password);
    expect(await homePage.getServiceTitle()).toBe("Service");
    const contactsPage = await homePage.navigateToContactTab();
    await contactsPage.createNewContact(contact.firstName, contact.lastName);
    expect(await contactsPage.getContactLabel()).toBe(
      `${contact.firstName} ${contact.lastName}`
    );
    logger.info("Test for Contact Creation is completed");
  });
}

// test.skip("csv to json", async () => {
//   convertCsvFileToJsonFile("data.csv", "datademo.json");
// });

// test.skip("demo faker", async () => {
//   console.log(demoOutput);
// });

// test.skip("Faker", async ({ page }) => {
//   // Generate test data
//   const testData = generateTestData(20);

//   // Export data to JSON file
//   exportToJson(testData, "testData_en.json");

//   // Export data to CSV file
//   exportToCsv(testData, "testData_en.csv");
// });
