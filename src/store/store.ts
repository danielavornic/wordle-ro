import create from 'zustand';
import { persist } from 'zustand/middleware';
import { ROWS_COUNT } from '../constants/settings';

import { GameStatus } from '../types/GameStatus';
import { LetterStatus } from '../types/LetterStatus';

import { computeGuess, getRandomWord } from '../utils/word-utils';

interface Guess {
  guess: string;
  evaluation?: LetterStatus[];
}

interface StoreState {
  answer: string;
  guesses: Guess[];
  gameStatus: GameStatus;
  currentRow: number;
  addGuess: (guess: string) => void;
  newGame: () => void;
}

export const useStore = create<StoreState>(
  persist(
    (set, get) => ({
      answer: getRandomWord(),
      guesses: [],
      gameStatus: 'playing',
      currentRow: 0,
      addGuess: (guess: string) => {
        const evaluation = computeGuess(guess, get().answer);
        const didWin = evaluation.every((letter) => letter === 'correct');
        const remainingGuesses = get().guesses.length + 1;

        set({
          guesses: [
            ...get().guesses,
            {
              guess,
              evaluation,
            },
          ],
          gameStatus: didWin
            ? 'won'
            : remainingGuesses === ROWS_COUNT
            ? 'lost'
            : 'playing',
          currentRow: get().currentRow + 1,
        });
      },
      newGame: () => {
        set({
          answer: getRandomWord(),
          guesses: [],
          gameStatus: 'playing',
          currentRow: 0,
        });
      },
    }),
    {
      name: 'wordle-ro',
    }
  )
);

// useStore.persist.clearStorage();
