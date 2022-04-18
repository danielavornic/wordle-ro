import { FC } from 'react';

import KeyboardRow from './KeyboardRow';

interface Props {
  onClick: (letter: string) => void;
}

const Keyboard: FC<Props> = ({ onClick }) => {
  const keyboardRows = ['qwertyuiop', 'asdfghjkl', '↵zxcvbnm←'];

  return (
    <div className='mb-2'>
      {keyboardRows.map((row, idx) => (
        <KeyboardRow key={idx} keys={row} onClick={onClick} />
      ))}
    </div>
  );
};

export default Keyboard;
