const inquier = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { writeFile } = require("fs/promises");

inquier
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the text",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color keyword for the text (OR a hexadecimal number)",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for the logo",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color keyword for the text (OR a hexadecimal number)",
    },
  ])
  .then(({ text, textColor, shape, shapeColor }) => {
    let userShape;

    if (shape == "Circle") {
      userShape = new Circle();
    } else if (shape == "Triangle") {
      userShape = new Triangle();
    } else {
      userShape = new Triangle();
    }

    userShape.setColor(shapeColor);

    const svg = new SVG();
    svg.setText(text, textColor);
    svg.setShape(userShape);
    return writeFile("logo.svg", svg.render());
  })
  .then(() => console.log("The logo is created."))
  .catch((error) => {
    console.log(error);
    console.log("Error!");
  });

// Creating class SVG
class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }
  setText(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  }
  setShape(shape) {
    this.shapeElement = shape.render();
  }
}
