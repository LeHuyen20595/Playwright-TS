import { Page } from "@playwright/test";
import { LeaveDetails } from "../testdata/data-interface";

export default class LeavePage {
  constructor(private page: Page) {}

  private readonly fromDateTextBox = this.page
    .getByPlaceholder("mm-dd-yyyy")
    .first();
  private readonly toDateTextBox = this.page
    .getByPlaceholder("mm-dd-yyyy")
    .last();
  private readonly assignLeaveOption = this.page.getByRole("option", {
    name: "Scheduled",
  });
  private readonly leaveTypeOption = this.page.getByRole("option", {
    name: "CAN - Personal",
  });
  private readonly searchButton = this.page.getByRole("button", {
    name: "Search",
  });
  public noResultMessage = this.page
    .locator("span")
    .filter({ hasText: "No Records Found" });

  async searchLeave(leaveDetails: LeaveDetails) {
    await this.fromDateTextBox.fill(leaveDetails.fromDate);
    await this.toDateTextBox.fill(leaveDetails.toDate);
    await this.searchButton.click();
  }
}
