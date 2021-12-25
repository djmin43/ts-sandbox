interface A {
  x: number;
}

interface B {
  y: string;
}

function doSutff(q: A | B) {
  if ("x" in q) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
