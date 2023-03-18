let student = {
  First_name: "Anil",
  Last_name: "Kumar",
  Gender: "Male",
  Age: 23,
};
  function get_Age() {
    return (this.Age);
  
};
let x = get_Age.bind(student); // bind keyword used in explicit binding
console.log(" Result :- " + x());