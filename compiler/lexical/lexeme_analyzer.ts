import { availableLexemes, Lexeme } from "./lexeme";

export function lexemeAnalyse(input: string) {
  return extractNextLexeme(input);
}

// extract lexemes one by one until finish the hole string
// add the next lexeme to current lexemes
export function extractNextLexeme(
  input: string,
  currentLexemes: Lexeme[] = []
): Lexeme[] {
  input = input.trim();

  if (input == "") return currentLexemes;

  for (const lexeme of availableLexemes) {
    const reg = RegExp("^" + lexeme);

    const match = input.match(reg);

    //when find lexeme add it to initial lexemes and start finding a new lexeme
    if (match) {
      const token = new Lexeme(lexeme, match[0]);

      return extractNextLexeme(input.replace(reg, ""), [
        ...currentLexemes,
        token,
      ]);
    }
  }

  throw Error("invalid input lexeme");
}
