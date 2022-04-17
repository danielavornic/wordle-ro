import { FC } from 'react';
import { LetterStatus } from '../../types/LetterStatus';

interface Props {
  letter: string;
  status: LetterStatus | 'filled' | 'empty';
}

const styles = {
  cellStyles:
    'w-14 h-14 m-0.5 flex justify-center items-center border-2 font-bold text-3xl uppercase before:inline-block before:content-["_"]',
  cellColors: {
    empty: 'bg-white border-gray-300 text-gray-800',
    filled: 'bg-white border-gray-500 text-gray-800',
    absent: 'bg-gray-500 border-gray-500 text-white',
    present: 'bg-yellow-500 border-yellow-500 text-white',
    correct: 'bg-green-500 border-green-500 text-white',
  },
};

const GridCell: FC<Props> = ({ letter, status }) => {
  const { cellStyles, cellColors } = styles;

  return <div className={`${cellStyles} ${cellColors[status]}`}>{letter}</div>;
};

export default GridCell;
