const inquier = require("inquirer");

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
  .catch((error)=>{
    console.log(error);
    console.log("Error!")
  });

  class SVG{
    constructor(){
      
    }
  }
