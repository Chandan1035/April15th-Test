/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  const developers = arr.map(employee => {
    if (employee.profession === "developer") {
      return employee;
    }
  });
  console.log(developers);
  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
  
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
  
}

function removeAdmin() {
  //Write your code here, just console.log

  const nonAdmins = arr.filter(employee => {
    if (employee.profession !== "admin") {
      return employee;
    }
  });
  console.log(nonAdmins);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 4, name: "ram", age: "32", profession: "developer" },
    { id: 5, name: "shyam", age: "20", profession: "chef" },
    { id: 6, name: "arun", age: "19", profession: "SWE" }
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
  
}
