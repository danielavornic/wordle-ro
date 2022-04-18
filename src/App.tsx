import { FC, useEffect, useState } from 'react';

import './index.css';

import { WORD_LENGTH } from './constants/settings';
import { isWordValid } from './utils/word-utils';
import { useStore } from './store/store';
import usePrevious from './hooks/usePrevious';
import useGuess from './hooks/useGuess';

import ModalGameOver from './components/ModalGameOver';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

const App: FC = () => {
  const { gameStatus, addGuess } = useStore();
  const [guess, setGuess, addLetterGuess] = useGuess();
  const prevGuess = usePrevious(guess);
  const [isValidGuess, setIsValidGuess] = useState<boolean>(true);

  const handleKeyClick = (letter: string) => addLetterGuess(letter);

  useEffect(() => {
    if (guess.length === 0 && prevGuess?.length === WORD_LENGTH) {
      const isValid = isWordValid(prevGuess);
      setIsValidGuess(isValid);
      if (isValid) addGuess(prevGuess);
    }
  }, [guess]);

  useEffect(() => {
    const interval = setTimeout(() => setIsValidGuess(true), 1000);
    return () => clearTimeout(interval);
  }, [isValidGuess]);

  return (
    <div className='container mx-auto relative'>
      <header>
        <h1 className='text-3xl font-bold text-center py-2 border-b'>
          Wordle RO
        </h1>
      </header>

      {gameStatus !== 'playing' && <ModalGameOver />}

      <main className='relative flex flex-col max-w-xl mx-auto'>
        <div className='flex items-center justify-center grow'>
          <Grid isValidGuess={isValidGuess} guess={guess} />
        </div>
        <Keyboard onClick={handleKeyClick} />
      </main>
    </div>
  );
};

export default App;
