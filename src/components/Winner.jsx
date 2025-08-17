export function WinnerComponent({winner, resetGame}) {
    if(winner == null) return null

    const winnerText = winner == false ? 'Empate' : `A ganado ${winner}`

    return (
        <section>
            <section className='winner'>
                <div className="text">
                  <h1>{winnerText} </h1>
                    <footer>
                        <button onClick={resetGame}>Empezar de nuevo</button>
                    </footer>
                </div>
            </section>
        </section>
    )
}