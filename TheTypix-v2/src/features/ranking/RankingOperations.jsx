import FormRowHorizontal from "../../ui/FormRowHorizontal";
import { useSettings } from "../context/SettingsContext";

function RankingOperations() {
  const { ranking } = useSettings();

  return (
    <>
      {ranking.map((rank) => (
        <FormRowHorizontal key={rank?.created_at} label={rank?.name}>
          <span>{rank?.totalPoints}</span>
        </FormRowHorizontal>
      ))}
    </>
  );
}

export default RankingOperations;
