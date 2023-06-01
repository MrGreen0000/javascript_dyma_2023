// const tableau = ["a", "b", "c"];
// console.log(tableau[tableau.length - 3]); // c

// const tableau = [1, 2, 42];
// tableau.length = 0;
// console.log(tableau);

// tableau[0] = 1;
// console.log(tableau);

// const tableau = [10];
// const [a = 0, b = 2] = tableau;
// console.log(a);
// console.log(b);

const tableau = [1, 2, 3];
tableau.unshift(4);
const retour = tableau.unshift(5, 6);
console.log(tableau); // [5, 6, 4, 1, 2, 3]
console.log(retour); // 6
