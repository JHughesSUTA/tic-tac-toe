import './Board.css'
import Square from './Square'
import { useState } from 'react'

const Board = () => {
  const [turn, setTurn] = useState('X')

  const toggleTurn = () => {
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  return (
    <div className="board">
      <Square turn={turn} toggleTurn={toggleTurn} />
      <Square turn={turn} toggleTurn={toggleTurn} />
      <Square turn={turn} toggleTurn={toggleTurn} />
      <Square turn={turn} toggleTurn={toggleTurn} />
      <Square turn={turn} toggleTurn={toggleTurn} />
      <Square turn={turn} toggleTurn={toggleTurn} />
      <Square turn={turn} toggleTurn={toggleTurn} />
      <Square turn={turn} toggleTurn={toggleTurn} />
      <Square turn={turn} toggleTurn={toggleTurn} />
    </div>
  )
}

export default Board