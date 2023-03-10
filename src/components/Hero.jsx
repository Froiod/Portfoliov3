import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import hero from '../assets/hero.png'
import Wave from '../assets/Wave.png'
import {motion} from 'framer-motion'

const Hero = () => {

  //Animation 
  const intro = `Hello! I'm Paolo`
  const introSplit = Array.from(intro)

  const container = {
    hidden: {opacity: 0},
    
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.4 * i },
    }),
  }

  const child = {
    visible: {
      opacity:1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }
  }

  return (
    <section className="h-[100vh] flex items-center justify-between px-6 sm:px-12 font-montserrat" id='Home'>
      <div className='absolute top-0 flex items-center h-[100vh] z-10'>
        <div className="text-left space-y-6 ">
          <motion.div 
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-wider text-gray-900"
            variants={container} initial="hidden" animate="visible"
          >
            {introSplit.map((letter, index) => (
              <motion.span
                variants={child}
                key={index}
                className='hover:text-[#ff4f32] hover:translate-y-0.5 hover:transition-all cursor-pointer'
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          
          <p className="text-3xl md:text-5xl  xl:text-6xl text-blue-100 bg-[#ff4f32] inline-block px-4 md:px-6 pt-2 pb-4 font-bold">
            a<span className="font-600 italic font-bold"> Web Developer</span>
          </p>
          <p className="text-xl md:text-2xl text-gray-900 max-w-sm font-lato md:font-medium">
            I am a self taught developer who <br/>loves learning new things.
          </p>
        </div>          
      </div>

      <div className='absolute top-0 right-12 flex items-center h-[100vh]'>
        <div className='hidden md:right-12 md:flex  items-center justify-end'>
          <img src={hero} alt="" className=''/>
        </div>
      </div>
      
      <div className='absolute flex justify-end md:hidden top-4 right-12'>
        <img src={Wave} alt="" className='w-56'/>
      </div>

      <div className='absolute left-6 sm:left-12 bottom-12 flex space-x-6 text-2xl z-10'>
        <a href="https://www.facebook.com/paolo.guray" target={'_blank'}><BsFacebook/></a>
        <a href="https://github.com/Froiod" target={'_blank'}><BsGithub/></a>
        <a href="https://www.linkedin.com/in/paolo-guray-a1aa91256/" target={'_blank'}><BsLinkedin/></a>
      </div>
      
    </section>
  )
}

export default Hero
