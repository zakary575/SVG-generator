const render = require("./shapes");

describe("generate", () => {
  describe("render", () => {
    it("should generate circle", () => {
      const answers = {
        text: "",
        textColor: "",
        shape: "Circle",
        shapeColor: "",
      };
      expect(
        render.render(answers).toEqual(
          <svg xmlns="http://www.w3.org/2000/svg" height="300" width="200">
            <circle cy="100" cx="100" r="100" fill="" />
            <text x="20" y="125" fill="" font-size="100"></text>
          </svg>
        )
      );
    });
  });
});

describe("generate", () => {
  describe("render", () => {
    it("should generate circle with three letters in it", () => {
      const answers = {
        text: "ZSJ",
        textColor: "",
        shape: "Circle",
        shapeColor: "",
      };
      expect(
        render.render(answers).toEqual(
          <svg xmlns="http://www.w3.org/2000/svg" height="300" width="200">
            <circle cy="100" cx="100" r="100" fill="" />
            <text x="20" y="125" fill="" font-size="100">
              ZSJ
            </text>
          </svg>
        )
      );
    });
  });
});

describe("generate", () => {
    describe("render", () => {
      it("should generate circle with three letters in it that are black", () => {
        const answers = {
          text: "ZSJ",
          textColor: "black",
          shape: "Circle",
          shapeColor: "",
        };
        expect(
          render.render(answers).toEqual(
            <svg xmlns="http://www.w3.org/2000/svg" height="300" width="200">
              <circle cy="100" cx="100" r="100" fill="" />
              <text x="20" y="125" fill="black" font-size="100">
                ZSJ
              </text>
            </svg>
          )
        );
      });
    });
  });

  describe("generate", () => {
    describe("render", () => {
      it("should generate a purple circle with three letters in it that are black", () => {
        const answers = {
          text: "ZSJ",
          textColor: "black",
          shape: "Circle",
          shapeColor: "purple",
        };
        expect(
          render.render(answers).toEqual(
            <svg xmlns="http://www.w3.org/2000/svg" height="300" width="200">
              <circle cy="100" cx="100" r="100" fill="purple" />
              <text x="20" y="125" fill="black" font-size="100">
                ZSJ
              </text>
            </svg>
          )
        );
      });
    });
  });
  
