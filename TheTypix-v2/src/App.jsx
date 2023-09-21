import { useSettings } from "./features/context/SettingsContext";
import Options from "./features/options/OptionsForm";
import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";
import Game from "./pages/Game";
import GameFinished from "./pages/GameFinished";
import { Toaster } from "react-hot-toast";

function App() {
  const { status } = useSettings();

  return (
    <AppLayout>
      {status === "atHomepage" && <Homepage />}
      {status === "settingOptions" && <Options />}
      {status === "gameOn" && <Game />}
      {status === "gameFinished" && <GameFinished />}

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "rgb(17 24 39)",
            color: "white",
          },
        }}
      />
    </AppLayout>
  );
}

export default App;
