// UC3 - Function-based refactoring
const is_part_time = 1;
const is_full_time = 2;
const part_time_hours = 4;
const full_time_hours = 8;
const wage_per_hour = 20;
function getWorkingHours(employeeType) {
    switch (employeeType) {
        case is_part_time:
            return part_time_hours;
        case is_full_time:
            return full_time_hours;
        default:
            return 0;
    }
}
export function calculateDailyWageUC3() {
    let employeeType = Math.floor(Math.random() * 3);
    let workingHours = getWorkingHours(employeeType);
    let dailyWage = workingHours * wage_per_hour;
    console.log("Working Hours:", workingHours);
    console.log("Daily Wage: $", dailyWage);
}
// calculateDailyWage();
