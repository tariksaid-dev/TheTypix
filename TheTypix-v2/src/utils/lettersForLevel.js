import { LETTERS } from "./constants";

export function lettersForLevel(actualLevel) {
  switch (actualLevel) {
    case 1:
      return LETTERS.substring(0, 27);
    case 2:
      return LETTERS.substring(0, 54);
    default:
      throw new Error("Error splicing array LETTERS");
  }
}
