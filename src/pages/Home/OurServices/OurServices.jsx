import OurServicesImg from "../../../assets/OurServices/Rectangle 20078.jpg"
import img from "../../../assets/OurServices/Rectangle 10.jpg"

const OurServices = () => {
  return (
    <div className="hero bg-[#FFF] mb-5">
      <div className="hero-content lg:mt-32 mx-28 flex-col lg:flex-row">
        <img
          src={OurServicesImg}
          className="max-w-sm mr-6 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <button className="btn bg-[#F7A582] text-[#FFF] px-10 font-bold">
            Cavity Protection
          </button>
          <div className="pt-2">
            <img src={img} alt="" />
          </div>
          <h1 className="text-3xl font-bold mt-2">
            Electro Gastrology Therapy
          </h1>
          <p className="mb-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error <br />
          </p>
          <p>
            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
          <button className="btn btn-outline mt-2 btn-primary">
            More Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurServices
