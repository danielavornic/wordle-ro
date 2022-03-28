import { FC } from 'react';
import { FiDelete } from 'react-icons/fi';
import { LetterStatus } from '../../types/LetterStatus';

interface Props {
  value: string;
  status: LetterStatus | 'notUsed';
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
  letterKeyWidth: 'w-8 md:w-10',
  funcKeyWidth: 'w-12 md:w-16',
};

const Key: FC<Props> = ({ value, status }) => {
  const { keyStyles, letterKeyWidth, funcKeyWidth, keyColors } = styles;
  const char =
    value === '↵' ? 'ENTER' : value === '←' ? <FiDelete size={18} /> : value;
  const width = value !== '↵' && value !== '←' ? letterKeyWidth : funcKeyWidth;

  return (
    <div className={`${keyStyles} ${keyColors[status]} ${width}`}>{char}</div>
  );
};

export default Key;
