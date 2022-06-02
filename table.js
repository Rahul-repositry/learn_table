let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = input.value;

  document.querySelectorAll(".upto5").forEach((value) => {
    value.innerHTML = "";
  });
  for (i = 1; i <= 5; i++) {
    document.querySelector(".upto5").innerHTML += `<p>${inputValue} X ${i} = ${inputValue * i
      }</p>`;
  }
  for (i = 6; i <= 10; i++) {
    document.querySelectorAll(
      ".upto5"
    )[1].innerHTML += `<p>${inputValue} X ${i} = ${inputValue * i}</p>`;
  }
});
