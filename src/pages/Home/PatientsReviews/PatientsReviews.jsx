import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import ratingImg from "../../../assets/RatingImg/Group 17.png"
import { Rating } from "@smastrom/react-rating"

import "@smastrom/react-rating/style.css"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useEffect, useState } from "react"

const PatientsReviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }, [])

  return (
    <div className="text-center my-10">
      <h2 className="text-[40px] font-bold lg:mt-24 mb-5">
        What Our Patients Says
      </h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br />{" "}
        quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo.
      </p>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-24">
                <div className="text-center justify-center items-center lg:flex mb-5">
                  <img src={ratingImg} alt="" />
                </div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div>
                  <h2 className="items-center text-3xl text-red-600">
                    Name: {review.name}
                  </h2>
                  <h2 className="items-center text-2xl">
                    {" "}
                    Designation: {review.designation}
                  </h2>
                </div>
                <p className="text-2xl">Details: {review.details}</p>
                <div className="text-center justify-center items-center lg:flex mt-5">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default PatientsReviews
