import { defineConfig, devices } from "@playwright/test";
import path from "path";
const dotenv = require("dotenv");

if (!process.env.NODE_ENV) {
  dotenv.config({ path: `${__dirname}//src//config//.env` });
} else {
  dotenv.config({
    path: `${__dirname}//src//config//.env.${process.env.NODE_ENV}`,
  });
}

export default defineConfig({
  testDir: "./src/tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "https://login.salesforce.com",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
