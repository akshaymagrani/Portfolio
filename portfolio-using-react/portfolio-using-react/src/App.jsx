import './App.css'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import ContactMe from './ContactMe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contactme' element={<ContactMe />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
