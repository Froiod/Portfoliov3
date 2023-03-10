import React from 'react'
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


const Skills = () => {
  return (
    <div className='mx-6 sm:mx-12 pb-12 border-[6px] border-gray-900 font-montserrat'>
  
      <div className=''>      
        <h2 className='text-lg md:text-xl text-white font-medium bg-gray-900 inline-block py-2 pr-2 rounded-br-xl'>
          Languages:
        </h2>      
        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 space-y-4 items-center py-4'>
          {languages.map((item) => (
            <div className='flex flex-col justify-center items-center space-y-2' key={item.name}>
              <img src={item.imgUrl} alt="" className='w-[27%] ld:w-[30%]'/>
              <h3 className='text-base text-center font-open-sans text-gray-600'>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className=''>      
        <h2 className='text-lg md:text-xl text-white font-medium bg-gray-900 inline-block py-2 pr-2 rounded-br-xl'>
          Techs:
        </h2>      
        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 space-y-4 items-center py-4'>
          {techs.map((item) => (
            <div className='flex flex-col justify-center items-center space-y-2' key={item.name}>
              <img src={item.imgUrl} alt="" className='w-[27%] ld:w-[30%]'/>
              <h3 className='text-base text-center font-open-sans text-gray-600'>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Skills