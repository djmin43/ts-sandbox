import axios from 'axios'

function first () {
  console.log('1')
}
function second () {
  console.log('2')
}
function third () {
  console.log('3')
}
function fourth () {
  console.log('4')
}

async function randomNumber () {
  const [number] = (await axios.get('http://www.randomnumberapi.com/api/v1.0/randomnumber')).data
  console.log(number)
}

function scope () {
  first()
  second()
  randomNumber()
  third()
  fourth()
}

scope()
