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
theName = "Marco"; //string
console.log(theName);

/* Esercizio 4
Dichiara una variabile chiamata temperature e assegnale il valore 22.5. Successivamente, aumenta il suo valore di 5 e stampa il nuovo valore in console. */

let temperature = 22.5; //number
temperature = 22.5 + 5;
console.log(temperature);

/* Esercizio 5: Numeri
Rispondete in un commento a più righe: Che differenza c'è tra il numero 3.14 e 100 sono diversi? Perchè? Che tipo di dato è uno e che tipo di dato è l'altro? */

/* 100 è un numero intero, 3.14 è un numero decimale arrotondato e corrisponde al valore del π. Esiste una proprietà in JS dell'oggetto Math, Math.PI, che restituisce in automatico il valore del pi greco.*/

console.log(Math.PI);

/* Esercizio 6: console
Per scrivere dentro la nostra console utilizziamo la sua funzione .log() ma se scrivessimo console.info('Il mio messaggio') che differenza c'è? Perche?
Esistono altri metodi da usare con console. ? */

console.info("il mio messaggio");

/* visivamente non cambia nulla rispetto al console.log (tranne in firefox dove appare una i di fianco in caso di console.info). Console.log viene usato comunemente per debugging, mentre console.info viene utilizzato per messaggi informativi. Esistono anche messaggi con la console di tipo .warn o .error) */

console.warn("non funziona niente");
console.error("sono un errore");