import { FC } from 'react';

import { ROWS_COUNT } from '../../constants/settings';
import GridRow from './GridRow';

const Grid: FC = () => {
  return (
    <div>
      {[...Array(ROWS_COUNT)].map((elem, idx) => (
        <GridRow key={idx} word={'myth'} />
      ))}
    </div>
  );
};

export default Grid;
