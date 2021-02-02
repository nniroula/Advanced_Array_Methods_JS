// Basic functions in js
/*
function myName(){
    console.log("Hello my name is Nabin");
}
myName();
*/
//function expression
// we assign a function to a variable and call that variable as a function.
/*
const myName2 = function(){
    console.log("Hello my name is Nabin");
}
myName2();
*/
/*
    Functions can be treated as any values in js. Let's write some math functions, put them in 
    an array, and call them using that array.
*/
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a*b;
}
//put them in an array
const funcArray = [add, subtract, multiply];
// To call multiply function, do this funcArray[index]() and in parenthesis pass in the arguments
funcArray[2](2, 4);
//console.log(funcArray[2](2, 4)); // to console out the output
