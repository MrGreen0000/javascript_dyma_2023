const todo = {
  completed: false,
  title: "salut",
  userId: 10,
};

const xhr = new XMLHttpRequest();

xhr.open("POST", "https://jsonplaceholder.typicode.com/todos");

xhr.responseType = "json";

xhr.setRequestHeader("Content-type", "application/json");

xhr.send(JSON.stringify(todo));

xhr.addEventListener("load", (response) => {
  console.log(response);
  const result = xhr.response;
  console.log(result);
});

xhr.addEventListener("error", (err) => {
  console.log(err);
});

xhr.addEventListener("progress", (progress) => {
  console.log(progress);
});
