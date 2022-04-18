import { FC, useEffect, useState } from 'react';

import { LetterStatus } from '../../types/LetterStatus';

interface Props {
  letter: string;
  status: LetterStatus | 'filled' | 'empty';
  rowAnimClass: string;
}

const styles = {
  cellStyles: [
    'w-12',
    'h-12',
    'xxl:w-16',
    'xxl:h-16',
    'm-0.5',
    'flex',
    'justify-center',
    'items-center',
    'border-2',
    'font-bold',
    'text-3xl',
    'uppercase',
    'before:inline-block',
    'before:content-["_"]',
  ].join(' '),
  cellColors: {
    empty: 'bg-white border-gray-300 text-gray-800',
    filled: 'bg-white border-gray-500 text-gray-800',
    absent: 'bg-gray-500 border-gray-500 text-white',
    present: 'bg-yellow-500 border-yellow-500 text-white',
    correct: 'bg-green-500 border-green-500 text-white',
  },
};

const GridCell: FC<Props> = ({ letter, status, rowAnimClass }) => {
  const { cellStyles, cellColors } = styles;
  const [animClass, setAnimClass] = useState<string>('');

  useEffect(() => {
    if (letter !== '' && rowAnimClass === '' && !status)
      setAnimClass('pop-animation');
    const interval = setTimeout(() => setAnimClass(''), 700);
    return () => clearTimeout(interval);
  }, [letter]);

  return (
    <div className={`${cellStyles} ${cellColors[status]} ${animClass}`}>
      {letter}
    </div>
  );
};

export default GridCell;
