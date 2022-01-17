/// que(6). Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//Example string : 'Web Development Tutorial'
//Expected Output : 'Development'


 // anonymous function 
function A(str) { 
    var B = str.split(' ')
    var C = B.length
    var D = C.max(str)
    console.log(D)
  }
  console.log(A("Web Development Tutorial"))



// //arrow  function
// var str1=(str)=>{
//     var a=String(str)
//     a.split("").sort()
//     console.log(str1[0])
// }
// console.log(str1("Web Development Tutorial"))

// function longest_word(str) {
//   let arr = str.trim().split(" ");
//   let max = arr[0].length;
//   arr.map((el) => {
//       max = Math.max(max, el.length)
//       return max
//   });
//   result = arr.filter(function (elem) {
//       return elem.length == max;
//   });
//   return result[0];
// }
// console.log(longest_word("Web Development Tutorial"));