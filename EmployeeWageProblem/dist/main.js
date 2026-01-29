// main.ts
import { EmployeeWageUC5 } from "./src/EmployeeWageClass/UC5.js";
import { calculateMonthlyWageUC5 } from "./src/EmployeeWageFunctions/UC5.js";
// ======================
// CLASS-BASED OUTPUT
// ======================
console.log("===== RUNNING VIA CLASSES =====");
// ======================
// UC1
// ======================
// const attendance = new EmployeeAttendance();
// attendance.checkAttendance();
// ======================
// UC2
// ======================
// const uc2 = new EmployeeWageUC2();
// uc2.calculateDailyWage();
// ======================
// UC3
// ======================
// const uc3 = new EmployeeWageUC3();
// uc3.calculateDailyWage();
// ======================
// UC4
// ======================
// const uc4 = new EmployeeWageUC4();
// uc4.calculateMonthlyWage();
// ======================
// UC5 (RUNNING)
// ======================
const uc5 = new EmployeeWageUC5();
uc5.calculateMonthlyWage();
// ======================
// FUNCTION-BASED OUTPUT
// ======================
console.log("\n===== RUNNING VIA FUNCTIONS =====");
// ======================
// UC1
// ======================
// checkEmployeeAttendanceUC1();
// ======================
// UC2
// ======================
// calculateDailyWageUC2();
// ======================
// UC3
// ======================
// calculateDailyWageUC3();
// ======================
// UC4
// ======================
// calculateMonthlyWageUC4();
// ======================
// UC5
// ======================
calculateMonthlyWageUC5();
