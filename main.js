// My initial answer:
function fizzBuzz() {
for(let i = 1; i <= 100; i++) {
    console.log(i);
    if (
    (i%3 === 0) && (i%5 === 0)) {
        console.log("FizzBuzz");
    }else if (i%3 === 0) {
        console.log("Fizz");
    } else if (
       (i%5 === 0)) {
        console.log("Buzz");
    }
}
}
    fizzBuzz();

// OR
var output = [];
var count = 1;
function fizzBuzz() {
while(count <= 100) {
if (count % 3 === 0 && count % 5 === 0) {
output.push("FizzBuzz");
}
else if (count % 3 === 0) {
output.push("Fizz");
}
else if (count % 5 === 0) {
output.push("Buzz");
}
else {
output.push(count);
}
count++;
}
console.log(output);
}
fizzBuzz();
}
console.log(output);
