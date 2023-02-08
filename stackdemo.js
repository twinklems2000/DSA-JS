let stackArr = [];
max = 5;
currentSize = 0;

function push() {
  let newValue = document.getElementById("newEle").value;
  if (currentSize >= max) {
    alert("sorry your stack is already full you can not add " + newValue);
  } else {
    stackArr[currentSize] = newValue;
    console.log(
      "element " + currentSize + " added to stack its value is " + newValue
    );
    currentSize++;
    document.getElementById("newEle").value = "";
  }
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    stackArr.length = currentSize;
  } else {
    alert("Stack is already empty.....");
  }
}

function display() {
  console.log(stackArr);
}
