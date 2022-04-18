import { FC, useEffect, useState } from 'react';

import useStore from '../store/store';
import { FiX } from 'react-icons/fi';

const styles = {
  modal: [
    'absolute',
    'left-0',
    'right-0',
    'p-10',
    'rounded-lg',
    'drop-shadow-xl',
    'border',
    'border-gray-50',
    'flex',
    'items-center',
    'justify-center',
    'flex-col',
    'top-36',
    'w-96',
    'mx-auto',
    'bg-white',
    'z-20',
  ].join(' '),
  heading: 'text-center font-bold text-2xl mt-8 mb-6',
  button:
    'bg-green-500 py-2 px-6 text-white rounded mx-auto block hover:bg-green-600',
  overlay: 'w-full h-full absolute bg-gray-100 z-10 opacity-50',
};

const ModalGameOver: FC = () => {
  const { newGame, gameStatus, answer } = useStore();
  const {
    modal: modalStyles,
    heading: headingStyles,
    button: buttonStyles,
    overlay: overlayStyles,
  } = styles;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (gameStatus !== 'playing') {
      setTimeout(() => setIsModalOpen(true), 1000);
    } else {
      setIsModalOpen(false);
    }
  }, [gameStatus]);

  return (
    <>
      <div
        role='modal'
        className={`${modalStyles} ${isModalOpen ? '' : 'hidden'}`}
      >
        <button
          className='text-xl absolute top-5 right-5 cursor-pointer'
          onClick={() => setIsModalOpen(false)}
        >
          <FiX />
        </button>
        <h2 className={headingStyles}>
          {gameStatus === 'won' ? 'Felicitări!' : 'Ai pierdut.'} <br />
          Cuvântul era {answer.toUpperCase()}.
        </h2>
        <button className={buttonStyles} onClick={() => newGame()}>
          Joc nou
        </button>
      </div>
      {isModalOpen && <div className={overlayStyles}></div>}
    </>
  );
};

export default ModalGameOver;
