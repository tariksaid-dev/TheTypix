import { useState } from "react";
import { LETTERS, TIME_OFFSET } from "../../utils/constants";
import { useEffect } from "react";
import Letters from "./Letters";

function GameScreen() {
  const [letterList, setLetterList] = useState([]);

  function handleRemoveLetter() {
    setLetterList((prevLetters) => prevLetters.slice(1));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomLetter = LETTERS.charAt(
        Math.floor(Math.random() * LETTERS.length)
      );
      setLetterList([
        ...letterList,
        <Letters
          key={Date.now()}
          randomLetter={randomLetter}
          onRemove={() => handleRemoveLetter()}
        />,
      ]);
    }, TIME_OFFSET);
    return () => clearInterval(intervalId);
  }, [letterList]);

  useEffect(() => {
    function handleKeyPress(e) {
      const keyPressed = e.key;
      const filteredLetters = letterList.filter((letter) => {
        return letter.props.randomLetter !== keyPressed;
      });
      setLetterList(filteredLetters);
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [letterList]);

  return <div className="relative w-max h-screen">{letterList}</div>;
}

export default GameScreen;
