import './Board.css'
import Square from './Square'
import { useState } from 'react'

const Board = ({squares, handleClick, turn}) => {

  return (
    <div className="board">
      {
        squares.map((square, i) => (
          <Square key={i} value={square} turn={turn} handleClick={() => handleClick(i)} />
        ))
      }
    </div>
  )
}

export default Board