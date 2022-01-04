import { Lexeme } from "../lexical/lexeme";
import { Equation } from "./grammar";

export function extractPostFix(input: Lexeme[]): Lexeme[] {
  return Equation.parseLexemes(input) ?? [];
}
