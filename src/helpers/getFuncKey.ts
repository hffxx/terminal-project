export const getFuncKey = (key: string) => {
  const keyName = key.split(" ");
  return keyName[keyName.length - 1];
};
