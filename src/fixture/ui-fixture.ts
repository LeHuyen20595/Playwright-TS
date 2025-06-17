import { test as base } from "@playwright/test";
import HomePage from "../pages/home-page";
import PIMPage from "../pages/employee-page";
import LeavePage from "../pages/leave-page";

interface PageFixture {
  homePage: HomePage;
  pimPage: PIMPage;
  leavePage: LeavePage;
}

export const test = base.extend<PageFixture>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  pimPage: async ({ page }, use) => {
    await use(new PIMPage(page));
  },
  leavePage: async ({ page }, use) => {
    await use(new LeavePage(page));
  },
});
