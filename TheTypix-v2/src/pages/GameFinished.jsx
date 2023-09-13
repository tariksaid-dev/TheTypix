import { useSettings } from "../features/context/SettingsContext";
import FormRowHorizontal from "../ui/FormRowHorizontal";

function GameFinished() {
  const { name, level, points, errors } = useSettings();

  return (
    <div className="border border-solid border-gray-500 py-10 px-16 bg-gray-900">
      <FormRowHorizontal label="Name">
        <span type="text" id="name">
          {name ? `${name}` : "Your name"}
        </span>
      </FormRowHorizontal>

      <FormRowHorizontal label="Level played">
        <span type="text" id="name">
          {level ? `${level}` : "Your level"}
        </span>
      </FormRowHorizontal>

      <FormRowHorizontal label="Points">
        <span type="text" id="name">
          {points}
        </span>
      </FormRowHorizontal>

      <FormRowHorizontal label="Errors">
        <span type="text" id="name">
          {errors}
        </span>
      </FormRowHorizontal>
    </div>
  );
}

export default GameFinished;
