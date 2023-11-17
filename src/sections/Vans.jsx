import Button from "../components/Button";
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
// import { bigShoeImage } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { bigShoe1 } from "../assets/images";
import { useState } from "react";

const Vans = () => {

  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="flex flex-col justify-center w-full min-h-screen gap-10 xl:flex-row max-container "
    >
      <div
        className="relative flex flex-col items-start justify-center w-full xl:w-[50%] max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-orange">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]
        max-sm:leading-[82px] font-bold">
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">The New Arrival</span>
          <br />
          <span className="inline-block mt-2 text-coral-orange">VANS</span> Shoes
        </h1>
        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">Discover stylish Vans Arrivals,
          quality comfort, and innovation for your 
          active life.
        </p>
        <Button  label='Shop Now'
        iconURL={arrowRight}/>

        <div
          className="flex flex-wrap items-start justify-start w-full gap-16 mt-20"
        >
          {statistics.map(stat => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div
        className="relative flex items-center justify-center flex-1 bg-center bg-cover xl:min-h-screen max-xl:py-40 bg-primary bg-hero"
      >
        <img src={bigShoeImage} alt="vans big Shoe" 
          className="relative z-10 object-contain"
          width={500}
          height={500}
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%]
        sm:left[10%] max-sm:px-6">
          {shoes.map((shoe, index)=> (
            <div key={index}>
              <ShoeCard 
                imgURL={shoe}
                bigShoeImage={bigShoeImage}
                changeBigShoeImage={(shoe) => { setBigShoeImage(shoe)}}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Vans
