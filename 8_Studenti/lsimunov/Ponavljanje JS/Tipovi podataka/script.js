//String.. je tekst unutar "" ili ''.
let ime = "Borna";
let poruka = 'Zdravo, ljudi';
console.log(ime);
console.log(typeof ime);

//Number.. moze biti cijeli ili decimalni broj.
let godine = 25;
let visina = 1.75;
console.log(godine);
console.log(typeof visina);

//Boolean.. koristi se za logiku (da/ne, istina/laz).
let ulogiran = true;
let admin = false;
console.log(admin);
console.log(typeof ulogiran);

//Undefined.. varijabla je deklarirana, ali joj nije dodijeljena vrijednost
let korisnik;
console.log(korisnik);
console.log(typeof korisnik);

//Null.. slicno kao "prazno", ali namjerno postavljeno.
let slika = null;
console.log(typeof slika);
console.log(slika);

//Zadatak #1 Korisnički profil 
let name = "Milan";
let surename = "Tvrtkovic"
const age = 77;
const spol = "Musko";
let ulogovan = true;
let profilnaSlika = null;
console.log(`Korisnik: ${name} ${surename} (${age} god, ${spol})\nUlogiran: ${ulogovan}\nProfilna slika: ${profilnaSlika}`);
