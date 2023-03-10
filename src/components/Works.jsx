

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

const Works = () => {
  return (
    <section className='px-6 sm:px-12 py-16 text-center bg-gradient-to-br from-emerald-200 to-real-300 font-montserrat' id="Works">
      <div className="md:flex justify-between items-center mb-6 md:mb-12">
        <h2 className="text-xl md:text-2xl text-center font-black text-gray-900 md:text-left tracking-wider">MY PROJECTS</h2>
        <a href="https://github.com/Froiod" target={'_blank'}>
          <div className="hidden md:inline-block text-xl p-1 text-gray-900 font-semibold border-gray-900 border-2 hover:bg-[#ff4f32] hover:border-[#ff4f32] hover:text-blue-100 px-4 tracking-wider">
            SEE ALL
          </div>
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 text-gray-900 uppercase gap-12 lg:gap-8">
        {images.map((item) => (
          <div className="group relative overflow-hidden" key={item.title}>
            <img src={item.src} alt="" className="duration-300 md:group-hover:scale-110" />
            <a href={item.link} target={'_blank'}>
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-20">
              </div>
            </a>
            <h5 className="absolute px-6 text-md md:text-lg tracking-wide font-medium text-blue-100 duration-300 bottom-0 md:px-10 group-hover:scale-110 group-hover:text-blue-100 bg-gray-900 group-hover:bg-[#ff4f32] rounded-tr-xl">
              {item.title}
            </h5>
          </div>
        ))}
      </div>
      <a href="https://github.com/Froiod" target={"_blank"}>
        <div className="md:hidden my-12 text-lg p-1 text-gray-900 font-semibold border-gray-900 border-2 hover:bg-[#ff4f32] hover:border-[#ff4f32] hover:text-blue-100 tracking-wider">
          SEE ALL
        </div>
      </a>
    </section>
  )
}

export default Works