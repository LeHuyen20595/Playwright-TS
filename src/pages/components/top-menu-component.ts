import { Page } from "playwright";

class TopMenuComponent {
  constructor(private readonly page: Page) {}

  private readonly topMenuItem = (menuItemName: string) =>
    this.page.getByRole("listitem").filter({ hasText: menuItemName });

  async selectTopMenuItem(menuItemName: string) {
    await this.topMenuItem(menuItemName).click();
  }
}

export default TopMenuComponent;
