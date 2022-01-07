interface Person {
  name: string
}

interface Lifespan {
  birth: Date
  death?: Date
}

interface Person1 {
  name: string
}

interface Lifespan1 {
  birth: Date
  death?: Date
}

type PersonSpan = Person & Lifespan
interface PersonSpan1 extends Person {
  birth: Date
  death?: Date
}

const ps: PersonSpan = {
  name: 'Alan Turing',
  birth: new Date('1912/06/23'),
  death: new Date('1954/06/07')
}

type K = keyof Person
type L = keyof Lifespan
type M = keyof (Person | Lifespan)
type O = keyof PersonSpan