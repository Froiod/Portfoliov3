import React from 'react'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import bootstrap from '../assets/bootstrap.svg'
import tailwind from '../assets/tailwindcss.svg'
import postgress from '../assets/postgresql.svg'
import sql from '../assets/sql.png'

const Skills = () => {
  return (
    <div className='mx-12 pb-12 border-8 border-gray-900'>
      <div className=''>
        <h2 className='text-2xl text-blue-100 font-semibold bg-gray-900 inline-block pb-1 pr-1 rounded-br-xl'>
          Languages:
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 space-y-2 items-center py-4'>
          <div className='flex flex-col justify-center items-center'>
            <img src={html} alt="" className='w-[40%]'/>
            <h3 className='text-xl text-center font-semibold'>HTML</h3>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={css} alt="" className='w-[40%]'/>
            <h3 className='text-xl text-center font-semibold'>CSS</h3>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={js} alt="" className='w-[36%]'/>
            <h3 className='text-xl text-center font-semibold'>JavaScript</h3>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={sql} alt="" className='w-[40%]'/>
            <h3 className='text-xl text-center font-semibold'>SQL</h3>
          </div>
        </div>
      </div>
      <div>
      <h2 className='text-2xl text-blue-100 font-semibold bg-gray-900 inline-block pb-1 pr-1 rounded-br-xl'>
          Techs:
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4  space-y-2 items-center py-4'>
          <div className='flex flex-col justify-center items-center'>
            <img src={bootstrap} alt="" className='w-[40%]'/>
            <h3 className='text-xl text-center font-semibold'>Bootstrap</h3>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={tailwind} alt="" className='w-[40%]'/>
            <h3 className='text-xl text-center font-semibold'>Tailwind</h3>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={react} alt="" className='w-[40%]'/>
            <h3 className='text-xl text-center font-semibold'>ReactJS</h3>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={postgress} alt="" className='w-[40%]'/>
            <h3 className='text-xl text-center font-semibold'>PostgreSQL</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills