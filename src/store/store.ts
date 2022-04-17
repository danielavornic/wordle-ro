import create from 'zustand';
import { persist } from 'zustand/middleware';

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
  addGuess: (guess: string) => void;
  updateGameStatus: (status: GameStatus) => void;
  newGame: () => void;
}

export const useStore = create<StoreState>(
  persist(
    (set, get) => ({
      answer: getRandomWord(),
      guesses: [],
      gameStatus: 'playing',
      addGuess: (guess: string) => {
        const evaluation = computeGuess(guess, get().answer);
        set({
          guesses: [
            ...get().guesses,
            {
              guess,
              evaluation,
            },
          ],
        });
      },
      updateGameStatus: (status: GameStatus) => {
        set(() => ({
          gameStatus: status,
        }));
      },
      newGame: () => {
        set({
          answer: getRandomWord(),
          guesses: [],
          gameStatus: 'playing',
        });
      },
    }),
    {
      name: 'wordle-ro',
    }
  )
);

// useStore.persist.clearStorage();
