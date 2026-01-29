// UC1 - Function-based approach
const is_present = 1; // const as this should never change
export function checkEmployeeAttendanceUC1() {
    // let as attendance can change each time we run the function
    let employeeCheck = Math.floor(Math.random() * 2);
    if (employeeCheck === is_present) {
        console.log("Employee is Present");
    }
    else {
        console.log("Employee is Absent");
    }
}
// checkEmployeeAttendance();
