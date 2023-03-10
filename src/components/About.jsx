import frame from '../assets/ImgFrame.png'
import profile from '../assets/Profile.jpg'
import Skills from './Skills'

const About = () => {
  return (
    <section id='About' className='bg-gradient-to-br from-blue-200 to-blue-100 pb-16'>
      <div className="flex flex-col lg:h-[100vh] lg:flex-row px-6 sm:px-12 text-gray-900 py-12">
        <div className="flex flex-col justify-center relative lg:w-1/2 lg:items-center">
          <div className='relative flex items-center justify-center mt-6'>
            <img src={frame} alt="" className='absolute' />
            <img src={profile} alt="" className='scale-50 z-10 shadow-xl shadow-black'/>
          </div>
          <h1 className='text-blue-100 bg-gray-900 text-2xl md:text-3xl font-montserrat  absolute bottom-6 md:bottom-12 w-full text-center py-1'>About Me</h1>
        </div>
        <div className="flex items-center justify-center lg:w-1/2 lg:items-center lg:ml-12">
          <div className='flex flex-col space-y-4 justify-center items-center text-base sm:text-lg md:text-xl font-open-sans lg:items-center bg-blue-50 py-6 px-4 shadow-2xl rounded-lg'>
            <p className='text-justify indent-8'>
              I started my journey as a mechanical engineering undergrad, but my passion for coding soon turned into a hobby that I fell in love with. The more I learned, the more I realized that this is what I want to do for a living. After much consideration, I've made the decision to switch careers and pursue web development full-time.
            </p>
            <p className='text-justify indent-8'>
              What I love most about coding is the challenge of problem-solving. I find it deeply satisfying to tackle complex issues and come up with solutions that meet both the user's needs and the project's requirements. I am constantly learning and improving my skills in HTML, CSS, JavaScript, and other web development technologies.
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  )
}

export default About