const shapes = require("./shapes.js");

describe("Triangle", () => {
  it("should return a string for the SVG with the polygon points for a triangle and a fill of blue", () => {
    const shape = new shapes.Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("Square", () => {
  it("should return a string for the SVG with the polygon points square and a fill of blue", () => {
    const shape = new shapes.Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="50,0 50,200 250,200 250,0"  fill="blue" />'
    );
  });
});

describe("Circle", () => {
  it("should return a string for the SVG for a circle and fill of blue", () => {
    const shape = new shapes.Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<circle cy="100" cx="150" r="100" fill="blue" />'
    );
  });
});
