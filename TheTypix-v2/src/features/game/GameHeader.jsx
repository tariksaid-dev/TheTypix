import HeartRow from "./HeartRow";
import Timer from "../../ui/Timer";

function GameHeader() {
  return (
    <div className="bg-slate-500 flex items-center justify-around">
      <HeartRow />
      <Timer />
    </div>
  );
}

export default GameHeader;
