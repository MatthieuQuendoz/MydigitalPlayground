import { Link } from "react-router"


export default function Home() {
    return (
        <main>
            <header>
            <h1> My digital playGround </h1>
            <p>"H e l l o,   W o r l d!"</p>
            <p> I'm Matthieu and this is NOT a fancy website!  <br />
            My first real project was a videoGame built in 2023 during my university. <br />
            After that I started using AI for basically everything and sadly I stopped writing code. ☹️ <br/>
            AI is really cool! But not usefull for beginers and that's why I decided to start this new project.
            </p>
            <p> 2027 goal: Get a job as a software developer!</p>
            </header>

            <nav>
                <Link className="link" to="/log">Personal scrimba excercises</Link>
            </nav>
        </main>
    )
}