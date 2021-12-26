type OverloadTypeOne = {
  (stringValue: string): string;
  (stringValue: string, numberValue?: number): string;
};

const overLoadFunctionOne: OverloadTypeOne = (stringValue, numberValue = 3) => {
  console.log(numberValue);
  console.log(stringValue);
  return stringValue;
};
overLoadFunctionOne("hello", 2);
