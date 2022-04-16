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
    (set) => ({
      answer: getRandomWord(),
      guesses: ['hello', 'calau', '', '', '', ''],
      currentRow: 0,
      addGuess: (guess: string) => {
        set(({ guesses, currentRow }) => ({
          guesses: guesses.map((g, i) => (i === currentRow ? g : guess)),
          currentRow: currentRow + 1,
        }));
      },
    }),
    {
      name: 'wordle-ro',
    }
  )
);
