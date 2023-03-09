import { AiOutlineHome, AiOutlineUser, AiOutlineSend } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'
import {useState} from 'react'
import { Link } from "react-scroll"
import {motion} from 'framer-motion'

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
  // animation
  const navMenu = {
    opened: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      y: -200,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }
  }

  return (
    <header className="w-full fixed top-0 left-0 z-40" id="header">
      <nav className="h-12 flex justify-between items-center bg-gradient-to-b from-blue-300 to-blue-400 px-6 shadow-lg z-50">
        <a href="#" className="text-xl md:text-2xl">Paolo Guray</a>
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

        <motion.div className="absolute md:hidden w-full bg-blue-300 rounded-b-3xl shadow-xl p-6 -z-10" id="menu"
          variants={navMenu}
          initial={{opacity: 0, y: -24,}}
          animate={isOpen ? "opened" : "closed"}
        >
          <ul className="flex items-center justify-between w-full py-8 font-bold  text-gray-600">
            {menuItems.map((menu) => (
              <li key={`link-${menu.item}`} className='text-base sm:text-lg cursor-pointer hover:text-gray-800 hover:transition-all'>
                <Link activeClass="active" smooth spy to={menu.item} onClick={closeMenu} className='flex justify-center items-center gap-1'>
                  {menu.icon}
                  {menu.item}
                </Link>
              </li>
            ))}         
          </ul>
        </motion.div>
    </header>
  )
}

export default Navbar