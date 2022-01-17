/// que(3). Write a JavaScript function that generates all combinations of a string. 
//         Example string : 'dog'
//         Expected Output : d,do,dog,o,og,g


/// anonymousfunction
// var a=function(str){
//     var a
//      a=str.split("")
//      for(var i=0;i<a.length;i++)
//      {
//          for(var j=i+1;j<a.length+1;j++)
//          {
//              console.log(str.slice(i,j))
//          }
//      }
// }
// console.log(a("dog"))


// arrow function 
// const a=(str)=>{
//     var a
//     a=str.split("")
//     for(var i=0;i<a.length;i++)
//     {
//         for(var j=i+1;j<a.length+1;j++)
//         {
//             console.log(str.slice(i,j))
//         }
//     }
// }
// console.log(a("dog"))


//callback function
function call (get){
    console.log("get",get)
    console.log(get("dog"))
}
call(function(str){
    var a
    a=str.split("")
    for(var i=0;i<a.length;i++)
    {
        for(var j=i+1;j<a.length+1;j++)
        {
            console.log(str.slice(i,j))
        }
    }

})

console.log(a("dog"))


nsole.log(a("dog"))










