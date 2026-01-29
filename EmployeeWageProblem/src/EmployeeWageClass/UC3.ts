// UC3 - Class-based refactoring

export class EmployeeWageUC3 {
    private readonly is_part_time = 1;
    private readonly is_full_time = 2;
    private readonly part_time_hours = 4;
    private readonly full_time_hours = 8;
    private readonly wage_per_hour = 20;

    private getWorkingHours(employeeType: number): number {
        switch (employeeType) {
            case this.is_part_time:
                return this.part_time_hours;

            case this.is_full_time:
                return this.full_time_hours;

            default:
                return 0;
        }
    }

    public calculateDailyWage(): void {
        let employeeType: number = Math.floor(Math.random() * 3);
        let workingHours: number = this.getWorkingHours(employeeType);
        let dailyWage: number = workingHours * this.wage_per_hour;

        console.log("Working Hours:", workingHours);
        console.log("Daily Wage: $", dailyWage);
    }
}

// const employee = new EmployeeWage();
// employee.calculateDailyWage();
