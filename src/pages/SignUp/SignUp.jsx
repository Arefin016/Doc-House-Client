import signInImg from "../../assets/SignUp/Frame.png"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { createuser } = useContext(AuthContext)

  const onSubmit = (data) => {
    console.log(data)
    createuser(data.email, data.password).then((result) => {
      const loggedUser = result.user
      console.log(loggedUser)
    })
  }

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left bg-[#07332F] lg:w-[788px] lg:h-[575px] mr-10 border border-green-700">
          <img src={signInImg} alt="" />
        </div>
        <div className="card bg-base-100 border border-[#E6E6E6] w-full max-w-sm shrink-0 shadow-2xl lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
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
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-600">Photo is required</span>
              )}
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
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
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
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">
                  Password must be less than 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  Password must have one uppercase, one lowercase, one number
                  and one special characters
                </span>
              )}
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
