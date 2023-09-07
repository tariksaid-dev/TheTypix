import { useState } from "react";
import Button from "../ui/Button";
import Game from "../features/game/Game";

function Homepage() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <>
      {!isStarted && (
        <Button type="primary" onClick={() => setIsStarted(true)}>
          Start
        </Button>
      )}
      {isStarted && <Game />}
    </>
  );
}

export default Homepage;
