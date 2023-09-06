import "./style.css";

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("click", (event) => {
  console.log("form click");
});

input.addEventListener("click", (event) => {
  console.log("input click");
  event.stopPropagation();
});
