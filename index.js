const employee = {name: "Doreen", streetAddress: "Manyatta"};

function updateEmployeeWithKeyAndValue(employee, name, john) {
     return {...employee,[name]:john} 
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Mary) {
    employee[name] = Mary;

    return employee;
  };

  function deleteFromEmployeeByKey(employee, name, john) {
    let newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, name, Mary) {
    delete employee.name;  
    return employee;
  };
