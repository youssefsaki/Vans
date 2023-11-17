import { reviews } from "../constants";
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col items-center justify-center mt-8">
        <h3 className="text-4xl font-bold text-center font-palanquin">
          What Our
          <span className="text-coral-orange"> Customers </span>
          Say?
        </h3>
        <p className="max-w-lg py-6 text-center info-text">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>
      <div className="flex items-center flex-1 justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
