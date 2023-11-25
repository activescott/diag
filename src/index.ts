import createDebug from "debug"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyParam = any

interface Diag {
  debug: (formatter: AnyParam, ...args: AnyParam[]) => void
  info: (formatter: AnyParam, ...args: AnyParam[]) => void
  warn: (formatter: AnyParam, ...args: AnyParam[]) => void
  error: (formatter: AnyParam, ...args: AnyParam[]) => void
  assert: (value: boolean, messageIfFalse: string) => void
}

export function createDiag(name: string): Diag {
  const debug = createDebug(`${name}:debug`),
    info = createDebug(`${name}:info`),
    warn = createDebug(`${name}:warn`),
    error = createDebug(`${name}:error`)

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
