type GetNameOne = {
  <T, U>(name: T, value: U): T;
};

type GetNameTwo<T> = (value: T) => T;

const myName = "jay";
const count = 5;

const getNameOne: GetNameOne = (myName, count) => {
  return myName;
};

const getNameTwo: GetNameTwo<number> = (value) => {
  return value;
};

getNameOne(myName, count);
