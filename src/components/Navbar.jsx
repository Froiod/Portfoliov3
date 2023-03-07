import { AiOutlineHome, AiOutlineUser, AiOutlineSend } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'
import {useState} from 'react'
import { Link } from "react-scroll"

const menuItems = [
  {
    item: 'Home',
    icon: <AiOutlineHome/>
  },
  {
    item: 'About',
    icon: <AiOutlineUser/>
  },
  {
    item: 'Works',
    icon: <BsBriefcase/>
  },
  {
    item: 'Contact',
    icon: <AiOutlineSend/>
  },
]

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [toggle, setToggle] = useState(false)

  const openMenu = (e) => {
    if (toggle == false) {
      setToggle(true)
      setOpen(true)
    } else {
      setToggle(false)
      setOpen(false)
    }
  }

  const closeMenu = () => {
    setToggle(false)
    setOpen(false) 
  }

  return (
    <header className="w-full fixed z-40 top-0 left-0 " id="header">
      <nav className="h-12 flex justify-between items-center bg-blue-300 px-6 shadow-lg">
        <a href="#" className="font-yeseva text-2xl">Paolo Guray</a>
        <ul className="hidden md:flex space-x-8 font-semibold text-xl">
          {menuItems.map((menu) => (
           <li key={`link-${menu.item}`} className='text-gray-600 hover:text-gray-800 hover:transition-all cursor-pointer'>
            <Link activeClass="active" smooth spy to={menu.item}>{menu.item}</Link>
           </li> 
          ))}
        </ul>

        <div className="md:hidden">
          <button type="button" id="menu-btn" className={`${isOpen ? "open" : ""} hamburger z-40 md:hidden focus:outline-none block'`} onClick={openMenu}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      {toggle && (
        <div className="md:hidden w-full bg-blue-300 rounded-b-3xl shadow-lg" id="menu">
          <ul className="flex items-center justify-center w-full py-8 space-x-8 font-bold  text-gray-600">
            {menuItems.map((menu) => (
              <li key={`link-${menu.item}`} className='text-lg cursor-pointer hover:text-gray-800 hover:transition-all'>
                <Link activeClass="active" smooth spy to={menu.item} onClick={closeMenu} className='flex justify-center items-center gap-1'>
                  {menu.icon}
                  {menu.item}
                </Link>
              </li>
            ))}         
          </ul>
        </div>
      )}

    </header>
  )
}

export default Navbar