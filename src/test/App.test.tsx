import { describe, expect, it } from 'vitest';

import { ROWS_COUNT } from '../constants/settings';
import useStore from '../store/store';
import { render, screen, userEvent } from '../utils/test-utils';
import { computeGuess, getRandomWord } from '../utils/word-utils';

import App from '../App';

describe('Main app test', () => {
  it('the title is visible', () => {
    render(<App />);

    expect(screen.getByText(/Wordle RO/i)).toBeInTheDocument();
  });

  it('shows empty state', () => {
    useStore.setState({ guesses: [] });
    render(<App />);
    const grid = document.querySelector('main div:first-child');

    expect(screen.queryAllByRole('modal')).toHaveLength(0);
    expect(document.querySelectorAll('.grid-row')).toHaveLength(ROWS_COUNT);
    expect(grid?.textContent).toEqual('');
  });

  it('shows first guess', () => {
    const guess: string = getRandomWord();
    const evaluation = computeGuess(guess, 'legat');
    useStore.setState({ guesses: [{ guess, evaluation }] });

    render(<App />);
    const grid = document.querySelector('main div:first-child');

    expect(screen.queryAllByRole('modal')).toHaveLength(0);
    expect(document.querySelectorAll('.grid-row')).toHaveLength(ROWS_COUNT);
    expect(grid?.textContent).toEqual(guess);
  });

  it('shows modal on game is lost', () => {
    useStore.setState({ gameStatus: 'lost' });
    render(<App />);

    expect(screen.getByRole('modal')).toBeInTheDocument();
  });

  it('shows modal on game is won', () => {
    useStore.setState({ gameStatus: 'won' });
    render(<App />);

    expect(screen.getByRole('modal')).toBeInTheDocument();
  });

  it('can start new game after losing', () => {
    useStore.setState({ gameStatus: 'lost' });
    render(<App />);
    const grid = document.querySelector('main div:first-child');

    userEvent.click(screen.getByText(/Joc nou/i));
    expect(grid?.textContent).toEqual('');
  });

  it('can start new game after winning', () => {
    useStore.setState({ gameStatus: 'won' });
    render(<App />);
    const grid = document.querySelector('main div:first-child');

    userEvent.click(screen.getByText(/Joc nou/i));
    expect(grid?.textContent).toEqual('');
  });
});
