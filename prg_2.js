
/// que(2). Write a JavaScript function that checks whether a passed string is palindrome or not? 
////A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

//anonymous function 
// var A1 = function(str){
//         var a,b,c,d;
//         a=String(str)
//         b=a.split("")
//         c=b.reverse()
//         d=c.join("")
        
//         if(a==d){
//             console.log("palindrome")
//         }
//         else{
//             console.log("not palindrome")
//         }
// }
// console.log(A1("mom"))




// arrow function 
//  var  A1=(str)=>{
//      var a=String(str)
//      d=a.split("").reverse().join(""); 
//      var e=(a==d)?console.log("palindrome"):console.log("not palindrome");
//  }
//  console.log(A1("papa"))





//callback function 
function call (get){
    console.log("get",get)
    console.log(get("mom"))
}
        call(function(str){
            var a,b,c,d;
            a=String(str)
            b=a.split("")
            c=b.reverse()
            d=c.join("")
            
            if(a==d){
                console.log("palindrome")
            }
            else{
                console.log("not palindrome")
            }
})
