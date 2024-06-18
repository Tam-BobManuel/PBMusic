import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: 'ts-jest',
  testEnvironment: "node",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx",
    "json",
    "node"
  ],
};

export default config;
