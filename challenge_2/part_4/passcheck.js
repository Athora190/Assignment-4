let button = document.getElementById("button");
button.addEventListener("click", check());
//checks if the input is correct
function check() {
  let pass = document.getElementById("pass").submit();
  if (pass.value == "12345678") {
    return alert("correct");
  } else {
    return alert("incorrect");
  }
}
