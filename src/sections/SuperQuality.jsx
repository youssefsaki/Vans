import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container">
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize lg:max-w-lg font-palanquin">
          We Provide You 
          <span className="text-coral-orange"> Super</span>
          <span className="text-coral-orange"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">  
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-8'>
         <Button  label='View Details'/>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
          <img
            className="object-contain rounded-[30px]"
            src={shoe8}
            alt="Product Detail"
            width={700}
            height={700}
          />
        </div>
    </section>
  )
}

export default SuperQuality

