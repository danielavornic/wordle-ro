import create from 'zustand';
import { persist } from 'zustand/middleware';
import { getRandomWord } from '../utils/word-utils';

interface StoreState {
  answer: string;
  guesses: string[];
  currentRow: number;
  addGuess: (guess: string) => void;
}

export const useStore = create<StoreState>(
  persist(
    (set, get) => ({
      answer: getRandomWord(),
      guesses: [],
      currentRow: 0,
      addGuess: (guess: string) => {
        set(({ currentRow }) => ({
          guesses: get().guesses.concat(guess),
          currentRow: currentRow + 1,
        }));
      },
    }),
    {
      name: 'wordle-ro',
    }
  )
);

// useStore.persist.clearStorage();
