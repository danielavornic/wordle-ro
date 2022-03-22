import { wordlist } from '../constants/wordlist';

export const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordlist.length);
  return wordlist[randomIndex];
};
