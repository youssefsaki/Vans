import { star } from '../assets/icons';


const PopularProductCard = ({imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <img
        src={imgURL} alt={name}
        className="rounded-xl w-[282px] h-[282px]"
      />
      <div className='flex items-center justify-start gap-2 mt-5'>
        <img src={star} alt="rating icon" 
            width={25}
            height={25}
        /> 
        <p className='text-xl leading-normal font-montserrat text-slate-gray'>{rating}</p>
      </div>
      <h3 className='mt-2 text-2xl font-semibold leading-normal font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-orange'>
        {price}
      </p>
    </div>
  )
}

export default PopularProductCard
