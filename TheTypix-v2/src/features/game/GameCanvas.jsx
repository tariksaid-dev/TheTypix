import GameHeader from "./GameHeader";
import GameScreen from "./GameScreen";

function GameCanvas() {
  return (
    <div className="h-screen w-screen bg-[url('/fondo.png')] overflow-hidden">
      <GameHeader />
      <GameScreen />
    </div>
  );
}

export default GameCanvas;
