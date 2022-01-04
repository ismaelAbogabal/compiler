export enum LexemeType {
  Plus = "\\+",
  Minus = "\\-",
  Multi = "\\*",
  Mod = "\\%",
  Div = "\\/",
  Pow = "\\*\\*",
  Num = "\\d+",
  Bracket = "\\(",
  EndBracket = "\\)",
}

export class Lexeme {
  constructor(public type: LexemeType, public value: string) {}

  get asNumber(): number {
    return +this.value;
  }
}

export const availableLexemes = [
  LexemeType.Plus,
  LexemeType.Minus,
  LexemeType.Pow,
  LexemeType.Multi,
  LexemeType.Div,
  LexemeType.Mod,
  LexemeType.Num,
  LexemeType.Bracket,
  LexemeType.EndBracket,
];
