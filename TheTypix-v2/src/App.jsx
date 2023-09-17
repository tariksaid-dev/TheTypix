import { useSettings } from "./features/context/SettingsContext";
import Options from "./features/options/OptionsForm";
import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";
import Game from "./pages/Game";
import GameFinished from "./pages/GameFinished";

function App() {
  const { status } = useSettings();

  return (
    <AppLayout>
      {status === "atHomepage" && <Homepage />}
      {status === "settingOptions" && <Options />}
      {status === "gameOn" && <Game />}
      {status === "gameFinished" && <GameFinished />}
    </AppLayout>
  );
}

export default App;
