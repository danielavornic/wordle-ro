import create from 'zustand';
import { persist } from 'zustand/middleware';
import { getRandomWord } from '../utils/word-utils';

interface StoreState {
  answer: string;
  guesses: string[];
  addGuess: (guess: string) => void;
}

export const useStore = create<StoreState>(
  persist(
    (set) => ({
      answer: getRandomWord(),
      guesses: ['acasa', 'ninge', 'soare', 'curat', 'miros'],
      addGuess: (guess: string) => {
        set((state) => ({ guesses: [...state.guesses, guess] }));
      },
    }),
    {
      name: 'wordle-ro',
    }
  )
);
