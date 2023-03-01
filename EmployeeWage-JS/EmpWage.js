//UC-02------->Ability to Calculate Daily Employee Wage
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let empHrs=0;
let empCheck=Math.floor(Math.random()* 10 % 3);
switch(empCheck)
{
 case IS_PART_TIME:
      //employee is present and part-time
      empHrs=PART_TIME_HOURS;
      break;
case IS_FULL_TIME:
    //employee is present and full time
      empHrs=FULL_TIME_HOURS;
      break;
default:
      empHrs=0;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp wage: "+empWage);
