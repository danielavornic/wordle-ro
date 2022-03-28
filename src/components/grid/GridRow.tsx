import { FC } from 'react';

import { WORD_LENGTH } from '../../constants/settings';
import GridCell from './GridCell';

interface Props {
  word: string;
}

const GridRow: FC<Props> = ({ word }) => {
  const remainingLetters = WORD_LENGTH - word.length;
  const letters = word.split('').concat(Array(remainingLetters).fill(''));

  return (
    <div className='flex justify-center'>
      {letters.map((letter, idx) => (
        <GridCell
          key={idx}
          letter={letter}
          status={letter ? 'filled' : 'empty'}
        />
      ))}
    </div>
  );
};

export default GridRow;
