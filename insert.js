let arr = [2, 30, 67, 23, 9, 70, 78];

function addData() {
  let position = document.getElementById("position").value;
  let newData = document.getElementById("number").value;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (i == position) {
        arr[i] = newData;
      }
    }
  }
  console.log(arr);
}

//  with javascript we can use splice(position, deletedValue, newData) method to insert an newData at a particular position
