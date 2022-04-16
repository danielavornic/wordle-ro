import { FC } from 'react';
import { ROWS_COUNT } from '../../constants/settings';
import { useStore } from '../../store/store';

import GridRow from './GridRow';

const Grid: FC = () => {
  const { guesses } = useStore();

  const remainingGuesses = ROWS_COUNT - guesses.length;
  const rows = [...guesses, ...Array(remainingGuesses).fill('')];

  return (
    <div>
      {rows.map((word, idx) => (
        <GridRow key={idx} word={word} />
      ))}
    </div>
  );
};

export default Grid;
