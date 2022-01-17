// que(8). Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not. 

////anonymous function 
// var prime = function(num){
//     var count=0
//     for(i=2;i<num;i++)
//     {
//         if(num% i== 0)
//         {
//             count++
//         }
//     }
//     return (count==0)?console.log("prime number"):console.log("not prime number")
// }
// console.log(prime(7))


//arrow function 
// const prime = (num) => {
//     var count=0
//     for(i=2;i<num;i++)
//     {
//         if(num% i== 0)
//         {
//             count++
//         }
//     }
//     return (count==0)?console.log("prime number"):console.log("not prime number")
// }
// console.log(prime(7))


// callback function
function call(get){
    console.log("get",get)
    console.log(7)
}
call(function(num){
    var count=0
    for(i=2;i<num;i++){
        if(num% i== 0){
            count++
        }
    }
    return (count==0)?console.log("prime number"):console.log("not prime number")
})


