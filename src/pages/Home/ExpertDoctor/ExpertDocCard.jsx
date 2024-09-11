import { Rating } from "@smastrom/react-rating"
import { CiLocationOn } from "react-icons/ci"
import { FaAddressBook, FaDollarSign } from "react-icons/fa"
import { Link } from "react-router-dom"

const ExpertDocCard = ({ doc }) => {
  const { name, doctor_pic, specialist, reviews, _id } = doc
  const [{ rating }] = reviews
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={doctor_pic} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-start">BTP - {specialist}</p>
        <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
        <div className="divider"></div>
        {/* Location */}
        <div className="text-start flex flex-col md:flex-row items-center justify-center">
          <CiLocationOn className="text-xl mr-5"></CiLocationOn>
          <p className="">Dhanmondi, Dhaka, Bangladesh</p>
        </div>
        {/* Free Date */}
        <div className="text-start flex flex-col md:flex-row items-center justify-center">
          <FaAddressBook className="text-xl mr-5"></FaAddressBook>
          <p className="">Available On Mon, 22 December</p>
        </div>
        {/* Dollar */}
        <div className="text-start flex flex-col md:flex-row items-center justify-center">
          <FaDollarSign className="text-xl mr-5"></FaDollarSign>
          <p className="">$15</p>
        </div>
        <div className="w-full mt-2">
          <Link to={`/doctorDetailsPage/${_id}`}>
            <button className="btn bg-[#F7A582] w-full text-[#FFF] px-10 font-bold">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExpertDocCard
