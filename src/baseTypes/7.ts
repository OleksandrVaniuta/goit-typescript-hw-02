/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
const enum Days {
  monday,
  tuesday,
  wednesday,
  thurthday,
  friday,
  saturday,
  sunday,
}

function isWeekend(day: Days): boolean {
  return day === Days.saturday || day === Days.sunday;
}

console.log(Days.saturday);
