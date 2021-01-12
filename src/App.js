import React, { useState, useEffect } from 'react'

// styles
import { GlobalStyles } from './styles/GlobalStyles.styles';

// containers
import StartContainer from './containers/StartContainer'
import DeckContainer from './containers/DeckContainer'

// data
import { memoryCardsArray } from './data/cards';

// router
import { Router, navigate } from "@reach/router"

const App = () => {

  const shuffleArray = (array) => {
    const newArray = [...array];
    newArray.sort(() => Math.random() - 0.5);

    return newArray;
  }

  const [deckSize, setDeckSize] = useState(20);
  const [cards, setCards] = useState(shuffleArray(memoryCardsArray()));
  const [selectedCards, setSelectedCards] = useState([]);
  const [winnerCards, setWinnerCards] = useState([]);

  useEffect(() => {
    if(selectedCards.length === 2) {
      if(selectedCards[0].name === selectedCards[1].name) {
        setWinnerCards([...winnerCards, selectedCards[0], selectedCards[1]])
      }
      setTimeout(() => {
        setSelectedCards([])
      }, 500);
    }
  }, [selectedCards]);

  const handleSetDeck = (size) => {
    setDeckSize(size);
    const newArray = memoryCardsArray().slice(0,size);
    setCards(shuffleArray(newArray));
  }

  const handleSelectCard = (card) => {
    if(winnerCards.find(element => element.id === card.id) || selectedCards.find(element => element.id === card.id)) {
      console.log('already selected')
      setSelectedCards([...selectedCards]);
    }
    else if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, card]);
    }
  }

  const handleNavigate = (link) => {
    navigate(link);
  }

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Router>
          <StartContainer
            exact path="/"
            deckSize={deckSize}
            setDeckSize={handleSetDeck}
            onNavigate={handleNavigate}
          />
          <DeckContainer
            path="/game"
            deckSize={deckSize}
            setDeckSize={handleSetDeck}
            cards={cards}
            setCards={setCards}
            selectedCards={selectedCards}
            setSelectCard={handleSelectCard}
            winnerCards={winnerCards}
            setWinnerCards={setWinnerCards}
            restart={() => {
              setSelectedCards([]);
              setWinnerCards([]);
              setCards(shuffleArray(cards));
            }}
          />
        </Router>
      </div>
    </>
  );
}

export default App;
