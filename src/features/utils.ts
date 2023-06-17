import { Patterns } from './constants';

export const checkField = (
  typeString: keyof typeof Patterns,
  data: string | null | undefined
) => !(data && !Patterns[typeString].test(data));
