import { wordlist } from '../constants/wordlist';
import { LetterStatus } from '../types/LetterStatus';

export const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * wordlist.length);
  return wordlist[randomIndex];
};

export const isWordValid = (word: string): boolean => {
  return wordlist.includes(word.toLowerCase());
};

export const computeGuess = (guess: string, answer: string): LetterStatus[] => {
  const result: LetterStatus[] = [];
  const guessArr = guess.toLowerCase().split('');
  const answerArr = answer.toLowerCase().split('');
  const answerLetterCount: Record<string, number> = {};

  guessArr.forEach((letter, index) => {
    const currAnsLetter = answer[index];
    const currAnsLetterCount = answerLetterCount[currAnsLetter];
    answerLetterCount[currAnsLetter] = currAnsLetterCount
      ? currAnsLetterCount + 1
      : 1;

    if (currAnsLetter === letter) {
      result.push('correct');
    } else if (answer.includes(letter)) {
      result.push('present');
    } else {
      result.push('absent');
    }
  });

  result.forEach((curResult, resultIndex) => {
    if (curResult !== 'present') return;

    const guessLetter = guessArr[resultIndex];

    answerArr.forEach((currAnsLetter, answerIndex) => {
      if (currAnsLetter !== guessLetter) return;
      if (result[answerIndex] === 'correct') result[resultIndex] = 'absent';
      if (answerLetterCount[guessLetter] <= 0) result[resultIndex] = 'absent';
    });

    answerLetterCount[guessLetter]--;
  });

  return result;
};
