import { FC } from 'react';

import { FiDelete } from 'react-icons/fi';
import { LetterStatus } from '../../types/LetterStatus';

interface Props {
  value: string;
  status: LetterStatus | 'notUsed';
  onClick: (value: string) => void;
}

const styles = {
  keyStyles: [
    'h-14',
    'flex',
    'items-center',
    'justify-center',
    'rounded',
    'm-0.5',
    'font-bold',
    'uppercase',
    'text-xs',
    'cursor-pointer',
  ].join(' '),
  keyColors: {
    notUsed: 'bg-gray-300 text-gray-800',
    absent: 'bg-gray-500text-white',
    present: 'bg-yellow-500 btext-white',
    correct: 'bg-green-500 text-white',
  },
  letterKeyWidth: 'w-8 sm:w-10',
  funcKeyWidth: 'w-12 sm:w-16',
};

const Key: FC<Props> = ({ value, status, onClick }) => {
  const letter = value === '↵' ? 'Enter' : value === '←' ? 'Backspace' : value;
  const char = letter === 'Backspace' ? <FiDelete /> : letter;

  const { keyStyles, letterKeyWidth, funcKeyWidth, keyColors } = styles;
  const width = letter.length === 1 ? letterKeyWidth : funcKeyWidth;
  const className = [keyStyles, width, keyColors[status]].join(' ');

  return (
    <button className={className} onClick={() => onClick(letter)}>
      {char}
    </button>
  );
};

export default Key;
