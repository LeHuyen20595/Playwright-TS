import { EmployeeDetails } from "./orange_hr_interface";
import { faker } from "@faker-js/faker";

export function getRandomEmployee(): EmployeeDetails {
  return {
    lastName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    firstName: faker.person.firstName(),
    employeeId: faker.number.int(1000).toString(),
  };
}
