export const firstLetters = (str: string): string =>
  str
    .split(' ')
    .map((word) => word[0])
    .join('');
