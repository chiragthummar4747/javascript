// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

var matrix = function (n)
{
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            (i==j)?console.log("1"):console.log("0")
        }
        console.log()
    }
}
matrix(3)