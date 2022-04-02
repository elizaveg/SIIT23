<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <script>
      function par(nr) {
        let rezultat;
        if (nr % 2 === 0) {
          rezultat = "par";
        } else {
          rezultat = "impar";
        }
        return rezultat;
      }
      console.log(par(5));
      let r = par(10);
      console.log(r);

      function fahrenheit(c) {
        return (c * 9) / 5 + 32;
      }
      function celsius(f) {
        return ((f - 32) * 5) / 9;
      }
      console.log(fahrenheit(0));
      console.log(fahrenheit(20));
      console.log(fahrenheit(100));
      console.log(celsius(0));
      console.log(celsius(20));
      console.log(celsius(100));

      console.log(celsius(fahrenheit(0)));
      console.log(celsius(fahrenheit(20)));
      console.log(celsius(fahrenheit(100)));

      function max(a, b) {
        if (a > b) {
          return a;
        }
        return b;
      }
      console.log(max(5, 6));
      console.log(max(10, 2));

      function max3(a, b, c) {
        if (a >= b && a >= c) {
          return a;
        } else if (b >= a && b >= c) {
          return b;
        } else {
          return c;
        }
      }
      console.log(max3(5, 6, 7));
      console.log(max3(5, 7, 6));
      console.log(max3(7, 5, 6));
      //<20 subponderal
      //<25 normal
      //<30 supraponderal
      //<40 obez
      //>40 esti bolnav
      //grutate/(inaltime*inaltime)
      //La greutatea de 20kg si inaltimea de 1.73 esti subponderal

      function indiceMasaCorporala(greutate, inaltime) {
        let imc = greutate / (inaltime * inaltime);
        let tip;
        if (imc < 20) {
          tip = "subponderal";
        } else if (imc < 25) {
          tip = "normal";
        } else if (imc < 30) {
          tip = "supraponderal";
        } else if (imc < 40) {
          tip = "obez";
        } else {
          tip = "bolnav";
        }

        return `La greutatea de ${greutate}kg si inaltimea de ${inaltime}m esti ${tip}`;
      }
      console.log(indiceMasaCorporala(55, 1.73));
      console.log(indiceMasaCorporala(65, 1.73));
      console.log(indiceMasaCorporala(75, 1.73));
      console.log(indiceMasaCorporala(85, 1.73));
      console.log(indiceMasaCorporala(95, 1.73));
      console.log(indiceMasaCorporala(105, 1.73));
      console.log(indiceMasaCorporala(115, 1.73));
      console.log(indiceMasaCorporala(125, 1.73));
      console.log(indiceMasaCorporala(135, 1.73));

      //miles/gallon -> l/100km

      function mpg(v) {
        let mile = 1.609344; //km
        let gallon = 3.78541178; //l
        let x = 5;
        return ((gallon / mile) * 100) / v;
      }
      console.log(mpg(30));
      console.log(mpg(50));
      console.log(mpg(70));

      function ariaDreptunghi(l1, l2) {
        return l1 * l2;
      }
      function ariaPatrat(l) {
        return ariaDreptunghi(l, l);
      }

      function medieScoalaGenerala(n1, n2, n3, n4, t) {
        return (((n1 + n2 + n3 + n4) / 4) * 3 + t) / 4;
      }
      function sumTriple(a, b) {
        let s = a + b;
        if (a === b) {
          return s * 3;
        } else {
          return s;
        }
      }
      function is50(a, b) {
        if (a === 50 || b === 50 || a + b === 50) {
          return true;
        } else {
          return false;
        }
      }
      function positiveNegative(a, b) {
        if (a >= 0 && b < 0) {
          return true;
        }
        if (b >= 0 && a < 0) {
          return true;
        }
        return false;
      }
      function isDivisible3Or7(a) {
        if (a % 3 === 0 || a % 7 === 0) {
          return true;
        } else {
          return false;
        }
      }

      /**
       *
       */
      function hourConverter(num) {
        let hours = (num / 60 / 60 / 60) % 60;
        let minutes = (num / 60 / 60) % 60;
        let sec = (num / 60) % 60;
        let msec = num % 60;

        return `${hours} hours ${minutes} minutes ${sec} secunds ${msec} miliseconds`;
      }
      console.log(hourConverter(100000000));
    </script>
  </head>
  <body></body>
</html>