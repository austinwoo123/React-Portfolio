import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
