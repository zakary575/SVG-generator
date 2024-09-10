class Shape {
  constructor({ shapeFormat, text, textColor, shapeColor }) {
    this.shapeFormat = shapeFormat;
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
   ${this.shapeFormat}
  </svg>`;
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
}

class Circle extends Shape {
  constructor({ text, textColor, shapeColor }) {
    const shapeFormat = `<circle cy="100" cx="150" r='100' fill="${this.shapeColor}" />
        <text x="65" y="125" fill="${this.textColor}" font-size="100">${this.text}</text>`;
    super({ shapeFormat, text, textColor, shapeColor });
  }
}

class Triangle extends Shape {
  constructor({ text, textColor, shapeColor }) {
    const shapeFormat = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="100" y="150" fill="${this.textColor}" font-size="60">${this.text}</text>`;
    super({shapeFormat,text,textColor,shapeColor})
  }
}

class Square extends Shape {
    constructor({ text, textColor, shapeColor }) {
      const shapeFormat = `<polygon points="50,0 50,200 250,200 250,0"  fill="${this.shapeColor}" />
          <text x="65" y="130" fill="${this.textColor}" font-size="60">${this.text}</text>`;
      super({shapeFormat,text,textColor,shapeColor})
    }
  }

module.exports = {
  Circle,
  Triangle,
  Square
};
