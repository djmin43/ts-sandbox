type GetNameOne = {
  <T, U>(name: T, value: U): T;
};

type GetNameTwo<T> = (value: T) => T;

type GetNameThree = <T>(value: T) => T;

const myName = "jay";
const count = 5;

const getNameOne: GetNameOne = (myName, count) => {
  return myName;
};

const getNameTwo: GetNameTwo<string> = (value) => {
  return value;
};

const getNameThree: GetNameThree = (value) => {
  return value;
};
