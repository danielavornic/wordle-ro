import { FC, useEffect, useState } from 'react';

import { WORD_LENGTH } from '../../constants/settings';
import { useStore } from '../../store/store';
import { LetterStatus } from '../../types/LetterStatus';
import { computeGuess } from '../../utils/word-utils';

import GridCell from './GridCell';

interface Props {
  word: string;
}

const GridRow: FC<Props> = ({ word }) => {
  const { answer, guesses } = useStore();
  const [guessStatuses, setGuessStatuses] = useState<LetterStatus[]>([]);

  const remainingLetters = WORD_LENGTH - word.length;
  const letters = word.split('').concat(Array(remainingLetters).fill(''));

  useEffect(() => {
    setGuessStatuses(computeGuess(word, answer));
    console.log(answer);
  }, [answer, guesses]);

  return (
    <div className='flex justify-center'>
      {letters.map((letter, idx) => (
        <GridCell key={idx} letter={letter} status={guessStatuses[idx]} />
      ))}
    </div>
  );
};

export default GridRow;
