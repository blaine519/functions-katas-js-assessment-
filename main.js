// KATA 01
function add (a, b) {
    const sum = a + b
    return sum
}
console.log(add(2, 4))


// KATA 02
function multiply (a, b) {
    let product = 0
    for (let index = 0; index < b; index += 1){
        product = add(product, a)
    }
    return product
}
console.log(multiply(6, 4))


// KATA 03
function exponentiate (a, b) {
    let power = 1
    for (let index = 0; index < b; index += 1) {
        power = multiply(power, a)
    }
    return power
}
console.log(exponentiate(4, 3))


// KATA 04
function factorial (a) {
    let total = 1
    let num = a
    for (let index = a; index > 0; index -= 1) {
        total = multiply(total, num)
        num -= 1
    }
    return total
}
console.log(factorial(5))