import "./style.css";

const square = document.querySelector("div");
const btn = document.querySelector("button");

const becomeRed = () => {
  square.style.backgroundColor = "red";
};

square.addEventListener("mouseover", becomeRed);

square.addEventListener("mouseout", () => {
  square.style.backgroundColor = "#eee";
  square.removeEventListener("mouseover", becomeRed);
});

btn.addEventListener("click", () => {
  square.dispatchEvent(new Event("mouseover"));
});
