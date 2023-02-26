import hero from '../assets/hero.png'
import hero2 from '../assets/hero2.png'

const Hero = () => {
  return (
    <section className="h-[100vh] flex items-center justify-between px-12">
      <div className="pt-12 z-10">
        <div className="text-left space-y-6 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-gray-800">
            Hello! I'am <span class="italic text-color1">Paolo</span>
          </h1>
          <p className="text-3xl md:text-5xl  xl:text-6xl text-blue-100 bg-gray-800 inline-block px-6 pt-2 pb-4 font-bold">
            a<span class="font-600 text-color1 italic font-bold"> Web Developer</span>
          </p>
          <p className="text-xl md:text-2xl text-gray-800 max-w-sm font-semibold">
            I am a self taught developer who <br/>loves learning new things.
          </p>
        </div>
      </div>
      <div className='absolute flex justify-end md:hidden top-12 right-12'>
        <img src={hero2} alt="" className='w-1/2'/>
      </div>
      <div className='absolute hidden md:right-12  md:flex lg:w-1/2 items-center justify-end'>
        <img src={hero} alt="" className=''/>
      </div>
      <div className='absolute flex bottom-4 right-12 md:hidden lg:w-1/2 items-center justify-end'>
        <img src={hero} alt="" className='w-1/2'/>
      </div>
    </section>
  )
}

export default Hero
