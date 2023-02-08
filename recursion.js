function demo(x) {
  //   console.log("demo");
  if (x < 10) {
    demo(x + 1);
  }
}

let data = 0;
demo(data);

function factorial(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

let value = 7;
console.log(factorial(value));

let character = ["snow white", "repunzell", "cinderella", "tinker bell"];
let i = 0;
while (i < character.length) {
  //   console.log(character[i]);
  i++;
}
