import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Works from './components/Works'

function App() {

  return (
    <div className="App bg-blue-100">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  )
}

export default App
