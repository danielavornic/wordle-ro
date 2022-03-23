import { FC } from 'react';

import { ROWS_COUNT } from '../../constants/settings';
import Row from './Row';

const Grid: FC = () => {
  return (
    <div className='mt-4'>
      {[...Array(ROWS_COUNT)].map((elem, idx) => (
        <Row key={idx} word={'myth'} />
      ))}
    </div>
  );
};

export default Grid;
