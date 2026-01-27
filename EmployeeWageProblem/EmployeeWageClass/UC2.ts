// UC2 - Class-based approach

class EmployeeWage {
    private readonly is_part_time: number = 1;
    private readonly is_full_time: number = 2;
    private readonly part_time_hours: number = 4;
    private readonly full_time_hours: number = 8;
    private readonly wage_per_hour: number = 20;

    public calculateDailyWage(): void {
        let employeeType: number = Math.floor(Math.random() * 3);
        let workingHours: number = 0;

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

        let dailyWage: number = workingHours * this.wage_per_hour;
        console.log("Working Hours:", workingHours);
        console.log("Daily Wage: $", dailyWage);
    }
}

const employee = new EmployeeWage();
employee.calculateDailyWage();
