function colors() {
  let data = 20;
  console.log(data);
}

function stars() {
  colors();
}

function moon() {
  stars();
}

function flowers() {
  moon();
}

function topFunction() {
  flowers();
}

topFunction();

function test(x) {
  // HEAD RECURSION
  //   console.log(x);

  if (x > 0) {
    test(x - 1);
  }

  // TAIL RECURSION
  //   console.log(x);
}

test(5);
