import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Works from './components/Works'
// import Scroll from './components/Scroll'

function App() {

  return (
    <div className="App bg-[#1f2028] mx-auto">
      <Navbar />
      {/* <Scroll /> */}
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  )
}

export default App
