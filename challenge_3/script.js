let table = document.querySelector("table");
// let a = document.getElementById("add");
// a.addEventListener("click", addRow);
let row = 0;
let column = 0;
let rowbutton = document.getElementById("add");

function addRow() {
  // create new element
  //append
  let newRow = document.createElement("tr");
  // table.appendChild(newRow);
  //checks if column is 0 if so adds 1 to column if not the adds a new column
  if (column === 0) {
    column = 1;
  } else {
    for (let i = 0; i < columns; i++) {
      let newcol = document.createElement("td");
      newcol.innerText = " ";
      newRow.appendChild(newcol);
    }
  }
  table.appendChild(newRow);
  row++;
}

//track the number of row and columns

rowbutton.addEventListener("click", (event) => {
  console.log("row added");
  addRow();
});

// let addRow = addRow();
