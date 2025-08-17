
import {TURNS, WINNER_COMBOS } from "../constants"

export function checkWinner (boardCheck) {
    // Revisamos toda las combinaciones 
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(
        boardCheck[a] &&
        boardCheck[a] == boardCheck[b] &&
        boardCheck[a] == boardCheck[c] 
      ) {
        return boardCheck[a]
      }
    }

    return null
}

export function checkEndGame (newBoard) {
  return newBoard.every((square) => square != null)
}
