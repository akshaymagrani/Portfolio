import './App.css'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import ContactMe from './ContactMe'

function App() {

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <ContactMe />
      <a href='#header' className='bg-white rounded w-12 h-10 p-3 text-black fixed bottom-3 right-3'>
        <svg id="_1-Arrow_Up" data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <title>1-Arrow Up</title>
          <path d="M26.71,10.29l-10-10a1,1,0,0,0-1.41,0l-10,10,1.41,1.41L15,3.41V32h2V3.41l8.29,8.29Z" />
        </svg>
      </a>
    </>
  )
}

export default App
