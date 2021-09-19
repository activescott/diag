/* eslint-disable no-magic-numbers */
export enum LogLevel {
  NONE = 0,
  ERROR = 1,
  WARN = 2,
  INFO = 3,
  DEBUG = 4,
}

export function logLevelString(level: LogLevel): string {
  const result: string = String(LogLevel[level]).toLowerCase()
  return result
}
