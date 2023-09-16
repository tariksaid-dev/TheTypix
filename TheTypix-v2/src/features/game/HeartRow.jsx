import { useSettings } from "../context/SettingsContext";
import Heart from "./Heart";

function HeartRow() {
  const { lives } = useSettings();

  return (
    <div className="flex bg-black">
      {Array.from({ length: lives }, (_, index) => (
        <Heart key={index} />
      ))}
    </div>
  );
}

export default HeartRow;
