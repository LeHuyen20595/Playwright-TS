import { Page } from "playwright";
import { EmployeeDetails } from "../testdata/data-interface";
import logger from "../utils/logger-utils";

class AddEmployeePage {
  constructor(private readonly page: Page) {}

  private readonly firstNameTextBox = this.page.getByRole("textbox", {
    name: "First Name",
  });
  private readonly middleNameTextBox = this.page.getByRole("textbox", {
    name: "Middle Name",
  });
  private lastNameTextBox = this.page.getByRole("textbox", {
    name: "Last Name",
  });
  private employeeNoTextBox = this.page
    .locator("input:below(:text('Employee Id'))")
    .first();
  private saveButton = this.page.getByRole("button", { name: "Save" });
  public successfulMsg = this.page.getByText(/Successfully Saved/i);

  async addEmployee(employee: EmployeeDetails) {
    await this.firstNameTextBox.fill(employee.firstName);
    logger.info("Employee first name is filled");
    await this.middleNameTextBox.fill(employee.middleName);
    logger.info("Employee middle name is filled");
    await this.lastNameTextBox.fill(employee.lastName);
    logger.info("Employee last name is filled");
    await this.employeeNoTextBox.fill(employee.employeeId);
    logger.info("Employee number is filled");
    await this.saveButton.click();
    logger.info("Saved employee button is clicked");
  }
}

export default AddEmployeePage;
