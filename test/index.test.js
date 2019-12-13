import "jest-specific-snapshot";
import path from "path";
import fs from "fs";
import { transformFileSync } from "@babel/core";
import plugin from "../src";

describe("Add propType doc to react components", () => {
  const fixturesDir = path.join(__dirname, "fixtures");
  fs.readdirSync(fixturesDir).map(caseName => {
    // Ignore macOS directory files
    if (caseName.indexOf(".DS_Store") < 0) {
      it(`should ${caseName.split("-").join(" ")}`, () => {
        const fixtureDir = path.join(fixturesDir, caseName);
        const inputPath = path.join(fixtureDir, "input.js");
        const outputPath = path.join(fixtureDir, "output.js");
        const options = {
          presets: ["@babel/env", "@babel/flow", "@babel/react"],
          plugins: [
            [
              plugin,
              {
                DOC_GEN_COLLECTION_NAME: "STORYBOOK_REACT_CLASSES",
                handlers: ["react-docgen-deprecation-handler"]
              }
            ],
            "@babel/plugin-proposal-class-properties"
          ],
          babelrc: false
        };

        const output = transformFileSync(inputPath, options).code;
        expect(output).toMatchSpecificSnapshot(outputPath);
      });
    }
  });
});
