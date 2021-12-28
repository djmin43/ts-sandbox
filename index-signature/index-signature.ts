// if I want to type key of object, use 'Index Signature' Type. Syntax is as IndexTypeOne. One rule to follow is to make sure key is either string or type.
type IndexTypeSignatureOne = {
  [key: string]: string;
};

type IndexTypeSignatureTwo = {
  [key: number]: string;
};

type IndexTypeSignatureThree = {
  // this causes an error because it is not string or number.
  // [key: boolean]: string;
};

// If you feel string or number is not enough, you can use mapped type using 'in' syntax as below. This maps both key and value of object.
type IndexTypeMapOne = {
  [key in ObjectKeys]: string;
};
type ObjectKeys = "firstName" | "lastName" | "nationality";

type IndexTypeMapTwo = {
  [key in string]: string;
};

const sampleObjectOne: IndexTypeMapOne = {
  firstName: "jay",
  lastName: "min",
  nationality: "Canada",
};

const sampleObjectTwo: IndexTypeMapOne = {
  firstName: "jay",
  lastName: "min",
  nationality: "Korea",
  // this throws an erorr because it is out of uniton type of object keys.
  // test: "hello",
};
