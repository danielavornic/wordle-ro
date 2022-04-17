import { useEffect, useState } from 'react';

import { WORD_LENGTH } from '../constants/settings';
import { useStore } from '../store/store';
import usePrevious from './usePrevious';

const useGuess = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [guess, setGuess] = useState<string>('');
  const { addGuess } = useStore();
  const prevGuess = usePrevious(guess);

  const handleKeyDown = (e: KeyboardEvent) => {
    const { key: letter } = e;

    setGuess((currGuess) => {
      if (currGuess.length === WORD_LENGTH) {
        if (letter === 'Enter') return '';
        return currGuess;
      }

      if (letter === 'Backspace') {
        return currGuess.slice(0, -1);
      }

      return currGuess + letter;
    });
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (guess.length === 0 && prevGuess?.length === WORD_LENGTH) {
      addGuess(prevGuess);
    }
  }, [guess]);

  return [guess, setGuess];
};

export default useGuess;
