/*eslint-env node*/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.cjs.json",
    },
  },
  collectCoverageFrom: ["src/**/*.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist"],
  resetMocks: true,
  restoreMocks: true,
}
