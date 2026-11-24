import React from "react"
import { Link } from "react-router"
import Confetti from "react-confetti"
import "./impiccato.css"
import { clsx } from "clsx"
import  getRandomWord  from "./words"

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
    const [currentWord, setCurrentWord] = React.useState(getRandomWord())


    const keyboard = ["qwertyuiop","asdfghjkl","zxcvbnm"]

    //DerivedValue
    const attemptsLeft = 8 - guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const gameLost = attemptsLeft === 0;
    const gameWin = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const gameOver = gameLost || gameWin

    console.log(gameWin)

    //Elements
    const wordDisplay = currentWord.split("").map((letter, index) => {
        return <span key={index}>   { guessedLetters.includes(letter) ? letter.toUpperCase() : "-"}   </span>
    })

    const keyboardElement = keyboard.map(line =>
        <div key={line}>{
            line.split("").map(letter => {

            const isWrong = !currentWord.includes(letter) && guessedLetters.includes(letter)
            const isTrue = currentWord.includes(letter)  && guessedLetters.includes(letter)
            return (
                <button className={clsx("keyEl",{wrong: isWrong, true:  isTrue})} 
                    key={letter}
                    disabled={guessedLetters.includes(letter) && true || gameOver} 
                    onClick={() => handleGuess(letter)}> 
                    {letter.toUpperCase()} 
                </button>
            )
        })
        }</div>
    )

    function handleGuess(letter) {


        setGuessedLetters(prev => {
            return [...prev, letter]
        })
    }

    function newGame() {
        setGuessedLetters([])
        setCurrentWord(getRandomWord())
    }


    return (
        <main>
            <header>
                <h1> L'impiccato </h1>
                <p> Guess the right Word...</p>
            </header>

            <section className="statusBar">
                {gameOver && 
                <div className="gameResult">
                    {gameWin ? "Congrats!" : "Nice try... Loser"}
                </div>

                }
            </section>


            <section className="wordDisplay">
                {wordDisplay}
            </section>

            <section className="keyboardEl">
                {keyboardElement}
            </section>

            <section className="attemptsLeft">
                <p> Attempts left: {attemptsLeft}</p>
            </section>

            {gameWin && <Confetti/>}

            <button className="newGame" onClick={newGame}> New Game </button>


            <nav className="link">
                <Link className="link" to="/">Back to the Home</Link>
                <Link className="link" to="/scrimba">Other Excercises</Link>
            </nav>
        </main>
    )
}
