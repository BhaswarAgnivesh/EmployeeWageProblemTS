// UC1 - Class-based approach

class EmployeeAttendance {
    private readonly is_present: number = 1; // readonly -> cannot be reassigned

    public checkAttendance(): void {
        let employeeCheck: number = Math.floor(Math.random() * 2);

        if (employeeCheck === this.is_present) {
            console.log("Employee is Present");
        } else {
            console.log("Employee is Absent");
        }
    }
}

const employee = new EmployeeAttendance();
employee.checkAttendance();
