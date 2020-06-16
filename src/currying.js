export function add(a) {
    return function(b) {
        return a + b;
    }
}

// Currying converts paramters N => 1
console.log(add(1)(5));

const add2 = a => b => a + b; // (a, b) => a + b
console.log(add2(2)(3));