import { Link } from "react-router"

export default function Log() {
    return (
        <section>

            <p> 2027 goal: Get a job as a software developer!</p>

            <h1>Who am I?</h1>

            <p> Thursday 12 November <br />
            I'm Matthieu and this is NOT a fancy website!  <br />
            My first real project was a videoGame built in 2023 during my university. <br />
            After that I started using AI for basically everything and sadly I stopped writing code. ☹️ <br/>
            AI is really cool! But not usefull for beginers and that's why I decided to start this new project.
            </p>


            <nav>
                <Link className="link" to="/log">Personal Logs</Link>
                <Link className="link" to="/scrimba">Scrimba excercises</Link>
            </nav>
        </section>
    )
}