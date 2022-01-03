"use strict";
// type A = IsString<string>
// type B = IsString<number>
// type C = IsString<boolean>
// const helloWorld: HelloWorldType = {
//   hello: 'hello',
//   world: 'world'
// }
// type HelloWorldType = {
//   hello: A,
//   world: C,
// }
// type Without<T, U> = T extends U ? 'hello' : never
// type A = Without<
//   number | string,
//   boolean
// >
// // infer keyword
// type ElementType<T> = T extends unknown[] ? T[number] : T
// type B = ElementType<unknown[]>
// type ElementTypeTwo<T> = T extends (infer U)[] ? U : T
// type C = ElementTypeTwo<number[]>
