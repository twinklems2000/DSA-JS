let arr = [9, 34, 98, 23, 7, 21, 3, 10, 0, 79];

// Traversing

// for (let i = 0; i < arr.length; i++) {
//   document.write(`<p>${arr[i]}</p>`);
// }

function getElement() {
  let element = document.getElementById("element").value;

  if (
    element >= 0 &&
    element < arr.length &&
    typeof parseInt(element) === "number"
  ) {
    alert(arr[element]);
  } else {
    alert("Enter valid input...");
  }
}
