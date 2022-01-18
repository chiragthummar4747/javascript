// 12. Write a JavaScript function which says whether a number is perfect. 
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.


var perfect_number = function (num)
{
    var a=0,b=num
    while(b>1)
    {
        b = Math.round(b/2)
        a+=b
    }
    (num==a)?console.log("perfect number"):console.log("not perfect number")
}
perfect_number(496)