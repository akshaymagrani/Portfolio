import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import ContactMe from './ContactMe';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  let location = useLocation();
  const [theme, setTheme] = useState(true);
  function handleTheme() {
    setTheme(prevTheme => !prevTheme);
  }
  return (
    <>
      <Nav handleTheme={handleTheme} theme={theme} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

