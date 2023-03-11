var weight = 82;
var height = 1.7;
var BMI = weight / (height * height);
//console.log(BMI);
//let result= BMICALCULATOR();
let output = "";
function BMICALCULATOR(BMI) {
  if (BMI < 18.5) {
    output = " UnderWeight";
    //return "UnderWeight";
  } else if (BMI > 18.5 && BMI < 24.9) {
    output = " Normal";
    //return "Normal";
  } else if (BMI > 25 && BMI < 29.9) {
    output = " OverWeight";
    //return "OverWeight";
  } else if (BMI > 30) {
    output = " Obese";
    //return "Obese";
  }

  return output;
}

console.log(BMICALCULATOR(BMI));
