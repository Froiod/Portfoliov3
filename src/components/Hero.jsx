import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import hero from '../assets/hero.png'
import Wave from '../assets/Wave.png'

const Hero = () => {
  return (
    <section className="h-[100vh] flex items-center justify-between px-12" id='Home'>

      <div className="pt-12 z-10">
        <div className="text-left space-y-6 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-gray-900">
            Hello! I'am <span className="italic">Paolo</span>
          </h1>
          <p className="text-3xl md:text-5xl  xl:text-6xl text-blue-100 bg-[#ff4f32] inline-block px-6 pt-2 pb-4 font-bold">
            a<span className="font-600 italic font-bold"> Web Developer</span>
          </p>
          <p className="text-xl md:text-2xl text-gray-900 max-w-sm font-semibold">
            I am a self taught developer who <br/>loves learning new things.
          </p>
        </div>
      </div>

      <div className='absolute flex justify-end md:hidden top-12 right-12'>
        <img src={Wave} alt="" className='w-56'/>
      </div>
      <div className='absolute hidden md:right-12 md:flex lg:w-1/2 items-center justify-end'>
        <img src={hero} alt="" className=''/>
      </div>

      <div className='absolute left-12 bottom-12 flex space-x-6 text-2xl'>
        <a href="https://www.facebook.com/paolo.guray" target={'_blank'}><BsFacebook/></a>
        <a href="https://github.com/settings/profile" target={'_blank'}><BsGithub/></a>
        <a href="https://www.linkedin.com/in/paolo-guray-a1aa91256/" target={'_blank'}><BsLinkedin/></a>
      </div>
      
    </section>
  )
}

export default Hero
