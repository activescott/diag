import { LogLevel } from "../src/"
import { MockDiagImp } from "./MockDiagImp"

describe("Diag", () => {
  interface MatrixRow {
    logLevel: LogLevel
    methodName: string
    times: number
  }

  function createMatrixRows(
    logLevel: LogLevel,
    logCount: number,
    debugCount: number,
    infoCount: number,
    warnCount: number,
    errorCount: number
  ): MatrixRow[] {
    return [
      {
        logLevel,
        methodName: "log",
        times: logCount
      },
      {
        logLevel,
        methodName: "debug",
        times: debugCount
      },
      {
        logLevel,
        methodName: "info",
        times: infoCount
      },
      {
        logLevel,
        methodName: "warn",
        times: warnCount
      },
      {
        logLevel,
        methodName: "error",
        times: errorCount
      }
    ]
  }

  const matrix: MatrixRow[] = [
    ...createMatrixRows(LogLevel.NONE, 0, 0, 0, 0, 0),
    ...createMatrixRows(LogLevel.ERROR, 1, 0, 0, 0, 1),
    ...createMatrixRows(LogLevel.WARN, 1, 0, 0, 1, 1),
    ...createMatrixRows(LogLevel.INFO, 1, 0, 1, 1, 1),
    ...createMatrixRows(LogLevel.DEBUG, 1, 1, 1, 1, 1)
  ]

  it.each(matrix)("logImp should be called for %o", row => {
    const diag = new MockDiagImp("the name", row.logLevel)
    const logImpSpy = jest.spyOn(diag, "logImp")
    diag[row.methodName]("foo")
    expect(logImpSpy).toHaveBeenCalledTimes(row.times)
  })
})
