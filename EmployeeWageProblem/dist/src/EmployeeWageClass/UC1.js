// UC1 - Class-based approach
export class EmployeeAttendance {
    constructor() {
        this.is_present = 1; // readonly -> cannot be reassigned
    }
    checkAttendance() {
        let employeeCheck = Math.floor(Math.random() * 2);
        if (employeeCheck === this.is_present) {
            console.log("Employee is Present");
        }
        else {
            console.log("Employee is Absent");
        }
    }
}
// const employee = new EmployeeAttendance();
// employee.checkAttendance();
