import { useEffect, useRef } from "react";

function Letters({ randomLetter, onRemove }) {
  // const randomXPosition = Math.random() * window.innerWidth;
  const randomXPosition = Math.random() * (window.innerWidth - 50);

  const style = { left: `${randomXPosition}px` };
  const letterRef = useRef(null);

  useEffect(() => {
    function checkPosition() {
      if (letterRef.current) {
        const letterRect = letterRef.current.getBoundingClientRect();
        const thresholdY = window.innerHeight - 100;

        if (letterRect.y > thresholdY) onRemove();
      }
    }

    const positionInterval = setInterval(checkPosition, 10);

    return () => clearInterval(positionInterval);
  }, [onRemove]);

  return (
    <span
      ref={letterRef}
      // className="text-7xl font-bold text-green-500 bg-black absolute animate-moveDown [--topDistance:890px] "
      className={`text-7xl font-bold text-green-500 bg-black absolute animate-bounceAndDescend`}
      style={style}
      key={randomLetter}
    >
      {randomLetter}
    </span>
  );
}

export default Letters;
