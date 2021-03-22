function fibonacciGenerator (n) {
    var fibonacci = []

    if (n === 1) {
        fibonacci = [0];
        console.log(fibonacci);
    }
    else if (n === 2) {
        fibonacci = [0, 1];
        console.log(fibonacci);
    }
    else {
        fibonacci = [0, 1];

        for (var i=2; i<n; i++) {
            fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
        }

        console.log(fibonacci);
    }
}
