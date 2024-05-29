//.........................................Q# 4.....................................
// Write a function that returns the square of a number.........
function square(number) {
    //return the square of input number 
    return Math.pow(number, 2);
}
//............................Example......................
var inputNumber = 5;
var result = square(inputNumber);
console.log("The square of ".concat(inputNumber, " is ").concat(result));
