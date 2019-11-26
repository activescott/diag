import { logLevelString, LogLevel } from "../src"

it("should convert debug to string", async () => {
  const result = logLevelString(LogLevel.DEBUG)
  expect(result).toStrictEqual("debug")
})
