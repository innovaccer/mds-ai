import type { Config } from "jest";
import path from "path";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/__mocks__/fileMock.js",
  },
  preset: "ts-jest",
  roots: [path.resolve(__dirname, "./")],
  setupFilesAfterEnv: ["./setupTests.ts"],
  testEnvironment: "jsdom",
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  verbose: true,
};

export default config;
