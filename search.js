let arr = [20, 13, 6, 78, 98, 5, 24, 37, 33, 6];

function searchElement() {
  let item = document.getElementById("searchElement").value;
  item = parseInt(item);
  //   let index ;
  //   let index = [];
  let index = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    if (item === arr[i]) {
      //   index = i;
      //   break;
      //   index.push(i);
      index[i] = i;
    }
  }
  console.log(index);
}
