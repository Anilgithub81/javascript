let string = "Anil Kumar @# 1 23";
console.log("Input String is:- " + string);
console.log("Total length of string =  " + string.length);
var regex = /[a-zA-Z]/g;
console.log("Characters = " + string.match(regex).length);
var regex = /[0-9]/g;
console.log("Numbers = " + string.match(regex).length);
var regex = /[^a-zA-Z0-9 ]/g;
console.log("Special Characters = " + string.match(regex).length);
temp = string.split(" ");
temp1 = temp.length - 1;
console.log("Whitespaces = " + temp1);
