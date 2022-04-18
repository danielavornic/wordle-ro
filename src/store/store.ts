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
  keyLetterStatuses: { [key: string]: LetterStatus };
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
      keyLetterStatuses: {},
      addGuess: (guess: string) => {
        const evaluation = computeGuess(guess, get().answer);
        const didWin = evaluation.every((letter) => letter === 'correct');
        const remainingGuesses = get().guesses.length + 1;

        const guesses = [...get().guesses, { guess, evaluation }];
        const gameStatus = didWin
          ? 'won'
          : remainingGuesses === ROWS_COUNT
          ? 'lost'
          : 'playing';
        const keyLetterStatuses = get().keyLetterStatuses;

        evaluation.forEach((ev, idx) => {
          const letter = guess[idx];
          const letterEval = keyLetterStatuses[letter];
          switch (letterEval) {
            case 'correct':
              break;
            case 'present':
              if (ev === 'absent') break;
            default:
              keyLetterStatuses[letter] = ev;
              break;
          }
        });

        set({
          guesses,
          gameStatus,
          keyLetterStatuses,
          currentRow: get().currentRow + 1,
        });
      },
      newGame: () => {
        set({
          answer: getRandomWord(),
          guesses: [],
          gameStatus: 'playing',
          currentRow: 0,
          keyLetterStatuses: {},
        });
      },
    }),
    {
      name: 'wordle-ro',
    }
  )
);
