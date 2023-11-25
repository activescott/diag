import { createDiag } from "./index"
import createDebug from "debug"

/* eslint-disable no-magic-numbers */

it("should have debug,info,warn,error,assert methods", () => {
  const diag = createDiag("test")
  expect(diag.debug).toBeInstanceOf(Function)
  expect(diag.info).toBeInstanceOf(Function)
  expect(diag.warn).toBeInstanceOf(Function)
  expect(diag.error).toBeInstanceOf(Function)
  expect(diag.assert).toBeInstanceOf(Function)
})

beforeEach(() => {
  delete process.env.DEBUG
})

afterEach(() => {
  delete process.env.DEBUG
})

it("enabled loggers should log", () => {
  process.env.DEBUG = "mytest:*"

  // because debug seems to cache this from the first import
  createDebug.enable(process.env.DEBUG)

  const diag = createDiag("mytest")
  const spy = jest.spyOn(process.stderr, "write")

  diag.debug("debug msg")
  diag.info("info msg")
  diag.warn("warn msg")
  diag.error("error msg")
  diag.assert(false, "assert msg")
  expect(spy).toHaveBeenCalledTimes(5)
})

it("disabled methods should NOT log", () => {
  process.env.DEBUG = "notmytest:*"

  // because debug seems to cache this from the first import
  createDebug.enable(process.env.DEBUG)

  const diag = createDiag("mytest")
  const spy = jest.spyOn(process.stderr, "write")

  diag.debug("debug msg")
  diag.info("info msg")
  diag.warn("warn msg")
  diag.error("error msg")
  diag.assert(false, "assert msg")

  expect(spy).toHaveBeenCalledTimes(0)
})
