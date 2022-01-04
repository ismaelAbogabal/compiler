import { Lexeme, LexemeType } from "./lexical/lexeme";

export function calc(postFix: Lexeme[]): number {
  var stack: number[] = [];

  for (var p of postFix) {
    if (p.type === LexemeType.Num) {
      stack.push(p.asNumber);
    } else {
      const last1 = stack.pop()!;
      const last2 = stack.pop()!;

      switch (p.type) {
        case LexemeType.Plus:
          stack.push(last2 + last1);
          break;
        case LexemeType.Minus:
          stack.push(last2 - last1);
          break;
        case LexemeType.Multi:
          stack.push(last2 * last1);
          break;
        case LexemeType.Div:
          stack.push(last2 / last1);
          break;
        case LexemeType.Mod:
          stack.push(last2 % last1);
          break;
        case LexemeType.Pow:
          stack.push(last2 ** last1);
          break;
      }
    }
  }

  if (stack.length != 1) throw "invalid lexemes sequence";
  return stack[0];
}
