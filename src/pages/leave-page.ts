import { Page } from "@playwright/test";
import { LeaveDetails } from "../testdata/orange-hr-interface";

export class LeavePage{
    constructor(private page: Page){
    }

    private readonly fromDateTextBox = this.page.getByPlaceholder("yyyy-dd-mm").first();
    private readonly toDateTextBox = this.page.getByPlaceholder("yyyy-dd-mm").last();
    private readonly assignLeaveOption = this.page.getByRole('option', {name: 'Scheduled'});
    private readonly leaveTypeOption = this.page.getByRole('option', {name: 'CAN - Personal'});
    private readonly searchButton = this.page.getByRole('button', {name: 'Search'});
    public noResultMessage = this.page.locator('span').filter({ hasText: 'No Records Found' });

    async searchLeave(leaveDetails: LeaveDetails){
        await this.fromDateTextBox.fill(leaveDetails.fromDate);
        await this.toDateTextBox.fill(leaveDetails.toDate);
        await this.searchButton.click();
    }


}