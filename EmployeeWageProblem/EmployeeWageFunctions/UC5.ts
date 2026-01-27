// UC5 - Function-based conditional monthly wage calculation

const is_part_time = 1;
const is_full_time = 2;
const part_time_hours = 4;
const full_time_hours = 8;
const wage_per_hour = 20;
const max_working_days = 20;
const max_working_hours = 160;

function getWorkingHours(employeeType: number): number {
    switch (employeeType) {
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
    let totalWorkingDays: number = 0;

    while (
        totalWorkingHours < max_working_hours &&
        totalWorkingDays < max_working_days
    ) {
        totalWorkingDays++;

        let employeeType: number = Math.floor(Math.random() * 3);
        let dailyHours: number = getWorkingHours(employeeType);

        totalWorkingHours += dailyHours;
    }

    let monthlyWage: number = totalWorkingHours * wage_per_hour;

    console.log("Total Working Days:", totalWorkingDays);
    console.log("Total Working Hours:", totalWorkingHours);
    console.log("Monthly Wage: $", monthlyWage);
}

calculateMonthlyWage();
