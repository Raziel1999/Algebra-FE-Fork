var password = "012345678k";

//1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni (naputak: pogledajte lodash metode nad nizovima)

// Opcija 1 - lodash

function isUnique(str) {

 return  _.uniq(str).length == str.length;

}

console.log("Opcija1: " + isUnique(password));

// Opcija 1a

function isUnique1a(str) {

 // const mySet = new Set(password);
 // console.log(mySet.size);

  return new Set(str).size == str.length;

}

console.log("Opcija 1a: " + isUnique1a(password));

// Opcija 1b

function isUnique1b(str) {

  var strChars = "";

  for(var i of str) {
    if(strChars.includes(i)) return false;
    strChars += i;
  }

  return true;

}

console.log("Opcija1b: " + isUnique1b(password));

// 2. Napisati funkciju koja provjerava da li su svi znakovi brojke

// Opcija 2 - lodash

function isNum(str) {
  //if(_.toNumber("str")) return true;
  //return false;

  return !! _.toNumber(str);
}

console.log("Opcija2: " + isNum(password));

// Opcija 2a

function isNum2a(str) {

  for(var i=0; i < str.length; i++) {
    if(str.charCodeAt(i) > 48 || str.charCodeAt(i) < 57) return false;
    return true;
  }

  

}

console.log("Opcija2a: " + isNum2a (password));