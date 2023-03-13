import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import hero from '../assets/hero.png'
import Wave from '../assets/hand.png'
import {motion} from 'framer-motion'

const Hero = () => {

  //Animation 
  const intro = `Hello! I'm Paolo`
  const split = Array.from(intro)

  const container = {
    hidden: {opacity: 0},
    
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 * i },
    }),
  }
  
  const child = {
    // initial: {y: 0},
    // hover: { y: -10 },
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
      x: -20,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const waveVariants = {
    rotateLeft: { rotate: -15,  x: -10 },
    rotateRight: { rotate: 10,  x: 10 },
  }
  const divVariants = {
    rotateLeft: { x: -10, y: -5 },
    rotateRight: { x: 10, y: 5 },
  }
  const divTransition = {
    delay: 1.7,
    duration: 1,
    repeat: Infinity,
    repeatType: "mirror",
  }

  return (
    <section className="h-[100vh] relative flex items-center justify-between px-6 sm:px-12 font-montserrat max-w-screen-2xl mx-auto" id='Home'>

      <div className='absolute top-0 flex items-center h-[100vh] z-10'>
        <div className="text-left space-y-6 ">

          <motion.div 
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-wider text-gray-900"
            variants={container} initial="hidden" animate="visible"
          >
            {split.map((letter, index) => (
              <motion.span
              key={index}
                variants={child}
                // whileHover="hover"
                className='hover:text-indigo-600 cursor-pointer inline-block hover:rotate-4'
              >
                <motion.div
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -15 },
                  }}
                  whileHover="hover"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.div>
              </motion.span>
            ))}
          </motion.div>
          
          <motion.p
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 1.7,
                duration: 1,
                ease: "easeInOut", 
              },
            }} 
            className="text-3xl md:text-5xl  xl:text-6xl text-white bg-indigo-600 inline-block px-4 md:px-6 pt-2 pb-4 font-bold border-b-[12px] border-indigo-900 opacity-0"
          >
            a<span className="font-600 italic font-bold"> Web Developer</span>
          </motion.p>
          <motion.p
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 1.7,
                duration: 1,
                ease: "easeInOut", 
              },
            }} 
            className="text-xl md:text-2xl text-gray-900 max-w-sm font-lato md:font-medium opacity-0">
            I am a self taught developer who <br/>loves learning new things.
          </motion.p>
          
        </div>          
      </div>

      <div className='absolute top-0 right-6 sm:right-12 flex items-center h-[100vh]'>
        <motion.div
          variants={divVariants}
          initial="rotateLeft"
          animate="rotateRight"
          transition={divTransition}
          className='hidden md:flex items-center justify-end'
        >
          <motion.img src={hero} alt="" className='opacity-0'
            animate={{
              opacity: 1,
              transition: {
                delay: 1.7,
                duration: 1,
                ease: "easeInOut", 
              },
            }} 
          />
        </motion.div>
      </div>
      
      <motion.div
        variants={waveVariants}
        initial="rotateLeft"
        animate="rotateRight"
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "mirror",
        }}  
        className='absolute flex justify-end md:hidden top-8 right-12'>
        <img src={Wave} alt="" className='w-48'/>
      </motion.div>

      <motion.div className='absolute left-6 sm:left-12 bottom-12 flex space-x-6 text-2xl text-gray-900 z-10 opacity-0'
        animate={{
          opacity: 1,
          transition: {
            delay: 1.7,
            duration: 2,
            ease: "easeInOut", 
          },
        }}
      >
        <a href="https://www.facebook.com/paolo.guray" target={'_blank'}><BsFacebook/></a>
        <a href="https://github.com/Froiod" target={'_blank'}><BsGithub/></a>
        <a href="https://www.linkedin.com/in/paolo-guray-a1aa91256/" target={'_blank'}><BsLinkedin/></a>
      </motion.div>
      
    </section>
  )
}

export default Hero
