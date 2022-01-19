var student ={
    firstName:'chirag',
    lastName: "thummar",
    Rollno:10,
    english: 83,
    gujrati: 86,
    science: 85,
    total: 0,
    pers: 0,
   

    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
      },

      A: function () {
          var Result ;
          if(this.english >= 35,this.gujrati  >=35,this.science >=35)
          {
              Result = true ;

            this.total= this.english + this.gujrati + this.science ;
            this.pers = this.total/3;
            
          }
          else {
              Result = false;
          }
          return Result;
      }
}

console.log(student.getFullName())
console.log("Rollno=",student.Rollno)
console.log("english=",student.english)
console.log("gujrati=",student.gujrati)
console.log("science=",student.science)

if(student.A() == true)
{
    console.log("congretulation")
    console.log("total=" + student.total)
    console.log("per=" + student.pers)
    //  student.pers>=75?console.log("gread=A"):console.log("gread=B")
    // student.pers>=65?console.log("gread=B"):console.log("gread=C")
    if(student.pers>=75)
    {
        console.log("gread=A")
    }
    else  if(student.pers>=60)
    {
        console.log("gread=B")
    }
    else if(student.pers>=45)
    {
        console.log("gread=C")
    } 
    else if(student.pers>=35)
    {
        console.log("gread=D")
    } 
}
else{
    console.log("fail")
}
console.log(student.Rollno)