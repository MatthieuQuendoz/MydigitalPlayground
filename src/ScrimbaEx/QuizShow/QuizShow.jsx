import React from "react"
import { Link } from "react-router"
import Confetti from "react-confetti"
import "./quizShow.css"
import { clsx } from "clsx"


/*
SOLO PROJECT


Descrizione:
Allora, quando clicco il tasto dal menu degli esercizi di Scrimba, chiamiamo l'API di Trivia. 
(https://opentdb.com/api_config.php) Quindi devo capire bene cosa restituisce. 
Inoltre mi devo ricordare che per la API si usa useEffect perché React non la gestisce direttamente. 

Poi, tramite i valori che ho ricevuto, devo selezionare cinque domande casuali 
con le quattro Scelte.

Come faccio il render? 
Per ogni domanda che credo sia dentro un array, accedo alla domanda prima e poi faccio .map per ogni risposta. 
Poi credo che la cosa più semplice sia usare CLSX per determinare e modificare il colore della risposta in base a se la risposta è giusta o sbagliata. 
Il tutto mi piacerebbe averlo subito, quindi l'utente risponde a una domanda e il render si aggiorna subito su quella domanda attuale. 

Struttura del codice:
Quindi, come primo c'è la descrizione della domanda, la domanda e poi facciamo il render di delle scelte e questo lo dobbiamo ripetere per cinque domande casuali. 
Quindi probabilmente usiamo un for loop con i < 5 in cui ogni volta facciamo per il render. 

Poi, controlli. Ogni volta che l'utente clicca su un bottone delle risposte. Facciamo handleClick. 
Qua paragoniamo il click ricevuto del bottone con il click corretto. Se sono uguali, restituiamo la classe true, se sono diversi, la classe false, qualcosa del genere. 

Una domanda è come gestiamo i singoli bottoni, ovvero non i singoli bottoni perché sono uguali, però i bottoni per ogni domanda. È una cosa complicata o è una cosa che ho già fatto? 

Possiamo anche noi immagazzinare le risposte corrette in una variabile che le facciamo visualizzare con lo score finale. 

Il bottone play again ancora una volta è semplicemente un reset dello state. 

Quindi in state abbiamo l'array che ci arriva dall'API di Trivia, che appunto devo capire bene cosa restituisce. 
E inoltre abbiamo un altro state che è il timer, perché voglio aggiungere timer 60 secondi per tutte le domande. Quindi, se il timer arriva a zero, game over, quindi le domande risultano sbagliate. 
Oppure game over se l'utente ha cliccato tutti i cinque bottoni. 
Ovviamente i cinque bottoni, cioè una volta che l'utente clicca un bottone, quella riga si disabilita, nel senso non può cliccare un altro bottone. 

*/

export default function QuizShow() {

    //api
    React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=1")
    .then(res => res.json())
    .then(data =>  {
        setResponse(data.results[0])
        console.log(data.results[0])
    })

    },[])

    //State
    const [response, setResponse] = React.useState([])
    

    return (
        <main>
            <header>
                <h1> Quiz Show </h1>
                <p> Can you guess them all? You've got 60 seconds...</p>
            </header>

           <p> {response.question}</p> 

            <nav className="link">
                <Link className="link" to="/">Back to the Home</Link>
                <Link className="link" to="/scrimba">Other Excercises</Link>
            </nav>
        </main>
    )
}
