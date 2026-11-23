import { Link } from "react-router"


export default function Scrimba() {
    return (
        <main>
            <header>
            <h1>Scrimba</h1>
            <p> Scrimba is how I'm learning to code again, here you can found some of my excercise!</p>
            </header>

            <nav>
                <Link className="link" to="/Tenzies"> Tenzies </Link>
                <Link className="link" to="/Impiccato"> L'impiccato </Link>
            </nav>
        </main>
    )
}