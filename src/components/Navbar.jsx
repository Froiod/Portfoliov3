
import {useState} from 'react'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const openMenu = (e) => {
    e.currentTarget.classList.toggle('open')
    if (toggle == false) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }

  return (
    <header className="w-full fixed z-40 top-0 left-0 " id="header">
      <nav className="h-12 flex justify-between items-center bg-blue-300 px-6 shadow-lg">
        <a href="#" className="font-yeseva text-2xl">Paolo Guray</a>
        <ul className="hidden md:flex space-x-8 font-semibold text-xl">
          {['About','Skills', 'Works', 'Contact'].map((item) => (
            <li key={`link-${item}`} className='hover:text-gray-900 hover:translate-y-0.5 hover:transition-all'>
              <a href={`#${item}`} className=''>{item}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button type="button" id="menu-btn" className=" close hamburger z-40 md:hidden focus:outline-none block" onClick={openMenu}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
      {toggle && (
        <div className="md:hidden w-full bg-gray-200 rounded-b-3xl" id="menu">
          <ul className="flex items-center justify-center w-full py-8 space-x-6 font-bold  text-gray-900">         
            <li className="nav-item">
              <a href="#About" className="nav-link">
                <i className="uil uil-user">About</i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#Skills" className="nav-link">
              <i className="uil uil-edit">Skills</i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#Works" className="nav-link">
                <i className="uil uil-briefcase-alt">Works</i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-link">
                <i className="uil uil-message">Contact Me</i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar