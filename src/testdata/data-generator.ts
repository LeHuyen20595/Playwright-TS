import { EmployeeDetails, LeaveDetails, LeaveStatus, LeaveType } from "./orange-hr-interface";
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
    fromDate: '2025-01-01',
    toDate: '2025-02-02',
    leaveStatus: LeaveStatus.PendingApproved,
    leaveType: LeaveType.Personal
  }
}