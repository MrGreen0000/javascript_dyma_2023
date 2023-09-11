const promesse = fetch("https://jsonplaceholder.typicode.com/users");

promesse
  .then(async (response) => {
    console.log(response);
    try {
      const users = await response.text();
      console.log(JSON.parse(users));
    } catch (error) {
      console.log(error);
    }
  })
  .catch((err) => console.log(err));
