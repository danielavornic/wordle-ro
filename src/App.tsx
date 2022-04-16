import { FC } from 'react';

import './index.css';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';
import { useStore } from './store/store';
import ModalGameOver from './components/ModalGameOver';

const App: FC = () => {
  const { gameStatus } = useStore();
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
          <Grid />
        </div>
        <Keyboard />
      </main>
    </div>
  );
};

export default App;
