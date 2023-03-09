
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

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


//UC06----->Store the Daily Wage along with the Total Wage 
const MAX_HRS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const WAGE_PER_HOUR=20;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();

function calcDailyWage(empHrs)
{
  return empHrs*WAGE_PER_HOUR;
}

function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
       case IS_PART_TIME:
            return 4;
       case IS_FULL_TIME:
            return 8;
       default:
            return 0;
   }
}

while(totalEmpHrs <=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
  totalWorkingDays++;
  
  let empCheck=Math.floor(Math.random()*10)%3;
  let empHrs=getWorkingHours(empCheck);
  totalEmpHrs+=empHrs;
  empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage=calcDailyWage(totalEmpHrs);
console.log(" Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage);



//UC-07---->Daily Wage Array perform following operations using Array Helper Functions
const MAX_HRS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const WAGE_PER_HOUR=20;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();

function calcDailyWage(empHrs)
{
  return empHrs*WAGE_PER_HOUR;
}

function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
       case IS_PART_TIME:
            return 4;
       case IS_FULL_TIME:
            return 8;
       default:
            return 0;
   }
}
var empDailyHrsMap = new Map();
var empDailyWageMap =new Map();
//var empDailyHrsAndWageArr=new Array();
while(totalEmpHrs <=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
  totalWorkingDays++;
  
  let empCheck=Math.floor(Math.random()*10)%3;
  let empHrs=getWorkingHours(empCheck);
  totalEmpHrs+=empHrs;
  empDailyWageArr.push(calcDailyWage(empHrs));
  empDailyHrsMap.set(totalWorkingDays,empHrs);
  empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
  empDailyHrsAndWageArr.push(
    {
      dayNum:totalWorkingDays,
      dailyHours:empHrs,
      dailyWage:calcDailyWage(empHrs),
      toString(){
        return '\nDay'+ this.dayNum+' => Working Hours is '+this.dailyHours+
        ' And Wage Earned = '+this.dailyWage
      },
    }
  );
}

let empWage=calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage);

//UC7A--->Calculate total wage using Array forEach traversal or reduced method
let totalEmpWage=0;
function sum(dailyWage)
{
  totalEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+totalEmpWage);

function totalWages(totalWage, dailyWage)
{
  return totalWage+dailyWage;
}

console.log("UC7A - Emp Wage with reduce: "+empDailyWageArr.reduce(totalWages,0));


//UC 7B - Show the day along with daily wage using Array map helper function
let dailyCntr=0;
function mapDayWithWage(dailyWage)
{
   dailyCntr++;
   return dailyCntr+" = "+dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - Shows Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage)
{
   return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earned on Day: "+mapDayWithWageArr.find(findFulltimeWage));


//UC 7E - Check if Every Element of Full Time Wage is truely holding Full time Wage
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7E - Check All Elements have Full Time Wage: "+fullDayWageArr.every(isAllFulltimeWage));

//UC 7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
   return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));


//UC 7G - Find the number of Days the employee worked.
function totalDaysWorked(numOfDays, dailyWage)
{
  if(dailyWage>0) return numOfDays+1;
  return numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked: "+empDailyWageArr.reduce(totalDaysWorked));

//UC 8 Map Functions
console.log("UC8A - Emp Wage Map totalHrs: "+
            Array.from(empDailyWageMap.values()).reduce(totalWages,0));


//UC-9--->Arrow Functions
const findTotal =(totalVal,dailyVal)=>{
  return totalVal+dailyVal;
}
let count=0;
let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary= empDailyWageArr.filter(dailyWage=> dailyWage>0).reduce(findTotal,0);
console.log("UC9A-Emp Wage with Arrow Function: "+ "Total Hours:" + totalHours + "Total Wages: " + totalSalary);
let nonWorkingDays = new Array();
let partWorkingDays= new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value,key,map)=>{
  if (value == 8) fullWorkingDays.push(key);
  else if (value == 4) partWorkingDays.push(key);
  else nonWorkingDays.push(key);
});
console.log("Full Working Days:"+fullWorkingDays);
console.log("Part Working Days:"+partWorkingDays);
console.log("Non Working Days:"+nonWorkingDays);

//UC-10---->Ability to store the Day, Hours Worked and Wage Earned in a single object
let totalEmpHrs=0
let totalWorkingDays= 0;
let empDailyHrsAndWageArr=new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
     totalWorkingDays < NUM_OF_WORKING_DAYS){
     totalWorkingDays++;
     let empCheck = Math.floor(Math.random()*10)% 3;
     let empHrs = getWorkingHours(empCheck);
     totalEmpHrs += empHrs;
     empDailyHrsAndWageArr.push(
      {
         dayNum:totalWorkingDays,
         dailyHours:empHrs,
         dailyWage: calcDailyWage(empHrs),
         toString(){
          return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                           'And Wage Earmed= ' + this.dailyWage
         },
      });

     }
     console.log("UC-10 Showing Daily Hours Worked and Wage Earned: "+empdailyHrsAndWageArr);

     //UC-11---> Object Operations using Arrow Functions
     let totalWages = empDailyHrsAndWageArr
                      .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                      .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
     let totalHours = empDailyHrsAndWageArr
                     .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)     
                     .reduce((totalHours, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyHours, 0);  
     console.log("UC-11A Total Hours:" +totalHours+ " Total Wages: "+totalWages);
     
     Process.stdout.write("UC-11B logging Full Work Days")
     empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                          .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));
     let partWorkingDaysStrArr = empDailyHrsAndWageArr
                                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours ==4)
                                 .map(dailyHrsAndWage => dailyHrsAndWage.toString());
      console.log("\nUC-11c PartWorkingDayStrings: "+ partWorkingDaysStrArr);
      
      let nonWorkingDayNums = empDailyHrsAndWageArr
                                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours ==0)
                                 .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
      console.log("\nUC-11D nonWorkingDayNums: "+ nonWorkingDayNums);
      


