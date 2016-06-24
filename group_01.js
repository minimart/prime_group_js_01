var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];


function addArray(empArray) {
  var finalArray = []

  for(var i=0; i<empArray.length; i++) {
    finalArray.push(createEmployee(empArray[i]));
  }

  for (var i=0; i<finalArray.length;i++) {
  console.log(finalArray[i]);
  }
}
function createEmployee (nameArray) {
  newEmpArray = []
  newEmpArray[0] =nameArray[0];
  newEmpArray[1] =bonus(nameArray);
  newEmpArray[3] =Math.round(newEmpArray[1]*parseInt(nameArray[2]));
  newEmpArray[2] =newEmpArray[3]+parseInt(nameArray[2]);
  newEmpArray[1] =newEmpArray[1]*100+"%";
  return newEmpArray
}
function bonus(nameArray) {
  var totalBonus = 0;
  if(nameArray[3] <= 2) {
    totalBonus += 0;
  }
  else if(nameArray[3] === 3){
    totalBonus += 0.04;
  }
  else if(nameArray[3] === 4) {
    totalBonus += 0.06;
  }
  else if(nameArray[3] === 5) {
    totalBonus += 0.10;
  }
  // switch (nameArray[3]) {
  //   case 3:
  //       totalBonus += 0.04;
  //        break;
  //   case 4:
  //       totalBonus += 0.06;
  //        break;
  //   case 5:
  //       totalBonus += 0.10;
  //     break;
  //   default:
  //     totalBonus += 0.00
  //    break;
  // }
  if(nameArray[1].length === 4) {
    totalBonus += 0.05;
  }
  if(parseInt(nameArray[2] > 65000)&& totalBonus >= 1){
    totalBonus -=0.01;
  }
  if(totalBonus > 0.13){
    totalBonus = 0.13;
  }
  return totalBonus
  }
  addArray(employees);
