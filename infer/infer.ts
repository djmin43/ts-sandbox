// INFER
// typescript infers x is number
let x = 3

class Animal {
  isAlive = true
}



class Rhino {
  type = 'animal'
}


class Elephant {
  type = 'animal'
}

class Snake {
  type = 'animal'
}

// this infers type
let zoo = [new Rhino(), new Elephant(), new Snake()]


// Contextual Typing

window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button)

}