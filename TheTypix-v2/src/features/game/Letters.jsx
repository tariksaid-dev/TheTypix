function Letters({ randomLetter, randomXPosition, maxYPosition }) {
  const style = { left: `${randomXPosition}px` };

  return (
    <span
      className="text-7xl font-bold text-green-500 bg-black absolute animate-moveDown [--topDistance:890px]"
      style={style}
      key={randomLetter}
    >
      {randomLetter}
    </span>
  );
}

export default Letters;
