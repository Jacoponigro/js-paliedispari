// chiedo all'utente di scegliere pari o dispari
var selezioneUtente = "pd";
while (selezioneUtente!="p" && selezioneUtente!="d") {
selezioneUtente = prompt("Scegli: pari o dispari? scrivi p o d");
}
// richiedo numero da 1 a 5 e controllo che sia compreso tra 1 e 5
var numeroUmano = 0;
while (numeroUmano < 1 || numeroUmano > 5) {
numeroUmano = parseInt(prompt("scegli un numero da 1 a 5"));
}
console.log(numeroUmano);
// genero un numero casuale per il computer compreso tra 1 e 5
var numeroComputer = Math.floor(Math.random() * 5) + 1;
console.log(numeroComputer);
// faccio la somma dei due numeri e controllo se e' pari o dispari
function pariDispari(numeroUmano, numeroComputer){
 var somma = 0
 somma = somma + numeroUmano + numeroComputer;
}
