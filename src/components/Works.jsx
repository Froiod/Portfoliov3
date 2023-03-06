const images = [
  {
    src: './projects/Shortly.png',
    title: 'Picasso Painting'
  },
  {
    src: './projects/Expanding.png',
    title: 'Expanding Card'
  },
  {
    src: './projects/Quote Generator.png',
    title: 'Quote Generator'
  },
  {
    src: './projects/Shortly.png',
    title: 'Shortly'
  },
]

const Works = () => {
  return (
    <section className='px-12 py-16 text-center' id="Works">
      <h2 className="text-2xl md:text-3xl text-center my-6 font-black text-gray-900 ">My Projects</h2>
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
    </section>
  )
}

export default Works