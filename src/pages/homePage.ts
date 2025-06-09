import { Page } from "@playwright/test";

export default class HomePage {
  constructor(private page: Page) {}

  private readonly serviceText = this.page.locator('[title="Service"]');

  async verifyHomePage() {
    return await this.serviceText.textContent();
  }
}
