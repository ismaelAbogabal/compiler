/**
 *grammar
 * equ = mEqu + equ {+}
 * equ = mEqu - equ {-}
 * equ => mEqu
 *
 * mEqu => bEqu *  mEqu {*}
 * mEqu => bEqu /  mEqu {/}
 * mEqu => bEqu
 *
 * powEqu => bEqu ** powEqu
 * powEqu => bEqu
 *
 * bEqu => (equ)
 * bEqu => digit
 *
 * digit => 0 {0}
 * digit => 1 {1}
 * digit => 2 {2}
 * digit => 3 {3}
 * digit => 4 {4}
 * digit => 5 {5}
 * digit => 6 {6}
 * digit => 7 {7}
 * digit => 8 {8}
 * digit => 9 {9}
 * digit => ... {...}
 * digit => 99 {99}
 */

import { Lexeme, LexemeType } from "../lexical/lexeme";

abstract class Phrase {
  static parseLexemes(lexemes: Lexeme[]): Lexeme[] | undefined {
    return;
  }
}

export class Equation extends Phrase {
  static parseLexemes(lexemes: Lexeme[]): Lexeme[] | undefined {
    for (var index = 0; index < lexemes.length; index++) {
      const lexeme = lexemes[index];
      if (lexeme.type == LexemeType.Plus || lexeme.type == LexemeType.Minus) {
        const leftEqu = lexemes.slice(0, index);
        const rightEqu = lexemes.slice(index + 1);

        const leftEquation = MultiEquation.parseLexemes(leftEqu);
        const rightEquation = Equation.parseLexemes(rightEqu);

        if (leftEquation && rightEquation)
          return [...leftEquation, ...rightEquation, lexeme];
      }
    }

    return MultiEquation.parseLexemes(lexemes);
  }
}

export class MultiEquation extends Phrase {
  static parseLexemes(lexemes: Lexeme[]): Lexeme[] | undefined {
    for (var index = 0; index < lexemes.length; index++) {
      const lexeme = lexemes[index];
      if (lexeme.type == LexemeType.Multi || lexeme.type == LexemeType.Div) {
        const leftEqu = lexemes.slice(0, index);
        const rightEqu = lexemes.slice(index + 1);

        const leftEquation = MultiEquation.parseLexemes(leftEqu);
        const rightEquation = Equation.parseLexemes(rightEqu);

        if (leftEquation && rightEquation)
          return [...leftEquation, ...rightEquation, lexeme];
      }
    }

    return PowerEquation.parseLexemes(lexemes);
  }
}

export class PowerEquation extends Phrase {
  static parseLexemes(lexemes: Lexeme[]): Lexeme[] | undefined {
    for (var index = 0; index < lexemes.length; index++) {
      const lexeme = lexemes[index];

      if (lexeme.type == LexemeType.Pow) {
        const leftEqu = lexemes.slice(0, index);
        const rightEqu = lexemes.slice(index + 1);

        const leftEquation = MultiEquation.parseLexemes(leftEqu);
        const rightEquation = Equation.parseLexemes(rightEqu);

        if (leftEquation && rightEquation)
          return [...leftEquation, ...rightEquation, lexeme];
      }
    }

    return BracketsEquation.parseLexemes(lexemes);
  }
}

export class BracketsEquation extends Phrase {
  static parseLexemes(lexemes: Lexeme[]): Lexeme[] | undefined {
    if (
      lexemes[0].type == LexemeType.Bracket &&
      lexemes[lexemes.length - 1].type == LexemeType.EndBracket
    ) {
      return Equation.parseLexemes(lexemes.slice(1, -1));
    }

    return Digit.parseLexemes(lexemes);
  }
}

export class Digit extends Phrase {
  static parseLexemes(lexemes: Lexeme[]): Lexeme[] | undefined {
    if (lexemes.length === 1) {
      return lexemes;
    }

    return;
  }
}
