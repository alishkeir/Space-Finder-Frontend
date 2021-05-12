import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["<rootDir>/test", "<rootDir>/src"],
  transform: {
    //^  use 'ts-test' with tsx file
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  //^  take all files which have 'test' or 'spec' in their filename and treat them as a test file
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  //^  what kind of files the test needs
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/services/**",
    "!src/react-app-env.d.ts",
  ],
};

export default config;
