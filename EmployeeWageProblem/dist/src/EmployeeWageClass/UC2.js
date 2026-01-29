// UC2 - Class-based approach
export class EmployeeWageUC2 {
    constructor() {
        this.is_part_time = 1;
        this.is_full_time = 2;
        this.part_time_hours = 4;
        this.full_time_hours = 8;
        this.wage_per_hour = 20;
    }
    calculateDailyWage() {
        let employeeType = Math.floor(Math.random() * 3);
        let workingHours = 0;
        switch (employeeType) {
            case this.is_part_time:
                workingHours = this.part_time_hours;
                break;
            case this.is_full_time:
                workingHours = this.full_time_hours;
                break;
            default:
                workingHours = 0;
        }
        let dailyWage = workingHours * this.wage_per_hour;
        console.log("Working Hours:", workingHours);
        console.log("Daily Wage: $", dailyWage);
    }
}
// const employee = new EmployeeWage();
// employee.calculateDailyWage();
