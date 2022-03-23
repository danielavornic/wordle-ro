import { describe, expect, it } from 'vitest';
import { WORD_LENGTH } from '../constants/settings';
import { getRandomWord } from '../utils/word-utils';

describe('word-utils', () => {
  it('get random word', () => {
    expect(getRandomWord().length).toEqual(WORD_LENGTH);
  });
});
