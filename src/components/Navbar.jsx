import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import {motion} from 'framer-motion';
import { AiOutlineHome, AiOutlineUser, AiOutlineSend } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs'
import logo from '../assets/logo.png'

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

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

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
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    }
  }

  return (
    <header
      className={`${
        isSticky ? 'fixed top-0 w-full bg-white text-gray-400 shadow-md z-50' : 'fixed top-0 w-full z-50 text-gray-300'
      }`}
    >
      <nav className="px-6 md:px-12 font-montserrat max-w-screen-2xl mx-auto">

        <div className="flex w-full justify-between items-center py-4">

          <div className='-z-10'>
            <h1 className={`font-bold tracking-wider text-lg ${isSticky ? 'text-gray-900' : 'text-gray-100'}`}>PG</h1>
          </div>
          <div className="flex md:hidden">
            <button type="button" id="menu-btn" className={`${isOpen ? "open hamburger md:hidden focus:outline-none block" : "hamburger md:hidden focus:outline-none block"}`} onClick={openMenu}>
              <span className={`${isSticky ? "hamburger-top bg-gray-800" : "hamburger-top bg-gray-200"} ${isOpen ? 'bg-gray-800' : ''}`}></span>
              <span className={`${isSticky ? "hamburger-middle bg-gray-800" : "hamburger-middle bg-gray-200"}`}></span>
              <span className={`${isSticky ? "hamburger-bottom bg-gray-800" : "hamburger-bottom bg-gray-200"} ${isOpen ? 'bg-gray-800' : ''}`}></span>
            </button>
          </div>

          <ul className='hidden md:flex md:items-center md:w-auto space-x-8'>
              {menuItems.map((menu) => (
              <li key={`link-${menu.item}`} className=''>
                <Link activeClass="active" smooth spy to={menu.item} className="block mt-2 md:mt-0 text-md tracking-wider font-bold hover:text-red-400 cursor-pointer">
                {menu.item}
                </Link>
              </li> 
            ))}
          </ul>

        </div>

      </nav>

      <motion.div className="absolute top-0 md:hidden w-full bg-white rounded-b-3xl font-montserrat shadow-xl p-6 -z-10" id="menu"
          variants={navMenu}
          initial={false}
          animate={isOpen ? "opened" : "closed"}
      >
        <ul className="flex items-center justify-between w-full py-8 font-semibold  text-gray-400">
          {menuItems.map((menu) => (
            <li key={`link-${menu.item}`} className='text-sm tracking-wider cursor-pointer hover:text-gray-800 hover:transition-all'>
              <Link activeClass="active" smooth spy to={menu.item} onClick={closeMenu} className='flex flex-col justify-center items-center gap-1'>
                {menu.icon}
                {menu.item}
              </Link>
            </li>
          ))}         
        </ul>
      </motion.div>

    </header>
  );
}

export default Navbar;
