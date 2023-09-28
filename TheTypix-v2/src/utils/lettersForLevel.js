import { LETTERS } from "./constants";

export function lettersForLevel(actualLevel) {
  switch (actualLevel) {
    case 1:
      return LETTERS.substring(0, 27);
    case 2:
      return LETTERS.substring(0, 54);
    case 3:
      return LETTERS.substring(0, 64);
    case 4:
      return LETTERS.substring(0, 79);
    case 5:
      return LETTERS.substring(0, 94);
    default:
      throw new Error("Error splicing array LETTERS");
  }
}
