import { describe, expect, it } from 'vitest';
import App from '../App';
import { ROWS_COUNT } from '../constants/settings';
import { useStore } from '../store/store';
import { render, screen, userEvent } from '../utils/test-utils';

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
    useStore.setState({ guesses: ['acasa'] });
    render(<App />);
    const grid = document.querySelector('main div:first-child');

    expect(screen.queryAllByRole('modal')).toHaveLength(0);
    expect(document.querySelectorAll('.grid-row')).toHaveLength(ROWS_COUNT);
    expect(grid?.textContent).toEqual('acasa');
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

  it('start new game after losing', () => {
    useStore.setState({ gameStatus: 'lost' });
    render(<App />);
    const grid = document.querySelector('main div:first-child');

    userEvent.click(screen.getByText(/New game/i));
    expect(grid?.textContent).toEqual('');
  });

  it('start new game after winning', () => {
    useStore.setState({ gameStatus: 'won' });
    render(<App />);
    const grid = document.querySelector('main div:first-child');

    userEvent.click(screen.getByText(/New game/i));
    expect(grid?.textContent).toEqual('');
  });
});
