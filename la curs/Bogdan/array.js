<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <script>
      let array = [2, 3, 4, 5, 6];
      let array2 = [2, 3, "ana are mere", "x y z"];
      let positii = [0, 1, 2, 3, 4, 5, 6, 7, 8];

      for (let value of positii) {
        //codul de aici se executa pentru fiecare iteratie
      }
      for (let value of array2) {
        //codul de aici se executa pentru fiecare iteratie
        console.log(value);
      }

      let toAdd = [2, -8, 20, 100];
      let rezultat = 0;

      for (let value of toAdd) {
        //codul de aici se executa pentru fiecare iteratie
        rezultat += value;
        console.log(rezultat, value);
      }

      rezultat = 0;
      for (let i = 0; i < toAdd.length; i++) {
        let value = toAdd[i];
        //codul de aici se executa pentru fiecare iteratie
        rezultat += value;
        console.log(rezultat, value);
      }

      rezultat = 0;
      for (let i = toAdd.length - 1; i >= 0; i--) {
        let value = toAdd[i];
        //codul de aici se executa pentru fiecare iteratie
        rezultat += value;
        console.log(rezultat, value);
      }

      /** 
      for(    primul pas(initializare)  ;   conditie de functionare    ;   pasul urmator  )
      */

      for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
          console.log(i);
        }
      }

      for (let i = 0; i <= 100; i = i + 2) {
        console.log(i);
      }

      //7
      function contains(nr, what) {
        // i = (i - (i % 10)) / 10;
        for (let i = nr; i > 0; i = Math.floor(i / 10)) {
          if (i % 10 === what) {
            return true;
          }
        }
        return false;
      }
      console.log(contains(1234567089, 7));

      function bolt(nr) {
        let directie = true; //true e spre dreapta; false e spre stanga
        for (let i = 1; i <= nr; i++) {
          if (i % 7 === 0 || contains(i, 7)) {
            directie = !directie;
            console.log(i + " BOLT");
          } else if (directie) {
            console.log(i + " spre dreapta");
          } else {
            console.log(i + " spre stanga");
          }
        }
      }

      bolt(50);


      let str = "Ana are Mere";

      for (let ch of str) {
        console.log(ch);
      }

      //"Ana are mere"
      function inversa(str) {
        let strInversat = "";
        for (let ch of str) {
          strInversat = ch + strInversat; //strInversat + ch
        }
        return strInversat;
      }

      function inversa(str) {
        let strInversat = "";
        for (let i = str.length - 1; i >= 0; i--) {
          strInversat = strInversat + str[i]; //strInversat + ch
        }
        return strInversat;
      }
      function inversa(str) {
        let strInversat = "";
        for (let i = 0; i < str.length; i++) {
          strInversat = str[i] + strInversat; //strInversat + ch
        }
        return strInversat;
      }

      //Ana are mere
      function inversa(str) {
        let strInversat = "";
        for (let i = 0; i < str.length; i++) {
          strInversat = strInversat + str[str.length - 1 - i]; //strInversat + ch
        }
        return strInversat;
      }

      //let i = 0;
      //while (conditie) {
      //codul
      // i++
      //}

      console.log(inversa("Ana are mere"));
      /**
       * compute the sum of the elements of an array and display it in the console
       */
      function sum(arr) {
        let r = 0;

        for (let value of arr) {
          //codul de aici se executa pentru fiecare iteratie
          r += value;
        }
        return r;
      }
      console.log(sum([2, 3, 4]));

      /**
       * compute the maximum of the elements of an array and display it in the console
       */
      function max(arr) {
        let m = arr[0]; //-Infinity;

        for (let value of arr) {
          if (value > m) {
            m = value;
          }
        }
        return m;
      }
      console.log(max([1, 2, 3, 4, 5]));
      /**
       * compute how many times a certain element appears in an array
       */
      function occurrences(arr, val) {
        let nr = 0;

        for (let value of arr) {
          if (value === val) {
            nr++;
          }
        }
        return nr;
      }
      console.log(occurrences([1, 2, 2, 4, 2], 2));
      // \n

      /*
      [
        [1,2,3],
        [1,2,3],
        [1,2,3]
      ]
      */

      function pattern() {
        let str = "";
        let p = 0;
        for (let i = 0; i < 16; i++) {
          if ((i >= 4 && i <= 7) || (i >= 12 && i <= 15)) {
            p = (i + 1) % 2;
          } else {
            p = i % 2;
          }
          str += p;
          if (i % 4 === 3) {
            str += "\n";
          }
        }
        return str;
      }
      console.log(pattern());
    </script>
  </head>
  <body></body>
</html>