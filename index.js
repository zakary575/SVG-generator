const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const fs = require("fs");
const generate = require("./lib/shapes");

inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

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
    let svg = "";
    switch (answers.shape) {
      case "circle":
        svg = generate.generateCircle(answers);
        break;
      case "triangle":
        svg = generate.generateTriangle(answers);
        break;
      case "Square":
        svg = generate.generateSquare(answers);
        break;
      default:
        console.log("Shape not implmented");
    }

    fs.writeFile("Logo.svg", svg, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md")
    );
  });
