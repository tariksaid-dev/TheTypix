import { TIME_OFFSET } from "../../utils/constants";
import { lettersForLevel } from "../../utils/lettersForLevel";
import { useSettings } from "../context/SettingsContext";
import { useEffect } from "react";
import Letters from "./Letters";

function GameScreen() {
  const { level, letterList, dispatch } = useSettings();
  const lettersFilteredByLevel = lettersForLevel(level);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomLetter = lettersFilteredByLevel.charAt(
        Math.floor(Math.random() * lettersFilteredByLevel.length)
      );

      dispatch({
        type: "addLetter",
        payload: (
          <Letters
            key={Date.now()}
            randomLetter={randomLetter}
            onRemove={() => dispatch({ type: "removeLetter" })}
            onLetterMissed={() => dispatch({ type: "liveDown" })}
          />
        ),
      });
    }, TIME_OFFSET);
    return () => clearInterval(intervalId);
  }, [dispatch, lettersFilteredByLevel]);

  useEffect(() => {
    function handleKeyPress(e) {
      const keyPressed = e.key;
      if (letterList.some((el) => el.props.randomLetter !== keyPressed))
        dispatch({ type: "errorUp" });
      const filteredLetters = letterList.filter((letter) => {
        if (letter.props.randomLetter === keyPressed)
          dispatch({ type: "pointUp" });
        return letter.props.randomLetter !== keyPressed;
      });
      dispatch({ type: "setLetters", payload: filteredLetters });
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [letterList, dispatch]);

  return <>{letterList}</>;
}

export default GameScreen;
