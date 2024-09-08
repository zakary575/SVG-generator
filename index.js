const inquirer = require("inquirer");




inquirer
.prompt([
        {
            type: "input-maxlength",
            name: "text",
            message: "Enter up to three characters",
            maxlegth: 3,
          },
          {
            type: "input",
            name: "text-color",
            message: "Enter a color for your text",
          },
          {
            type: "list",
            name: "shape",
            message: "Pick a shape",
            choices: ['Circle',"Triangle","Square"],

          },
          {
            type: "input",
            name: "shape-color",
            message: "Enter a shape color",
          },
]
)