import { Page } from "playwright";

class LeftMenuComponent {
  constructor(private readonly page: Page) {}

  private readonly leftMenuItem = (menuItemName: string) =>
    this.page.getByRole("link", { name: menuItemName, exact: true });

  async selectLeftMenuItem(menuItemName: string) {
    await this.leftMenuItem(menuItemName).click();
  }
}

export default LeftMenuComponent;
