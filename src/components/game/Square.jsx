import { useState } from "react";

const Square = ({ turn, toggleTurn }) => {
  const [mark, setMark] = useState("");

  const handleClick = () => {
    setMark(turn)
    toggleTurn()
  }

  return (
    <button className="board-btn" mark={mark} onClick={() => {handleClick()}}>
      {`value: ${mark}`}
    </button>
  );
};

export default Square;
