import React from 'react'

// styles
import { StyledStartContainer } from './StartContainer.styles'

// data
import deckOptions from '../data/options'

const StartContainer = ({ deckSize, setDeckSize, onNavigate }) => {

  return (
    <StyledStartContainer>
      <h1>Splendex Memory Game</h1>
      <p>Deck size</p>
      <select value={deckSize} onChange={(event) => setDeckSize(event.target.value)}>
        {deckOptions().map((option, index) => {
          return (
            <option key={index} value={option}>{option}</option>
          )
        })}
      </select>
      <button className="btn" onClick={() => onNavigate('/game')}>start a new game</button>
    </StyledStartContainer>
  )
}

export default StartContainer