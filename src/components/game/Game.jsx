import { useState } from "react";
import { useEffect } from 'react'
import { calculateWinner } from "../../helpers";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const gameWon = calculateWinner(board)
  
  useEffect(() => {
    if (gameWon) {
      alert('game won!')
    }
  }, [gameWon])
  

  const handleClick = i => {
    const boardCopy = [...board];
    boardCopy[i] = turn;
    setBoard(boardCopy);
    setTurn(turn === "X" ? "O" : "X");
  };

  return <Board squares={board} handleClick={handleClick} turn={turn} />;
};

export default Game;
