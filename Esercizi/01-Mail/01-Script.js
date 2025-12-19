//* 1) TRACCIA

/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email.
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/ 


//* 2) RACCOLTA DATI

// Devo creare una lista di email
// Chiedere all'utente la sua e-mail
// Devo controllare se la e-mail è presente nella lista
// Stampare l'esito con ciclo for
//! array includes non consentito


//* 3) PSEUDO CODICE

// SE l'utente è nella lista degli invita
//        puo accedere = true
//    ALTRIMENTI
// Non può accedere = false
// scorere la lista usando for
//   PER OGNI INVITATI
//    SE la mail è uguale alla mail dell'utente
//          allora stampo autorizzato ad accedere


//* 4) ELABORAZIONE

const mailInvitati = ["gabriela@invitato.it", "stefano@invitato.it", "artur@invitato.it","marco@invitato.it", "tiziano@invitato.it",];
console.table(mailInvitati);

const mailUtente = prompt("Qual'è la tua e-mail?");
//* 5) OUTPUT

