console.log((0.2 * 100 + 0.1 * 100) / 100);
console.log(1e6);
console.log(2 ** 3);

console.log(parseFloat(" 32.21frefz"));
parseFloat("   0.152e57  "); // 1.52e+56
parseFloat(".1"); // 0.1
parseFloat("a1"); // NaN

console.log(parseInt(" 32.21frefz", 10));
console.log(parseInt("10101", 2));

console.log(+"78");
console.log(3 + +"78");

console.log(parseInt("-."));
console.log(Number.isNaN(undefined));
