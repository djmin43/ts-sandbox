interface Square {
   width: number
}

interface Rectangle extends Square {
   height: number
}

const squareOne: Rectangle = {
   width: 3,
   height: 3
}

const squareTwo: Square = {
   width: 3,
}

type Hello = 'hello'

type SquareOne = {
   width: string
}

type Shape = Square | Rectangle | Hello