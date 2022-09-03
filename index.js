//Mathematical Shapes: a JavaScript program to find the diagonal of a square
function findDiagonal(s)
{
    return Math.sqrt(2) * s;
}
var S = 6.4;
console.log(findDiagonal(S).toFixed(4))

// Mathematical Shapes: a JavaScript program to find the area of a triangle
const side1 = 5; 
const side2 = 6; 
const side3 = 7; 
const s = (side1 + side2 + side3)/2;
const area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

// Mathematical Shapes: a JavaScript program to find the circumference and surface area of a circle
function circumference(radius) {
    let c = 0;
    let area = 0;
    c = 2 * Math.PI * radius;
    area = Math.PI * radius ** 2;
    return `Then circle radius ${radius}: area ${area}, circumference ${c}.`;
}
console.log(circumference(4));