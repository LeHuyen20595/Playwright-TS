import { expect } from "@playwright/test";
import { Page } from "playwright";

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
  }

  async login(username: string, password: string) {
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
  }
}

export default LoginPage;
