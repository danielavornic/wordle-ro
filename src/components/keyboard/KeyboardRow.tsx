import { FC } from 'react';
import Key from './Key';

interface Props {
  keys: string;
}

const KeyboardRow: FC<Props> = ({ keys }) => {
  return (
    <div className='flex items-center justify-center'>
      {keys.split('').map((key, idx) => (
        <Key key={idx} value={key} status='notUsed' />
      ))}
    </div>
  );
};

export default KeyboardRow;
