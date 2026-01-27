//UC4 - Function-based monthly wage calculation

const is_part_time = 1;
const is_full_time = 2;
const part_time_hours = 4;
const full_time_hours = 8;
const wage_per_hour = 20;
const working_days_per_month = 20;

function getWorkingHours(employeeType: number): number {
    switch(employeeType) {
        case is_part_time:
            return part_time_hours;
        
        case is_full_time:
            return full_time_hours;
        
        default:
            return 0;    
    }
}


function calculateMonthlyWage(): void {
    let totalWorkingHours: number = 0;

    for(let day=1; day<=working_days_per_month; day++) {
        let employeeType: number = Math.floor(Math.random()*3);
        let dailyHours: number = getWorkingHours(employeeType);

        totalWorkingHours += dailyHours;
    }

    let monthlyWage: number = totalWorkingHours * wage_per_hour;

    console.log("Total Working Hours: ", totalWorkingHours);
    console.log("Monthly Wage: $", monthlyWage);
}


calculateMonthlyWage();