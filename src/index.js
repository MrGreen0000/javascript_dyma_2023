const user = {
  name: "tintin",
  email: "tintin@gmail.com",
};

const promesse = fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify(user),
  headers: {
    "Content-type": "application/json",
  },
});

promesse
  .then(async (response) => {
    try {
      console.log(response);
      const body = await response.json();
      console.log(body);
    } catch (error) {
      console.log(error);
    }
  })
  .catch((err) => console.log(err));
