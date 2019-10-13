/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogLevel } from "./LogLevel"

export abstract class Diag {
  protected constructor(
    protected readonly name: string,
    protected readonly level: LogLevel
  ) {}

  public log(message: string, ...optionalParams: any[]): void {
    if (this.level > LogLevel.NONE) {
      this.logImp(LogLevel.NONE, message, ...optionalParams)
    }
  }

  public debug(message: string, ...optionalParams: any[]): void {
    if (this.level >= LogLevel.DEBUG) {
      this.logImp(LogLevel.DEBUG, message, ...optionalParams)
    }
  }

  public info(message: string, ...optionalParams: any[]): void {
    if (this.level >= LogLevel.INFO) {
      this.logImp(LogLevel.INFO, message, ...optionalParams)
    }
  }

  public warn(message: string, ...optionalParams: any[]): void {
    if (this.level >= LogLevel.WARN) {
      this.logImp(LogLevel.WARN, message, ...optionalParams)
    }
  }

  public error(message: string, ...optionalParams: any[]): void {
    if (this.level >= LogLevel.ERROR) {
      this.logImp(LogLevel.ERROR, message, ...optionalParams)
    }
  }

  public assert(
    test: boolean,
    message: string,
    ...optionalParams: any[]
  ): void {
    if (!test && this.level >= LogLevel.ERROR) {
      this.logImp(LogLevel.ERROR, message, ...optionalParams)
    }
  }

  public abstract createChild(name: string): Diag

  protected abstract logImp(
    level: LogLevel,
    message: string,
    ...optionalParams: any[]
  ): void
}
