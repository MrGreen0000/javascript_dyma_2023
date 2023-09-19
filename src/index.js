const form = document.querySelector("form");
const input = document.querySelector("form > input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  input.value = "";

  const formData = new FormData(form);
  console.log(formData);

  formData.append("email", "bob@gmail.com");
  console.log(formData.get("email"));
  console.log(formData.has("email"));
  for (let pair of formData) {
    console.log(pair);
  }

  fetch("/test", {
    method: "POST",
    body: formData,
  });
});
