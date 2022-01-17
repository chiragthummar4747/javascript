

/// que (5). Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
//Example string : 'the quick brown fox'
//Expected Output : 'The Quick Brown Fox '


// arrow function
// const str = (str) => {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//   };
  
//    str1 = str('The Quick Brown Fox ');
//   console.log(str1);


//anonymous function 
// var str1 = function (str){
//   var a,b,c,d,e,f
//   a=String(str)
//   b=a.split("")
//   c=word.charAt(0)
//   d=c.toUpperCase()
//   e=d.join("")
//   return e;
// }
// //str1 = str('The Quick Brown Fox ');
//   console.log(str1('The Quick Brown Fox '));






function str1(str)
{
  var array = str.split(' ');
  var array1 = [];
    
  for(var x = 0; x < array.length; x++){
      array1.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
  }
  return array1.join(' ');
}
console.log(str1("the quick brown fox"));