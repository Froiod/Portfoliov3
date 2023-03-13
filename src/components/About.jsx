import frame from '../assets/frame.png'
import profile from '../assets/Profile.jpg'
import Skills from './Skills'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

// for animation
const squareVariants = {
  visible: { 
    y: 0,
    rotate: 0, 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    }, 
  },
  hidden: { 
    y: 200,
    rotate: 30,
    scale: 0.7, 
    opacity: 0, 
  }
};



const About = () => {
  
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false)
  const [ref, inView] = useInView({rootMargin: `${ isMobile ? '100px 0px' : '0px 0px'}`}); 

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 769)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  const fadeIn = {
    visible: {
      opacity: 1,
      transition: {
        delay: `${ isMobile ? 1 : 0.5}`,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0
    }
  }
  
  
  return (
    <section id='About' className='bg-gradient-to-br from-blue-200 to-blue-100 pb-16 max-w-screen-2xl mx-auto'>
      <div className="flex flex-col md:h-[100vh] md:flex-row px-6 sm:px-12 text-gray-900 py-12 mb-12">

        <div className="flex justify-center relative md:w-1/2 md:items-center my-24 md:my-auto">
          <motion.div
            ref={ref} 
            variants={squareVariants}
            animate={controls}
            initial="hidden"
            className='relative flex flex-col items-center justify-center mt-6'>
            <img src={frame} alt="" className='absolute' />
            <img src={profile} alt="" className='w-1/2 scale-90 z-10 shadow-xl shadow-black'/>
            <h1 className='text-white bg-gray-900 text-xl lg:text-2xl font-montserrat w-1/2 text-center py-1 z-10 shadow-lg shadow-black        scale-90 '>
              About Me
            </h1>
          </motion.div>
        </div>

        <div className="flex items-center justify-center md:w-1/2 md:items-center md:ml-4 lg:ml-12">
          <motion.div 
            ref={ref}
            variants={fadeIn}
            animate={controls}
            initial="hidden"
            className='flex flex-col space-y-4 justify-center items-center text-base md:text-sm lg:text-base font-open-sans lg:items-center bg-blue-50 py-6 px-4 shadow-2xl rounded-lg'>
            <p className='text-justify indent-4'>
              I started my journey as a mechanical engineering undergrad, but my passion for coding soon turned into a hobby that I fell in love with. The more I learned, the more I realized that this is what I want to do for a living. After much consideration, I've made the decision to switch careers and pursue web development full-time.
            </p>
            <p className='text-justify indent-4'>
              What I love most about coding is the challenge of problem-solving. I find it deeply satisfying to tackle complex issues and come up with solutions that meet both the user's needs and the project's requirements. I am constantly learning and improving my skills in HTML, CSS, JavaScript, and other web development technologies.
            </p>
          </motion.div>
        </div>

      </div>
      <Skills />
    </section>
  )
}

export default About
