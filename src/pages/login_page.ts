import { expect } from "@playwright/test";
import { Page } from "playwright";
import logger from "../utils/logger_utils";

class LoginPage {
  constructor(private readonly page: Page) {}

  private readonly usernameTextbox = this.page.getByRole("textbox", {
    name: "Username",
  });
  private readonly passwordTextbox = this.page.getByRole("textbox", {
    name: "Password",
  });
  private readonly loginButton = this.page.getByRole("button", {
    name: "Login",
  });

  async visit() {
    await this.page.goto("/");
    await expect(
      this.page.getByRole("img", { name: "orangehrm-logo" })
    ).toBeVisible({
      timeout: 20000,
    });
    logger.info("Visited login page");
  }

  async login(username: string, password: string) {
    await this.usernameTextbox.fill(username);
    logger.info("Username is filled");
    await this.passwordTextbox.fill(password);
    logger.info("Password is filled");
    await this.loginButton.click();
    logger.info("Login button is clicked");
  }
}

export default LoginPage;
