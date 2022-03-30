import { FC } from 'react';

import { getRandomWord } from '../../utils/word-utils';
import GridRow from './GridRow';

const Grid: FC = () => {
  const answer = getRandomWord();

  return (
    <div>
      <GridRow word={'acasa'} answer={answer} />
      <GridRow word={'ninge'} answer={answer} />
      <GridRow word={'soare'} answer={answer} />
      <GridRow word={'curat'} answer={answer} />
      <GridRow word={'fiica'} answer={answer} />
      <GridRow word={'miros'} answer={answer} />
    </div>
  );
};

export default Grid;
