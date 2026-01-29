// UC2 - Function-based approach
const is_part_time = 1;
const is_full_time = 2;
const part_time_hours = 4;
const full_time_hours = 8;
const wage_per_hour = 20;
export function calculateDailyWageUC2() {
    let employeeType = Math.floor(Math.random() * 3);
    let workingHours = 0;
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
    let dailyWage = workingHours * wage_per_hour;
    console.log("Working Hours:", workingHours);
    console.log("Daily Wage: $", dailyWage);
}
// calculateDailyWage();
