/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogLevel } from "./LogLevel"
import { Diag } from "./Diag"

declare const console: NodeConsole

/**
 * A default implementation of @see Diag that logs to the global @see console object.
 */
export class DiagConsoleImp extends Diag {
  public constructor(name: string, level: LogLevel) {
    super(name, level)
  }

  public createChild(name: string): Diag {
    return new DiagConsoleImp(this.name + "." + name, this.level)
  }

  protected logImp(
    level: LogLevel,
    message: string,
    ...optionalParams: any[]
  ): void {
    const methodMap = {}
    methodMap[LogLevel.DEBUG] = console.debug
    methodMap[LogLevel.ERROR] = console.error
    methodMap[LogLevel.INFO] = console.info
    methodMap[LogLevel.WARN] = console.warn

    const logMethod = methodMap[level]

    if (logMethod) {
      logMethod(
        level.toString() + " " + this.name + ":" + message,
        ...optionalParams
      )
    }
  }
}

interface NodeConsole {
  assert(value: any, message?: string, ...optionalParams: any[]): void
  debug(message?: any, ...optionalParams: any[]): void
  error(message?: any, ...optionalParams: any[]): void
  info(message?: any, ...optionalParams: any[]): void
  log(message?: any, ...optionalParams: any[]): void
  warn(message?: any, ...optionalParams: any[]): void
}
