import React from "react";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </main>
  );
}

export default App;
