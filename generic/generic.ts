const arrayify = <T extends unknown>(value: T): Array<T> => [value]

// each generic type is assigned to each call signature.
// eacg function has its own generic type
type ArrayFunctionOne = {
  <T>(value: T): [T];
  <U>(value: U): U;
};
const arrayFunctionerOne: ArrayFunctionOne = (value) => {
  return [value]
}

const arrayFunctionerThree: ArrayFunctionOne = (value) => {
  return value
}

// on the other hand, this generic is assigned to all. that being said, generic should be assigned with type.
type ArrayFunctionTwo<T> = {
  (value: string): [T];
};
const arrayFunctionerTwo: ArrayFunctionTwo<string> = (value) => {
  return [value]
}

// Generic Type Aliases
type GenericAlias<T> = {
  target: T;
  name: string;
};

const genericAliasObject: GenericAlias<number> = {
  target: 111,
  name: 'generic',
}

