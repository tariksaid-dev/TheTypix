import FormRowHorizontal from "../../ui/FormRowHorizontal";
import { useSettings } from "../context/SettingsContext";

function RankingOperations() {
  const { ranking } = useSettings();

  console.log("ranking: ", ranking);
  // Just for dev purposes, id cant be equal at db level
  // const filteredRanking = ranking.filter((rank) => {
  //   const x = [];
  //   if (x.some((el) => el?.id !== rank?.id)) {
  //     x.push(rank);
  //     console.log("true");
  //   }

  //   return x;
  // });

  // console.log("filteredranking: ", filteredRanking);

  return (
    <>
      {ranking.map((rank) => (
        <FormRowHorizontal key={rank?.created_at} label={rank?.name}>
          <span>{rank?.points}</span>
        </FormRowHorizontal>
      ))}
    </>
  );
}

export default RankingOperations;
