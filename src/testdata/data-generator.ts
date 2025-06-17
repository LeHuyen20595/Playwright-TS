import { EmployeeDetails, LeaveDetails, LeaveStatus, LeaveType } from "./data-interface";
import { faker } from "@faker-js/faker";

export function getRandomEmployee(): EmployeeDetails {
  return {
    lastName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    firstName: faker.person.firstName(),
    employeeId: faker.number.int(1000).toString(),
  };
}

export function getDateRangeForNoResultSearch(): LeaveDetails{
  return {
    fromDate: '01-01-2025',
    toDate: '02-02-2025',
    leaveStatus: LeaveStatus.PendingApproved,
    leaveType: LeaveType.Personal
  }
}