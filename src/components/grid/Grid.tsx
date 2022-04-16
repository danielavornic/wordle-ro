import { ChangeEvent, FC, useState } from 'react';
import { ROWS_COUNT, WORD_LENGTH } from '../../constants/settings';
import { useStore } from '../../store/store';

import GridRow from './GridRow';

const Grid: FC = () => {
  const { guesses, addGuess } = useStore();
  const [guess, setGuess] = useState<string>('');

  let rows = [...guesses];

  const remainingGuesses = ROWS_COUNT - guesses.length;
  if (remainingGuesses > 0) {
    rows.push(guess);
    rows = rows.concat(Array(remainingGuesses).fill(''));
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newGuess = e.target.value;

    if (newGuess.length === WORD_LENGTH) {
      addGuess(newGuess);
      setGuess('');
      return;
    }

    setGuess(newGuess);
  };

  return (
    <div>
      <input
        type='text'
        value={guess}
        onChange={handleChange}
        className='border mx-auto block w-full'
      />
      {rows.map((word, idx) => (
        <GridRow key={idx} word={word} />
      ))}
    </div>
  );
};

export default Grid;
