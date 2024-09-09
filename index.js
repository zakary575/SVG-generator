const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const fs = require("fs");
const render = require("./lib/shapes");

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
    console.log(answers);
    svg = render.render(answers);

    fs.writeFile("logo.svg", svg, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  });
