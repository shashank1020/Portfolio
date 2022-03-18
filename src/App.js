import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import {Projects} from "./components/Projects/Project";
import {Contact} from './components/Contact/Contact'
import {BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos'
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
      duration : 1000,
      offset: 250,
      // once: 'false',
      mirror: true,
      disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      }
    });
  }, []);
  return (
    <Router>
      <div>
        <Preloader load={load} />
      </div>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <div>
          <Navbar />
        </div>
        <div>< Home /></div>
        <div>< About /></div>
        <div>< Projects /> </div>
        <div>< Contact /></div>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
