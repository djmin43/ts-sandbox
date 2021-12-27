const arrayify = <T extends unknown>(value: T): Array<T> => [value];

type ArrayFunctionOne = {
  <T>(value: T): [T];
};

type ArrayFunctionTwo<T> = {
  (value: T): [T];
};

const arrayFunctionerOne: ArrayFunctionOne = (value) => {
  return [value];
};

const arrayFunctionerTwo: ArrayFunctionTwo<string> = (value) => {
  return [value];
};
