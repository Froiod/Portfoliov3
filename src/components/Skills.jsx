import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import bootstrap from '../assets/bootstrap.svg'
import tailwind from '../assets/tailwindcss.svg'
import postgress from '../assets/postgresql.svg'
import sql from '../assets/sql.png'

const languages =  [
  {
    imgUrl: html,
    name: 'HTML',
  },
  {
    imgUrl: css,
    name: 'CSS',
  },
  {
    imgUrl: js,
    name: 'JavaScript',
  },
  {
    imgUrl: sql,
    name: 'SQL',
  },
]
const techs =  [
  {
    imgUrl: bootstrap,
    name: 'Bootstrap',
  },
  {
    imgUrl: tailwind,
    name: 'Tailwind',
  },
  {
    imgUrl: react,
    name: 'React.js',
  },
  {
    imgUrl: postgress,
    name: 'PostgreSQL',
  },
]

const fadeIn = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0
  }
}

const Skills = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className='mx-6 sm:mx-12 pb-12 border-[6px] border-gray-800 font-montserrat'>
  
      <div className=''>      
        <h2 className='text-lg md:text-xl text-white font-medium bg-gray-800 inline-block py-2 px-2 rounded-br-xl ml-0'>
          Languages:
        </h2>      
        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 space-y-4 items-center py-4'>
          {languages.map((item) => (
            <div className='flex flex-col justify-center items-center space-y-2' key={item.name}>
              <motion.img src={item.imgUrl} alt="" className='w-[27%] ld:w-[30%]'
                ref={ref}
                variants={fadeIn}
                animate={controls}
                initial="hidden"
              />
              <h3 className='text-base text-center font-open-sans text-gray-600'
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.8,
                    duration: 1,
                    ease: "easeInOut", 
                  },
                }} 
              >
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className=''>      
        <h2 className='text-lg md:text-xl text-white font-medium bg-gray-800 inline-block py-2 px-2 rounded-br-xl ml-0'>
          Techs:
        </h2>      
        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 space-y-4 items-center py-4'>
          {techs.map((item) => (
            <div className='flex flex-col justify-center items-center space-y-2' key={item.name}>
              <motion.img src={item.imgUrl} alt="" className='w-[27%] ld:w-[30%]'
                ref={ref}
                variants={fadeIn}
                animate={controls}
                initial="hidden"
              />
              <motion.h3 className='text-base text-center font-open-sans text-gray-600 opacity-0'
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.8,
                    duration: 1,
                    ease: "easeInOut", 
                  },
                }} 
              >
                {item.name}
              </motion.h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Skills