const obj = { a: {}, b: 42, c: true, d: "test" };

console.log(JSON.stringify(obj));

const json = JSON.stringify({ a: 1, b: 2 });
const objet = JSON.parse(json);

console.log(objet);
