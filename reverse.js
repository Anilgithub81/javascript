//var string = "GITHUB EXTENSION";
var string = "The quick brown fox";
var reverse = "";
for (var i = string.length - 1; i >= 0; i--) {
  reverse = reverse + string[i];
}
console.log("After reversing:- " + reverse);
