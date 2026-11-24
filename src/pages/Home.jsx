import { Link } from "react-router"


export default function Home() {
    return (
        <main>
            <header>
            <h1> My digital playGround </h1>
            
            </header>

            <nav>
                <Link className="link" to="/log">Personal Logs</Link>
                <Link className="link" to="/scrimba">Scrimba excercises</Link>
            </nav>
        </main>
    )
}