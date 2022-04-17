import { FC } from 'react';

import { WORD_LENGTH } from '../../constants/settings';
import { LetterStatus } from '../../types/LetterStatus';

import GridCell from './GridCell';

interface Props {
  word: string;
  evaluation?: LetterStatus[];
}

const GridRow: FC<Props> = ({ word = '', evaluation = [] }) => {
  const remainingLetters = WORD_LENGTH - word.length;
  const letters = word.split('').concat(Array(remainingLetters).fill(''));

  return (
    <div className='flex justify-center grid-row'>
      {letters.map((letter, idx) => (
        <GridCell key={idx} letter={letter} status={evaluation[idx]} />
      ))}
    </div>
  );
};

export default GridRow;
