import React from "react"
import { Link } from "react-router"
import Confetti from "react-confetti"
import "./impiccato.css"
import { clsx } from "clsx"

/*
ricreazione dell'esercizio scrimba Impiccato

Pagine:
Impiccato.jsx -> tutta la logica
Words.js -> array con tante parole


Struttura:
- header con descrizione
- Linguaggi rimanenti che in questa versione semplificherò con n° tentativi rimasti
- Casella input che in base alle lettere cliccate si riempie (oppure in base all'input tastiera)
- Caselle dei testi
-pulsante new game

Funzionalità:

    State:
    guessedLetters State -> tutte le lettere prese in input dai tasti dell'utente
    currentWord State -> Tutte le lettere della parola corretta da indovinare

    const:
    alphabet = "abcdefg..."


    derivedValue:
    countWrongLetters -> se la lettera di guessedLetters non è presente in currentWord allora fai ++ /
                        usiamo .filter e filtriamo le lettere diverse tra guessedLetters
                        che non includono currentWord e poi . length

    attemptsLeft -> 8 - countWrongLetters

    isGameLost -> se attemptsLeft === 0 e guessedLetters non include letterCorrectWord
    isGameWin -> quando trovi tutte le lettere della parola LetterCorrectWord e attemptsLeft > 0 /
                .every se ogni lettera di currentword è presente in guessedLetters
    isGameOver -> isGameWin || isGameLost

    ELEMENTS:
    wordDisplay -> con .map su currentWord mostro le lettere corrette selezionate confrontandole con guessedLetters
    keyboardElement -> con .map di aplphabet mostro tutte i pulsanti lettere che l'utente se clicca fa partire la funzione handleGuess()

    FUNZIONI:
    handleGuess() ->    se la lettera viene scelta allora disattiviamo il pulsante in modo che l'utente non piò più interagirci
                        e se la lettera è inclusa in currentWord allora la salviamo in state

    newGame() ->    resetti gli state

    PULSANTI:
    New game -> se isGameOver
*/


export default function Impiccato() {

    //State
    const [guessedLetters, setGuessedLetters] = React.useState([])
    const [currentWord, setCurrentWord] = React.useState("react")

    const keyboard = ["qwertyuiop","asdfghjkl","zxcvbnm"]

    const wordDisplay = currentWord.split("").map(letter => {
        return <span>   { guessedLetters.includes(letter) ? letter.toUpperCase() : "-"}   </span>
    })

    const keyboardElement = keyboard.map(line =>

        <div>{
            line.split("").map(letter => {

            const isWrong = !currentWord.includes(letter) && guessedLetters.includes(letter)
            const isTrue = currentWord.includes(letter)  && guessedLetters.includes(letter)



            return <button className={clsx({ wrong: isWrong, true:  isTrue})} disabled={guessedLetters.includes(letter) && true} onClick={() => handleGuess(letter)}> {letter} </button>
        })
        }</div>
    )

    function handleGuess(letter) {


        setGuessedLetters(prev => {
            return [...prev, letter]
        })
    }




    return (
        <main>
            <header>
                <h1> L'impiccato </h1>
                <p> Guess the Word</p>
            </header>

            <section>
                <p> Attempts left: 8</p>
            </section>

            <section>
                {wordDisplay}
            </section>

            <section className="keyboardEl">
                {keyboardElement}
            </section>


        </main>
    )
}
