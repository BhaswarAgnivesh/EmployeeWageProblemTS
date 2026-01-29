// UC4 - Class-based monthly wage calculation
export class EmployeeWageUC4 {
    constructor() {
        this.is_part_time = 1;
        this.is_full_time = 2;
        this.part_time_hours = 4;
        this.full_time_hours = 8;
        this.wage_per_hour = 20;
        this.working_days_per_month = 20;
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
    calculateMonthlyWage() {
        let totalWorkingHours = 0;
        for (let day = 1; day <= this.working_days_per_month; day++) {
            let employeeType = Math.floor(Math.random() * 3);
            totalWorkingHours += this.getWorkingHours(employeeType);
        }
        let monthlyWage = totalWorkingHours * this.wage_per_hour;
        console.log("Total Working Hours:", totalWorkingHours);
        console.log("Monthly Wage: $", monthlyWage);
    }
}
// const employee = new EmployeeWage();
// employee.calculateMonthlyWage();
