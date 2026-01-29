// main.ts

// ======================
// CLASS-BASED IMPORTS
// ======================
import { EmployeeAttendance } from "./src/EmployeeWageClass/UC1.js";
import { EmployeeWageUC2 } from "./src/EmployeeWageClass/UC2.js";
import { EmployeeWageUC3 } from "./src/EmployeeWageClass/UC3.js";
import { EmployeeWageUC4 } from "./src/EmployeeWageClass/UC4.js";
import { EmployeeWageUC5 } from "./src/EmployeeWageClass/UC5.js";

// ======================
// FUNCTION-BASED IMPORTS
// ======================
import { checkEmployeeAttendanceUC1 } from "./src/EmployeeWageFunctions/UC1.js";
import { calculateDailyWageUC2 } from "./src/EmployeeWageFunctions/UC2.js";
import { calculateDailyWageUC3 } from "./src/EmployeeWageFunctions/UC3.js";
import { calculateMonthlyWageUC4 } from "./src/EmployeeWageFunctions/UC4.js";
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
