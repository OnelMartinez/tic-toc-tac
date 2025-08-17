import { Square } from "./Square"
import { TURNS } from "../constants"

export function TurnComponent({turn, resetGame}) {
    return (
      <>
        <section className='turn'>
          <Square 
            isSelected={turn==TURNS.x}>{TURNS.x}</Square>
          <Square 
            isSelected={turn==TURNS.o}>{TURNS.o}</Square>
            
        </section>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </>
    )
}