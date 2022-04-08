import './Board.css'
import { useState } from 'react'

const Board = () => {
  const [turn, setTurn] = useState('X')

  const handleClick = () => {
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  return (
    <div className="board">
      <button className="board-btn" onClick={handleClick}>{turn}</button>
      <button className="board-btn" onClick={handleClick}>{turn}</button>
      <button className="board-btn" onClick={handleClick}>{turn}</button>
      <button className="board-btn" onClick={handleClick}>{turn}</button>
      <button className="board-btn" onClick={handleClick}>{turn}</button>
      <button className="board-btn" onClick={handleClick}>{turn}</button>
      <button className="board-btn" onClick={handleClick}>{turn}</button>
      <button className="board-btn" onClick={handleClick}>{turn}</button>
      <button className="board-btn" onClick={handleClick}>{turn}</button>
    </div>
  )
}

export default Board