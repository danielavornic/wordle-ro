import { FC } from 'react';
import Key from './Key';

interface Props {
  keys: string;
  onClick: (letter: string) => void;
}

const KeyboardRow: FC<Props> = ({ keys, onClick }) => (
  <div className='flex items-center justify-center'>
    {keys.split('').map((key, idx) => (
      <Key key={idx} value={key} onClick={onClick} />
    ))}
  </div>
);

export default KeyboardRow;
