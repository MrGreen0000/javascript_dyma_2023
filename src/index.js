const condition = true;

if (condition === true) {
  console.log("ici");
}

const age = 18;
switch (age) {
  case 21:
    console.log("Tu peux boire de l’alcool aux Etats-Unis.");
    break;
  case 18:
    console.log("Tu peux boire de l’alcool en France.");
    break;
  case 16:
    console.log("Tu peux boire de l’alcool à Cuba.");
    break;
  case 14:
    console.log("Tu peux boire de la bière en Allemagne.");
    break;
  default:
    console.log("Rien pour toi cette année.");
}
const pays = "Maroc";
switch (pays) {
  case "France":
  case "Allemagne":
  case "Italie":
  case "Espagne":
    console.log("Tu es européen !");
    break;
  case "Corée":
  default:
    console.log("Tu n’es pas européen.");
}
