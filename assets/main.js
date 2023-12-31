/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

/* Tools 
- random
- if else
*/

// Generare un numero random da 1 a 6 (x2)
let value1 = Math.floor(Math.random() * 6 + 1);

let value2 = Math.floor(Math.random() * 6 + 1);

console.log(value1, value2);

// confrontare i due numeri random e trovare il numero piu' alto

let winner = document.getElementById("winner");

var messagge = "";

if (value1 > value2) {
  messagge = "Hai vinto Tu!";
  console.log(messagge);
} else if (value1 < value2) {
  messagge = "Ha vinto il Computer!";
  console.log(messagge);
} else if (value1 === value2) {
  messagge = "Patta! Riprova";
  console.log(messagge);
}

// stabilire il vincitore

winner.innerHTML = messagge;

/*Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
*/

// chiedere all'utente la sua mail
const mailList = [
  "pincopallo@gmail.com",
  "pancopinco@gmail.com",
  "brucaliffo@gmail.com",
  "cip@gmail.com",
  "ciop@gmail.com",
];

console.log(mailList);

let mail = document.getElementById("e-mail");
var messaggio = "";

console.log();
document.getElementById("invia").addEventListener("click", function () {
  for (let i = 0; i < mailList.length; i++) {
    const element = mailList[i];
    // controllare che la mail sia nella lista
    if (mail.value === element) {
      messaggio = "Ok! La tua mail e' registrata";
      console.log(messaggio);
    }
  }

  if (messaggio === "") {
    messaggio = "La tua mail non e' registrata.";
    console.log(messaggio);
  }

  // stampare il messaggio

  let mail_ok = document.getElementById("mail_ok");
  mail_ok.innerHTML = messaggio;
});
