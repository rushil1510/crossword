import React from 'react'
import {CrosswordProvider, CrosswordGrid, DirectionClues} from '@jaredreisinger/react-crossword';

const clue = '';
const data = {
  across: {
    1: { clue: 'Banned word/sound from the chat', answer: 'PSPSPSPS', row: 0, col: 0 },
    4: { clue: 'Units place of the solution to the equation: x^2-2248x+1263376=0 ', answer: 'FOUR', row: 4, col: 4 },
    5: { clue: 'Half the reader :p', answer: 'PERF', row: 3, col: 7},
    7: { clue: 'TIL it stands   for Hennes and Mavitz', answer: 'H&M', row: 6, col: 5},
    8: { clue: 'The lavender haze had me bejeweled', answer: 'TAYLOR', row: 8, col: 3},
    10: { clue: 'One does not simply take anything with 11 across at 10 across', answer: 'SOCIAL', row: 10, col: 4},
    9: { clue: 'Salud!', answer: 'BYGBREWSKI', row: 7, col: 8},
    11: { clue: 'One does not simply take anything with 11 across at 10 across', answer: 'COCONUT', row: 14, col: 0},
    12: { clue: 'Church thats 28 ahead of the solution of the equation in 4 across', answer: 'STREET', row: 12, col: 8},
    14: { clue: 'Handy place to know in a game of atlas', answer: 'XINGYI', row: 15, col: 10},
    17: { clue: 'Capitalism figure', answer: 'MCD', row: 5, col: 10},
    19: { clue: 'Rise from the ashes, once again', answer: 'PHOENIX', row: 3, col: 12},
  },
  down: {
    2: { clue: 'Not at all a banned word from chat', answer: 'SUGARCUP', row: 0, col: 1 },
    3: { clue: 'Non trivialities, blank left as an exercise to the reader', answer: 'PROOF', row: 0, col: 4},
    5: { clue: 'People get second chances', answer: 'PROM', row: 3, col: 7},
    6: { clue: 'Colloquially what Isabella (from Phineas and Ferb) says this frequently', answer: 'KKRH', row: 1, col: 9},
    7: { clue: 'The start and also often the end', answer: 'HNY', row: 6, col: 5},
    9: { clue: 'Paired well with banter', answer: 'BREADS', row: 7, col: 8},
    10: { clue: 'TFAR; --, not down', answer: 'SEVEN', row: 10, col: 4},
    13: { clue: 'Place near Hyderabad, reach via a 2 hour-flight', answer: 'DELHI', row: 11, col: 11},
    15: { clue: 'An article with the phonetic end of 9 across', answer: 'ASCII', row: 6, col: 15},
    16: { clue: 'Bgm otd 2ya, remove what the reader is fond of', answer: 'INDUSTRY', row: 7, col: 17},
    18: { clue: 'Your friendly neighbourhood- ', answer: 'SPIDERMAN', row: 2, col: 12},
    20: { clue: 'Dessert, popular enough to have stores named after it', answer: 'MAGNUM', row: 0, col: 16},
  },
};


const App = () => {
  return (
    <div style={{ width: '40em', display: 'flex' }}>
      {/* 
  <Crossword data={data} useStorage={false} />
  </ThemeProvider> */}
  <CrosswordProvider data={data}>
  <div style={{ display: 'flex', gap: '2em' }}>
    <DirectionClues direction="across" />
    <div style={{ width: '50em' }}>
      <CrosswordGrid />
    </div>
    <DirectionClues direction="down" />
  </div>
</CrosswordProvider>;
</div>
  )
}

export default App
