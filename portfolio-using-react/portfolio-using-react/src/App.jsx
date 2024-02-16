import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import ContactMe from './ContactMe';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();
  const [theme, setTheme] = useState(true);
  function handleTheme() {
    setTheme(prevTheme => !prevTheme);
  }
  return (
    <>
      <Nav handleTheme={handleTheme} theme={theme} />
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/contactme" element={<ContactMe theme={theme} />} />
        </Routes>
    </>
  );
}

export default App;

