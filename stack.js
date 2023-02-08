let arr = [];
let max = 5;
currentSize = arr.length;

function push(newValue) {
  if (currentSize >= max) {
    alert("stack is full you can not add " + newValue);
  }
  arr[currentSize] = newValue;
  currentSize++;
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    arr.length = currentSize;
  } else {
    alert("stack is already empty ");
  }
}

push(20);
push(34);
push(76);
push(40);
push(2);
push(30);
pop();
pop();
pop();
pop();
pop();
pop();
pop();
push(47);
pop();
console.log(arr);
