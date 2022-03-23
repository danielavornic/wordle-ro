import { FC } from 'react';

import { WORD_LENGTH } from '../../constants/settings';
import Tile from './Tile';

interface Props {
  word: string;
}

const Row: FC<Props> = ({ word }) => {
  const remainingLetters = WORD_LENGTH - word.length;
  const letters = word.split('').concat(Array(remainingLetters).fill(''));

  return (
    <div className='flex justify-center'>
      {letters.map((letter, idx) => (
        <Tile key={idx} letter={letter} />
      ))}
    </div>
  );
};

export default Row;
