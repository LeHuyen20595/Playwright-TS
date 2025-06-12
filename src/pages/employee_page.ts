import { Page } from "playwright";
import { EmployeeDetails } from "../testdata/orange_hr_interface";

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
    await this.middleNameTextBox.fill(employee.middleName);
    await this.lastNameTextBox.fill(employee.lastName);
    await this.employeeNoTextBox.fill(employee.employeeId);
    await this.saveButton.click();
  }
}

export default AddEmployeePage;
