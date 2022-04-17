import { FC } from 'react';

import { WORD_LENGTH } from '../../constants/settings';
import { useStore } from '../../store/store';
import { LetterStatus } from '../../types/LetterStatus';

import GridCell from './GridCell';

interface Props {
  word: string;
  evaluation?: LetterStatus[];
  index: number;
  isValidGuess: boolean;
}

const GridRow: FC<Props> = ({
  word = '',
  evaluation = [],
  index,
  isValidGuess,
}) => {
  const { currentRow } = useStore();
  const animClass =
    !isValidGuess && currentRow === index ? 'shake-animation' : '';

  const remainingLetters = WORD_LENGTH - word.length;
  let letters =
    remainingLetters > 0
      ? word.split('').concat(Array(remainingLetters).fill(''))
      : word.split('');

  return (
    <div className={`flex justify-center grid-row ${animClass}`}>
      {letters.map((letter, idx) => (
        <GridCell key={idx} letter={letter} status={evaluation[idx]} />
      ))}
    </div>
  );
};

export default GridRow;
