let arr = [1,2,3,4];
function area(radius){
    return (3.14*radius*radius);
}

function circumference(radius) {
  return (2*3.14*radius);
}

function diameter(radius) {
  return 2*radius;
}

function result(arr,func)
{
    let output = [];
    for (let i = 0; i< arr.length; i++)
    {
        output.push(func(i));
    }
    return output;
}
console.log("Area of circle is :- ", result(arr, area));
console.log("Circumference of circle is :- ", result(arr, circumference));
console.log("Diameter :- ", result(arr, diameter));