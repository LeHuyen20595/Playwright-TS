import { Page } from "@playwright/test";
import HomePage from "./homePage";

export default class LoginPage {
  constructor(private page: Page) {}

  private readonly usernameTxt = this.page.locator("#username");
  private readonly passwordTxt = this.page.locator("#password");
  private readonly loginBnt = this.page.locator("#Login");

  async goto() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.usernameTxt.fill(username);
    await this.passwordTxt.fill(password);
    await this.loginBnt.click({ timeout: 60000 });
    return new HomePage(this.page);
  }
}
