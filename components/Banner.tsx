import Image from 'next/image'

const Banner = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 lg:pb-32 md:gap-28 lg:py-20 xl:flex-row">

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88 text-pink-600" >Chào mừng bạn đến với Sunchies</h1>
        <p className="bold-20 text-pink-600" >| Make you Shine Like the Sun</p>
      </div>

      <div className="relative flex flex-1 items-start mt-16">
        <div className="relative w-full">
          <Image
            src="/cover-home.jpg"
            alt="Image"
            width={1080}
            height={200}
            className="w-[720px] aspect-video object-cover object-center 2xl:rounded-5xl hidden lg:block"
          />

          {/* Phần thông tin được căn góc dưới bên trái của hình ảnh */}
          <div className="absolute -top-32 -left-32 z-20 w-80 flex-col gap-8 rounded-3xl px-7 py-8 hidden lg:flex" style={{ backgroundColor: '#FFCCEA' }}>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="bold-20" style={{ color: '#8967B3' }}>NEW TREND BEAUTIFUL PRETTY SHINE 🌞
                </p>
              </div>
              <p style={{ color: '#8967B3' }}>Based in HoChiMinh City | Online Store</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Banner
