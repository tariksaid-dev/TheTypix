import { useEffect } from "react";
import { useSettings } from "../features/context/SettingsContext";
import Ranking from "../features/ranking/Ranking";
import UserStats from "../features/ranking/UserStats";
import Button from "../ui/Button";
import { updateRanking } from "../services/apiRanking";

function GameFinished() {
  const { name, totalPoints, errors, level, correctAnswers, lives, dispatch } =
    useSettings();

  function handleClick() {
    dispatch({ type: "restart" });
  }

  useEffect(() => {
    updateRanking({
      name,
      totalPoints,
      errors,
      level,
      correctAnswers,
      livesRemaining: lives,
    });
  }, [name, totalPoints, correctAnswers, errors, level, lives]);

  return (
    <>
      <div className="flex gap-10">
        <UserStats />
        <Ranking />
      </div>
      <Button type="primarymt" onClick={handleClick}>
        Play again!
      </Button>
    </>
  );
}

export default GameFinished;
