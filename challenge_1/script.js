// challenge one
// 1 select the section with an id of container without using querySelector. Hint use document.getElementbyId()
document.getElementById("container");

// 2 Select the section with an id of container using querySelector.
document.querySelector("#container");

// 3 Select all of the list items with a class of "second".
document.getElementsByClassName(".second");

// 4 Select a list item with a class of third, but only the list item inside of the ol tag.
let ol = document.querySelector("ol", ".third");
console.log(ol.lastElementChild);

//5 Give the section with an id of container the text "Hello!".
let text = container.innertext;
container.innertext = "Hello!";

//6 Add the class main to the div with a class of footer.
let div = document.querySelector("div .footer");
div.classList.add("main");

// 7  Remove the class main on the div with a class of footer.
div.classList.remove("main");

// 8  Create a new li element
let list = document.createElement("li");
console.log(list);

// 9 Give the li the text "four"
list.innertext = "four";
console.log(list);

// 10  Append the li to the ul element.
let ul = document.querySelector("ul");
ul.append(list);

// 11  Loop over all of the lis inside the ol tag and give them a background color of "green".
let color = document.querySelector("ol");
color.style.backgroundColor = "green";

// 12 Remove the div with a class of footer.
div.classList.remove("footer");
