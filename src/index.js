const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");

xhr.responseType = "json";

xhr.send();

xhr.addEventListener("load", (response) => {
  console.log(response);
  const result = xhr.response;
  console.log(xhr.response);
});

xhr.addEventListener("erro", (err) => {
  console.log(err);
});

xhr.addEventListener("progress", (progress) => {
  console.log(progress);
});
