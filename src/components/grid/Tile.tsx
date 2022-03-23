import { FC } from 'react';

interface Props {
  letter: string;
}

const styles = {
  tileStyles:
    'w-14 h-14 m-0.5 flex justify-center items-center border-2 font-bold text-3xl uppercase',
  tileColors: {
    empty: 'bg-white border-gray-300 text-gray-800',
    filled: 'bg-white border-gray-500 text-gray-800',
    absent: 'bg-gray-500 border-gray-500 text-white',
    present: 'bg-yellow-500 border-yellow-500 text-white',
    correct: 'bg-green-500 border-green-500 text-white',
  },
};

const Tile: FC<Props> = ({ letter }) => {
  const { tileStyles, tileColors } = styles;

  return (
    <div
      className={`${tileStyles} ${
        letter ? tileColors.filled : tileColors.empty
      }`}
    >
      {letter}
    </div>
  );
};

export default Tile;
