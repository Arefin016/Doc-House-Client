import img3 from "../../../assets/Location/Frame.png"
import img1 from "../../../assets/Location/Frame1.png"
import img2 from "../../../assets/Location/Frame2.png"

const Location = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 my-5 ml-10">
      {/* This is first card */}
      <div className="card bg-[#07332F] text-white w-96 h-[202px] shadow-xl">
        <div className="card-body flex lg:flex-row flex-col">
          <img className="w-[50px] h-[50px] ml-5 mr-5" src={img2} alt="" />
          <div>
            <h2 className="text-[25px] font-bold">Opening Hours</h2>
            <div className="flex flex-col">
              <h2 className="text-[20px] font-normal">
                Open 9.00 am to 5.00pm
              </h2>
              <h2 className="text-[20px] font-normal">Everyday</h2>
            </div>
          </div>
        </div>
      </div>
      {/* This is second card */}
      <div className="card bg-[#F7A582] text-white w-96 h-[202px] shadow-xl">
        <div className="card-body flex lg:flex-row flex-col">
          <img className="w-[50px] h-[50px] ml-5 mr-5" src={img1} alt="" />
          <div>
            <h2 className="text-[25px] font-bold">Our Locations</h2>
            <div className="flex flex-col">
              <h2 className="text-[20px] font-normal">Dhanmondi 17, Dhaka</h2>
              <h2 className="text-[20px] font-normal">-1200, Bangladesh</h2>
            </div>
          </div>
        </div>
      </div>
      {/* This is third card */}
      <div className="card bg-[#07332F] text-white w-96 h-[202px] shadow-xl">
        <div className="card-body flex lg:flex-row flex-col">
          <img className="w-[50px] h-[50px] ml-5 mr-5" src={img3} alt="" />
          <div>
            <h2 className="text-[25px] font-bold">Contact Us</h2>
            <div className="flex flex-col">
              <h2 className="text-[20px] font-normal">+88 01750 00 00 00 </h2>
              <h2 className="text-[20px] font-normal">+88 01750 00 00 00 </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
