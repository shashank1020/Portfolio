import React, {useEffect, useState} from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import {Projects} from "./components/Projects/Project";
import {Contact} from './components/Contact/Contact'
import {BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./Assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos'
import {ParticlesOut} from "./components/Config/Particles.config";

function App() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 210,
            // once: 'false',
            mirror: true,
            disable: function () {
                var maxWidth = 800;
                return window.innerWidth < maxWidth;
            }
        });
    }, []);
    return (
        <Router>
            <ParticlesOut/>
            <div>
                <Preloader load={load}/>
            </div>
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar/>
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
                <div style={{
                    position: 'fixed',
                    zIndex: 1000,
                    bottom: "20px",
                    right: '20px',
                    width: "50px",
                    height: "50px"
                }}>
                    <ScrollToTop/>
                </div>
            </div>
        </Router>
    );
}

export default App;
