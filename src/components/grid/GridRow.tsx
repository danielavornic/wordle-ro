import { FC, useEffect, useState } from 'react';

import { WORD_LENGTH } from '../../constants/settings';
import { LetterStatus } from '../../types/LetterStatus';
import { computeGuess } from '../../utils/word-utils';

import GridCell from './GridCell';

interface Props {
  word: string;
  answer: string;
}

const GridRow: FC<Props> = ({ word, answer }) => {
  const remainingLetters = WORD_LENGTH - word.length;
  const letters = word.split('').concat(Array(remainingLetters).fill(''));

  const [guessStatuses, setGuessStatuses] = useState<LetterStatus[]>([]);

  useEffect(() => {
    setGuessStatuses(computeGuess(word, answer));
    console.log(answer);
  }, [answer]);

  return (
    <div className='flex justify-center'>
      {letters.map((letter, idx) => (
        <GridCell key={idx} letter={letter} status={guessStatuses[idx]} />
      ))}
    </div>
  );
};

export default GridRow;
