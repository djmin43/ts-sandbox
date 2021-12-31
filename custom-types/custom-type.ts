// here, I shall create my own custom types

type SingleNestedObjectType<T> = {
  [key in string]: {
    [key in string]: T;
  };
};

const singleNestedObject: SingleNestedObjectType<string> = {
  name: {
    first: "John",
    last: "Doe",
  },
};
