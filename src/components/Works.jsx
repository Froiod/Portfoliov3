

const images = [
  {
    src: './projects/magic.png',
    title: 'Memory Game'
  },
  {
    src: './projects/digiCommerce.png',
    title: 'Digi-Commerce'
  },
  {
    src: './projects/Quote Generator.png',
    title: 'Quote Generator'
  },
  {
    src: './projects/recipeDirectory.png',
    title: 'Recipe Directory'
  },
  {
    src: './projects/feedback.png',
    title: 'Feedback App'
  },
  {
    src: './projects/weatherApp.png',
    title: 'Weather App'
  },
]

const Works = () => {
  return (
    <section className='px-12 py-16 text-center bg-gradient-to-br from-emerald-200 to-real-300' id="Works">
      <div className="md:flex justify-between items-center md:mb-6">
        <h2 className="text-2xl md:text-3xl text-center my-12 font-black text-gray-900 md:text-left">MY PROJECTS</h2>
        <a href="">
          <div className="hidden md:inline-block my-12 text-xl p-1 text-gray-900 font-semibold border-gray-900 border-2 hover:bg-[#ff4f32] hover:border-[#ff4f32] hover:text-blue-100 px-4">
            SEE ALL
          </div>
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 text-2xl text-gray-900 uppercase gap-12 lg:gap-8">
        {images.map((item) => (
          <div className="group relative overflow-hidden" key={item.title}>
            <a href="">
              <img src={item.src} alt="" className="duration-300 md:group-hover:scale-110" />
            </a>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-20">
            </div>
            <h5 className="absolute px-6 text-xl font-semibold text-blue-100 duration-300 bottom-0 md:px-10 group-hover:scale-110 group-hover:text-blue-100 bg-gray-900 group-hover:bg-[#ff4f32] rounded-tr-xl">
              {item.title}
            </h5>
          </div>
        ))}
      </div>
      <a href="">
        <div className="md:hidden my-12 text-xl p-1 text-gray-900 font-semibold border-gray-900 border-2 hover:bg-[#ff4f32] hover:border-[#ff4f32] hover:text-blue-100">
          SEE ALL
        </div>
      </a>
    </section>
  )
}

export default Works