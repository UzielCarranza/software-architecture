import React from 'react';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Articles} from "./pages/Articles";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <h1>Server-side rendering example</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/articles" element={<Articles/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
