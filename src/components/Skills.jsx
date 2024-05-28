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
import firebase from '../assets/firebase.svg'
import node from '../assets/nodejs.svg'
import git from '../assets/git.svg'
import python from '../assets/python-original.svg'
import pandas from '../assets/pandas-original.svg'
import numpy from '../assets/numpy-original.svg'
import linux from '../assets/linux-original.svg'
import docker from '../assets/docker-plain.svg'
const languages =  [
  {
    imgUrl: js,
    name: 'JavaScript',
  },
  {
    imgUrl: python,
    name: 'Python',
  },
  {
    imgUrl: sql,
    name: 'SQL',
  },
  {
    imgUrl: html,
    name: 'HTML',
  },
  {
    imgUrl: css,
    name: 'CSS',
  },
  {
    imgUrl: linux,
    name: 'Linux',
  },
  {
    imgUrl: docker,
    name: 'Docker',
  },
  {
    imgUrl: react,
    name: 'React.js',
  },
  {
    imgUrl: node,
    name: 'Node.js',
  },
  {
    imgUrl: pandas,
    name: 'Pandas',
  },
  {
    imgUrl: numpy,
    name: 'Numpy',
  },
  {
    imgUrl: postgress,
    name: 'PostgreSQL',
  },
  {
    imgUrl: bootstrap,
    name: 'Bootstrap',
  },
  {
    imgUrl: tailwind,
    name: 'Tailwind',
  },
  {
    imgUrl: firebase,
    name: 'Firebase',
  },
  {
    imgUrl: git,
    name: 'GIT',
  }
]


const fadeIn = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0
  }
}

const Skills = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({rootMargin: '200px 0px'});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className='mx-6 md:mx-12 font-montserrat bg-gray-700 mt-12 rounded-md shadow-lg text-white'>
  
      <div className=''>           
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-4 items-center py-4'>
          {languages.map((item) => (
            <div className='flex flex-col justify-center items-center space-y-2' key={item.name}>
              <motion.img src={item.imgUrl} alt="" className='w-[50%] ld:w-[30%]'
                ref={ref}
                variants={fadeIn}
                animate={controls}
                initial="hidden"
              />
              <h3 className='text-sm text-center font-open-sans'
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

    </div>
  )
}

export default Skills