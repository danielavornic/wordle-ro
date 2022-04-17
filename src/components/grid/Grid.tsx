import { FC, useEffect, useState } from 'react';

import { ROWS_COUNT, WORD_LENGTH } from '../../constants/settings';
import { useStore } from '../../store/store';
import { isWordValid } from '../../utils/word-utils';
import useGuess from '../../hooks/useGuess';
import usePrevious from '../../hooks/usePrevious';

import GridRow from './GridRow';

const Grid: FC = () => {
  const { guesses, addGuess } = useStore();
  const [guess] = useGuess();
  const prevGuess = usePrevious(guess);
  const [isValidGuess, setIsValidGuess] = useState<boolean>(true);

  let rows = guesses.length < ROWS_COUNT ? [...guesses, { guess }] : guesses;
  const guessesRemaining = ROWS_COUNT - rows.length;

  if (guessesRemaining > 0)
    rows = rows.concat(Array(guessesRemaining).fill(''));

  useEffect(() => {
    if (guess.length === 0 && prevGuess?.length === WORD_LENGTH) {
      const isValid = isWordValid(prevGuess);
      setIsValidGuess(isValid);
      if (isValid) addGuess(prevGuess);
    }
  }, [guess]);

  useEffect(() => {
    let interval: any;
    if (!isValidGuess) {
      interval = setTimeout(() => setIsValidGuess(true), 1000);
    }
    return () => clearTimeout(interval);
  }, [isValidGuess]);

  return (
    <div>
      {rows.map(({ guess, evaluation }, idx) => (
        <GridRow
          key={idx}
          word={guess}
          evaluation={evaluation}
          isValidGuess={isValidGuess}
          index={idx}
        />
      ))}
    </div>
  );
};

export default Grid;
