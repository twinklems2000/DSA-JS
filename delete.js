let arr = [20, 13, 6, 78, 98, 5, 24, 37, 33];

function removeElement() {
  let position = document.getElementById("position").value;
  position = parseInt(position);
  console.log(position);
  for (let i = position; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(arr);
}
