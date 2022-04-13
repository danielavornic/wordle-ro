import { FC } from 'react';

import GridRow from './GridRow';

const Grid: FC = () => {
  return (
    <div>
      <GridRow word={'acasa'} />
      <GridRow word={'ninge'} />
      <GridRow word={'soare'} />
      <GridRow word={'curat'} />
      <GridRow word={'fiica'} />
      <GridRow word={'miros'} />
    </div>
  );
};

export default Grid;
