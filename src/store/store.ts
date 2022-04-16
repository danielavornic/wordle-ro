import create from 'zustand';
import { persist } from 'zustand/middleware';
import { GameStatus } from '../types/GameStatus';
import { getRandomWord } from '../utils/word-utils';

interface StoreState {
  answer: string;
  guesses: string[];
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
        set(() => ({
          guesses: get().guesses.concat(guess),
        }));
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
