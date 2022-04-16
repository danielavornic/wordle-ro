import { useStore } from '../store/store';

const styles = {
  modal:
    'absolute left-0 right-0 p-20 rounded-lg shadow-md top-36 border w-96 mx-auto bg-white z-10',
  heading: 'text-center font-bold text-xl mb-4',
  button:
    'bg-green-400 py-2 px-6 text-white rounded mx-auto block hover:bg-green-600',
};

const ModalGameOver = () => {
  const { newGame, gameStatus } = useStore();
  const {
    modal: modalStyles,
    heading: headingStyles,
    button: buttonStyles,
  } = styles;

  return (
    <div role='modal' className={modalStyles}>
      <h2 className={headingStyles}>
        Game Over! <br />
        {gameStatus === 'won' ? 'You won 😄' : 'You lost 😔'}
      </h2>
      <button className={buttonStyles} onClick={() => newGame()}>
        New Game
      </button>
    </div>
  );
};

export default ModalGameOver;
