import React, { useState } from 'react'

// styles
import { StyledDeckContainer } from './DeckContainer.styles'

// components
import Card from '../components/Cards/Card'

// data
import deckOptions from '../data/options'

const DeckContainer = ({
  cards,
  selectedCards,
  setSelectCard,
  winnerCards,
  deckSize,
  setDeckSize,
  restart
}) => {

  const [currentTries, setCurrentTries] = useState(0);

  const getCurrentTriesNumber = () => {
    const text = currentTries % 2 === 0 ? currentTries/2 : (currentTries + 1)/2;
    return text;
  }

  const getCardClass = (card) => {
    let classes = '';

    if(selectedCards.find(element => element.id === card.id)) {
      classes = 'flipped'
    }
    if(winnerCards.find(element => element.id === card.id)) {
      classes = 'winner'
    }
    return classes;
  }

  return (
    <StyledDeckContainer>
      <select value={deckSize} onChange={(event) => {
        restart();
        setDeckSize(event.target.value);
        setCurrentTries(0);
      }}>
        {deckOptions().map((option, index) => {
          return (
            <option key={index} value={option}>{option}</option>
          )
        })}
      </select>
      
      <div className="deck-top">
        <div>
          <span>Current tries: 
            {getCurrentTriesNumber()}
          </span>
        </div>
        <div>
          <span>Best: 9</span>
        </div>
        <div>
          <button
            onClick={() => {
              restart();
              setCurrentTries(0);
            }}
            className="btn btn--transparent"
          >
            restart
          </button>
        </div>
      </div>
      <div className="card-list">
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              card={card}
              classes={getCardClass(card)}
              onClick={() => {
                setCurrentTries(currentTries + 1)
                setSelectCard(card)
              }}
            />
          )
        })}
      </div>
    </StyledDeckContainer>
  )
}

export default DeckContainer