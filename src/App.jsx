import React from "react"
import Tenzies from "./ScrimbaEx/Tenzies/Tenzies"
import { BrowserRouter, Routes, Route } from "react-router"
import Log from "./pages/Log"
import Home from "./pages/Home"
import Scrimba from "./pages/Scrimba"


export default function App() {
    
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/scrimba" element={<Scrimba />} />
                    <Route path="/tenzies" element={<Tenzies />} />
                </Routes>
            </BrowserRouter>
        </main>

    )
}
