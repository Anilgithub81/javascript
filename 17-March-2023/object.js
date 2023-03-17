let student = {
  First_name: "Anil",
  Last_name: "Kumar",
  Gender: "Male",
  Age: 23,
};
console.log("Object :- ", student);
// To add  property in object
student.email = "anilkumar123j@gmail.com";
console.log("\nAfter inserting item :- ", student);
// To change value of property in object
student.Last_name = "Bhagat";
console.log("\nAfter change value of property in object :- ", student);
// To delete property in object
delete student.Gender;
console.log("\nAfter delete property in object:- ", student);
// To access particular property in object
console.log("\nValue of Last_name:- ", student.Last_name);
//To access all the properties without value
console.log("\nPROPERTIES NAME :- ");
for (let key in student) {
  console.log(key);
}
//To access only value
console.log("\nVALUES OF PROPERTIES :- ");
for (let key in student) {
  console.log(student[key]);
}

//To access all the properties with value
console.log("\nPROPERTIES NAME WITH VALUES :- ");
for (let key in student) {
  console.log(key + ` : ` + student[key]);
}
// Method (i.e Fuction associated with object called method) in object
function hello() {
  return "Hello World!";
}
student.sayHello = hello();
console.log("\nModified Object :-", student);
// Passing object to function 
function Area_of_Rectangle({length,breadth})      // parameters of function must be same as properties names of object.
               {
                 return length*breadth;
               }
let rectangle = {
    length : 28,
    breadth : 64
};
let area = Area_of_Rectangle(rectangle);
console.log("\n Area of rectangle = " + area);