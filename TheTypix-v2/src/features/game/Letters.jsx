import { useEffect, useRef } from "react";

function Letters({ randomLetter, onRemove }) {
  const randomXPosition = Math.random() * window.innerWidth;

  const style = { left: `${randomXPosition}px` };

  const letterRef = useRef(null);

  useEffect(() => {
    function checkPosition() {
      if (letterRef.current) {
        const letterRect = letterRef.current.getBoundingClientRect();
        const letterY = letterRect.top + letterRect.height;
        console.log(letterY);
        const thresholdY = window.innerHeight - 200;

        if (letterY > thresholdY) onRemove();
      }
    }

    const positionInterval = setInterval(checkPosition, 100);

    return () => clearInterval(positionInterval);
  }, [onRemove]);

  return (
    <span
      ref={letterRef}
      className="text-7xl font-bold text-green-500 bg-black absolute animate-moveDown [--topDistance:890px]"
      style={style}
      key={randomLetter}
    >
      {randomLetter}
    </span>
  );
}

export default Letters;
