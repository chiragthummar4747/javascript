//   que(1). Write a JavaScript function that reverse a number. 
//          Example x = 32243;
//          Expected Output : 34223


//  arrow function 
//const reveser = (num) => String(num).split("").reverse().join("")
//  console.log(reveser(12345));



//anonymous function 
// var reverse1 = function(num){
//   var a,b,c,d;
//   a=String(num)
//   b=a.split("")
//   c=b.reverse()
//   d=c.join("");
//   return d; 
// }
// console.log(reverse1(34223))




// callback function 
function call (get){
    console.log("get",get)
    console.log(get(34223))
}
call(function(num){
    var a,b,c,d;
    a=String(num)
    b=a.split("")
    c=b.reverse()
    d=c.join("");
    return d; 
  })