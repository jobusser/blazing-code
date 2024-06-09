var a = 5;
var a = 6;

console.log(a);

// No issue with redeclaring
// differs from java and C (and python?) here

//This makes sense due to hoisting
//which drags variable names to the scope's "top"
// this means that we can redeclare the 'i' of a for loop
// without it throwing an error

console.log(i); // undefined

for (var i = 0; i < 5; i++) {
    console.log("booga wooga");
}
console.log(i); // no error
