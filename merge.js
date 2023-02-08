let arr = [3, 45, 12, 70];
let arr2 = [9, 54, 3, 28];
let arr3 = [];

for (let i = 0; i < arr.length; i++) {
  arr3[i] = arr[i];
}
for (let i = 0; i < arr2.length; i++) {
  arr3[arr2.length + i] = arr2[i];
}
// console.log(arr3);

// MERGE TWO ARRAY USING WHILE LOOP
// BOTH THE ARRAY SHOULD BE SORTED

let data1 = [4, 7, 17, 24, 45, 56, 78];
let data2 = [2, 13, 23, 35];
let data3 = [];

let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < data1.length && d2 < data2.length) {
  if (data1[d1] < data2[d2]) {
    data3[d3] = data1[d1];
    d1++;
    d3++;
  } else {
    data3[d3] = data2[d2];
    d2++;
    d3++;
  }
}

while (d1 < data1.length) {
  data3[d3] = data1[d1];
  d1++;
  d3++;
}

console.log(data3);
