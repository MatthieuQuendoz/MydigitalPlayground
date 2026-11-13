import React from "react"
import { nanoid } from "nanoid"
import Die from "./Die"

export default function Tenzies() {

    const [die, setDie] = React.useState(generateAllNewDice())

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
            />
        ))
    


    return (
        <main> 
            <h1> Tenzies </h1>

        <div>
            {renderElement}
        </div>

        </main>
    )


}