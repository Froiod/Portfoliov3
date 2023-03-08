import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

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

  return (
    <section className='relative px-12 py-24 md:h-[100vh] flex flex-col items-center justify-center space-y-12' id='Contact'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8'>
        {/* leftside */}
        <div className='p-6 bg-gray-100 dark:bg-gray-800 sm:rounded-lg'>
          <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
            Get in touch
          </h1>
          <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-8">
            Fill in your info in the form below and I look forward to hearing from you!
          </p>
          <div className='mt-16'>
            <a href="" className='flex items-center space-x-2 text-xl italic'>
              <AiOutlineMail />
              <h3>paologuray1@gmail.com</h3>
            </a>
          </div>
        </div>

        {/* form */}
        <form className="flex flex-col justify-center" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col">
              <label htmlFor="name" className="hidden">Full Name</label>
              <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
          </div>

          <div className="flex flex-col mt-2">
              <label htmlFor="email" className="hidden">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
          </div>

          <div className="flex flex-col mt-2">
              <label htmlFor="message" className="hidden">Number</label>
              <textarea type="textbox" name="message" id="message" placeholder="Message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" required/>
          </div>

          <button type="submit" value="Send" className="md:w-32 bg-[#ff4f32] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#f7543a] transition ease-in-out duration-300">
              Submit
          </button>
        </form>
      </div>

      <div className='flex space-x-6 text-2xl md:absolute left-12 bottom-12'>
        <a href="https://www.facebook.com/paolo.guray" target={'_blank'}><BsFacebook/></a>
        <a href="https://github.com/settings/profile" target={'_blank'}><BsGithub/></a>
        <a href="https://www.linkedin.com/in/paolo-guray-a1aa91256/" target={'_blank'}><BsLinkedin/></a>
      </div>

    </section>
  )
}

export default Contact