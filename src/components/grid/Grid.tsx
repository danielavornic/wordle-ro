import { FC } from 'react';

import { ROWS_COUNT } from '../../constants/settings';
import useGuess from '../../hooks/useGuess';
import { useStore } from '../../store/store';

import GridRow from './GridRow';

const Grid: FC = () => {
  const { guesses } = useStore();
  const [guess] = useGuess();

  let rows = [...guesses];

  if (rows.length < ROWS_COUNT) {
    rows.push({ guess });
  }

  const guessesRemaining = ROWS_COUNT - rows.length;

  if (guessesRemaining > 0)
    rows = rows.concat(Array(guessesRemaining).fill(''));

  return (
    <div>
      {rows.map(({ guess, evaluation }, idx) => (
        <GridRow key={idx} word={guess} evaluation={evaluation} />
      ))}
    </div>
  );
};

export default Grid;
