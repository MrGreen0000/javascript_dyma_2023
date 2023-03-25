// function additionner(...nombres) {
//   let resultat = 0;
//   for (let i = 0; i < nombres.length; i++) {
//     resultat += nombres[i];
//   }
//   console.log(resultat);
// }

// additionner(42, 22, 12, 23);

function calculer(operateur, ...nombres) {
  let resultat = 0;
  if (operateur === "+") {
    for (let i = 0; i < nombres.length; i++) {
      resultat += nombres[i];
    }
  }
  console.log(resultat);
}

calculer("+", 42, 22, 12, 23);
