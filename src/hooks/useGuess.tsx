import { useEffect, useState } from 'react';

import { WORD_LENGTH } from '../constants/settings';
import { isWordValid } from '../utils/word-utils';
import usePrevious from './usePrevious';

const useGuess = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (letter: string) => void
] => {
  const [guess, setGuess] = useState<string>('');
  const prevGuess = usePrevious(guess);

  const addLetterGuess = (letter: string) => {
    setGuess((currGuess) => {
      if (letter === 'Backspace') {
        return currGuess.slice(0, -1);
      }

      if (currGuess.length === WORD_LENGTH) {
        if (letter === 'Enter') return '';
        return currGuess;
      }

      if (letter?.length === 1 && /[a-z]/i.test(letter))
        return currGuess + letter;

      return currGuess;
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const { key: letter } = e;

    addLetterGuess(letter);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (
      guess.length === 0 &&
      prevGuess?.length === WORD_LENGTH &&
      !isWordValid(prevGuess)
    ) {
      setGuess(prevGuess);
    }
  }, [guess]);

  return [guess, setGuess, addLetterGuess];
};

export default useGuess;