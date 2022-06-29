import React, { useState, useEffect } from "react";
import About from "./about/About";
import "./App.scss";
import Header from "./components/header/Header";

import Loading from "./components/Loading/Loading";
import Home from "./home/Home";
import Exp from "./experience/Exp";
import Project from "./project/Project";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      {loading === true ? (
        <Loading />
      ) : (
        <div className="App-container">
          <div className="App-home">
            <Header />
            <Home />
            <About />
            <Exp />
            <Project />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
