import { useEffect, useRef } from "react";
import { useSettings } from "../context/SettingsContext";

function Letters({ randomLetter, onRemove, onLetterMissed }) {
  const randomXPosition = Math.random() * (window.innerWidth - 100);
  const style = { left: `${randomXPosition}px` };
  const letterRef = useRef(null);

  useEffect(() => {
    function checkPosition() {
      if (letterRef.current) {
        const letterRect = letterRef.current.getBoundingClientRect();
        const thresholdY = window.innerHeight - 100;

        if (letterRect.y > thresholdY) {
          onRemove();
          onLetterMissed();
        }
      }
    }

    const positionInterval = setInterval(checkPosition, 10);

    return () => clearInterval(positionInterval);
  }, [onRemove, onLetterMissed]);

  return (
    <span
      ref={letterRef}
      // className="text-7xl font-bold text-green-500 bg-black absolute animate-moveDown [--topDistance:890px] "
      className={`text-7xl font-bold text-green-500 bg-black absolute animate-bounceAndDescend`}
      style={style}
      // key={randomLetter}
    >
      {randomLetter ? randomLetter : "xD"}
    </span>
  );
}

export default Letters;
