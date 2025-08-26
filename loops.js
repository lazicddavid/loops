/*
1. Broj reči u nizu stringova
Dat ti je niz stringova:

let recenice = ["Ovo je prva rečenica", "Druga rečenica ovde", "Treća"];
Napiši petlju koji sabira ukupan broj reči u svim rečenicama.Treba da console loguije rezultat i da ga vrati.*/
let recenice = ["Ovo je prva recenica", "Druga recenica ovde", "Treca"];
function brojReci(array) {
  let ukupno = 0;

  for (let i = 0; i < array.length; i++) {
    let reci = array[i].split(" ");
    ukupno += array.length;
  }
  return ukupno;
}
let rezultat = brojReci(recenice);
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
//napravi da ova funkcija moze da duplira bilo koji niz

function dupliraj(niz) {
  let duplirani = [];

  for (let i = 0; i < niz.length; i++) {
    let dupli = niz[i] * 2;
    duplirani.push(dupli);
  }

  return duplirani;
}
let ishod = dupliraj([2, 4, 6, 8]);
console.log("Duplirani niz:", ishod);
console.log("--------------------------");
/*
6. Filtriranje brojeva većih od 10
Dat ti je niz:

let brojevi = [3, 15, 7, 22, 9, 18];
Napiši kod koji izdvaja i ispisuje samo brojeve veće od 10.*/
//napravi da funkcija moze da ispisuje brojeve vece od 10 za bilo koji niz i vraca je
function filtriraj(niz) {
  let veciOdDeset = [];

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 10) {
      veciOdDeset.push(niz[i]);
    }
  }

  return veciOdDeset;
}

let konacanIshod = filtriraj([3, 15, 7, 22, 9, 18]);
console.log("Brojevi veci od 10 su:", konacanIshod);
console.log("--------------------------");
/*7. Spajanje imena u jedan string
Dat ti je niz imena:

let imena = ["Ana", "Marko", "Jelena"];
Napiši kod koji spaja sva imena u jedan string razdvojena zarezom, npr: "Ana, Marko, Jelena". Zatim vraća taj string i sačuvaj ga u varijablu*/
//napravi da ova funkcija moze da spaja niz bilo kojih imena u jednom stringu

let imena = ["Marko", "Ana", "Jelena"];
function spojiImena(niz) {
  let spojeno = niz.join(" , ");

  return spojeno;
}
let svaImena = spojiImena(imena);
console.log("Spojena imena su:", svaImena);
console.log("--------------------------");
/*8. Ispis dužine svakog stringa Dat ti je niz stringova: let reci = ["automobil", "kuća", "programiranje"]; Napiši kod koji ispisuje dužinu svakog stringa u nizu. Pogledaj .length*/

function duzinaReci() {
  let reci = ["automobil", "kuća", "programiranje"];

  for (let i = 0; i < reci.length; i++) {
    console.log("Rec:", reci[i], "--- duzina:", reci[i].length);
  }
}

duzinaReci();
console.log("----------------------------------------------------------------");

/*1. **Ispis svakog drugog broja od 0 do 20**
Napiši funkciju koja ispisuje svaki drugi broj počevši od 0 do 20 (npr. 0, 2, 4, ...).*/
let svakiDrugiBroj = (niz) => {
  let rezultat = [];
  for (let i = 0; i < niz.length; i += 2) {
    rezultat.push(niz[i]);
  }
  return rezultat;
};

console.log(
  svakiDrugiBroj([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
);
console.log("----------------------------------------------------------------");
/*2. **Prebrojavanje stringova dužih od 5 karaktera**
Dat ti je niz stringova:
let reci = ["auto", "programiranje", "kuća", "telefon", "sto"];
Napiši funkciju koja vraća broj reči koje imaju više od 5 karaktera.*/
let brojiDugeReci = (niz) => {
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].length > 5) {
      brojac++;
    }
  }
  return brojac;
};

let reci = ["auto", "programiranje", "kuca", "telefon", "sto"];
console.log(brojiDugeReci(reci));
console.log("----------------------------------------------------------------");
/*3. **Ispis kvadrata brojeva iz niza**
Dat ti je niz brojeva:
let brojevi = [1, 2, 3, 4, 5];
Napiši funkciju koja ispisuje kvadrat svakog broja iz niza.*/

let kvadratiBrojeva = (niz) => {
  let rezultat = [];
  for (let i = 0; i < niz.length; i++) {
    rezultat.push(niz[i] * niz[i]);
  }
  return rezultat;
};

let brojevi = [1, 2, 3, 4, 5];
console.log(kvadratiBrojeva(brojevi));
console.log("----------------------------------------------------------------");
/*6. **Ispis dupliranih vrednosti samo neparnih brojeva**
Dat ti je niz:
let brojevi = [1, 2, 3, 4, 5];
Napiši funkciju koja ispisuje duplirane vrednosti samo neparnih brojeva (npr. za 1 ispisuje 2, za 3 ispisuje 6 itd.)*/

let duplirajNeparne = (niz) => {
  let rezultat = [];
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 !== 0) {
      rezultat.push(niz[i] * 2);
    }
  }
  return rezultat;
};

let neparniBrojevi = [1, 2, 3, 4, 5];
console.log(duplirajNeparne(neparniBrojevi));
console.log("----------------------------------------------------------------");
/*7. **Prebrojavanje koliko puta se određena reč pojavljuje u nizu**
Dat ti je niz reči:
let reci = ["pas", "mačka", "pas", "ptica", "pas"];
Napiši funkciju koja vraća koliko puta se reč "pas" pojavljuje u nizu.*/

let prebrojRec = (niz, rec) => {
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] === rec) {
      brojac++;
    }
  }
  return brojac;
};

let nekeReci = ["pas", "mačka", "pas", "ptica", "pas"];
console.log(prebrojRec(nekeReci, "pas"));
console.log("----------------------------------------------------------------");
/*
8. **Ispis svake druge osobe iz niza objekata**
Dat ti je niz:
let ljudi = [ { ime: "Sara" }, { ime: "Milan" }, { ime: "Lena" }, { ime: "Stefan" }, { ime: "Jovan" } ];
Napiši funkciju koja ispisuje ime svake druge osobe iz niza.*/
let svakaDrugaOsoba = (niz) => {
  let rezultat = [];
  for (let i = 0; i < niz.length; i += 2) {
    rezultat.push(niz[i].ime);
  }
  return rezultat;
};

let ljudi = [
  { ime: "Sara" },
  { ime: "Milan" },
  { ime: "Lena" },
  { ime: "Stefan" },
  { ime: "Jovan" },
];

console.log(svakaDrugaOsoba(ljudi));
console.log("----------------------------------------------------------------");
