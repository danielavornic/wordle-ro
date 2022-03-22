import { describe, expect, it } from 'vitest';
import { getRandomWord } from '../utils/word-utils';

describe('word-utils', () => {
  it('get random word', () => {
    expect(getRandomWord().length).toEqual(5);
  });
});
