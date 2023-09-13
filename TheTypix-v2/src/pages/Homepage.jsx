import { useSettings } from "../features/context/SettingsContext";
import Button from "../ui/Button";
import Title from "../ui/Title";

function Homepage() {
  const { dispatch } = useSettings();

  function handleStart() {
    dispatch({ type: "setSettings" });
  }

  return (
    <div className="flex flex-col items-center gap-28">
      <Title />
      <Button type="primary" onClick={handleStart}>
        Start
      </Button>
    </div>
  );
}

export default Homepage;
