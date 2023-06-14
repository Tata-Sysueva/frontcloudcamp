export const getCompletedWidth = (step: number): string => {
  switch (step) {
    case 1:
      return '0';
    case 2:
      return '50%';
    case 3:
      return '100%';
    default:
      return '0';
  }
};
