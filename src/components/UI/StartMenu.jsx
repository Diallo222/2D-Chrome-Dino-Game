import React from "react";
import { useGameStore } from "../../store/hooks";

const StartMenu = () => {
  const startGame = useGameStore((state) => state.setStart);
  const {start} = useGameStore()
  return (
    <div className={`absolute z-20 top-0 left-0 w-full h-full bg-transparent ${start ? "hidden" : "flex"} justify-center items-center`}>
      Start Menu
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={startGame}
      >
        Start
      </button>
      <p>
        Press <kbd>Space</kbd> to jump
      </p>
    </div>
  );
};

export default StartMenu;
