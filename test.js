let arr = [23, 6, 87, 45, 13, 49];

place = 2;
itemToAdd = 77;

for (let i = arr.length - 1; i >= 0; i--) {
  arr[i + 1] = arr[i];
  if (i == place) {
    arr[place] = itemToAdd;
    break;
  }
}
console.log(arr);
