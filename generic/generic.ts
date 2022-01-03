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

// INFER also works as generic

type UnknownArrayType<T> = T extends unknown[] ? T[number] : T
type AType = UnknownArrayType<number[]>
type BType = UnknownArrayType<string[]>
type CType = UnknownArrayType<unknown[]>
type DType = UnknownArrayType<string>

type NumberArray = [number]

type Tuple = [number, number]

type InferArrayType<T> = T extends (infer U)[] ? U : T
type EType = InferArrayType<number[]>
type FType = InferArrayType<string[]>
type GType = InferArrayType<{ hello: 'world' }>

type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never

type F = typeof Array['prototype']['slice']

