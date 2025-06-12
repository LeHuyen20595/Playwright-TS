import { Page, expect } from "@playwright/test";
import logger from "../utils/logger_utils";
import ContactPage from "./contact_page";

export default class HomePage {
  constructor(private page: Page) {}

  private readonly serviceText = this.page.locator('[title="Service"]');
  private readonly contactsLinkLocator = "Contacts";

  async getServiceTitle() {
    return await this.serviceText.textContent();
  }

  async navigateToContactTab() {
    await expect(
      this.page.getByRole("link", { name: this.contactsLinkLocator })
    ).toBeVisible();
    logger.info("Contacts Tab is visible");
    await this.page
      .getByRole("link", { name: this.contactsLinkLocator })
      .click();
    logger.info("Contacts Tab is clicked");
    return new ContactPage(this.page);
  }
}
