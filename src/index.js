const regex1 = /.+/;
const regex2 = new RegExp("w+");
const regex3 = RegExp("w+");

const regexp = RegExp("test.", "g");
const chaine = "Une chaîne pour tester et effectuer des tests";
const matches = chaine.matchAll(regexp);

for (const match of matches) {
  console.log(match);
}

console.log(/a/.test("abc"));
RegExp(12).test(8768912);

RegExp("d").test("fezezf2");
/\d/.test(4);
/\d/.test("bonjour");

/\D/.test("bonjour");
/\D/.test(4);

console.log("mon_super_fichier.pdf".match(/(^\w+)\.([a-z]{3}$)/));

console.log(
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{10,}/.test("hE1!frezzfe")
);

console.log(/\d+\w\d+/.test("42_12"));
