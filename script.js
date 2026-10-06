// 1. Currying & Uncurrying — 5 Questions

// 1.
function a(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        }
    }
}

a(15)(35)(40)

// 2.
function employeeData(name) {
    return function(department) {
        return function(salary) {
            console.log(name, department, salary);
        }
    }
}

employeeData("Thangapandi")("Frontend Developer")(30000)

// 3.
function multiply(a1) {
    return function(b1) {
        return function(c1) {
            console.log(a1 * b1 * c1);
        }
    }
}

multiply(4)(5)(8)

// 4.
function add(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

add(10)(20)(30);

function add2(a, b, c) {
    console.log(a + b + c);
}

add2(10, 20, 30);

// 5.
function addition(a3) {
    return function(b3) {
        return function(c3) {
            return function(d3) {
                console.log(a3 + b3 + c3 + d3);
            }
        }
    }
}

addition(10)(20)(30)(40)

function addition2(num1,num2,num3,num4) {
    console.log(num1 + num2 + num3 + num4)
}

addition2(25,15,55,10)



// Spread Operator

// 6.
let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10]

let totalArray1 = [...array1,...array2]

console.log(totalArray1);

// 7.
let studentsName1 = ["Thangapandi","Aravind","John"]
let studentsName2 = ["Praveen","Sanjay","Ganesh"]

let totalStudents1 = [...studentsName1,...studentsName2]

console.log(totalStudents1);

// 8.
let fruits1 = ["Apple","Mango","Pinaapple"]
let fruits2 = ["Grape","Banana","Strawberry"]

let totalFruits1 = [...fruits1,...fruits2, "Orange","Gauva","Plums"]

console.log(totalFruits1);

// 9.
let employeeObj1 = {
name1 : "Thangapandi",
designation1 : "Frontend Developer",
qulaification1 : "BE-CSE"
}

let employeeObj2 = {
name2 : "John",
designation2 : "Python Developer",
qulaification2 : "BE-ECE"
}

let totalEmployee = {...employeeObj1,...employeeObj2}

console.log(totalEmployee);

// 10.
let employee1 = {
    name: "Thangapandi",
    age: 25,
    department: "Frontend Developer"
};

let employeeDetails1 = {
    salary: 40000
};

let employeeCombine = {...employee1,...employeeDetails1}

console.log(employeeCombine);

// 11.
let studentsName3 = {
    name3 :"Raj",
    department3 : "BE-ECE"
}
let studentMarks1 = {
    marks1 : 90
}

let totalMarks = {...studentsName3,...studentMarks1}

console.log(totalMarks);

// 12.
let fruits3 = ["Apple", "Mango", "Banana"];
let fruits4 = ["Grape", "Orange", "Guava"];

let totalFruits2 = [...fruits3, ...fruits4].reverse();

console.log(totalFruits2);



// Rest Operator in Functions

