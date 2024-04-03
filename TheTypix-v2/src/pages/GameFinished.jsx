import { useEffect } from "react";
import { useSettings } from "../features/context/SettingsContext";
import Ranking from "../features/ranking/Ranking";
import UserStats from "../features/ranking/UserStats";
import Button from "../ui/Button";
import { getRanking, updateRanking } from "../services/apiRanking";

function GameFinished() {
  const { name, totalPoints, errors, level, correctAnswers, lives, dispatch } =
    useSettings();

  function handleClick() {
    dispatch({ type: "restart" });
  }

  useEffect(() => {
    async function fetchRanking() {
      await updateRanking({
        name,
        totalPoints,
        errors,
        level,
        correctAnswers,
        livesRemaining: lives,
      });
      const data = await getRanking();
      dispatch({ type: "setRanking", payload: data });
    }
    fetchRanking();
  }, [correctAnswers, errors, level, lives, name, totalPoints, dispatch]);

  return (
    // hacer un layout y unos estilos como dios manda, intercambiar por fragmento y usar un main?
    <>
      <div className="flex gap-10 overflow-y-scroll">
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
