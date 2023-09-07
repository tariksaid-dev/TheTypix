import { useState } from "react";
import { LETTERS, TIME_OFFSET } from "../../utils/constants";
import { useEffect } from "react";
import Letters from "./Letters";

function Game() {
  const [letterList, setLetterList] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomXPosition = Math.random() * window.innerWidth;
      const maxYPosition = window.innerHeight - 200;
      const randomLetter = LETTERS.charAt(
        Math.floor(Math.random() * LETTERS.length)
      );
      setLetterList([
        ...letterList,
        <Letters
          key={Date.now()}
          randomLetter={randomLetter}
          randomXPosition={randomXPosition}
          maxYPosition={maxYPosition}
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

export default Game;
