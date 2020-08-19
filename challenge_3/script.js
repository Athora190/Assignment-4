let table = document.querySelector("table");
let a = document.getElementById("add");
a.addEventListener("click", addRow);

function addRow() {
  // create new element
  //append
  let newRow = document.createElement("tr");
  table.appendChild(newRow);
}
