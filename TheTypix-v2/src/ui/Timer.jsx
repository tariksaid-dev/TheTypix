import { useEffect } from "react";
import { useSettings } from "../features/context/SettingsContext";

function Timer() {
  const { secondsRemaining, dispatch } = useSettings();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return <div className="text-6xl bg-green-400">{secondsRemaining}</div>;
}

export default Timer;
