

const Hero = () => {
  return (
    <section className="h-[100vh] flex items-center bg-blue-100 px-12">
      <div className="pt-12">
        <div className="text-left space-y-6 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-800">
            Hello! I'am <span class="italic text-color1">Paolo</span>
          </h1>
          <p className="text-3xl md:text-5xl  lg:text-6xl text-blue-100 bg-gray-800 inline-block px-6 pt-2 pb-4">
            a<span class="font-600 text-color1 italic font-bold"> Web Developer</span>
          </p>
          <p className="text-xl md:text-2xl text-gray-800 max-w-sm">
            I am a self taught developer who <br/>loves learning new things.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
