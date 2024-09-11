import bannerImg1 from "../../../assets/Banner/Rectangle 20075.jpg"
import bannerImg2 from "../../../assets/Banner/Rectangle 20076.jpg"
import bannerImg3 from "../../../assets/Banner/Rectangle 20077.jpg"

const Banner = () => {
  return (
    <div className="hero bg-[#07332F] min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="relative lg:w-[70%]">
          <img src={bannerImg1} className="w-[50%] rounded-lg shadow-2xl" />
          <img
            src={bannerImg2}
            className="w-[50%] absolute lg:right-[180px] lg:top-[130px] rounded-lg shadow-2xl"
          />
          <img
            src={bannerImg3}
            className="w-[50%] lg:left-[290px] lg:bottom-[100px] absolute rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-[65%]">
          <h1 className="text-7xl font-semibold text-white animate__animated animate__bounce">
            Your Best Medical <br /> Help Center
          </h1>
          <p className="py-6 text-white lg:w-3/5 animate__heartBeat">
            DocHouse connects users with healthcare professionals, offering{" "}
            convenient access to medical consultations and services from home.
          </p>
          <button className="btn bg-[#F7A582] text-[#FFF] px-10 font-bold">
            All Service
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
