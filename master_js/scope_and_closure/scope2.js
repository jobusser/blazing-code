var scope = 0;
var a = 5;

var obj = {
    scope: 5,
}

console.log(obj.scope);
console.log(obj.a)
// JS engine finds reference to 'obj'
// Object property reference rules take over when looking further
// As JS objects are hashmaps, we immediately find 'scope'
// however, 'a' is not found
// Scope chaining does not occur in this case
