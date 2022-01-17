//que(4). Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//        Example string : 'webmaster'
//        Expected Output : 'abeemrstw'
//        Assume punctuation and numbers symbols are not included in the passed string.


//anonymous function 
// var str = function(str){
//     var a,b,c,d;
//     a=String(str)
//     b=a.split("")
//     c=b.sort()
//     d=c.join("")
//     return d; 
// }
// console.log(str("zca"))


// // arrow function
// const str1 = (str) => String(str).split("").sort().join("")
// console.log(str1("zsa"))


//callback function 
function call(get){
    console.log("get",get)
    console.log(get("zca"))
}
call(function(str){
            var a,b,c,d;
            a=String(str)
            b=a.split("")
            c=b.sort()
            d=c.join("")
            return d; 
        }
)


