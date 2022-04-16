import { ChangeEvent, FC, useState } from 'react';
import { ROWS_COUNT, WORD_LENGTH } from '../../constants/settings';
import { useStore } from '../../store/store';

import GridRow from './GridRow';

const Grid: FC = () => {
  const { guesses, answer, addGuess, updateGameStatus, gameStatus } =
    useStore();
  const [guess, setGuess] = useState<string>('');

  let rows = [...guesses];

  if (rows.length < ROWS_COUNT) rows.push(guess);

  const guessesRemaining = ROWS_COUNT - rows.length;

  if (guessesRemaining > 0)
    rows = rows.concat(Array(guessesRemaining).fill(''));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newGuess = e.target.value;

    if (newGuess.length === WORD_LENGTH) {
      addGuess(newGuess);
      setGuess('');
      updateGameStatus(
        newGuess === answer
          ? 'won'
          : ROWS_COUNT - guesses.length === 1
          ? 'lost'
          : 'playing'
      );
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
        disabled={gameStatus !== 'playing'}
      />
      {rows.map((word, idx) => (
        <GridRow key={idx} word={word} />
      ))}
    </div>
  );
};

export default Grid;
