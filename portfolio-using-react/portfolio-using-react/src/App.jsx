import './App.css'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import ContactMe from './ContactMe'

function App() {

  return (
    <>
      <Home />
      <About />
      <Projects />
      <ContactMe />
      <a href='#header' className='bg-white rounded w-12 h-10 p-3 text-black fixed bottom-3 right-3'>
        Home
      </a>
    </>
  )
}

export default App
