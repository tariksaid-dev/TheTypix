import { useState } from "react";
import { LETTERS, TIME_OFFSET } from "../../utils/constants";
import { useEffect } from "react";
import Letters from "./Letters";
import { useSettings } from "../context/SettingsContext";
import { lettersForLevel } from "../../utils/lettersForLevel";

function GameScreen() {
  const [letterList, setLetterList] = useState([]);
  const { level, dispatch } = useSettings();
  const lettersFilteredByLevel = lettersForLevel(level);

  function handleRemoveLetter() {
    setLetterList((prevLetters) => prevLetters.slice(1));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomLetter = lettersFilteredByLevel.charAt(
        Math.floor(Math.random() * LETTERS.length)
      );
      console.log("pop", randomLetter);
      setLetterList([
        ...letterList,
        <Letters
          key={Date.now()}
          randomLetter={randomLetter}
          onRemove={() => handleRemoveLetter()}
        />,
      ]);
      console.log(...letterList);
    }, TIME_OFFSET);
    return () => clearInterval(intervalId);
  }, [letterList, lettersFilteredByLevel]);

  useEffect(() => {
    function handleKeyPress(e) {
      const keyPressed = e.key;
      const filteredLetters = letterList.filter((letter) => {
        if (letter.props.randomLetter === keyPressed)
          dispatch({ type: "pointUp" });

        return letter.props.randomLetter !== keyPressed;
      });
      setLetterList(filteredLetters);
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [letterList, dispatch]);

  return <>{letterList}</>;
}

export default GameScreen;
