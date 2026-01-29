// UC2 - Function-based approach

const is_part_time: number = 1;
const is_full_time: number = 2;
const part_time_hours: number = 4;
const full_time_hours: number = 8;
const wage_per_hour: number = 20;

export function calculateDailyWageUC2(): void {
    let employeeType: number = Math.floor(Math.random() * 3);
    let workingHours: number = 0;

    switch (employeeType) {     
        case is_part_time:
            workingHours = part_time_hours;
            break;

        case is_full_time:
            workingHours = full_time_hours;
            break;

        default:
            workingHours = 0;
    }

    let dailyWage: number = workingHours * wage_per_hour;
    console.log("Working Hours:", workingHours);
    console.log("Daily Wage: $", dailyWage);
}

// calculateDailyWage();
