import { describe, expect, it } from 'vitest';
import { WORD_LENGTH } from '../constants/settings';
import { getRandomWord, isWordValid } from '../utils/word-utils';

describe('getRandomWord', () => {
  it('get random word', () => {
    expect(getRandomWord().length).toEqual(WORD_LENGTH);
  });
});

describe('isWordValid', () => {
  it('word is valid', () => {
    expect(isWordValid('ninge')).toEqual(true);
  });

  it('word is not valid', () => {
    expect(isWordValid('lemon')).toEqual(false);
  });
});
