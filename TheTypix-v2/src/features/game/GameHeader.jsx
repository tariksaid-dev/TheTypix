import { useParams, useSearchParams } from "react-router-dom";
import HeartRow from "./HeartRow";

function GameHeader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { userName } = useParams();

  return (
    <div className="bg-slate-500 flex items-center pt-4 ">
      <HeartRow />
      <span>{userName}</span>
    </div>
  );
}

export default GameHeader;
