import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="mt-10 font-palanquin text-4xl font-bold text-center">
        What Our <span className="text-coral-red inline-block mt-3">Customers</span> Say?
      </h3>

      <p className="mt-4 text-center info-text max-w-lg m-auto">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>

      <div className="flex flex-1 justify-evenly max-lg:flex-col gap-14">
        {reviews.map(review => (
          <div key={review.customerName} className="">
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews