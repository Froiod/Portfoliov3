import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Works from './components/Works'
// import Scroll from './components/Scroll'

function App() {

  return (
    <div className="App bg-blue-100 max-w-screen-2xl relative mx-auto">
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
