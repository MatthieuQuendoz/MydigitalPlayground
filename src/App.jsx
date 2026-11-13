import React from "react"
import Tenzies from "./ScrimbaEx/Tenzies/Tenzies"
import { BrowserRouter, Routes, Route } from "react-router"
import Log from "./pages/Log"
import Home from "./pages/Home"


export default function App() {
    
    return (
        <main>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </main>

    )
}
