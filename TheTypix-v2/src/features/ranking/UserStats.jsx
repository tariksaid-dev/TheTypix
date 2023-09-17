import { useSettings } from "../context/SettingsContext";
import FormRowHorizontal from "../../ui/FormRowHorizontal";

function UserStats() {
  const { name, level, errors, lives, totalPoints, correctAnswers } =
    useSettings();

  return (
    <div className="border border-solid border-gray-500 py-10 px-16 bg-gray-900">
      <FormRowHorizontal label="Name">
        <span type="text" id="name">
          {name ? `${name}` : "Your name"}
        </span>
      </FormRowHorizontal>

      <FormRowHorizontal label="Level played">
        <span type="text" id="level">
          {level ? `${level}` : "Your level"}
        </span>
      </FormRowHorizontal>

      <FormRowHorizontal label="Correct answers">
        <span type="text" id="correctAnswers">
          {correctAnswers}
        </span>
      </FormRowHorizontal>

      <FormRowHorizontal label="Errors">
        <span type="text" id="errors">
          {errors}
        </span>
      </FormRowHorizontal>

      <FormRowHorizontal label="Lives remaining">
        <span type="text" id="lives">
          {lives}
        </span>
      </FormRowHorizontal>

      <FormRowHorizontal label="Total points">
        <span type="text" id="total-points">
          {totalPoints}
        </span>
      </FormRowHorizontal>
    </div>
  );
}

export default UserStats;
