import './App.css';
import Nav from './components/Nav';
import Home from './components//Home';
import About from './components//About';
import Projects from './components//Projects';
import ContactMe from './components//ContactMe';
import Resume from './components/Resume';
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
          <Route path="/resume" element={<Resume theme={theme} />} />
        </Routes>
    </>
  );
}

export default App;

