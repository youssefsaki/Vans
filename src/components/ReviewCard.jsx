import { star } from "../assets/icons"


const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 text-center md:py-20 max-container lg:max-w-lg">
      <img 
        src={imgURL} 
        width={130}
        height={130}
        className="rounded-full"
      />
      <p className="mt-8 sm:max-w-sm max-sm:max-w-sm info-text">
        {feedback}</p>
      <div className="flex items-center justify-center gap-2 mt-4 info-text">
        <img
          src={star} 
          alt="rating star"
          width={25}
          height={25}
        />
        <span className="text-xl">({rating})</span>
      </div>
      <h1 className="text-3xl font-bold font-palanquin">
        {customerName}
      </h1>
    </div>
  )
}

export default ReviewCard
