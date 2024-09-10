const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const fs = require("fs");
const shapes = require("./lib/shapes");

inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);
svg = "";

inquirer
  .prompt([
    {
      type: "maxlength-input",
      name: "text",
      message: "Enter up to three characters",
      maxLength: 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color for your text",
    },
    {
      type: "list",
      name: "shape",
      message: "Pick a shape",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a shape color",
    },
  ])
  .then((answers) => {
    let newShape;
    switch (answers.shape) {
      case "Circle":
        newShape = new shapes.Circle(
          answers.text,answers.textColor,answers.ShapeColor
        )
        break;
      case "Triangle":
        newShape = new shapes.Triangle()
        break;
      case "Square":
        newShape = new shapes.Square()
        break;
      default:
        console.log("Shape not implmented");
    }
  

    newShape.setColor(answers.ShapeColor)
    newShape.setText(answers.text)
    newShape.setTextColor(answers.textColor)

    const svg = newShape.render()

    fs.writeFile("logo.svg", svg, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  });
