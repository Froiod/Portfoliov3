import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {

  return (
    <div className="App bg-blue-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App
