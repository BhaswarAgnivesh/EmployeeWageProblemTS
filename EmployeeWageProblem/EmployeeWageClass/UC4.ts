// UC4 - Class-based monthly wage calculation

class EmployeeWage {
    private readonly is_part_time = 1;
    private readonly is_full_time = 2;
    private readonly part_time_hours = 4;
    private readonly full_time_hours = 8;
    private readonly wage_per_hour = 20;
    private readonly working_days_per_month = 20;

    private getWorkingHours(employeeType: number): number {
        switch(employeeType) {
            case this.is_part_time:
                return this.part_time_hours;
              
            case this.is_full_time:
                return this.full_time_hours;
                
            default:
                return 0;    
        }
    }

    public calculateMonthlyWage() : void {
        let totalWorkingHours: number = 0;

        for(let day = 1; day<=this.working_days_per_month; day++) {
            let employeeType: number = Math.floor(Math.random()*3);
            totalWorkingHours += this.getWorkingHours(employeeType);
        }

        let monthlyWage: number = totalWorkingHours * this.wage_per_hour;

        console.log("Total Working Hours:", totalWorkingHours);
        console.log("Monthly Wage: $", monthlyWage);
    }
}

const employee = new EmployeeWage();
employee.calculateMonthlyWage();