import { DiagConsoleImp } from "../src/"
import { LogLevel } from "../src/LogLevel"
import { Diag } from "../src/"

declare const console: unknown

function expectDebugToBeCalled(diag: Diag, times = 1) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spy = jest.spyOn(console as any, "debug")
  diag.debug("foo")
  expect(spy).toHaveBeenCalledTimes(times)
  spy.mockRestore()
}

it("should call logImp", () => {
  const diag = new DiagConsoleImp("foo", LogLevel.DEBUG)
  expectDebugToBeCalled(diag)
})

it("should create child", () => {
  const diag = new DiagConsoleImp("foo", LogLevel.DEBUG)
  expectDebugToBeCalled(diag.createChild("child"))
})

it("should call assert", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spy = jest.spyOn(console as any, "error")
  const d = new DiagConsoleImp("foo", LogLevel.ERROR)
  d.assert(false, "foo")
  expect(spy).toHaveBeenCalledTimes(1)
})
