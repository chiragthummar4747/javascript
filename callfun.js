//call
// var person =
// {
//   age: 20
// };

// let birthDay = function(years) {
//   this.age += years;
// };

// console.log(person.age); //20
// birthDay.call(person, 3); //the "this" keyword of birthDay function will refer to "person" object.
// console.log(person.age); //23




var student1 ={
  name:"chirag",
  section:"A"
};
var student2 = {
  name: "raj",
  section: "B"
};
function total(subject1, subject2, subject3)
{
  let Totalmarks = subject1 + subject2 + subject3;
  let mark = `hello ${this.name} , total ${Totalmarks}`;
  console.log(mark)
  // console.log(typeof(total))
}
total.call(student1,50,60,70)
total.call(student2,70,40,50)