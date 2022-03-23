import { FC } from 'react';

import './index.css';
import Grid from './components/grid/Grid';

const App: FC = () => {
  return (
    <div className='container mx-auto'>
      <header>
        <h1 className='text-3xl font-bold text-center py-2 border-b'>
          Wordle RO
        </h1>
      </header>

      <main>
        <Grid />
      </main>
    </div>
  );
};

export default App;
