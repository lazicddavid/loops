let zbir = 0;

for (let i = 1; i <= 10; i++) {
  zbir = zbir + i;
}

console.log(zbir);

console.log("----------------------");

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

console.log("----------------------");

let ljudi = [
  { id: 1, ime: "Strahinja" },
  { id: 2, ime: "Nemanja" },
  { id: 3, ime: "Milica" },
  { id: 4, ime: "Nikola" },
];

for (let i = 0; i < ljudi.length; i++) {
  console.log(ljudi[i].ime);
}

console.log("----------------------");

let brojevi = [5, 12, 8, 20, 3];
let zbir = 0;

for (let i = 0; i < brojevi.length; i++) {
  zbir += brojevi[i];
}

console.log(zbir);

console.log("----------------------");

let brojevi = [5, 12, 8, 20, 3];

let max = brojevi[0];
for (let i = 1; i < brojevi.length; i++) {
  if (brojevi[i] > max) {
    max = brojevi[i];
  }
}

console.log(max);
