let student = {
  First_name: "Anil",
  Last_name: "Kumar",
  Gender: "Male",
  Age: 23,
  message: function get_Age() {
    return (this.Age);
  },
};
console.log("Result = ", student.message());
