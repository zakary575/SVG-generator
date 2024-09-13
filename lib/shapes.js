class Shape {
  shapeFormat;
  textFormat;
  text;
  textColor;
  shapeColor;

  render() {
    return this.renderShape();
  }

  renderSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
    ${this.shapeFormat}
    ${this.textFormat}
  </svg>`;
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
    this.shapeFormat = this.renderShape();
  }
  setText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
    this.textFormat = this.renderText();
  }
 
  renderShape() {
    console.log("Shape should not call this method only children");
  }
  renderText() {
    console.log("Shape should not call this method only children");
  }
}

class Circle extends Shape {
  renderShape() {
    return `<circle cy="100" cx="150" r="100" fill="${this.shapeColor}" />`;
  }
  renderText() {
    return `<text x="65" y="125" fill="${this.textColor}" font-size="100">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  renderShape() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
  renderText() {
    return `<text x="100" y="150" fill="${this.textColor}" font-size="60">${this.text}</text>`;
  }
}

class Square extends Shape {
  renderShape() {
    return `<polygon points="50,0 50,200 250,200 250,0"  fill="${this.shapeColor}" />`;
  }
  renderText() {
    return `<text x="65" y="130" fill="${this.textColor}" font-size="60">${this.text}</text>`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
