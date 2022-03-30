import { describe, expect, it } from 'vitest';

import { WORD_LENGTH } from '../constants/settings';
import { computeGuess, getRandomWord, isWordValid } from '../utils/word-utils';

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

describe('computeGuess', () => {
  it('all letters are correct', () => {
    expect(computeGuess('bilet', 'bilet')).toEqual([
      'correct',
      'correct',
      'correct',
      'correct',
      'correct',
    ]);
  });

  it('all letters are absent', () => {
    expect(computeGuess('ninge', 'zarva')).toEqual([
      'absent',
      'absent',
      'absent',
      'absent',
      'absent',
    ]);
  });

  it('letters are absent, present and correct', () => {
    expect(computeGuess('crunt', 'arici')).toEqual([
      'present',
      'correct',
      'absent',
      'absent',
      'absent',
    ]);
  });

  it('guess has more of the same letter when the answer has only one of them', () => {
    expect(computeGuess('acasa', 'maine')).toEqual([
      'present',
      'absent',
      'absent',
      'absent',
      'absent',
    ]);
  });

  it('guess has more of the same letter when answer has only one of them correct', () => {
    expect(computeGuess('acasa', 'noima')).toEqual([
      'absent',
      'absent',
      'absent',
      'absent',
      'correct',
    ]);
  });
});
