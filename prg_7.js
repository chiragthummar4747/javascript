// que(7). Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

//anonymous function

// function vowel_count(str1) {
//     var a = 'IaeiouAEOU';
//     var b = 0;

//     for (var x = 0; x < str1.length; x++) {
//         if (a.indexOf(str1[x]) >= 0) {
//             b += 1;
//         }

//     }
//     return b;
// }
// console.log(vowel_count("chIrag"));


// arrowfunction
// const a=(str1)=> {
//     var a = 'aeiouAEIOU';
//     var b = 0;

//     for (var x = 0; x < str1.length; x++) {
//         if (a.indexOf(str1[x]) >= 0) {
//             b += 1;
//         }
//     }
//     return b;
// }
// console.log(a("chIrag"));

//callback function 

function call(get){
    console.log("get",get)
    console.log(get("chIrag"))
}
call(function(str){
    var a = 'aeiouAEIOU';
    var b = 0;

    for (var x = 0; x < str.length; x++) {
        if (a.indexOf(str[x]) >= 0) {
            b += 1;
        }

    }
    return b;


})