
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 2;

//UC-03------->Function to get work hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Emp - Hour: " + empHrs + " Emp Wage: " + empWage);
    
}
//UC-04------->Calculating Wages for a Month assuming 20 Working Days in a Month
 let totalEmpHrs=0;
 for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
 {
   let empCheck=Math.floor(Math.random()*10)%3;
   totalEmpHrs+=getWorkingHours(empCheck);
 }

 let empWage=totalEmpHrs*WAGE_PER_HOUR;
 console.log("Hour: "+totalEmpHrs+" Emp Wage: "+empWage);

 // UC05------->Number of Working Days or Total Working Hours per month is Reached
{
      const MAX_HRS_IN_MONTH=160;
      const NUM_OF_WORKING_DAYS=20;
      let totalEmpHrs=0;
      
      let totalWorkingDays=0;
      while(totalEmpHrs <= MAX_HRS_IN_MONTH && 
            totalWorkingDays < NUM_OF_WORKING_DAYS)
      {
         totalWorkingDays++;
         let empCheck = Math.floor(Math.random()*10)%3;
         totalEmpHrs+=getWorkingHours(empCheck);
      }
     let empWage = totalEmpHrs*WAGE_PER_HOUR;
     console.log("UC5 - Total Days: "+totalWorkingDays+
     " Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage); 
}
