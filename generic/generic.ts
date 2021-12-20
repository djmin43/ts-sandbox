type NameMultiplier = {
  <T, U>(name: T, value: U): T;
};

const myName = "jay";
const count = 5;

const multiplyNames: NameMultiplier = (myName, count) => {
  return myName;
};

multiplyNames(myName, count);
