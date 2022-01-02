type IsString<T> = T extends string ? 'hello' : 'world'

type A = IsString<string>
type B = IsString<number>
type C = IsString<boolean>

const helloWorld: HelloWorldType = {
  hello: 'hello',
  world: 'world'
}

type HelloWorldType = {
  hello: A,
  world: C,
}