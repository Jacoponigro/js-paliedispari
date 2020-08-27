// chiedo all'utente di inserire una parola
var parola = prompt("inserisci parola");
// aggiungo variabile
var verifica = true;
// creo ciclo
for (var i = 0; i < parola.length; i++) {
if (parola[i] != parola.charAt(parola.length -i -1)){
verifica = false;
}
}
// verifico se l'input è una parola
if(!isNaN(parseInt(parola))){
alert("devi inserire una parola");
}
// stampo a seconda della veridicità della variabile
if (verifica) {
  console.log("e' un palindromo");
} else {
  console.log("non e' un palindromo");
}
