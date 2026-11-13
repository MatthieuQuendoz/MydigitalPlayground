import React from "react"
import { nanoid } from "nanoid"
import Die from "./Die"
import { Link } from "react-router"
import Confetti from "react-confetti"


export default function Tenzies() {


    const [die, setDie] = React.useState(generateAllNewDice())

    const gameWon = die.every(item => item.isHeld) && 
    die.every(item => item.value === die[0].value)

    const [count, setCount] = React.useState(0)
        


    function generateAllNewDice() {
        const dice = new Array(10).fill(0).map(() => ({
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
            }) 
        ) 
        return dice
    }

    const renderElement = die.map(item => (
        <Die 
            key= {item.id} 
            id= {item.id} 
            value = {item.value} 
            isHeld = {item.isHeld}
            holdDie = {() => holdDie(item.id)}
        />
    ))

    function holdDie(id) {
        setDie(prev => prev.map(item => {
           return item.id === id ? {...item, isHeld: !item.isHeld} : item
        }
        ))
    }

    function rollDice() {

        if (gameWon) {
            setCount(0)
            setDie(generateAllNewDice())
        } else {

            setCount(prev => prev = prev+1)

            setDie(prev => prev.map( item => (
            
            item.isHeld ? item : 
            {
                ...item,
                value: Math.ceil(Math.random() * 6),
            }
        ))
        )
        }
    }
    
    console.table(die)

    return (
        <main> 
            {gameWon && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={300}
                />
            )}


            <h1> Tenzies </h1>
            <p> Roll until all dice are the same. Click each die to freeze it at its current value between rolls. </p>

        <div className="pad-container">
            {renderElement}
        </div>

        <div className="button-container">
            <button className="roll" onClick={rollDice}> {gameWon ? "NEW GAME?" : "R O L L !" } </button>
            <p> Roll count: {count}</p>
        </div>

        </main>
    )


}