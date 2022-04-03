/**
 * 1. O functie "equals" care primeste 2 parametrii si returneaza daca cei 2 parametrii sunt egali, strict
 */
function equals(a, b) {
    if (a === b) {
        return "a = b";
    }
}
console.log(equals(5, 5));



/**
 * 2. O functie "compare" care primeste 2 parametrii si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea 
*/ 
function compare(c, d) {
    if(c < d) {
        return "-1";
    } else if (c === d) {
        return 0;
    } else (c > d) 
        return 1;
}
console.log (compare(6, -3));



/**
 * 3. O functie "max" care primeste 2 parametrii si returneaza maximul dintre cele 2
 */
function max(e, f) {
    if(e > f) {
        return e;
    } else (f > e)
    return f;
}
console.log(max(-6, 4));


/**
 *  4. O functie "min" care primeste 2 parametrii si returneaza minimul dintre cele 2
 */

function min (g, h) {
    if (g < h) {
        return g;
    } else (h < g)
    return h;
}
console.log(min(11, 83));



/**
 *  5. O functie "suma" care primeste 1 parametru, numar intreg si returneaza suma primelor N numere naturale pozitive (exemplu: daca N este 3, trebuie sa returneze 6)
 */

function sum(nr){
    let suma = 0;
    for (let i = 1; i <= nr; i++) {
            suma += i;
        } return suma;
}
console.log(sum(6));

/**
 6. O functie "prim" care primeste 1 parametru si returneaza true/false daca N este numar prim sau nu (restul impartirii la 1 si la N ==0)
 */

 function prim(j) {
     if(j <= 0 || j === 1 ) {
         return false;
     }else if(j === 2) {
         return true;
     }else if (j%2===0){
         return false;
     }else {
        for (var x = 2; x < j; x++) {
            if (j % x === 0) {
                return false;
            }
        } return true;
     }
     }
 console.log(prim(3));

 /**
  * 7. O functie "sumaPrime" care primeste 1 parametru si returneaza suma primelor N numere prime (pentru N=5 trebuie sa returneze 2+3+5+7+11=28)
  */
  function prim(j) {
    if(j <= 0 || j === 1 ) {
        return false;
    }else if(j === 2) {
        return true;
    }else if (j%2===0){
        return false;
    }else {
       for (var x = 2; x < j; x++) {
           if (j % x === 0) {
               return false;
           }
       } return true;
    }
    }
console.log(prim(3));

 function sumaPrime(n) {
     var sum = [];
    for(let i = 0; i <= 100; i++) {
    console.log(i);
        if(i <= 0 || i === 1 || i%2===0) {
            return "This is a Nan";
        }else if(i === 2) {
            return i;
        }else {
           for (var x = 2; x < i; x++) {
               if (i % x === 0) {
                   return "This is a Nan";
               }
           } return n;
        }
        

 }
}
  console.log(sumaPrime(3));
 
 /** 
  * 8. O functie "invers" care primeste un parametru de tip numar si intoarce inversul acestuia (ca numar) (123 => 321)
  */
 
function invers(n) {
  let r = n.toString().split('').reverse().join('');
  return Math.sign(n) * parseInt(r);
}
console.log(invers(123));


/**
 * 9. O functie "produsImpare" care primeste 1 parametru si returneaza produsul primelor N numere impare pozitive (pentru N=5; returneaza 1*3*5*7*9=945) 
*/
/*function produsImpare(p) {
    let z = arr[0];
    for (let value=1; value <= 100; value++) {
        if (value%2 === 0 && value > 0) {
            return false;
        } else {
            return true;
        }
    }
}
*/

/**
 * 10. O functie "contains" care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array (rezultatul este true/false)
 */
function contains(arr, x) {
    let i = arr[0];
    for (let value of arr) {
        if (arr.includes(x)) {
            return true;
        } else {
        return false;
        }
    }
}
console.log(contains(([6, 3, 8, 3 ]), 4));


/**
 * 11. O functie "maxArray" care primeste un array si returneaza valoarea maxima (ar trebui sa functioneze si pentru numere si pentru stringuri)
 */
function maxArray (arr) {
    let m = arr[0];
    for(let value of arr) {
        if (value > m) {
            m = value;
        }
    } return m;
}
console.log(maxArray([4, 8, 5, 3, 9, 23, 74 ]));


/**
 * 12. O functie "sumMinMax" care primeste un array de numere si returneaza suma dintre valoare maxima si valoare minima
 */

 function minArray (arr) {
    let m = arr[0];
    for(let value of arr) {
        if (value < m) {
            m = value;
        }
    } return m;
}
console.log(minArray([4, 8, 5, 3, 9, 23, 74 ]));

function sumMinMax(arr) {
    return maxArray(arr);
}

console.log(sumMinMax([4, 8, 5, 3, 9, 23, 74 ]));
console.log(minArray(([4, 8, 5, 3, 9, 23, 74 ]))+maxArray(([4, 8, 5, 3, 9, 23, 74 ])));

/**
 * 13. O functie "hasDuplicates" care primeste un array si returneaza daca exista duplicate intr-un array primit ca parametru (true/false)
 */
 const yourArray = [1, 1, 2, 3, 4, 5, 5];

let duplicates = [];

const tempArray = [...yourArray].sort()

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicates.push(tempArray[i])
  }
}

console.log(duplicates);


/**
 * 14. O functie "produsPozitive" care primeste un array si returneaza produsul numerelor pozitive intr-un array primit ca parametru
 */
//let arr = [3, 7, 82, 45, 1, -5, 3];
function produsPositive(arr) {
    let rezultat = 0;
    for (let value of arr) {
        rezultat += value;
        if (value > 0) {
            return rezultat += value;
        } else {
            rezultat += value;
        }
        
    }
}console.log(produsPositive([3, 7, 82, 45, 1, -5, 3]));

/**
 * 15. O functie "palindrom" care primeste un string si returneaza daca este palindrom (inversul == originalul, ex: "1234321", "55", "787") (true/false)
 */

 function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
 }
  console.log(palindrome("55"));


////// PART 2 ////
 /**
  * 1. O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv
  */


 /**
  * 2. O functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv
  */


 /**
  * 3. O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere(daca exista)
  */


 /**
  * 4. O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate
  */


 /**
  * 5. O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile
  */


 /**
  * 6. O functie "invertAllStrings" care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
  */
 let str = "UIT SEC TOT CE STIU"
 function invertAllStrings(str) {
     let strInversat="";
     for(let ch of str) {
         strInversat = ch + strInversat;
     } return strInversat;
 }
console.log(invertAllStrings("UIT SEC TOT CE STIU"));

 /**
  * 7. Calculeaza factorialul unui numar ("factorial")
  */
  function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  console.log(factorialize(5));


 /**
  * 8. Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc")
  */


 /**
  * 9. Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc")
  */


 /**
  * 10. Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")
  */

 /**
  * 11. O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")
  */
  function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
}
  console.log(palindrome("121"));


 /**
  * 12. O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort")
  */ 


 /**
  * 13. O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc")
  */

 /**
  * 14. O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")
  */

 /**
  * 15. O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch") 
  */