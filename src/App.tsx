import { FC } from 'react';

import './index.css';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

const App: FC = () => {
  return (
    <div className='container mx-auto'>
      <header>
        <h1 className='text-3xl font-bold text-center py-2 border-b'>
          Wordle RO
        </h1>
      </header>

      <main className='relative flex flex-col max-w-xl ml-auto mr-auto'>
        <div className='flex items-center justify-center grow'>
          <Grid />
        </div>
        <Keyboard />
      </main>
    </div>
  );
};

export default App;
