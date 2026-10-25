
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

const calculateArea = (length = 5, width = 4) => length * width;

console.log("Standard Function Area: " + rectangleArea());
console.log("Arrow Function Area: " + calculateArea(10, 3));

if (true) {
    let blockVar = "Hello";
    console.log("Inside block: " + blockVar);
}

try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error: " + error.name + ": blockVar is not defined");
}
