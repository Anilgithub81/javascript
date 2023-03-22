var array = [1,2,3,4];  
var newarray=[5,6,7,8]  
array.push.apply(array, newarray);  
console.log(array);  