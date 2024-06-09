function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }

    a++;
    return bar;
}

var baz = foo();

baz(); // baz expose a due to bar having closure over scope of foo
// note that a is still incremented as foo was executed

