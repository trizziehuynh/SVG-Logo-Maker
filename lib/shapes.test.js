const { Circle, Triangle, Square } = require("./shapes");

//Testing Circle
describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="blue" />'
    );
  });
});

//Testing Square
describe("Square", () => {
  test("renders correctly", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<rect x="90" y="40" width="120" height="120" fill="green" />'
    );
  });
});

//Testing Triangle
describe("Triangle", () => {
  test("renders correctly", () => {
    const shape = new Triangle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="yellow" />'
    );
  });
});
