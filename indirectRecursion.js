let money = 140;
let cake = 0;

function buyCake(x) {
  if (x > 0) {
    cake++;
    buyMoreCake(x);
  } else {
    console.log("I have " + cake + " cake and " + x + " rupees left");
  }
}

function buyMoreCake(x) {
  //   cake++;
  buyCake(x - 10);
}

buyCake(money);
