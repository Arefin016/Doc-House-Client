import Banner from "../Banner/Banner"
import ExpertDoctor from "../ExpertDoctor/ExpertDoctor"
import Location from "../Location/Location"
import OurServices from "../OurServices/OurServices"
import PatientsReviews from "../PatientsReviews/PatientsReviews"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <Location></Location>
      <PatientsReviews></PatientsReviews>
      <ExpertDoctor></ExpertDoctor>
    </div>
  )
}

export default Home
