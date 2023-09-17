import Ranking from "../features/ranking/Ranking";
import UserStats from "../features/ranking/UserStats";

function GameFinished() {
  return (
    <div className="flex gap-10">
      <UserStats />
      <Ranking />
    </div>
  );
}

export default GameFinished;
