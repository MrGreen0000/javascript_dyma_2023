import "./style.css";

const p = document.querySelector(".text-primary");

// console.log(p);

// p.remove();

const span = document.createElement("span");
span.innerHTML = "<h1>Salut</h1>";

// p.parentElement.replaceChild(span, p);

p.replaceWith(span);
