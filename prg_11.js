// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 

var secound = function (arr)
{
    function compareNumbers(a,b){
        return b-a;
    }
    console.log(arr.sort(compareNumbers))
    console.log(arr[1])
    console.log(arr[arr.length-2])
}
secound([34,55,22,6,19,4444,67,90,3333])