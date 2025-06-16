import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";

if (!process.env.NODE_ENV) {
  dotenv.config({ path: `${__dirname}//src//config//.env` });
} else {
  dotenv.config({
    path: `${__dirname}//src//config//.env.${process.env.NODE_ENV}`,
  });
}

const baseURL = process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com';

export default defineConfig({
  testDir: "./src/tests",
  globalSetup: require.resolve('./src/tests/global-setup.ts'),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL,
    trace: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { browserName: 'chromium', storageState: './src/config/auth/auth.json' },
      
    },
  ],
});
