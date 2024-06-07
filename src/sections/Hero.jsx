import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="flex flex-col justify-center w-full min-h-screen gap-10 xl:flex-row max-container"
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>

        <Button label="Show now" iconURL={arrowRight} />

        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-palanquin font-bold">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover">
        <img src={bigShoeImg} alt="shoe collecion" width={610} height={500}
          className="object-contain relative" />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImage={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero