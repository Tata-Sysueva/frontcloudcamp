import { Patterns } from './constants';

export const checkField = (
  typeString: keyof typeof Patterns,
  data: string | null | undefined
) => !(data && !new RegExp(Patterns[typeString]).test(data));
