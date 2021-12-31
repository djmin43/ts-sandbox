// type guard can narrow down types at if statements

// typescript knows about JS's substring prototype.
function doSomething(x: number | string) {
  if (typeof x === 'string') {
    console.log(x.substring(1))
    // typescript tells the user substing does not exist in string prototype
    // console.log(x.substing(1));
  }
  // this throws an error because it is not guaranteed that x is string
  // x.substring(1);
}

// 사용자 정의 Type Guard 함수란 단순히 어떤 인자명은 어떠한 타입이다라는 값을 리턴하는 함수일 뿐입니다.
