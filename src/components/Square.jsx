
export const Square = ({children, isSelected, index, updateBoard}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    )
  }