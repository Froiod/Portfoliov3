import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const images = [
  {
    src: './projects/magic.png',
    title: 'Memory Game',
    link: 'https://memory-game-froiod.vercel.app/'
  },
  {
    src: './projects/digiCommerce.png',
    title: 'Digi-Commerce',
    link: 'https://github.com/Froiod/Digi-commerce'
  },
  {
    src: './projects/Quote Generator.png',
    title: 'Quote Generator',
    link: 'https://random-quote-generator-peach.vercel.app/'
  },
  {
    src: './projects/recipeDirectory.png',
    title: 'Recipe Directory',
    link: 'https://github.com/Froiod/Recipe-Directory'
  },
  {
    src: './projects/feedback.png',
    title: 'Feedback App',
    link: 'https://feedback-app-pj3n-8qjxar06j-froiod.vercel.app/'
  },
  {
    src: './projects/weatherApp.png',
    title: 'Weather App',
    link: 'https://froiod.github.io/Weather-App/'
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

const Works = () => {
  
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className='relative max-w-screen-2xl mx-auto py-16 md:py-24 bg-gradient-to-b from-primary to-white' id="Works">

      {/* section border */}
      <div className='absolute top-0 w-full bg-gray-700'>
        <div className=' relative w-full flex items-center justify-between space-x-1'>
          <h1 className='text-white text-xl bg-gray-700 lg:text-2xl font-montserrat text-left py-1 px-6 md:px-12  z-10'>
            My Projects
          </h1>
          <a href="https://github.com/Froiod" target={'_blank'} className='z-10 hidden md:inline-block bg-gray-700 font-montserrat text-right py-1 px-12 text-white'>
            <div className="text-xl p-1 semibold bg-accent hover:bg-indigo-600 px-4 tracking-wider">
              SEE ALL
            </div>
          </a>
          <div className='absolute h-[1px] w-full bg-white'></div>
        </div>
      </div>

      <div className="px-6 sm:px-12 py-16 text-center font-montserrat ">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-gray-900 uppercase gap-12 lg:gap-8">
          {images.map((item) => (
            <ProjectDiv item={item} key={item.title}/>
          ))}
        </div>
        <a href="https://github.com/Froiod" target={"_blank"}>
          <div className="md:hidden my-12 text-lg p-1 text-gray-900 font-semibold border-gray-900 border-2 hover:bg-accent hover:border-accent hover:text-white tracking-wider">
            SEE ALL
          </div>
        </a>
      </div>


    </section>
  )
}

const ProjectDiv = ({ item }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({rootMargin: '-20px 0px'});

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeIn = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.7
    }
  }

  return (
    <motion.div className="group relative overflow-hidden"
      ref={ref}
      variants={fadeIn}
      animate={controls}
      initial="hidden"
    >
      <img src={item.src} alt="" className="duration-300 md:group-hover:scale-110" />
      <a href={item.link} target={'_blank'}>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-20">
        </div>
      </a>
      <h5 className="absolute px-6 text-md md:text-lg tracking-wide font-medium text-blue-100 duration-300 bottom-0 md:px-10 group-hover:scale-110 group-hover:text-white bg-accent group-hover:bg-indigo-600 rounded-tr-xl">
        {item.title}
      </h5>
    </motion.div>
   
  );
};

export default Works