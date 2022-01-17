// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1.
  


var amount_to_coins = function(a,b)
{
    var c=[]
    for(i=0;a>0;i++)
    {    
        while(a>=b[i])
        {
            a=a-b[i]
            c.push(b[i])
        }
    }
    return c
}
console.log(amount_to_coins(85,[25,10,5,2,1]))   