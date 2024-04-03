import FormRowHorizontal from "../../ui/FormRowHorizontal";
import { useSettings } from "../context/SettingsContext";

function RankingOperations() {
  const { ranking } = useSettings();

  // en ranking tengo la id necesaria para filtrar alrededor de mi usuario, pero como le he hecho un select ordenados por puntos no puedo simplemente seleccionar al último. lo que sí tengo es el nombre que debe ser único para comparar

  return (
    <>
      {ranking?.map((rank) => (
        <FormRowHorizontal key={rank?.created_at} label={rank?.name}>
          <span>{rank?.totalPoints}</span>
        </FormRowHorizontal>
      ))}
    </>
  );
}

export default RankingOperations;
