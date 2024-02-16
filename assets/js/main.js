/* Esercizio 1
Dichiara una variabile chiamata number e assegnale il valore 100. Stampa il valore della variabile in console. */

const number = 100; //number
console.log(number);

/* Esercizio 2
Dichiara una costante chiamata PI e assegnale il valore di 3.14. Stampa il valore della costante in console. */

const PI = 3.14; //number
console.log(PI);

/* Esercizio 2/B
Prova ad assegnare alla costante chiamata PI il valore di 3.1416. Sai dire cosa succede? */

/* PI = 3.1416 */


/* - Se ho usato const, la console mi darà un errore perchè const non consente la riassegnazione del valore della variabile. 
- Se ho usato let o var, il valore della variabile verrà riassegnato.  */


/* Esercizio 2/C
Dichiara una variabile chiamata radius e assegnale il valore 8.
Moltiplica radius x 2 e x PI e assegna il valore a una variabile di nome circle.
Stampa il valore della variabile circle in console. */

const radius = 8; //number
const circle = radius * 2 * PI;
console.log(circle);

/*  Esercizio 3
Dichiara una variabile chiamata name e assegnale il valore "Carlo".
Successivamente, modifica il valore della variabile in "Marco".
Stampa il nuovo valore in console. */

let theName = "Carlo"; //string
theName = "Marco"
console.log(theName);