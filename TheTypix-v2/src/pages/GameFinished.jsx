import { useSettings } from "../features/context/SettingsContext";
import Ranking from "../features/ranking/Ranking";
import UserStats from "../features/ranking/UserStats";
import Button from "../ui/Button";

function GameFinished() {
  const { dispatch } = useSettings();

  function handleClick() {
    dispatch({ type: "restart" });
  }

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
