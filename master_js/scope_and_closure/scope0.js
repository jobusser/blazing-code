var currentScope = 0;

function inner() {
    var currentScope = 1; // this works, even though defined above
    console.log(currentScope);
}

inner();
