import signInImg from "../../assets/SignUp/Frame.png"

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
  }

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left bg-[#07332F] lg:w-[788px] lg:h-[575px] mr-10 border border-green-700">
          <img src={signInImg} alt="" />
        </div>
        <div className="card bg-base-100 border border-[#E6E6E6] w-full max-w-sm shrink-0 shadow-2xl lg:w-1/2">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-center text-[30px] font-bold lg:my-8">
              Sign in to Doc House
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-[20px]">
                  Username or Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your username or address"
                className="input input-bordered bg-[#F3F3F3] mb-5"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-[20px]">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered bg-[#F3F3F3] mb-5"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <input
                className="btn bg-[#F7A582] text-[#FFF] text-[18px] font-bold"
                type="submit"
                value="Create Account"
              />
              <h2 className="text-center mt-5">
                Please register at first. Go to SIGN UP
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
