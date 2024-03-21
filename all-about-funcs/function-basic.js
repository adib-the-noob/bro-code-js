let area;
let width;
let height;


width = window.prompt("Enter the width of the rectangle: ");
height = window.prompt("Enter the height of the rectangle: ");

function getArea(width, height) {
    return width * height;
}

area = getArea(width, height);
console.log("The area of the rectangle is: " + area);