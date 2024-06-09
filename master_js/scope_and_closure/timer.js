for (var i = 1; i <= 5; i++) {
    (function(j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000)
    })(i);
}

// note that this illustrates an example
// see YDKJS pg~240
// a simple let j = i would create a new scope from each iteration
// we would then not need IIFE (Immediately Invoked Function Expression)
// better yet, simply changing to let i = 1 solves it
// due to the i variable re-attaching to the global scope after
// each iteration.
// i.e. we still maintain the scope per iteration
