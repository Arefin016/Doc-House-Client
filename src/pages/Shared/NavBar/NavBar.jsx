import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider"

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)

  //logout button
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error))
  }

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"} className={"text-[#F3F3F3]"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className="text-[#F3F3F3]">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={"/appointment"} className="text-[#F3F3F3]">
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink to={"/reviews"} className="text-[#F3F3F3]">
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contactUs"} className="text-[#F3F3F3]">
          Contact Us
        </NavLink>
      </li>

      {user ? (
        <>
          <div className="lg:tooltip mt-[7px]" data-tip={user?.displayName}>
            <button
              onClick={handleLogOut}
              className="btn-ghost text-[#F3F3F3] ml-2"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/login"} className="text-[#F3F3F3]">
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  )

  return (
    <div className="navbar bg-[#07332F]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <svg
          className="ml-10"
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
        >
          <path
            d="M59.9292 19.1854C58.7225 17.9788 57.0333 17.2146 55.1831 17.2146C52.2872 17.2146 49.6326 16.0481 47.7422 14.1175C45.8518 12.2272 44.6452 9.57258 44.6452 6.67667C44.6452 2.97635 41.6689 0 37.9685 0H23.8912C22.0411 0 20.3518 0.764198 19.1452 1.97083C17.9385 3.17745 17.1743 4.86673 17.1743 6.71689C17.1743 12.5489 12.4685 17.2548 6.63645 17.2548C3.01657 17.2146 0 20.1909 0 23.8912V37.9685C0 41.6689 3.01657 44.6452 6.67667 44.6452C9.57258 44.6452 12.2272 45.8116 14.1175 47.7422C16.0079 49.6326 17.2146 52.2872 17.2146 55.1831C17.2146 58.8834 20.1909 61.8598 23.8912 61.8598H37.9685C39.8187 61.8598 41.508 61.0956 42.7146 59.8889C43.9212 58.6823 44.6854 56.993 44.6854 55.1429C44.6854 52.247 45.8518 49.5924 47.7825 47.702C49.6728 45.8116 52.3274 44.605 55.2233 44.605C58.9236 44.605 61.9 41.5884 61.9 37.9283V23.851C61.9 22.0411 61.1358 20.392 59.9292 19.1854ZM30.9299 46.8172C22.1617 46.8172 15.0828 39.698 15.0828 30.9701C15.0828 22.2019 22.2019 15.1231 30.9299 15.1231C39.6578 15.1231 46.7769 22.2422 46.7769 30.9701C46.8172 39.698 39.698 46.8172 30.9299 46.8172Z"
            fill="white"
          />
          <path
            d="M31.0506 44.4836C38.4694 44.4836 44.4836 38.4694 44.4836 31.0506C44.4836 23.6317 38.4694 17.6176 31.0506 17.6176C23.6317 17.6176 17.6176 23.6317 17.6176 31.0506C17.6176 38.4694 23.6317 44.4836 31.0506 44.4836Z"
            fill="#F7A582"
          />
          <path
            d="M38.4519 29.4285V32.7129C38.4519 33.508 37.795 34.1649 36.9998 34.1649H34.1649V36.9999C34.1649 37.795 33.508 38.4519 32.7128 38.4519H29.4284C28.6333 38.4519 27.9764 37.795 27.9764 36.9999V34.1649H25.1414C24.3463 34.1649 23.6894 33.508 23.6894 32.7129V29.4285C23.6894 28.6333 24.3463 27.9764 25.1414 27.9764H27.9764V25.1415C27.9764 24.3463 28.6333 23.6895 29.4284 23.6895H32.7128C33.508 23.6895 34.1649 24.3463 34.1649 25.1415V27.9764H36.9998C37.795 27.9764 38.4519 28.6333 38.4519 29.4285Z"
            fill="white"
          />
        </svg>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <p className="items-center justify-center flex ml-3">
          <span className="text-4xl font-bold text-[#F7A582] mr-[6px]">
            Doc
          </span>
          <span className="text-4xl font-bold text-[#FFF]">House</span>
        </p>
      </div>
      <div className="navbar-end hidden mr-7 lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  )
}

export default NavBar