// 13.
function number(a,b,...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

number(1,2,3,4,5,6,7,8,9,10)

// 14.
function students(name,department,...marks) {
    console.log(name);
    console.log(department);
    console.log(marks);
}

students("John","BE-ECE",90,85,80,95,88)

// 15.
function numbers(num1, num2, ...num3) {
    console.log(num1);
    console.log(num2);
    console.log(...num3);
}

numbers(10, 20, 30, 40, 50, 60);


// 16.
function rest(a1,b1,...c1) {
    console.log(a1,b1,...c1)
    console.log(c1[2]);
}

rest(10,20,30,40,50,60,70)

// 17.
function products(product,price,...others) {
    console.log(product);
    console.log(price);
    console.log(...others);
}

products("OnePlus",59999,"Laptop","Iphone","Samsung")

// 18.
function tenNumbers(a3,b3,...c3) {
    console.log(a3);
    console.log(b3);
    console.log(...c3);
}

tenNumbers(1,2,3,4,5,6,7,8,9,10);



// Array Destructuring 

// 19.
let arrayValues = [1,2,3,4]

let [a1, a2, a3, a4, a5] = arrayValues

console.log(a1, a2, a3, a4);

// 20.
let studentDetails = ["Thangapandi","BE-ECS","Chennai"]

let [b1 ,b2, b3] = studentDetails

console.log(b1, b2, b3);

// 21.
let numbers1 = [10, 20, 30, 40, 50];

let [first, , , fourth] = numbers1;

console.log(first);
console.log(fourth);

// 22.
let nestedArray = [10, 20, [30, 40, [50, 60]]];

let [c1, c2, [c3, c4, [c5, c6]]] = nestedArray;

console.log(c1, c2, c3, c4, c5, c6);

// 23.
let nestedArray2 = [10, 20, [30, 40, [50, 60, [70, 80]]]];

let [d1, d2, [d3, d4, [d5, d6, [d7, d8]]]] = nestedArray2;

console.log(d1, d2, d3, d4, d5, d6, d7, d8);



// Object Destructuring

// 24.
let employeeDetailsObj = {
    empName : "Thangapandi",
    empDesignation : "Frontend Developer",
    empSalary : 30000
}

let {empName, empDesignation, empSalary} = employeeDetailsObj;

console.log(empName, empDesignation, empSalary);

// 25.
let studentObj = {
    studentName : "John",
    studentDepartment : "BE-CSE",
    cgpa : 9
}

let {studentName, studentDepartment, cgpa} = studentObj

console.log(studentName, studentDepartment, cgpa);

// 26.
let fruitsObj = {
    fruitName : "Apple",
    fruitPrice : 300,
    fruitQuantity : "5 Kg",
    discountAmount : 200,
    totalAmount : 1300,
}

let {fruitName, fruitQuantity, totalAmount} = fruitsObj

console.log(fruitName, fruitQuantity, totalAmount);

// 27.
let nestedObj = {
    employeeName : "Thangapandi",
    employeeDesignation : "Frontend Developer",
    team : {
        member1 : "John",
        member2 : "Arun",
        member3 : "Abhishek"
    }
}

let {employeeName, employeeDesignation, team : {member1, member2, member3}} = nestedObj

console.log(employeeName, employeeDesignation, member1, member3)

// 28.
let nestedObj2 = {
    companyName : "Stackly",
    department : "Frontend Development",
    companyEmployees : {
        empmember1 : "Thangapandi",
        empmember2 : "Ganesh",
        empmember3 : "Rohit"
    }
}

let {companyName, department, companyEmployees : {empmember1, empmember2, empmember3}} = nestedObj2

console.log(companyName, department, empmember1, empmember2, empmember3);


// Array Manipulation

// 29.
let fruitsList = ["Apple","Mango","Pinaapple","Grape","Banana"]
console.log("Before Push :" ,fruitsList);

fruitsList.push("Strawberry","Pomegranate","WaterMelon");
console.log("After Push :" ,fruitsList);


// 30.
let removeValue = [1, 2, 3, 4, 5]
console.log("Before Pop :" ,removeValue);

removeValue.pop();
console.log("After Pop :" ,removeValue);

// 31.
let studentsList = ["Thangapandi", "Aravind", "John", "Ganesh", "Michael"]
console.log("Before Shift :", studentsList);

studentsList.shift();
console.log("After Shift :", studentsList);

// 32.
let addNumbers = [15, 20, 30, 40, 50, 60]
console.log("Before Unshift :", addNumbers);

addNumbers.unshift(5, 10);
console.log("After Unshift :", addNumbers);

// 33.
let spliceArray = [10, 20, 30, 40, 50]
console.log("Before Slice :", spliceArray);

spliceArray.splice(2, 1, 100)
console.log("After Slice :", spliceArray);

// 34.
let spliceArray2 = [15, 25, 35, 45, 55, 65]
console.log("Before Slice :", spliceArray2);

spliceArray2.splice(2, 2)
console.log("After Slice :", spliceArray2);

// 35.
let spliceArray3 = [1, 2, 3, 4, 5, 6, 7]
console.log("Before Slice :", spliceArray3);

spliceArray3.splice(3, 1, 4, 8, 9, 10)
console.log("After Slice :", spliceArray3);

// 36.
let spliceArray4 = [10, 20, 30, 40, 50, 60, 70]
console.log("Before Slice :", spliceArray4);

spliceArray4.splice(5, 2, 85, 95, 110)
console.log("After Slice :", spliceArray4);

// 37.
let spliceArray5 = ["Thangapandi", "Aravind", "John", "Ganesh", "Michael"]
console.log("Before Slice :", spliceArray5);

spliceArray5.splice(2, 1)
console.log("After Slice :", spliceArray5);

// 38.
let shoppingCart = ["Laptop", "Speaker", "Charger"];
console.log(shoppingCart);

shoppingCart.push("Headphones");
console.log("After push:", shoppingCart);

shoppingCart.pop();
console.log("After pop:", shoppingCart);

shoppingCart.shift();
console.log("After shift:", shoppingCart);

shoppingCart.unshift("Mobile");
console.log("After unshift:", shoppingCart);



// Array Merge & Extraction Methods

// 39.
let array3 = [1, 2, 3, 4]
let array4 = [5, 6, 7, 8]

let totalArray2 = array3.concat(array4)

console.log("using concat :",totalArray2);
 
// 40.
let arrayOne = [10, 20, 30]
let arrayTwo = [40, 50, 60]
let arrayThree = [70, 80, 90]

let totalArray3 = arrayOne.concat(arrayTwo, arrayThree)

console.log("using concat :",totalArray3);

// 41.
let array5 = [1, 2, 3, 4, 5, 6, 7, 8]

let sliceValue = array5.slice(2,6)

console.log("using slice :",sliceValue);

// 42.
let array6 = ["Thangapandi", "Aravind", "John", "Ganesh", "Michael", "Abhishek", "Arun", "Praveen"]

let firstThree = array6.slice(0,3)

console.log("using slice :",firstThree);

// 43.
let nestedArray3 = [1, 2, [3, 4, [5, 6, [7, 8]]]]

let flatMethod = nestedArray3.flat(3);

console.log("using flat :",flatMethod);

// 44.
let nestedArray4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

let flatMethod2 = nestedArray4.flat(4);

console.log("using flat :",flatMethod2);

// 45.
let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

// slice method
let slicedFruits = fruits.slice(1, 3);
console.log("After slice :", slicedFruits);
console.log("fruits :", fruits);

// splice method
let splicedFruits = fruits.splice(1, 2);

console.log("splice :", splicedFruits);
console.log("after splice :", fruits);



// Search & Other Array Methods

// 46.
let arr1 = [10, 24, 37, 44, 50, 58, 60, 73, 86, 97]

let checkArray = arr1.includes(50)

console.log("includes value :",checkArray);

// 47.
let arr2 = [10, 20, 30, 50, 30, 20, 10]

let findIndex = arr2.indexOf(30);

console.log(findIndex);

// 48.
let arr3 = [10, 20, 30, 50, 30, 20, 10]

let findLastIndex = arr3.lastIndexOf(10);

console.log(findLastIndex);

// 49.
let arr4 = [1, 4, 7, 3, 2, 0, 5, 8, 6]

let sortValue = arr4.sort();

console.log(sortValue);

// 50.
let arr5 = [10, 20, 30, 40, 50];

arr5.reverse();

console.log(arr5);