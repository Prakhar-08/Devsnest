// Write a JavaScript program to list the properties of a JavaScript object. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
// Sample Output: name,sclass,rollno

var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12
};

//method-1
console.log(Object.keys(student));

//method-2
console.log(Object.getOwnPropertyNames(student));

//method-3
for(var item in student) {
    console.log(item, student[item]);
}

