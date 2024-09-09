const generateCircle = ({ text, textColor, shape, shapeColor }) => {
  let circle = `<svg xmlns="http://www.w3.org/2000/svg" height="300" width="200">
    <circle cy="100" cx="100" r="100" fill="${shapeColor}" />
    <text x="20" y="125" fill="${textColor}" font-size="100">
      ${text}
    </text>
  </svg>`;
  return circle;
};

const generateTriangle = ({ text, textColor, shape, shapeColor }) => {
  let triangle = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,10 190,190 10,190" fill="${shapeColor}"/>
     <text x="50" y="150" fill="${textColor}" font-size="60">${text}</text>
    </svg>`;
  return triangle;
};

const generateSquare = ({ text, textColor, shape, shapeColor }) => {
  let square = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="10,10 10,190 190,190 190,10" fill="${shapeColor}"/>
     <text x="20" y="130" fill="${textColor}" font-size="100">${text}</text>
    </svg>`;
  return square;
};

const render = ({ text, textColor, shape, shapeColor }) => {
  let svg = "";
  switch (shape) {
    case "Circle":
      svg = generateCircle({ text, textColor, shape, shapeColor });
      break;
    case "Triangle":
      svg = generateTriangle({ text, textColor, shape, shapeColor });
      break;
    case "Square":
      svg = generateSquare({ text, textColor, shape, shapeColor });
      break;
    default:
      console.log("Shape not implmented");
  }
  return svg;
};

module.exports ={
    render
}
