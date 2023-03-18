console.log("chaine".length);

const a = "jesuis le soleil";
const b = a.endsWith("il");

console.log(b);

console.log("petit koala".includes("Koala"));
console.log("petit koala".includes("koala"));

console.log("istanbul".toLocaleUpperCase("tr"));

console.log("Bonjour Paul ! Bonjour Stéphane".indexOf("Bonjour", 16));
console.log("Bonjour Paul ! Bonjour Stéphane".repeat(2));
console.log("      Bonjour Paul ! Bonjour Stéphane         ".trim());

const numeroCarte = "4678628353263149";
const quatreDerniersChiffres = numeroCarte.slice(-4);

const numeroObfusque = quatreDerniersChiffres.padStart(numeroCarte.length, "*");
console.log(numeroObfusque);
