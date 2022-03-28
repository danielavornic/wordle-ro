import { FC } from 'react';
import KeyboardRow from './KeyboardRow';

const Keyboard: FC = () => {
  const keyboardRows = ['qwertyuiop', 'asdfghjkl', '↵zxcvbnm←'];

  return (
    <div className='mb-2'>
      {keyboardRows.map((row, idx) => (
        <KeyboardRow key={idx} keys={row} />
      ))}
    </div>
  );
};

export default Keyboard;
