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
  let rezultat = brojReci();
  console.log("Ukupan broj reči je:", rezultat);
}
