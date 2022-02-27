type ObjectType = {
  a: number | string
  b?: number | null
  c?: number | null
}

function performanceTester (object: ObjectType) {
  return object.a
}


// performanceTester({ a: 1, b: null, c: null})
// performanceTester({ a: 1, b: 2, c: 3})
performanceTester({ a: 1})
// performanceTester({ a: 'hello'})
// node --print-opt-code script.js