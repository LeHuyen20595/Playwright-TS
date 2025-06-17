import { Page } from "@playwright/test";

class EmployeeListComponent{
    constructor(private page: Page){};

    private readonly employeeIdTextBox = this.page.locator(".oxd-input-field-bottom-space").filter({hasText: 'Employee Id'}).getByRole("textbox");
    private readonly searchButton = this.page.getByRole("button", {name: 'Search'});

    async searchEmployee(employeeId: string){
        await this.employeeIdTextBox.fill(employeeId);
        await this.searchButton.click();
    }
}

export default EmployeeListComponent;