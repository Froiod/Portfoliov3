
import {useState} from 'react'
import { Link } from "react-scroll"

const menuItems = [
  {
    item: 'Home',
    icon: 'uil uil-user'
  },
  {
    item: 'About',
    icon: 'uil uil-user'
  },
  {
    item: 'Works',
    icon: 'uil uil-briefcase-alt'
  },
  {
    item: 'Contact',
    icon: 'uil uil-message'
  },
]

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
          {menuItems.map((menu) => (
           <li key={`link-${menu.item}`} className='text-gray-600 hover:translate-y-0.5 hover:transition-all cursor-pointer'>
            <Link activeClass="active" smooth spy to={menu.item}>{menu.item}</Link>
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
        <div className="md:hidden w-full bg-blue-200 rounded-b-3xl shadow-lg" id="menu">
          <ul className="flex items-center justify-center w-full py-8 space-x-8 font-bold  text-gray-900">
            {menuItems.map((menu) => (
              <li key={`link-${menu.item}`}>
                <a href={`#${menu.item}`} className=''>
                  <i className={`${menu.icon}`}> {menu.item} </i>
                </a>
              </li>
            ))}         
          </ul>
        </div>
      )}

    </header>
  )
}

export default Navbar