type GetNameOne = {
  <T>(name: T): T;
};

type GetNameTwo<T> = (value: T) => T;

type GetNameThree = <T>(value: T) => T;

const myName = "jay";
const count = 5;

const getNameOne: GetNameOne | GetNameThree = (myName) => {
  return myName;
};

getNameOne("hello");
