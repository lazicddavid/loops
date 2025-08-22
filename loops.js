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

console.log("--------------------------");
/*
5. Dupliranje vrednosti u nizu
Dat ti je niz brojeva:

let brojevi = [2, 4, 6, 8];
Napiši kod koji kreira novi niz u kome su svi brojevi duplirani (npr. [4, 8, 12, 16]). Zatim vraća taj novi niz. Pozovi funkciju i sačuvaj u varijablu
*/

function dupliraj() {
  let brojevi = [2, 4, 6, 8];
  let duplirani = [];

  for (let i = 0; i < brojevi.length; i++) {
    let dupli = brojevi[i] * 2;
    duplirani.push(dupli);
  }
  console.log(duplirani);
  return duplirani;
}
let ishod = dupliraj();
console.log("Duplirani niz:", ishod);
console.log("--------------------------");
/*
6. Filtriranje brojeva većih od 10
Dat ti je niz:

let brojevi = [3, 15, 7, 22, 9, 18];
Napiši kod koji izdvaja i ispisuje samo brojeve veće od 10.*/

function filtriraj() {
  let brojevi = [3, 15, 7, 22, 9, 18];
  let veciOdDeset = [];

  for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] > 10) {
      veciOdDeset.push(brojevi[i]);
    }
  }

  console.log(veciOdDeset);
  return veciOdDeset;
}

let konacanIshod = filtriraj();
console.log("Brojevi veci od 10 su:", konacanIshod);
