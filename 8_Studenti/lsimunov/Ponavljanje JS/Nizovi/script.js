//Nizovi.. kolekcija elemenata spremljena u jednoj varijabli. Elementi mogu biti bilo koji tip podataka(brojevi,stringovi,objekti,drugi nizovi...).
//Sintaksa
let brojevi = [1, 2, 3, 4, 5];
let imena = ["Ana", "Marko", "Jasna"];
let razno = [1, "tekst", true, null];

//Pristupanje elementima.. koristi se indeks, koji pocinje od 0
let boje = ["crvena", "zelena", "plava"];
console.log(boje[0]); //crvena
console.log(boje[2]); //plava

//Promjena vrijednosti..
let kolor = ["crvena", "zelena", "plava"];


kolor[1] = "zuta";
console.log(kolor); // ["crvena", "zuta", "plava"]

//Najcesce koristene metode..
//1.Dodavanje elemenata
let numbers = [1, 2, 3];

numbers.push(4); // dodaje na kraj
numbers.unshift(0); // dodaje na pocetak

console.log(numbers);

//2.Uklanjanje elemenata
numbers.pop(); // uklanja zadnji element
numbers.shift(); // uklanja prvi element

console.log(numbers);

//Petlja kroz niz
//1.Klasicna for petlja.. definiras brojac, postavljas uvjet kad petlja treba stati, svakom interacijom povecavas brojac..
let num = [1, 2, 3];

for (let i = 0; i < num.length; i++){
  console.log(num[i]);
}

//2.for of petlja.. direktno prolazi kroz vrijednosti niza, ne koristis indeks
for (let numb of num){
  console.log(numb);
}

//3.forEach petlja..poziva funkciju za svaki element u nizu, funkcija moze imati 3 argumenta: vrijednost, indeks, niz., cesto se koristi u modernom JS, mozes lako kombinirati s anonimnim funkcijama, super citljivo
num.forEach(function(numb){
  console.log(numb);
});

//Vjezba
let names = ["Marko", "Matej", "Ivan", "Petar"];
console.log(names); //ispisuje niz s nekoliko imena

names.push("Luka"); // dodajem ime na kraj niza
console.log(names);

names[3] = "Marin"; //mjenja vrijednost u nizu..
console.log(names); 

for(let name of names){
  console.log(name);
}

//Zadatak2..proci kroz niz brojeva i izracunati zbroj svih parnih brojeva i ispisati taj zbroj.
let numeros = [3, 7, 2, 8, 5, 10, 6];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  if ( numeros[i] % 2 === 0) {
    suma += numeros[i];
  }};
  console.log(suma);