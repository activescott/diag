import { Diag, LogLevel } from "../src/"

export class MockDiagImp extends Diag {
  public constructor(name: string, level: LogLevel) {
    super(name, level)
  }

  public createChild(name: string): Diag {
    return new MockDiagImp(`${this.name}.${name}`, this.level)
  }

  /* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
  public logImp(
    level: LogLevel,
    message: string,
    ...optionalParams: any[]
  ): void {
    // no op
  }
}
