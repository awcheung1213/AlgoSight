/**
 you are given a string
"1:max:4, 2:ann:0, 3:alb:2, 4:edmond:2"

the format of the string is "id:name:manager_id"

Print this: 

Ann
- Alb
- edomnd
-- max
 */

//convert the string into an array
//iterate through the array to create a object store of managers to their direct reports
//iterate through the managers in the object store and print the managers and their direct reports with a '-'
//if a direct report is also a manager print their direct reports with another '-'

function printManagers(string: string): void{
  const managerArray = string.split(', ')
  const reference = {};
  const managers: Array<string> = [];
  const map = {};

  for (let string of managerArray){
    const [ employeeID, employee, managerID ]= string.split(':')
    reference[employeeID] = employee;
    if (managerID === '0') managers.push(employeeID)
    if (managerID in map) map[managerID].push(employeeID);
    else {
      map[managerID] = [employeeID] 
    }
  }

  function _printManagers(id: string, level: number): void{
    let prefix = "";
    if (level > 0) {
      for (let i = 0; i < level; i++){
        prefix += "-"
      }
    }
    console.log(`${prefix}${reference[id]}`)
    const directReports = map[id]
    if (directReports) {
      for (let employee of directReports){
        _printManagers(employee, level + 1)
      }
    }
  }

  for (let manager of managers){
    _printManagers(manager, 0);
  }
};

module.exports = printManagers;