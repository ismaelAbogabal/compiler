import { calc } from "./compiler/calc";
import { lexemeAnalyse } from "./compiler/lexical/lexeme_analyzer";
import { extractPostFix } from "./compiler/parser/parser_analyzer";

function testEquation(equation: string) {
  console.log("input :", equation);

  const lexemes = lexemeAnalyse(equation);
  console.log("lexeme analyser output :", lexemes);

  const postFix = extractPostFix(lexemes);
  console.log("parser postfix output :", postFix) ;

  const value = calc(postFix);
  console.log("calculation output:", value);
}

testEquation("5 % 3 * 2");
testEquation("2 * 5 % 3");
