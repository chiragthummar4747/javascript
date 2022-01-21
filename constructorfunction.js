//constructor functions
var createEmployee = function (employeeName, employeeId, salary) {
    var employee = {};
  
    employee.employeeName = employeeName;
    employee.employeeId = employeeId,
      employee.salary = salary;
  
    employee.getEmployeeName = function () {
      return this.employeeName;
    };
    return employee;
  };

  
  var employee1 = createEmployee("Scott", 1, 1000);
  var employee2 = createEmployee("Allen", 2, 2000);
  var employee3 = createEmployee("chirag",3,5000);
  
  console.log(employee1)
  console.log(employee2);
  console.log(employee3)

  //constructor work to function
  // object are empty
  
  

