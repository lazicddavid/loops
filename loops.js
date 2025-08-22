/*
1. Broj reči u nizu stringova
Dat ti je niz stringova:

let recenice = ["Ovo je prva rečenica", "Druga rečenica ovde", "Treća"];
Napiši petlju koji sabira ukupan broj reči u svim rečenicama.Treba da console loguije rezultat i da ga vrati.*/

function brojReci() {
  let recenice = ["Ovo je prva recenica", "Druga recenica ovde", "Treca"];
  let ukupno = 0;

  for (let i = 0; i < recenice.length; i++) {
    let reci = recenice[i].split(" ");
    ukupno += reci.length;
  }
  return ukupno;
}
let rezultat = brojReci();
console.log(rezultat);

console.log("--------------------------");

/*2. Pronalaženje osobe po imenu
Dat ti je niz objekata:

let ljudi = [
  { id: 1, ime: "Strahinja" },
  { id: 2, ime: "Nemanja" },
  { id: 3, ime: "Milica" },
  { id: 4, ime: "Nikola" }
];
Napiši kod koji pronalazi osobu čije je ime "Milica" i ispisuje njen ID.*/

console.log("--------------------------");

function pronadjiOsobu() {
  let ljudi = [
    { id: 1, ime: "Strahinja" },
    { id: 2, ime: "Nemanja" },
    { id: 3, ime: "Milica" },
    { id: 4, ime: "Nikola" },
  ];

  for (let i = 0; i < ljudi.length; i++) {
    if (ljudi[i].ime === "Milica") {
      console.log(ljudi[i].id);
    }
  }
}
pronadjiOsobu();
console.log("--------------------------");
/*4. Ispis brojeva unazad
Napiši petlju koja ispisuje brojeve od 10 do 1 unazad.*/
function unazad() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

unazad();
