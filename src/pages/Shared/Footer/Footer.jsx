const Footer = () => {
  return (
    <footer>
      <div className="footer bg-[#F3F3F3] text-base-content py-5 px-10 lg:pt-32 lg:px-20">
        <aside>
          <div className="flex lg:flex-row flex-col mb-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                d="M59.9292 19.1854C58.7225 17.9788 57.0333 17.2146 55.1831 17.2146C52.2872 17.2146 49.6326 16.0481 47.7422 14.1175C45.8518 12.2272 44.6452 9.57258 44.6452 6.67667C44.6452 2.97635 41.6689 0 37.9685 0H23.8912C22.0411 0 20.3518 0.764198 19.1452 1.97083C17.9385 3.17745 17.1743 4.86673 17.1743 6.71689C17.1743 12.5489 12.4685 17.2548 6.63645 17.2548C3.01657 17.2146 0 20.1909 0 23.8912V37.9685C0 41.6689 3.01657 44.6452 6.67667 44.6452C9.57258 44.6452 12.2272 45.8116 14.1175 47.7422C16.0079 49.6326 17.2146 52.2872 17.2146 55.1831C17.2146 58.8834 20.1909 61.8598 23.8912 61.8598H37.9685C39.8187 61.8598 41.508 61.0956 42.7146 59.8889C43.9212 58.6823 44.6854 56.993 44.6854 55.1429C44.6854 52.247 45.8518 49.5924 47.7825 47.702C49.6728 45.8116 52.3274 44.605 55.2233 44.605C58.9236 44.605 61.9 41.5884 61.9 37.9283V23.851C61.9 22.0411 61.1358 20.392 59.9292 19.1854ZM30.9299 46.8172C22.1617 46.8172 15.0828 39.698 15.0828 30.9701C15.0828 22.2019 22.2019 15.1231 30.9299 15.1231C39.6578 15.1231 46.7769 22.2422 46.7769 30.9701C46.8172 39.698 39.698 46.8172 30.9299 46.8172Z"
                fill="#07332F"
              />
              <path
                d="M31.0506 44.4837C38.4694 44.4837 44.4836 38.4695 44.4836 31.0507C44.4836 23.6318 38.4694 17.6177 31.0506 17.6177C23.6317 17.6177 17.6176 23.6318 17.6176 31.0507C17.6176 38.4695 23.6317 44.4837 31.0506 44.4837Z"
                fill="#F7A582"
              />
              <path
                d="M38.4519 29.4285V32.7129C38.4519 33.508 37.795 34.1649 36.9998 34.1649H34.1649V36.9999C34.1649 37.795 33.508 38.4519 32.7128 38.4519H29.4284C28.6333 38.4519 27.9764 37.795 27.9764 36.9999V34.1649H25.1414C24.3463 34.1649 23.6894 33.508 23.6894 32.7129V29.4285C23.6894 28.6333 24.3463 27.9764 25.1414 27.9764H27.9764V25.1415C27.9764 24.3463 28.6333 23.6895 29.4284 23.6895H32.7128C33.508 23.6895 34.1649 24.3463 34.1649 25.1415V27.9764H36.9998C37.795 27.9764 38.4519 28.6333 38.4519 29.4285Z"
                fill="#07332F"
              />
            </svg>
            <p className="items-center justify-center flex ml-3">
              <span className="text-4xl font-bold text-[#F7A582] mr-[6px]">
                Doc
              </span>
              <span className="text-4xl font-bold text-[#07332F]">House</span>
            </p>
          </div>
          <p className="text-[16px] mb-5">
            DocHouse connects users with healthcare <br /> professionals,
            offering convenient access to <br /> medical consultations and
            services from home.
          </p>
          <button className="btn btn-outline btn-warning text-[20px]">
            Appointment
          </button>
        </aside>
        <nav>
          <h6 className="text-2xl font-bold text-[#0A0808] mb-5">
            Quick Links
          </h6>
          <a className="text-[18px] link link-hover">About Us</a>
          <a className="text-[18px] link link-hover">Service</a>
          <a className="text-[18px] link link-hover">Doctors</a>
          <a className="text-[18px] link link-hover">Departments</a>
          <a className="text-[18px] link link-hover">Online Payment</a>
          <a className="text-[18px] link link-hover">Contact Us</a>
          <a className="text-[18px] link link-hover">My Account</a>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold text-[#0A0808] mb-5">
            Doc House Services
          </h6>
          <a className="text-[18px] link link-hover">Pediatric Clinic</a>
          <a className="text-[18px] link link-hover">Diagnosis Clinic</a>
          <a className="text-[18px] link link-hover">Cardiac Clinic</a>
          <a className="text-[18px] link link-hover">Laboratory Analysis</a>
          <a className="text-[18px] link link-hover">Gynecological Clinic</a>
          <a className="text-[18px] link link-hover">Personal Counseling</a>
          <a className="text-[18px] link link-hover">Dental Clinic</a>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold text-[#0A0808] mb-5">
            Working Hours
          </h6>
          <a className="text-[18px] link link-hover">
            Saturday - 10 am to 7 pm
          </a>
          <a className="text-[18px] link link-hover">Sunday - 10 am to 7 pm</a>
          <a className="text-[18px] link link-hover">Monday - 10 am to 7 pm</a>
          <a className="text-[18px] link link-hover">Tuesday - 10 am to 7 pm</a>
          <a className="text-[18px] link link-hover">
            Wednesday - 10 am to 7 pm
          </a>
          <a className="text-[18px] link link-hover">
            Thursday - 10 am to 7 pm
          </a>
          <a className="text-[18px] link link-hover">Friday - 10 am to 7 pm</a>
        </nav>
      </div>
      <div className="footer-center bg-[#F3F3F3] text-base-content p-4">
        <aside>
          <div className="divider lg:mt-16"></div>
          <p className="lg:py-12 text-[18px] font-normal">
            {new Date().getFullYear()} - All right reserved by Doc House Ltd
          </p>
        </aside>
      </div>
    </footer>
  )
}

export default Footer
