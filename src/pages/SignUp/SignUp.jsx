import { useContext } from "react"
import signInImg from "../../assets/SignUp/Frame.png"
import { AuthContext } from "../../providers/AuthProvider"
import { Link } from "react-router-dom"

const SignUp = () => {
  const { signIn } = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)

    //For Sign in
    signIn(email, password).then((result) => {
      const user = result.user
      console.log(user)
    })
  }

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left bg-[#07332F] lg:w-[788px] lg:h-[575px] mr-10 border border-green-700">
          <img src={signInImg} alt="" />
        </div>
        <div className="card bg-base-100 border border-[#E6E6E6] w-full max-w-sm shrink-0 shadow-2xl lg:w-1/2">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-center text-[30px] font-bold">
              Sign Up to Doc House
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-[20px]">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-[20px]">PhotoURL</span>
              </label>
              <input
                type="photo"
                name="photo"
                placeholder="Enter your PhotoURL"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-[20px]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered bg-[#F3F3F3]"
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
                className="input input-bordered bg-[#F3F3F3]"
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
              <h2 className="text-center text-[18px] text-[#6C6B6B] font-normal mt-5">
                Already registered? Go to{" "}
                <span className="text-[18px] text-[#F7A582] font-bold">
                  <Link to={"/login"}> SIGN IN</Link>
                </span>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
