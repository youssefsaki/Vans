import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex items-center justify-between gap-16 max-xl:flex-col-reverse max-container">
      <div className="flex-1">
        <img 
          src={offer} alt="Shoe Promotion"
          className="object-contain w-full rounded-3xl"
          width={700}
          height={600}
        />
      </div>
        <div className="flex flex-col justify-start flex-1 w-full ">
        <h2 className="text-4xl font-bold capitalize font-palanquin">
          <span className="text-coral-orange">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">  
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.        </p>
        <p className="mt-6 info-text">
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className='mt-8'>
         <Button  label='Shop Now' iconURL={arrowRight}/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
