// UC3 - Class-based refactoring
export class EmployeeWageUC3 {
    constructor() {
        this.is_part_time = 1;
        this.is_full_time = 2;
        this.part_time_hours = 4;
        this.full_time_hours = 8;
        this.wage_per_hour = 20;
    }
    getWorkingHours(employeeType) {
        switch (employeeType) {
            case this.is_part_time:
                return this.part_time_hours;
            case this.is_full_time:
                return this.full_time_hours;
            default:
                return 0;
        }
    }
    calculateDailyWage() {
        let employeeType = Math.floor(Math.random() * 3);
        let workingHours = this.getWorkingHours(employeeType);
        let dailyWage = workingHours * this.wage_per_hour;
        console.log("Working Hours:", workingHours);
        console.log("Daily Wage: $", dailyWage);
    }
}
// const employee = new EmployeeWage();
// employee.calculateDailyWage();
