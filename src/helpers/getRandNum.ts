export const getRandNumb = (num: number): number => {
  return Math.round(Math.random() * 100) / 100 + num;
};
