import createDebugStdErr, { Debugger } from "debug"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyParam = any

interface Diag {
  debug: (formatter: AnyParam, ...args: AnyParam[]) => void
  info: (formatter: AnyParam, ...args: AnyParam[]) => void
  warn: (formatter: AnyParam, ...args: AnyParam[]) => void
  error: (formatter: AnyParam, ...args: AnyParam[]) => void
  assert: (value: boolean, messageIfFalse: string) => void
}

function createDebugStdout(name: string): Debugger {
  const debug = createDebugStdErr(name)
  // eslint-disable-next-line no-console
  debug.log = console.log.bind(console)
  return debug
}

export function createDiag(name: string): Diag {
  const debug = createDebugStdout(`${name}:debug`),
    info = createDebugStdout(`${name}:info`),
    warn = createDebugStdErr(`${name}:warn`),
    error = createDebugStdErr(`${name}:error`)

  return {
    debug: debug,
    info,
    warn,
    error,
    assert: (value: boolean, messageIfFalse: string) => {
      if (!value) {
        error(messageIfFalse)
      }
    },
  }
}
