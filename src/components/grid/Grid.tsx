import { FC } from 'react';

import { ROWS_COUNT } from '../../constants/settings';
import { useStore } from '../../store/store';

import GridRow from './GridRow';

interface Props {
  guess: string;
  isValidGuess: boolean;
}

const Grid: FC<Props> = ({ guess, isValidGuess }) => {
  const { guesses } = useStore();

  let rows = guesses.length < ROWS_COUNT ? [...guesses, { guess }] : guesses;
  const guessesRemaining = ROWS_COUNT - rows.length;

  if (guessesRemaining > 0)
    rows = rows.concat(Array(guessesRemaining).fill(''));

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
