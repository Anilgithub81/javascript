function mul(a)
{
    return function(b)
    { if(b){
        return mul(a*b); //recursion :- that's why mul function call itself  again.
           }
        else
        {
            return a;
        }
    }
}
let x=mul(10)(20)(30)(40)(50)();
console.log("Result = " +x);
