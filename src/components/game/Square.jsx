import { useState } from "react";

const Square = ({ turn, handleClick }) => {
  const [mark, setMark] = useState("");

  const doThis = () => {
    console.log(turn)
    setMark(turn)
    handleClick()
  }

  return (
    <button className="board-btn" mark={mark} onClick={() => {doThis()}}>
      {`value: ${mark}`}
    </button>
  );
};

export default Square;
