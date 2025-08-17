import './App.css'
import { useState } from 'react'

import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { WinnerComponent  } from './components/Winner'
import { checkWinner, checkEndGame } from './logic/functions'
import { TurnComponent } from './components/Turn'



function App() {
  //UseStates
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    //Verificamos si esta marcado
    if(winner || board[index]) return

     // Copia del tablero original
    const newBoard = [...board]
    
    //Marcamos y actualizamos la posicion
    newBoard[index] = turn
    setBoard(newBoard)

    //Cambiamos el turno
    const newTurn = turn == TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    //Revisar si existe ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) setWinner(newWinner)
    else if(checkEndGame(newBoard)) setWinner(false);
  }

  const resetGame = () => {
    //Reseteamos todos los estados, al estado inicial
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null) 
  }

  return (
    <>
    <h1 className='tictac'>Tic Tac Toe</h1>
      <main className='board'>
        <section className='game'>
          {
            board.map((square, index) => {
              return (
                <Square 
                  key={index} 
                  updateBoard={updateBoard}
                  index={index}>{square}</Square>

              )
            } )
          }
        </section>
        <TurnComponent resetGame={resetGame} turn={turn}></TurnComponent>
       
        <WinnerComponent resetGame={resetGame} winner={winner} />
      </main>
    </>
  )
}

export default App
