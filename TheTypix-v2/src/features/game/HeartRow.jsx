import { useSettings } from "../context/SettingsContext";
import Heart from "./Heart";

function HeartRow() {
  const { lives } = useSettings();

  return (
    <div className="flex">
      {Array.from({ length: lives }, (_, index) => (
        <Heart key={index} />
      ))}
    </div>
  );
}

export default HeartRow;
