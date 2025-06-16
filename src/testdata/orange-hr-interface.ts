export interface EmployeeDetails {
  firstName: string;
  lastName: string;
  middleName: string;
  employeeId: string;
}

export enum LeaveStatus{
  Rejected = 'Rejected',
  Cancelled = 'Cancelled',
  PendingApproved = 'Pending Approved',
  Scheduled = 'Scheduled',
  Taken = 'Taken'
}

export enum LeaveType{
  Personal = 'CAN - Personal'
}

export interface LeaveDetails {
  fromDate: string,
  toDate: string,
  leaveStatus: LeaveStatus,
  leaveType: LeaveType
}