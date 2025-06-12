import { Page } from "@playwright/test";
import HomePage from "./home_page";
import logger from "../utils/logger_utils";

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
    logger.info("Username filled");
    await this.passwordTxt.fill(password);
    logger.info("Password filled");
    await this.loginBnt.click({ timeout: 60000 });
    logger.info("Login clicked");
    return new HomePage(this.page);
  }
}
