// let a = document.getElementById("add");
// a.addEventListener("click", addRow);
let row = 0;
let column = 0;

let table = document.getElementById("table");

let rowbutton = document.getElementById("addRow");

function addRow() {
  // create new element
  //append
  let newRow = document.createElement("tr");
  // table.appendChild(newRow);
  //checks if column is 0 if so adds 1 to column if not the adds a new column
  if (column === 0) {
    let newcol = document.createElement("td");
    newRow.appendChild(newcol);
    column = 1;
  } else {
    for (let i = 0; i < column; i++) {
      let newcol = document.createElement("td");
      newRow.appendChild(newcol);
    }
  }
  table.appendChild(newRow);
  row++;
}

//track the number of row and columns

// let addRow = addRow();

// when button is pressed a column is added

function addColumn() {
  if (row === 0) {
    let newRow = document.createElement("tr");
    let newcol = document.createElement("td");

    newRow.appendChild(newcol);
    table.appendChild(newRow);
    row = 1;
  } else {
    let currentRow = document.getElementsByTagName("tr");
    let rowArray = Array.from(currentRow);
    rowArray.forEach((row) => {
      let newcol = document.createElement("td");
      row.appendChild(newcol);
    });
    row++;
  }
  column++;
}

rowbutton.addEventListener("click", (event) => {
  console.log("row added");
  addRow();
});

let addcolumn = document.getElementById("addcolumn");
addcolumn.addEventListener("click", (event) => {
  console.log("column added");
  addColumn();
});

//removing a row and column

const removeRowButton = document.getElementById("remove-row-button");

const removeRow = () => {
  // check if there are any rows
  if (row === 0) return;
  // target the last row
  const currentRows = document.getElementsByTagName("tr");
  const rowArr = Array.from(currentRows);
  const lastRow = rowArr[rowArr.length - 1];
  // remove the row
  lastRow.remove();
  // decrease row count
  row--;
};

// add event listener to remove row
removeRowButton.addEventListener("click", (event) => {
  console.log("clicked remove row");
  removeRow();
});

const removeColumn = () => {
  // check if columns, return if false
  if (column === 0) return;
  // grab currentRows
  // loop over currentRows
  const currentRows = document.getElementsByTagName("tr");
  const rowArr = Array.from(currentRows);
  // remove the last child element of each Row
  rowArr.forEach((row) => {
    row.lastElementChild.remove();
  });
  // decrease column count
  column--;
};

// target the remove column button
const removeColumnButton = document.getElementById("remove-column-button");

// add eventlistener to removeColumnButton
removeColumnButton.addEventListener("click", (event) => {
  console.log("clicked remove column");
  removeColumn();
});
