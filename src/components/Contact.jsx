import React, { useRef, useEffect, useState} from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { GrMailOption } from 'react-icons/gr'

const fadeIn = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8
  }
}

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        'service_cjlkvq8', 
        'template_44nqsom', 
        form.current, 
        '49Fw3ttzpwsgDI_QQ'
      )
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({rootMargin: '300px 0px'}); 

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className='relative px-6 sm:px-12 py-16 md:py-24 md:h-[100vh] flex flex-col items-center justify-center space-y-12 font-open-sans max-w-screen-2xl mx-auto bg-primary' id='Contact'>

      {/* section border */}
      <div className='absolute top-0 w-full bg-gray-700'>
        <div className=' relative w-full flex items-center justify-between space-x-1'>
          <h1 className='text-white text-xl bg-gray-700 lg:text-2xl font-montserrat text-left py-1 px-6 md:px-12  z-10'>
            Contact Me
          </h1>
          <div className='absolute h-[1px] w-full bg-white'></div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8'>
        {/* leftside */}
        <motion.div className='p-6 bg-gray-100 sm:rounded-lg'
          ref={ref}
          variants={fadeIn}
          animate={controls}
          initial="hidden"
        >
          <h1 className="text-xl sm:text-2xl text-gray-800 font-bold font-montserrat tracking-wider">
            Get in touch
          </h1>
          <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-8">
            Fill in your info in the form below and I look forward to hearing from you!
          </p>
          <div className='mt-8 md:mt-16'>
            <a href="mailto:paologuray1@gmail.com" target={'_blank'} className='flex items-center space-x-2 text-xl italic text-gray-600'>
              <GrMailOption />
              <h3>paologuray1@gmail.com</h3>
            </a>
          </div>
        </motion.div>

        {/* form */}
        <motion.form className="flex flex-col justify-center" ref={form} onSubmit={sendEmail}>
          <motion.div className="flex flex-col"
            ref={ref}
            variants={fadeIn}
            animate={controls}
            initial="hidden"
          >
              <label htmlFor="name" className="hidden">Full Name</label>
              <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-indigo-500 focus:outline-none"/>
          </motion.div>

          <motion.div className="flex flex-col mt-2"
            ref={ref}
            variants={fadeIn}
            animate={controls}
            initial="hidden"
          >
              <label htmlFor="email" className="hidden">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-indigo-500 focus:outline-none"/>
          </motion.div>

          <motion.div className="flex flex-col mt-2"
            ref={ref}
            variants={fadeIn}
            animate={controls}
            initial="hidden"
          >
              <label htmlFor="message" className="hidden">Message</label>
              <textarea type="textbox" name="message" id="message" placeholder="Message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-indigo-500 focus:outline-none" required/>
          </motion.div>
          
          <motion.button type="submit" value="Send" className="md:w-32 bg-accent  text-white font-montserrat font-semibold py-3 px-6 rounded-lg mt-4 hover:bg-indigo-700 transition ease-in-out duration-300 tracking-wider opacity-1"
            ref={ref}
            variants={fadeIn}
            animate={controls}
            initial="hidden"
          >
              Submit
          </motion.button>

        </motion.form>
      </div>

      <motion.div className='flex space-x-6 text-2xl md:absolute left-12 bottom-12 text-gray-800'
        ref={ref}
        variants={fadeIn}
        animate={controls}
        initial="hidden"
      >
        <a href="https://www.facebook.com/paolo.guray" target={'_blank'}><BsFacebook/></a>
        <a href="https://github.com/Froiod" target={'_blank'}><BsGithub/></a>
        <a href="https://www.linkedin.com/in/paolo-guray-a1aa91256/" target={'_blank'}><BsLinkedin/></a>
      </motion.div>

    </section>
  )
}

export default Contact