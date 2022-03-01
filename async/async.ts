function sayHello () {
  return 'hello'
}

async function sayYourName () {
  const name = await 'mike'
  console.log('middle!')
  return name
}

const a = sayYourName()
const b = sayHello()

console.log(a, b)