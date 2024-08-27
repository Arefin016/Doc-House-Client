import img3 from "../../../assets/Location/Frame.png"

const Location = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 my-5">
      {/* This is first card */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      {/* This is second card */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      {/* This is third card */}
      <div className="card bg-[#07332F] text-white w-96 h-[202px] shadow-xl">
        <div className="card-body flex lg:flex-row flex-col">
          <img className="w-[50px] h-[50px] ml-12 mr-5" src={img3} alt="" />
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
