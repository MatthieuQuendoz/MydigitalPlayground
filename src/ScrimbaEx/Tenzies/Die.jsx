export default function Die(props) {

    return (
        <button onClick={props.holdDie} className={props.isHeld ? "die green" : "die"}> {props.value} </button>
        
    )
}